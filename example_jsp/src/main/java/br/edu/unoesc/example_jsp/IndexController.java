package br.edu.unoesc.example_jsp;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("/jsp")
	String jsp(Model model) {
		Product p1 = new Product("Desk", 10, new BigDecimal("3.33"));
		Product p2 = new Product("Chair", 20, new BigDecimal("33.33"));
		
		List<Product> products = new ArrayList<Product>();
		products.add(p1);
		products.add(p2);
		
		model.addAttribute("product", p1);
		model.addAttribute("products", products);
		
		return "index";
	}
}
