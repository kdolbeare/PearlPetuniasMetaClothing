package entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity 
@JsonIdentityInfo (generator = ObjectIdGenerators.PropertyGenerator.class, property="id")
@Table(name = "cart")
public class Cart
{	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@OneToMany(mappedBy="cart", cascade=CascadeType.PERSIST)
	@JsonManagedReference (value = "cartItem")
	private List<CartItem> items;
	@OneToOne 
	@JoinColumn(name="userid", nullable = false)
	@JsonBackReference(value = "usercart")
	private User user;
	
	public Cart() {
		items = new ArrayList<CartItem>();
	}
	
	public Cart(List<CartItem> items, User user)
	{
		this.items = items;
		//this.user = user;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public List<CartItem> getItems()
	{
		return items;
	}

	public void setItems(List<CartItem> items)
	{
		this.items = items;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}
	
	public void addItems(CartItem item){
		items.add(item);
	}
	

	public void clearItems(){
		items.clear();
	}

	@Override
	public String toString()
	{
		return "Cart [id=" + id + ", items=" + items + ", user=" + user + "]";
	}	
	
}
