package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.CartDAO;
import dao.UserDAO;
import entity.Cart;
import entity.CartItem;
import entity.Item;
import entity.User;

@Controller
public class CartController {
	@Autowired
	CartDAO cartDao;
	@Autowired
	UserDAO userDao;
	@ResponseBody
	@RequestMapping(path="cart/{id}", method=RequestMethod.GET)
	public Cart getUserCart(@PathVariable("id") int id){
		User user = userDao.getUserById(id);		
		return cartDao.getCartById(id);
	}
	
	@ResponseBody
	@RequestMapping("addCart/{itemid}/{userid}")
	public String addCartItem(@PathVariable("itemid") int itemId, @PathVariable("userid") int userId){
		Cart cart = cartDao.getCartByUserId(userId);
		return cartDao.addItemToCart(cart, itemId);
	}
	
	@ResponseBody
	@RequestMapping("cartTest")
	public Cart cartTest() {
		Cart cart = new Cart();
		return cartDao.test();

	}
	

}
