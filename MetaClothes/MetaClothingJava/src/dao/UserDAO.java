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
}
