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
		em.persist(test);
		return test;
	}

}
