package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
	@RequestMapping("user")
	public void getUser()
	{
		System.out.println(userDAO.getUserByEmail("kris@dolbeare.com"));	
	}
	
	@ResponseBody
	@RequestMapping("testCreate")
	public void createUser() {
		userDAO.createUser("adam", "indarys@gmail.com", "hello", false);
	}
}
