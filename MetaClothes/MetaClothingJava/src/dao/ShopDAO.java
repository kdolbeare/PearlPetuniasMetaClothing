package dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entity.Item;
import entity.User;

@Transactional
public class ShopDAO {
	
	@PersistenceContext
	private EntityManager em;

	public List<Item> getItemByCat(String cat) {
		
		List<Item> temp = new ArrayList<>();
		try {
			temp = em.createNamedQuery("item.getItemByCat").setParameter("category", cat).getResultList();
		}catch (Exception e) {
			System.out.println("error in getUserByEmail" + e);
			temp = null;
		}
		System.out.println(temp);
		return temp;
	}

}
