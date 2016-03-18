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
			return "User created";
		}
	}
}
