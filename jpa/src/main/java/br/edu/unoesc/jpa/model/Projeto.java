package br.edu.unoesc.jpa.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "projetos")
public class Projeto implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(nullable = false, length = 50)
	private String nome;
	
	@ManyToMany(mappedBy = "projetos",
			cascade = CascadeType.ALL,
			fetch = FetchType.EAGER)
	List<Funcionario> funcionarios;
	
	public Projeto() {
		
	}
	
	public Projeto(String nome) {
		this.nome = nome;
	}
	
	public List<Funcionario> getFuncionarios(){
		if(this.funcionarios == null) {
			this.funcionarios = new ArrayList<>();
		}
		return funcionarios;
	}
	
	public void adicionarFuncionario(Funcionario funcionario) {
		if (funcionario != null && !this.getFuncionarios().contains(funcionario)) {
			this.funcionarios.add(funcionario);
			
			if(!funcionario.getProjetos().contains(this)) {
				funcionario.getProjetos().add(this);
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setFuncionarios(List<Funcionario> funcionarios) {
		this.funcionarios = funcionarios;
	}

	@Override
	public String toString() {
		return "Projeto [codigo:" + codigo + 
				", nome:" + nome + "]";
	}
	
}
