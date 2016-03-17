package entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user")
@NamedQueries ({@NamedQuery(name="user.getUserByEmail", query="SELECT u FROM User u WHERE u.email = :email"),
	@NamedQuery(name="user.getUserByName", query="SELECT u FROM User u WHERE u.name = :name")}) 
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String email;
	
	private String password;
	
	@OneToMany(mappedBy = "user")
	private List<Address> addresses;
	
	@Column(name = "isemployee")
	private boolean isEmployee;
	@OneToOne(mappedBy="user")
	private Cart cart;
	
	@OneToMany(mappedBy="user")
	private List<Sale> sales;
	
	public User() {
		addresses = new ArrayList<Address>();
		sales = new ArrayList<Sale>();
	}

	public User(String name, String email, String password, boolean isEmployee)
	{
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.isEmployee = isEmployee;
		addresses = new ArrayList<Address>();
		sales = new ArrayList<Sale>();
	}

	public int getId()
	{
		return id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public boolean isEmployee()
	{
		return isEmployee;
	}

	public void setEmployee(boolean isEmployee)
	{
		this.isEmployee = isEmployee;
	}

	public List<Address> getAddresses()
	{
		return addresses;
	}

	public void setAddresses(List<Address> addresses)
	{
		this.addresses = addresses;
	}

	public Cart getCarts()
	{
		return cart;
	}

	public void setCart(Cart cart)
	{
		this.cart = cart;
	}

	public List<Sale> getSales()
	{
		return sales;
	}

	public void setSales(List<Sale> sales)
	{
		this.sales = sales;
	}

	@Override
	public String toString()
	{
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", addresses="
				+ addresses + ", isEmployee=" + isEmployee + ", cart=" + cart + ", sales=" + sales + "]";
	}

}
