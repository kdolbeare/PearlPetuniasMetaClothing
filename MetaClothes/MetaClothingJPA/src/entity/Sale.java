package entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "sale")

public class Sale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date date;
	private String orderid;
	private int price;
	private int itemid;
	private int quantity;
	private User userid;
}

public Sale()
{

}

public Sale(int id, Date date, String orderid, int price, int itemid, int quantity, int userid) {
	super();
	this.id = id;
	this.date = date;
	this.orderid = orderid;
	this.price = price;
	this.itemid = itemid;
	this.quantity = quantity;
	this.userid = userid;
}

public int getId() {
	return id;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public String getOrderid() {
	return orderid;
}

public void setOrderid(String orderid) {
	this.orderid = orderid;
}

public int getPrice() {
	return price;
}

public void setPrice(int price) {
	this.price = price;
}

public int getItemid() {
	return itemid;
}

public void setItemid(int itemid) {
	this.itemid = itemid;
}

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public int getUserid() {
	return userid;
}

public void setUserid(int userid) {
	this.userid = userid;
}

