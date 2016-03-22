package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.ObjectMapper;

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
	@RequestMapping("userTest")
	public User getTestUser()
	{
		User loggedin = userDAO.getUser("silverfox@gmail.com", "hello");
		return loggedin;
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
	@RequestMapping(path="user/{username}/{password}")
	public User getUser(@PathVariable("username") String username, @PathVariable("password") String password){
		System.out.println("in java rest api");
		return userDAO.getUser(username, password);
	}
	
	@ResponseBody
	@RequestMapping(path="testCreate")
	public String createUser() {
		return (userDAO.createUser("davids", "silverfox@gmail.com", "hello", true));
	}
	@ResponseBody
	@RequestMapping(path="createUser", method=RequestMethod.POST)
	public User createUser(@RequestBody String u){
		System.out.println(u);
		ObjectMapper mapper = new ObjectMapper();
		User user = null;
		try {
		user = mapper.readValue(u, User.class);
		user = userDAO.createUser(user);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}
}
