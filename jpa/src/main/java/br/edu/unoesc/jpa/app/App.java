package br.edu.unoesc.jpa.app;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import br.edu.unoesc.jpa.model.Funcionario;
import br.edu.unoesc.jpa.model.Projeto;
import br.edu.unoesc.jpa.util.JPAUtil;
import jakarta.persistence.EntityManager;

public class App {
	private static EntityManager em;
	private static Projeto manhattan, genoma_humano;
	private static Funcionario fulano, beltrano, sicrano;
		
	private void adicionarDados() {
		em = JPAUtil.getEntityManager();
		
		// PROJETOS 1 E 2
		manhattan = new Projeto("Projeto Manhattan");
		genoma_humano = new Projeto("Projeto Genoma Humano");
		
		// 3 FUNCIONÁRIOS
		fulano = new Funcionario("Fulano",
							LocalDate.parse("25/04/2020", DateTimeFormatter.ofPattern("dd/MM/yyyy")),
							new BigDecimal("5000"));
		beltrano = new Funcionario("Beltrano",
							LocalDate.parse("28/02/2019", DateTimeFormatter.ofPattern("dd/MM/yyyy")),
							new BigDecimal("15000"));
		sicrano = new Funcionario("Sicrano",
							LocalDate.now(),
							new BigDecimal("3000"));
		
		manhattan.adicionarFuncionario(fulano);
		manhattan.adicionarFuncionario(beltrano);
		
		fulano.adicionarProjeto(genoma_humano);
		sicrano.adicionarProjeto(genoma_humano);
		
		em.getTransaction().begin();
		em.persist(beltrano);
		em.persist(fulano);
		em.persist(sicrano);
		em.getTransaction().commit();
		
		em.close();
	}
	
	private void listarPorProjeto() {
		em = JPAUtil.getEntityManager();
		em.close();
	}
	
	private void listarPorFuncionario() {
		em = JPAUtil.getEntityManager();
		
		em.close();
	}
	
	public static void main(String[] args) {
		App app = new App();
		
		app.adicionarDados();
	}

}
