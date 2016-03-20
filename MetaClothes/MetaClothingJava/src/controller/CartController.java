package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.CartDAO;
import dao.UserDAO;
import entity.Cart;
import entity.CartItem;
import entity.User;

public class CartController {
	@Autowired
	CartDAO cartDao;
	@Autowired
	UserDAO userDao;
	@ResponseBody
	@RequestMapping("cart/{id}")
	public Cart getUserCart(@PathVariable("id") int id){
		User user = userDao.getUserById(id);		
		return cartDao.getUserCart(user);
	}
	
	
}
