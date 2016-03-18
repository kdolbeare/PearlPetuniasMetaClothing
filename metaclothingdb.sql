CREATE SCHEMA metaclothingdb;

CREATE TABLE metaclothingdb.item ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	name                 varchar(100)  NOT NULL  ,
	description          varchar(50)  NOT NULL  ,
	price                int  NOT NULL  ,
	brand                varchar(20)  NOT NULL  ,
	rating               int  NOT NULL  ,
	category             varchar(20)  NOT NULL  ,
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

CREATE TABLE metaclothingdb.address ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	streetaddress        varchar(100)  NOT NULL  ,
	city                 varchar(20)  NOT NULL  ,
	stateabbrev          varchar(2)  NOT NULL  ,
	zip                  int  NOT NULL  ,
	userid               int  NOT NULL  ,
	isbilling            bool    ,
	CONSTRAINT pk_billingaddress PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_billingaddress ON metaclothingdb.address ( userid );

CREATE TABLE metaclothingdb.cart ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	userid               int    ,
	CONSTRAINT pk_cart PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_cart ON metaclothingdb.cart ( userid );

CREATE TABLE metaclothingdb.cartitem ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	quantity             int  NOT NULL  ,
	cartid               int  NOT NULL  ,
	itemid               int  NOT NULL  ,
	CONSTRAINT pk_cartitem PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_cartitem ON metaclothingdb.cartitem ( itemid );

CREATE INDEX idx_cartitem_0 ON metaclothingdb.cartitem ( cartid );

CREATE TABLE metaclothingdb.sale ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	`date`               date  NOT NULL  ,
	userid               int  NOT NULL  ,
	CONSTRAINT pk_invoice PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_sale ON metaclothingdb.sale ( userid );

CREATE TABLE metaclothingdb.saleitem ( 
	id                   int  NOT NULL  AUTO_INCREMENT,
	quantity             int  NOT NULL  ,
	saleid               int  NOT NULL  ,
	itemid               int  NOT NULL  ,
	CONSTRAINT pk_orderitem PRIMARY KEY ( id )
 ) engine=InnoDB;

CREATE INDEX idx_orderitem ON metaclothingdb.saleitem ( saleid );

CREATE INDEX idx_orderitem_0 ON metaclothingdb.saleitem ( itemid );

ALTER TABLE metaclothingdb.address ADD CONSTRAINT fk_billingaddress FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE metaclothingdb.cart ADD CONSTRAINT fk_cart FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.cartitem ADD CONSTRAINT fk_cartitem FOREIGN KEY ( itemid ) REFERENCES metaclothingdb.item( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.cartitem ADD CONSTRAINT fk_cartitem_0 FOREIGN KEY ( cartid ) REFERENCES metaclothingdb.cart( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.sale ADD CONSTRAINT fk_sale FOREIGN KEY ( userid ) REFERENCES metaclothingdb.`user`( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.saleitem ADD CONSTRAINT fk_orderitem FOREIGN KEY ( saleid ) REFERENCES metaclothingdb.sale( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE metaclothingdb.saleitem ADD CONSTRAINT fk_orderitem_0 FOREIGN KEY ( itemid ) REFERENCES metaclothingdb.item( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO metaclothingdb.`user`( id, name, email, password, isemployee ) VALUES ( 1, 'kris', 'kris@dolbeare.com', 'hello', 0 ); 
INSERT INTO metaclothingdb.`user`( id, name, email, password, isemployee ) VALUES ( 2, 'adam', 'indarys@gmail.com', 'hello', 0 ); 

