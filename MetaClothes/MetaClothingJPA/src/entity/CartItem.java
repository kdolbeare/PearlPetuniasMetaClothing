package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
@Entity
@Table(name="cartitem")
public class CartItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="itemid")
	private Item item;
	@ManyToOne
	@JoinColumn(name="cartid")
	@JsonBackReference(value = "cartItem")
	private Cart cart;
	private int quantity;
	
	public CartItem(){
		
	}
	
	public CartItem(Item item, Cart cart, int quantity){
		this.item = item;
		this.cart = cart;
		this.quantity = quantity;
	}
	public int getItemId() {
		return item.getId();
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
	public Cart getCart()
	{
		return cart;
	}
	public void setCart(Cart cart)
	{
		this.cart = cart;
	}
	public int getQuantity()
	{
		return quantity;
	}
	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}
	
	public void addQuantity(int more){
		quantity += more;
	}

	@Override
	public String toString()
	{
		return "CartItem [id=" + id + ", item=" + item + ", cart=" + cart + ", quantity=" + quantity + "]";
	}

}
