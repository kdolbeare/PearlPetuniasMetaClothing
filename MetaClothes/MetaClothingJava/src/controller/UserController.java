package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.UserDAO;
import entity.User;

@Controller
public class UserController
{
	@Autowired
	private UserDAO userDAO;
	
	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{
		return "pong";
	}
	@ResponseBody
	@RequestMapping(path="user", method= RequestMethod.GET)
	public User getUser()
	{
		
		//System.out.println(userDAO.getUserByEmail("kris@dolbeare.com"));
		return userDAO.getUserByEmail("indarys@gmail.com");
	}
	
	@ResponseBody
	@RequestMapping(path="testCreate", method= RequestMethod.POST)
	public void createUser() {
		userDAO.createUser("adam", "indarys@gmail.com", "hello", false);
	}
}
