package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="saleitem")
public class SaleItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="itemid")
	@JsonManagedReference
	private Item item;
	@ManyToOne
	@JoinColumn(name="saleid")
	@JsonManagedReference
	private Sale sale;
	private int quantity;
	
	public SaleItem(){
		
	}
	
	public SaleItem(Item item, Sale sale, int quantity){
		this.item = item;
		this.sale = sale;
		this.quantity = quantity;
	}
	
	public int getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}
	public Item getItem()
	{
		return item;
	}
	public void setItem(Item item)
	{
		this.item = item;
	}
	public Sale getSale()
	{
		return sale;
	}
	public void setSale(Sale sale)
	{
		this.sale = sale;
	}
	public int getQuantity()
	{
		return quantity;
	}
	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}

}
