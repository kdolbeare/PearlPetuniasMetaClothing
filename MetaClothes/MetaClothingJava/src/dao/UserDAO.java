package dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

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
			System.out.println("error in getUser" + e);
			temp = null;
		}
		System.out.println(temp);
		return temp;
	}
	
	public User getUserById(int id){
		User user = em.createNamedQuery("user.getUserById", User.class).setParameter("id", id).getSingleResult();
		
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
	
	public String createUser(User user){
		User temp;
		em.persist(user);
		if(em.contains(user)){
			return "in database";
		}else {
			return "user not created";
		}
//		try {
//			temp = (User)em.createNamedQuery("user.getUserByName").setParameter("name", user.getName()).getSingleResult();
//		} catch (Exception e) {
//			System.out.println("error in createUser" + e);
//			temp = null;
//		}
//		if(temp!=null) {
//			return "User already exists";
//		} else {
//			System.out.println(user);
//			em.persist(user);
//			return "User created";
//		}
	}
}
