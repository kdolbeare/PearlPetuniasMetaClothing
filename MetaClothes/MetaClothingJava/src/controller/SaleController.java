package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.SaleDAO;
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
	
}
