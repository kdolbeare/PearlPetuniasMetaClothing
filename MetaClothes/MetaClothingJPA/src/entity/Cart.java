package entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart
{	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@OneToMany(mappedBy="cart")
	private List<CartItem> items;
	@OneToOne
	@JoinColumn(name="userid")
	private User user;
	
	public Cart() {
		items = new ArrayList<CartItem>();
	}
	
	public Cart(List<CartItem> items, User user)
	{
		this.items = items;
		this.user = user;
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
	
	
}
