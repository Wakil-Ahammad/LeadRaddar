-- ══════════════════════════════════════════════════════════════
-- LeadRadar — V1: Initial Schema
-- All tables, indexes, and constraints
-- ══════════════════════════════════════════════════════════════

-- ┌──────────────────────────────────────────────────────────┐
-- │ 1. USERS                                                 │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE users (
    id              BIGSERIAL       PRIMARY KEY,
    name            VARCHAR(255)    NOT NULL,
    email           VARCHAR(255)    NOT NULL UNIQUE,
    password_hash   VARCHAR(255)    NOT NULL,
    role            VARCHAR(20)     NOT NULL DEFAULT 'USER'
                        CHECK (role IN ('USER', 'ADMIN', 'SUPER_ADMIN')),
    is_active       BOOLEAN         NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_role ON users (role);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 2. CATEGORIES (dynamic, admin-managed)                   │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE categories (
    id              BIGSERIAL       PRIMARY KEY,
    name            VARCHAR(100)    NOT NULL UNIQUE,
    description     VARCHAR(500),
    icon            VARCHAR(50),
    is_active       BOOLEAN         NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 3. KEYWORDS (linked to categories, weighted)             │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE keywords (
    id              BIGSERIAL       PRIMARY KEY,
    category_id     BIGINT          NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    keyword         VARCHAR(255)    NOT NULL,
    weight          INT             NOT NULL DEFAULT 5
                        CHECK (weight BETWEEN 1 AND 10),
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW(),

    UNIQUE (category_id, keyword)
);

CREATE INDEX idx_keywords_category ON keywords (category_id);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 4. ADMIN TEAMS                                           │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE admin_teams (
    id              BIGSERIAL       PRIMARY KEY,
    team_name       VARCHAR(255)    NOT NULL UNIQUE,
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 5. ADMIN TEAM MEMBERS                                    │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE admin_team_members (
    id              BIGSERIAL       PRIMARY KEY,
    team_id         BIGINT          NOT NULL REFERENCES admin_teams(id) ON DELETE CASCADE,
    user_id         BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_in_team    VARCHAR(20)     NOT NULL DEFAULT 'MEMBER'
                        CHECK (role_in_team IN ('OWNER', 'MANAGER', 'MEMBER')),
    joined_at       TIMESTAMP       NOT NULL DEFAULT NOW(),

    UNIQUE (team_id, user_id)
);

CREATE INDEX idx_team_members_team ON admin_team_members (team_id);
CREATE INDEX idx_team_members_user ON admin_team_members (user_id);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 6. LEADS                                                 │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE leads (
    id              BIGSERIAL       PRIMARY KEY,
    title           VARCHAR(500)    NOT NULL,
    snippet         VARCHAR(500)    NOT NULL,
    platform        VARCHAR(50)     NOT NULL,
    url             VARCHAR(2048)   NOT NULL UNIQUE,
    category_id     BIGINT          REFERENCES categories(id) ON DELETE SET NULL,
    intent_score    INT             DEFAULT 0
                        CHECK (intent_score BETWEEN 0 AND 100),
    lead_status     VARCHAR(20)     NOT NULL DEFAULT 'ACTIVE'
                        CHECK (lead_status IN ('ACTIVE', 'REJECTED', 'HIDDEN')),
    manual_source   BOOLEAN         NOT NULL DEFAULT FALSE,
    created_by_id   BIGINT          REFERENCES users(id) ON DELETE SET NULL,
    team_id         BIGINT          REFERENCES admin_teams(id) ON DELETE SET NULL,
    posted_at       TIMESTAMP,
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_leads_platform ON leads (platform);
CREATE INDEX idx_leads_category ON leads (category_id);
CREATE INDEX idx_leads_status ON leads (lead_status);
CREATE INDEX idx_leads_score ON leads (intent_score DESC);
CREATE INDEX idx_leads_created ON leads (created_at DESC);
CREATE INDEX idx_leads_posted ON leads (posted_at DESC);
CREATE INDEX idx_leads_team ON leads (team_id);

-- Composite index for common dashboard queries
CREATE INDEX idx_leads_status_category_score ON leads (lead_status, category_id, intent_score DESC);

-- Full-text search index on title + snippet
CREATE INDEX idx_leads_search ON leads USING gin (to_tsvector('english', title || ' ' || snippet));

-- ┌──────────────────────────────────────────────────────────┐
-- │ 7. SUBSCRIPTION PLANS                                    │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE subscription_plans (
    id                  BIGSERIAL       PRIMARY KEY,
    name                VARCHAR(50)     NOT NULL UNIQUE,
    stripe_price_id     VARCHAR(255),
    max_leads_per_day   INT             NOT NULL DEFAULT 10,
    real_time_alerts    BOOLEAN         NOT NULL DEFAULT FALSE,
    price               DECIMAL(10,2)   NOT NULL DEFAULT 0.00,
    features            JSONB,
    is_active           BOOLEAN         NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 8. SUBSCRIPTIONS                                         │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE subscriptions (
    id                      BIGSERIAL       PRIMARY KEY,
    user_id                 BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan_id                 BIGINT          NOT NULL REFERENCES subscription_plans(id),
    stripe_subscription_id  VARCHAR(255),
    status                  VARCHAR(20)     NOT NULL DEFAULT 'ACTIVE'
                                CHECK (status IN ('ACTIVE', 'CANCELED', 'PAST_DUE', 'TRIALING')),
    current_period_start    TIMESTAMP,
    current_period_end      TIMESTAMP,
    created_at              TIMESTAMP       NOT NULL DEFAULT NOW(),
    updated_at              TIMESTAMP       NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_user ON subscriptions (user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions (status);
CREATE UNIQUE INDEX idx_subscriptions_stripe ON subscriptions (stripe_subscription_id) WHERE stripe_subscription_id IS NOT NULL;

-- ┌──────────────────────────────────────────────────────────┐
-- │ 9. PAYMENTS                                              │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE payments (
    id                  BIGSERIAL       PRIMARY KEY,
    user_id             BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    stripe_payment_id   VARCHAR(255)    UNIQUE,
    amount              DECIMAL(10,2)   NOT NULL,
    currency            VARCHAR(3)      NOT NULL DEFAULT 'USD',
    status              VARCHAR(20)     NOT NULL DEFAULT 'SUCCEEDED'
                            CHECK (status IN ('SUCCEEDED', 'FAILED', 'PENDING', 'REFUNDED')),
    created_at          TIMESTAMP       NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_user ON payments (user_id);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 10. AUDIT LOGS                                           │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE audit_logs (
    id              BIGSERIAL       PRIMARY KEY,
    admin_id        BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    action          VARCHAR(50)     NOT NULL,
    entity          VARCHAR(50)     NOT NULL,
    entity_id       BIGINT,
    team_id         BIGINT          REFERENCES admin_teams(id) ON DELETE SET NULL,
    details         JSONB,
    created_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_admin ON audit_logs (admin_id);
CREATE INDEX idx_audit_entity ON audit_logs (entity, entity_id);
CREATE INDEX idx_audit_team ON audit_logs (team_id);
CREATE INDEX idx_audit_created ON audit_logs (created_at DESC);

-- ┌──────────────────────────────────────────────────────────┐
-- │ 11. PLATFORM SETTINGS                                    │
-- └──────────────────────────────────────────────────────────┘
CREATE TABLE platform_settings (
    id              BIGSERIAL       PRIMARY KEY,
    platform_name   VARCHAR(50)     NOT NULL UNIQUE,
    enabled         BOOLEAN         NOT NULL DEFAULT TRUE,
    team_id         BIGINT          REFERENCES admin_teams(id) ON DELETE SET NULL,
    config          JSONB,
    updated_at      TIMESTAMP       NOT NULL DEFAULT NOW()
);
