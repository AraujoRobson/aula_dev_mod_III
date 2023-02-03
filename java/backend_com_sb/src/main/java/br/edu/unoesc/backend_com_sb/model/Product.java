package br.edu.unoesc.backend_com_sb.model;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Product {
	private Long id;
	private String description;
	private Integer quantity;
	private BigDecimal price;
}
