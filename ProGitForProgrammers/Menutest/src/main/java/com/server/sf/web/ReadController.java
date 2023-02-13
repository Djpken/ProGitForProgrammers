package com.server.sf.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.sf.domain.Employee;
import com.server.sf.service.EmployeeService;

@RestController
@RequestMapping("/read")
public class ReadController {

	@Autowired
	private final EmployeeService employeeService;
	public ReadController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}


	@PostMapping
	public ResponseEntity<Object> getAllEmployees(@RequestBody Employee employee) {
		List<Employee> employees=new ArrayList<>();
	    if (employee.getAccount().equals("")) {
	        employees = employeeService.getAllEmployees();
	        return new ResponseEntity<>(employees, HttpStatus.OK);
	    } else {	    	
	    	Employee foundEmployee = employeeService.getByAccount(employee.getAccount());
	    	if (foundEmployee != null) {
	    		employees.add(foundEmployee);
	    		return new ResponseEntity<>(employees, HttpStatus.OK);
	        } else {
	        	String message = "查無此員工";
	        	return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
	        }
	    }
	}

}
