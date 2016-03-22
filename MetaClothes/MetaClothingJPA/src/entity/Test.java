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
		User user = em.createNamedQuery("user.getUserByEmail", User.class).setParameter("email", "indarys@gmail.com").getSingleResult();
		Address address = new Address("1234 Suckit Ln.", "Centennial", "NE", 82106, user, true, true);
		
		
		//System.out.println(em.contains(user));
		em.persist(address);
		System.out.println(em.contains(address));
		
		
		em.getTransaction().commit();
	}
}
