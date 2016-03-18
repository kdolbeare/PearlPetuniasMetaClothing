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
	@OneToMany(mappedBy="sale")
	private List<SaleItem> items;
	@ManyToOne
	@JoinColumn(name="userid")
	private User user;

	public Sale()
	{

	}

	public Sale( Date date, List<SaleItem> items, User user)
	{
		super();
		this.date = date;
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