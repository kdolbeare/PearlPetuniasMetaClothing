package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entity.Cart;
import entity.CartItem;
import entity.Item;
import entity.User;

public class CartDAO {

	@PersistenceContext
	private EntityManager em;
	
//	public Cart getUserCart(User user){
//		return user.getCart();
//	}
	
	public String addCartItem(Cart cart, CartItem item){
		List<CartItem> cartItems = cart.getItems();
		int num = -1;
		for (CartItem cartItem : cartItems) {
			Item i = cartItem.getItem();
			if(i.getId() == item.getItem().getId()){
				num = cartItems.indexOf(cartItem);
				break;
			}
		}
		if(num != -1){
			CartItem cItem = cartItems.get(num);
			cItem = em.merge(cItem);
			cItem.addQuantity(item.getQuantity());
			em.persist(cItem);
			return "added quantity";
		}
		else{
			cart.addItems(item);
			cart = em.merge(cart);
			em.persist(cart);
			em.persist(item);
		}
		return "cartItem added";
		
	}

	public Cart getCartById(int id)
	{
		return em.find(Cart.class, id);
	}
	
}
