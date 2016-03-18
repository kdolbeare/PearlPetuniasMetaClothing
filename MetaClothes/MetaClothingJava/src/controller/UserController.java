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
	@RequestMapping("user")
	public String getUser()
	{
		User loggedin = userDAO.getUser("silverfox@gmail.com", "hello");
		User exists = userDAO.getUserByEmail("silverfox@gmail.com");
		if (exists == null) {
			return "User not Found";
		} else if (exists.equals(loggedin)) {
			return "User Found";
					}
		else return "User Password Incorrect";
	}
	
	@ResponseBody
	@RequestMapping(path="testCreate")
	public String createUser() {
		return (userDAO.createUser("davids", "silverfox@gmail.com", "hello", true));
	}
}
