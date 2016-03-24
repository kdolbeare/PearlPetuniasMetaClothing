package dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entity.Cart;
import entity.CartItem;
import entity.Item;
import entity.Sale;
import entity.SaleItem;
import entity.User;

@Transactional
public class SaleDAO
{
	@PersistenceContext
	private EntityManager em;
	
	public Sale createSale () {
		Cart cart = em.find(Cart.class, 5);
		List<Item> items = new ArrayList<Item>();
		for (CartItem ci : cart.getItems())
		{
			items.add(ci.getItem());
		}
		Sale test = new Sale();
		SaleItem si = new SaleItem(em.find(Item.class, 2), test, 4);
		for (Item item : items)
		{
			test.getItems().add(new SaleItem(item, test, 2));
		}
		test.setUserid(cart.getUser());
		em.persist(test);
		return test;
	}
	
	public Cart getCartByUserId(int id)
	{
		User user = em.find(User.class, id);
		Cart carttofind = em.find(Cart.class, user);
		return carttofind;
	}

	public void addSales(int userId, CartItem cartItem) {
		Sale newSale = new Sale();
		Item toAdd = (Item)em.createNamedQuery("item.getItemById").setParameter("id", cartItem.getItemId()).getSingleResult();
		SaleItem checkedout = new SaleItem(toAdd, newSale, cartItem.getQuantity());
		newSale.addItems(checkedout);
	}

	public List<Sale> getSalesByUser(int userId) {
		User user = (User) em.createNamedQuery("user.getUserById").setParameter("id", userId).getSingleResult();
		List<Sale> allsales = new ArrayList<>();
		allsales = em.createNamedQuery("sale.getSalesByUser").setParameter("user", user).getResultList();
		return allsales;
	}
}
