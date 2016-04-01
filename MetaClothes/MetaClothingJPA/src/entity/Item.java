package entity;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "item")
@NamedQueries ({@NamedQuery(name="item.getItemByCat", query="SELECT i from Item i WHERE i.category = :category"), 
	@NamedQuery(name="item.getItemByBrand", query="SELECT i from Item i WHERE i.brand = :brand"),
	@NamedQuery(name="item.getItemById", query="SELECT i from Item i WHERE i.id = :id"),
	@NamedQuery(name="item.sortItemByBrandAndPriceLow", query="SELECT i from Item i WHERE i.brand = :brand ORDER BY i.price DESC"),
	@NamedQuery(name="item.sortItemByCatAndPriceLow", query="SELECT i from Item i WHERE i.category = :category ORDER BY i.price DESC")})
public class Item
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private int price;
	private String brand;
	private int rating;
	private String category;
	@OneToMany(mappedBy = "item")
	@JsonManagedReference
	private List<CartItem> cartItems;
//	@OneToMany(mappedBy = "item")
//	@JsonBackReference
//	private List<SaleItem> saleItems;
	
	public Item() {
		
	}
	public Item(int id, String name, String description, int price, String brand, int rating, String category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.brand = brand;
		this.rating = rating;
	}
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getCategory()
	{
		return category;
	}
	public void setCategory(String category)
	{
		this.category = category;
	}
	@Override
	public String toString()
	{
		return "Item [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + ", brand="
				+ brand + ", rating=" + rating + ", category=" + category + "]";
	}
	
	

}