package entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	@OneToMany(mappedBy="cart")
	private List<SaleItem> items;
	@ManyToOne
	@JoinColumn(name="userid")
	private User user;

	public Sale()
	{

	}

	public Sale( Date date, String orderid, int price, List<SaleItem> items, int quantity, User user)
	{
		super();
		this.date = date;
		this.orderid = orderid;
		this.price = price;
		this.items = items;
		this.user = user;
	}

	public int getId()
	{
		return id;
	}

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public String getOrderid()
	{
		return orderid;
	}

	public void setOrderid(String orderid)
	{
		this.orderid = orderid;
	}

	public int getPrice()
	{
		return price;
	}

	public void setPrice(int price)
	{
		this.price = price;
	}
	
	public List<SaleItem> getItems(){
		return items;
	}
	
	public void setItems(List<SaleItem> items){
		this.items = items;
	}


	public User getUser()
	{
		return user;
	}

	public void setUserid(User user)
	{
		this.user = user;
	}
}