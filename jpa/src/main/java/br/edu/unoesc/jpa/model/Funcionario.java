package br.edu.unoesc.jpa.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "funcionarios")
public class Funcionario implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(nullable = false, length = 50)
	private String nome;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "data_nascimento", nullable = false)
	private LocalDate data_nascimento;
	
	@Column(nullable = false, precision = 12, scale = 2)
	private BigDecimal salario;
	
	public Funcionario() {
		
	}
	
	public Funcionario(String nome, LocalDate data_nascimento, BigDecimal salario) {
		this.nome = nome;
		this.data_nascimento = data_nascimento;
		this.salario = salario;
	}
}
