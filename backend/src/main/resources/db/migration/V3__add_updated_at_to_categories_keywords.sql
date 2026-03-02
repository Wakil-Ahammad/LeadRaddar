-- ══════════════════════════════════════════════════════════════
-- LeadRadar — V3: Add updated_at for audit
-- ══════════════════════════════════════════════════════════════

ALTER TABLE categories ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE keywords   ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();
