package entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "sale")
@NamedQuery(name = "sale.getSalesByUser", query = "SELECT s FROM Sale s WHERE s.user = :user")
public class Sale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date date;
	@OneToMany(mappedBy="sale", cascade = CascadeType.PERSIST)
	@JsonManagedReference (value="saleItem")
	private List<SaleItem> items;
	@ManyToOne
	@JoinColumn(name="userid", nullable = false)
	@JsonBackReference (value = "sales")
	private User user;

	public Sale()
	{
	 items = new ArrayList<SaleItem>();

	}

	public Sale( Date date, List<SaleItem> items, User user)
	{
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
	public void addItems(SaleItem item){
		items.add(item);
	}
	public void removeItems(SaleItem item){
		items.remove(items.indexOf(item));
	}

	@Override
	public String toString()
	{
		return "Sale [id=" + id + ", date=" + date + ", items=" + items + ", user=" + user + "]";
	}
}