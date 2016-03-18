package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.ShopDAO;
import entity.Item;
import entity.User;

@Controller
public class ShopController
{
	@Autowired
	private ShopDAO shopDAO;
	
	@ResponseBody
	@RequestMapping("itemCat")
	public List<Item> getItemByCat()
	{
		List<Item> selectedItems  = shopDAO.getItemByCat("Child Male");
		System.out.println(selectedItems.get(selectedItems.size()-1));
		return selectedItems;
	}
}