package br.edu.unoesc.example_thymeleaf;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Product {
	private String name;
	private Integer quantity;
	private BigDecimal price;
}
