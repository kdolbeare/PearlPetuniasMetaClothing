package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.SaleDAO;
import entity.Cart;
import entity.CartItem;
import entity.Sale;

@Controller
public class SaleController
{
	@Autowired
	SaleDAO saleDao;
	
	@ResponseBody
	@RequestMapping(path="saleTest") 
	public Sale createSale ()
	{
		return saleDao.createSale();
		
	}
	@ResponseBody
	@RequestMapping(path="checkout/{id}")
	public String checkoutItems(@PathVariable("userid") int userId) {
		Cart cart = saleDao.getCartByUserId(userId);
		List<CartItem> allItems = cart.getItems();
		for (CartItem cartItem : allItems) {
			saleDao.addSales(userId, cartItem);
		}
		cart.clearItems();
		return "Thank you for your purchase";
	}
	
	@ResponseBody
	@RequestMapping(path="findSales/{id}")
	public List<Sale> getInvoice(@PathVariable("userid") int userId) {
		List<Sale> allsales = new ArrayList<>();
		allsales = saleDao.getSalesByUser(userId);
		return allsales;
	}
}
