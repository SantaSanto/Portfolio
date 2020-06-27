CREATE TABLE portfolio (
  pf_id    INT          NOT NULL  AUTO_INCREMENT,
  pf_name  VARCHAR(25)  NOT NULL,
    PRIMARY KEY (pf_id),
    UNIQUE KEY pf_id_unique (pf_id),
    UNIQUE KEY pf_name_unique (pf_name)
);

INSERT INTO portfolio(pf_name) VALUES ('Retirement');
INSERT INTO portfolio(pf_name) VALUES ('Education');


CREATE TABLE asset (
  asset_id           INT           NOT NULL  AUTO_INCREMENT,
  asset_name         VARCHAR(25)   NOT NULL,
  asset_type         VARCHAR(10)   NOT NULL,
  pf_id              INT           NOT NULL,
  asset_institution  VARCHAR(10)   NOT NULL,
  asset_holder       VARCHAR(15)   NOT NULL,
  asset_start_date   DATE          NOT NULL,
  asset_end_date     DATE          NOT NULL,
  asset_invested     NUMERIC(10,2) NOT NULL,
  asset_nav          NUMERIC(10,2) NOT NULL,
    PRIMARY KEY (asset_id),
    UNIQUE KEY asset_id_unique (asset_id),
    UNIQUE KEY asset_name_unique (asset_name),
    CONSTRAINT fk_portfolio FOREIGN KEY (pf_id) REFERENCES portfolio(pf_id)
);

CREATE TABLE txn (
  txn_id      INT           NOT NULL  AUTO_INCREMENT,
  txn_date    DATE          NOT NULL,
  txn_type    VARCHAR(10)   NOT NULL,
  txn_amount  NUMERIC(10,2) NOT NULL,
  asset_id    INT           NOT NULL,
    PRIMARY KEY (txn_id),
    UNIQUE KEY txn_id_unique (txn_id),
	UNIQUE KEY txn_asset_date_unique (asset_id, txn_date),
    CONSTRAINT fk_asset FOREIGN KEY (asset_id) REFERENCES asset(asset_id)
);