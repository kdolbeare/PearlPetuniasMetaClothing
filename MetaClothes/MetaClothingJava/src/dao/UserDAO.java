package dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entity.Address;
import entity.User;

@Transactional
public class UserDAO {

	@PersistenceContext
	private EntityManager em;
	
	public User getUserByEmail(String email) {
		User temp;
		try {
			temp = (User)em.createNamedQuery("user.getUserByEmail").setParameter("email", email).getSingleResult();
		}catch (Exception e) {
			System.out.println("error in getUserByEmail" + e);
			temp = null;
		}
		System.out.println(temp);
		return temp;
	}
	
	public User getUser(String email, String password) {
		User temp;
		try {
			temp = (User)em.createNamedQuery("user.getUser").setParameter("email", email).setParameter("password", password).getSingleResult();
		}catch (Exception e) {
			System.out.println("error in getUser " + e);
			temp = null;
				
		}
		System.out.println(temp);
		return temp;
	}
	public String getUserValidation(String email, String password) {
		User temp;
		try {
			temp = (User)em.createNamedQuery("user.getUser").setParameter("email", email).setParameter("password", password).getSingleResult();
		}catch (Exception e) {
			System.out.println("error in getUser " + e);
			temp = null;
				
		}
		if(temp != null){
			return "" + temp.getId();
	}
		System.out.println(temp);
		return "Incorrect username or password";
	}
	public User getUserById(int id){
		User user = em.createNamedQuery("user.getUserById", User.class).setParameter("id", id).getSingleResult();
		System.out.println("in");
		return user;
	}
	
	public String createUser(String name, String email, String password, boolean isEmployee) {
		User temp;
		try {
			temp = (User)em.createNamedQuery("user.getUserByName").setParameter("name", name).getSingleResult();
		} catch (Exception e) {
			System.out.println("error in createUser" + e);
			temp = null;
		}
		if(temp!=null) {
			return "User already exists";
		} else {
			User user = new User(name, email, password, isEmployee);
			System.out.println(user);
			em.persist(user);
			//user.getCart().setUser(user);
			//em.persist(user.getCart());
			return "User created";
		}
	}
	
	public User createUser(User user){
		User temp = null;
		try{
			System.out.println("in try block");
			temp = getUserByEmail(user.getEmail());
			System.out.println(temp.getEmail());
			System.out.println(user.getEmail());
			
			if(temp.getEmail().equals(user.getEmail())){
				System.out.println("in if block");
				user = null;
			}
		}catch(Exception e){
			System.out.println("caught an exception " + e);
			user.getCart().setUser(user);
			em.persist(user);
			
		}
		System.out.println(user);
		return user;
	}
	public User editAddresses(User user) {
		user = em.merge(user);
		System.out.println("in UserDAO: " + user);
		return user;
	}
}
