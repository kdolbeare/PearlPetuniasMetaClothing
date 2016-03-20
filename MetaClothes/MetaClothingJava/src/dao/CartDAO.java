package dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entity.Cart;
import entity.CartItem;
import entity.User;

public class CartDAO {

	@PersistenceContext
	private EntityManager em;
	
	public Cart getUserCart(User user){
		return user.getCart();
	}
	
	
}
