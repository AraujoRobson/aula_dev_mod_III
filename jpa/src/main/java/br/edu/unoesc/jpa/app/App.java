package br.edu.unoesc.jpa.app;

import br.edu.unoesc.jpa.util.JPAUtil;
import jakarta.persistence.EntityManager;

public class App {
	private static EntityManager em;
	
	private void adicionarDados() {
		em = JPAUtil.getEntityManager();
		
		em.close();
	}
	
	private void listarPorProjeto() {
		
	}
	
	private void listarPorFuncionario() {
		
	}
	
	public static void main(String[] args) {
		App app = new App();
		
		app.adicionarDados();
	}

}
