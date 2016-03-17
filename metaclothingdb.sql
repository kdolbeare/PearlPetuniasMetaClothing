CREATE SCHEMA metaclothingdb;

CREATE TABLE metaclothingdb.item ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	name                 varchar(100)  NOT NULL  ,
	description          varchar(50)  NOT NULL  ,
	price                int  NOT NULL  ,
	brand                varchar(20)  NOT NULL  ,
	rating               int  NOT NULL  ,
	CONSTRAINT pk_item PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE TABLE metaclothingdb.`user` ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	name                 varchar(100)  NOT NULL  ,
	email                varchar(50)  NOT NULL  ,
	password             varchar(50)  NOT NULL  ,
	isemployee           bool  NOT NULL  ,
	CONSTRAINT pk_user PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE TABLE metaclothingdb.billingaddress ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	streetaddress        varchar(100)  NOT NULL  ,
	city                 varchar(20)  NOT NULL  ,
	stateabbrev          varchar(2)  NOT NULL  ,
	zip                  int  NOT NULL  ,
	userid               int  NOT NULL  ,
	CONSTRAINT pk_billingaddress PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_billingaddress ON metaclothingdb.billingaddress ( userid );

CREATE TABLE metaclothingdb.cart ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	userid               int  NOT NULL  ,
	itemid               int  NOT NULL  ,
	CONSTRAINT pk_cart PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_cart ON metaclothingdb.cart ( userid );

CREATE INDEX idx_cart_0 ON metaclothingdb.cart ( itemid );

CREATE TABLE metaclothingdb.invoice ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	`date`               date  NOT NULL  ,
	totalprice           int  NOT NULL  ,
	cartid               int  NOT NULL  ,
	CONSTRAINT pk_invoice PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_invoice ON metaclothingdb.invoice ( cartid );

CREATE TABLE metaclothingdb.shippingaddress ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	streetaddress        varchar(50)  NOT NULL  ,
	city                 varchar(20)  NOT NULL  ,
	stateabbrev          varchar(2)  NOT NULL  ,
	zip                  int  NOT NULL  ,
	userid               int  NOT NULL  ,
	CONSTRAINT pk_shippingaddress PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_shippingaddress ON metaclothingdb.shippingaddress ( userid );

ALTER TABLE metaclothingdb.billingaddress ADD CONSTRAINT fk_billingaddress FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE metaclothingdb.cart ADD CONSTRAINT fk_cart FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE metaclothingdb.cart ADD CONSTRAINT fk_cart_0 FOREIGN KEY ( itemid ) REFERENCES metaclothingdb.item( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.invoice ADD CONSTRAINT fk_invoice FOREIGN KEY ( cartid ) REFERENCES metaclothingdb.cart( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.shippingaddress ADD CONSTRAINT fk_shippingaddress FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE CASCADE ON UPDATE CASCADE;

