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
@RequestMapping("/menutest")
public class MenutestController {
	@Autowired
	private final EmployeeService employeeService;
	public MenutestController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	@PostMapping
	public ResponseEntity<Object> setScore(HttpServletRequest request,@RequestBody Employee employee) {
		HttpSession session = request.getSession();
		String account=(String) session.getAttribute("account");
        if ( account== null) {
            return new ResponseEntity<>("尚未登入", HttpStatus.NOT_FOUND);
        }
        int score=employee.getScore();
        employeeService.getAndSetScore(account,score);
        return new ResponseEntity<>("Score", HttpStatus.OK);
		
	}
}
