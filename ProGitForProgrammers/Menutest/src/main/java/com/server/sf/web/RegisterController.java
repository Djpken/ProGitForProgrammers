package com.server.sf.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.sf.domain.Employee;
import com.server.sf.service.*;

@RestController
@RequestMapping("/register")
public class RegisterController {
	@Autowired
	private final EmployeeService employeeService;
	public RegisterController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@PostMapping
	public ResponseEntity<Object> loginSubmit(@RequestBody Employee employee) {
		
		if (!employeeService.registerAndExist(employee)) {
			return new ResponseEntity<>("建置完成", HttpStatus.OK);
		}
		return new ResponseEntity<>("更新完成", HttpStatus.OK);
	}
}
