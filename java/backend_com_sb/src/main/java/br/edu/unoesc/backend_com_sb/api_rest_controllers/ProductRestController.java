package br.edu.unoesc.backend_com_sb.api_rest_controllers;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unoesc.backend_com_sb.model.Product;

@RestController
@RequestMapping(value = "/api")
public class ProductRestController {
	Product p1 = new Product(1L, "Desk", 10, new BigDecimal("3.33"));
	Product p2 = new Product(2L, "Chair", 20, new BigDecimal("33.33"));
	
	List<Product> products;
	
	public ProductRestController() {
		products = new ArrayList<Product>();
		
		products.add(p1);
		products.add(p2);
	}
	
	@PostMapping("/products")
	public Product saveProduct(@RequestBody Product product) {
		return product;
	}
	
	@GetMapping(value = "/products")
	public List<Product> listProducts(){
		return products;
	}
	
	@GetMapping(value = "/products/{id}")
	public Product findById(@PathVariable Long id) {
		for(Product product : products) {
			if (product.getId().equals(id)) {
				return product;
			}
		}
		return null;
	}
}
