package br.edu.unoesc.exemplo;

import java.math.BigDecimal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {
	@RequestMapping("/")
	String home(Model model) {
		model.addAttribute("message", "model information");
		Product p = new Product("Desk", 10, new BigDecimal("3.33"));
		
		model.addAttribute("product", p);
		return "index";
	}
}
