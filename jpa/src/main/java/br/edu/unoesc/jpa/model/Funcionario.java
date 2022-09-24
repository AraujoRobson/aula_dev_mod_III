package br.edu.unoesc.jpa.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
	
	@ManyToMany(cascade = CascadeType.ALL, 
				fetch = FetchType.EAGER)
	@JoinTable(name = "funcionarios_projetos",
				joinColumns = @JoinColumn(name = "id_funcionario"),
				inverseJoinColumns = @JoinColumn(name = "id_projeto"))
	public List<Projeto> projetos;
	
	public Funcionario() {
	}
	
	public Funcionario(String nome, LocalDate data_nascimento, 
			BigDecimal salario) {
		this.nome = nome;
		this.data_nascimento = data_nascimento;
		this.salario = salario;
	}
	
	public List<Projeto> getProjetos(){
		if(this.projetos == null) {
			this.projetos = new ArrayList<>();
		}
		return projetos;
	}
	
	public void adicionarProjeto(Projeto projeto) {
		if (projeto != null && !this.getProjetos().contains(projeto)) {
			this.projetos.add(projeto);
			
			if(!projeto.getFuncionarios().contains(this)) {
				projeto.getFuncionarios().add(this);
			}
		}
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public LocalDate getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(LocalDate data_nascimento) {
		this.data_nascimento = data_nascimento;
	}

	public BigDecimal getSalario() {
		return salario;
	}

	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}

	@Override
	public String toString() {
		return "Funcionario [codigo:" + codigo + 
				", nome:" + nome + 
				", data_nascimento:" + data_nascimento + 
				", salario:" + salario + "]";
	}
	
	
}
