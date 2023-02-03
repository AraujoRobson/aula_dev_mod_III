package br.edu.unoesc.example_thymeleaf;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("/tl")
	String tl(Model model) {
		model.addAttribute("message", "model information.");
		
		Product p1 = new Product("Desk", 10, new BigDecimal("3.33"));
		Product p2 = new Product("Chair", 20, new BigDecimal("33.33"));
		
		List<Product> products = new ArrayList<Product>();
		products.add(p1);
		products.add(p2);
		
		model.addAttribute("product", p1);
		model.addAttribute("products", products);
		
		Instant now = Instant.now();
		model.addAttribute("date", now);
		
		SimpleDateFormat df = new SimpleDateFormat();
		df.applyPattern("dd 'de' MMMM 'de' yyyy");
		model.addAttribute("formatted_date", df.format(Date.from(now)));
		
		model.addAttribute("price", new BigDecimal("123.45") );
		
		
		return "index";
	}
}
