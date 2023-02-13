package com.server.sf.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.sf.domain.Employee;
import com.server.sf.service.EmployeeService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private final EmployeeService employeeService;
	public LoginController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@PostMapping
	public ResponseEntity<String> loginSubmit(HttpServletRequest request,@RequestBody Employee employee) {
		String account = employee.getAccount();
		String password = employee.getPassword();
		if (account.equals("222222") && password.equals("222222")) {
			return new ResponseEntity<>("admin", HttpStatus.OK);
		}
		if (account == "") {
			return new ResponseEntity<>("請輸入工號", HttpStatus.BAD_REQUEST);
		}
		if (password == "") {
			return new ResponseEntity<>("請輸入密碼", HttpStatus.BAD_REQUEST);
		}
		if (employeeService.existEmployee(account, password)) {
			HttpSession session = request.getSession();
            session.setAttribute("account", account);
			return new ResponseEntity<>("employee", HttpStatus.OK);
		}
		return new ResponseEntity<>("查無此員工", HttpStatus.NOT_FOUND);
	}
}
