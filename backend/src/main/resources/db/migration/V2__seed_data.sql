-- ══════════════════════════════════════════════════════════════
-- LeadRadar — V2: Seed Data
-- Default categories, keywords, subscription plans, platforms
-- ══════════════════════════════════════════════════════════════

-- ┌──────────────────────────────────────────────────────────┐
-- │ CATEGORIES                                               │
-- └──────────────────────────────────────────────────────────┘
INSERT INTO categories (name, description, icon) VALUES
    ('Website Development', 'Web apps, landing pages, e-commerce, WordPress, Shopify', 'fa-globe'),
    ('App Development',     'Mobile apps, cross-platform, iOS, Android, Flutter, React Native', 'fa-mobile'),
    ('AI Development',      'Machine learning, chatbots, NLP, computer vision, LLM integrations', 'fa-brain'),
    ('UI/UX Design',        'User interface design, prototyping, Figma, user research', 'fa-palette');

-- ┌──────────────────────────────────────────────────────────┐
-- │ KEYWORDS (per category)                                  │
-- └──────────────────────────────────────────────────────────┘

-- Website Development
INSERT INTO keywords (category_id, keyword, weight) VALUES
    (1, 'need a website',          10),
    (1, 'looking for web developer', 10),
    (1, 'need a developer',        9),
    (1, 'build my website',        9),
    (1, 'wordpress developer',     8),
    (1, 'shopify developer',       8),
    (1, 'ecommerce website',       8),
    (1, 'landing page',            7),
    (1, 'web application',         7),
    (1, 'frontend developer',      7),
    (1, 'fullstack developer',     7),
    (1, 'react developer',         7),
    (1, 'next.js developer',       7),
    (1, 'hire web developer',      9),
    (1, 'website redesign',        6),
    (1, 'need help with website',  8);

-- App Development
INSERT INTO keywords (category_id, keyword, weight) VALUES
    (2, 'need an app',             10),
    (2, 'looking for app developer', 10),
    (2, 'mobile app',              9),
    (2, 'build an app',            9),
    (2, 'ios developer',           8),
    (2, 'android developer',       8),
    (2, 'flutter developer',       8),
    (2, 'react native developer',  8),
    (2, 'app development',         7),
    (2, 'cross platform app',      7),
    (2, 'hire app developer',      9),
    (2, 'mvp development',         7),
    (2, 'startup app',             6),
    (2, 'need mobile developer',   9);

-- AI Development
INSERT INTO keywords (category_id, keyword, weight) VALUES
    (3, 'need AI developer',       10),
    (3, 'looking for AI engineer', 10),
    (3, 'machine learning',        8),
    (3, 'chatbot development',     8),
    (3, 'build a chatbot',         9),
    (3, 'ai integration',          8),
    (3, 'llm integration',         8),
    (3, 'openai integration',      7),
    (3, 'gpt integration',         7),
    (3, 'nlp developer',           7),
    (3, 'computer vision',         6),
    (3, 'ai automation',           7),
    (3, 'hire ai developer',       9),
    (3, 'need ml engineer',        9);

-- UI/UX Design
INSERT INTO keywords (category_id, keyword, weight) VALUES
    (4, 'need a designer',         10),
    (4, 'looking for designer',    10),
    (4, 'ui/ux designer',          9),
    (4, 'ui designer',             9),
    (4, 'ux designer',             9),
    (4, 'figma designer',          8),
    (4, 'website design',          7),
    (4, 'app design',              7),
    (4, 'redesign my app',         7),
    (4, 'user experience',         6),
    (4, 'hire designer',           9),
    (4, 'product design',          7),
    (4, 'need logo design',        6),
    (4, 'brand design',            6);

-- ┌──────────────────────────────────────────────────────────┐
-- │ SUBSCRIPTION PLANS                                       │
-- └──────────────────────────────────────────────────────────┘
INSERT INTO subscription_plans (name, max_leads_per_day, real_time_alerts, price, features) VALUES
    ('Free',    10,    FALSE, 0.00,
     '{"daily_digest": true, "categories": 2, "export": false, "api_access": false}'::jsonb),
    ('Pro',     100,   TRUE,  29.00,
     '{"daily_digest": true, "categories": "all", "export": true, "api_access": false, "priority_support": true}'::jsonb),
    ('Agency',  -1,    TRUE,  99.00,
     '{"daily_digest": true, "categories": "all", "export": true, "api_access": true, "priority_support": true, "team_members": 10, "white_label": true}'::jsonb);

-- ┌──────────────────────────────────────────────────────────┐
-- │ PLATFORM SETTINGS                                        │
-- └──────────────────────────────────────────────────────────┘
INSERT INTO platform_settings (platform_name, enabled) VALUES
    ('reddit',       TRUE),
    ('hackernews',   TRUE),
    ('devto',        TRUE),
    ('medium',       TRUE),
    ('linkedin',     TRUE),
    ('facebook',     TRUE),
    ('discord',      TRUE),
    ('manual',       TRUE);

-- ┌──────────────────────────────────────────────────────────┐
-- │ DEFAULT SUPER ADMIN (password: Admin@123)                │
-- │ BCrypt hash — change in production!                      │
-- └──────────────────────────────────────────────────────────┘
INSERT INTO users (name, email, password_hash, role) VALUES
    ('Super Admin', 'admin@leadradar.com',
     '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
     'SUPER_ADMIN');
