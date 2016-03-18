package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Test {
	public static void main(String args [])
	{
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("metaPU");
		EntityManager em = emf.createEntityManager();
		
		em.getTransaction().begin();
		User user = (User)em.createNamedQuery("user.getUserByEmail").setParameter("email", "indarys@gmail.com").getSingleResult();
		
		System.out.println(user);
		//System.out.println(em.contains(user));
		
		
		
		em.getTransaction().commit();
	}
}
