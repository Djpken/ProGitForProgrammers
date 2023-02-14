package com.server.sf.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.sf.domain.Employee;
import com.server.sf.domain.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private final EmployeeRepository employeeRepository;
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	public boolean existEmployee(String account, String password) {
		Employee employee = employeeRepository.findByAccountAndPassword(account, password);
		return employee != null;
	}

	public boolean registerAndExist(Employee employee) {
		Employee existingEmployee = employeeRepository.findByAccount(employee.getAccount());
		if (null != existingEmployee) {
			existingEmployee.setName(employee.getName());
			existingEmployee.setBirthday(employee.getBirthday());
			existingEmployee.setCellphone(employee.getCellphone());
			existingEmployee.setUpdatetime(LocalDateTime.now());
			employeeRepository.save(existingEmployee);
			return true;
		}
		employee.setUpdatetime(LocalDateTime.now());
		employeeRepository.save(employee);
		return false;
	}

	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	public Employee getByAccount(String account) {
		Employee employee=employeeRepository.findByAccount(account);
		return employee;
	}

	public void getAndSetScore(String account, int score) {
		Employee employee=employeeRepository.findByAccount(account);
		employee.setScore(score);
		LocalDateTime now=LocalDateTime.now();
		LocalDateTime time=now.plusHours(8);
		employee.setUpdatetime(time);
		employeeRepository.save(employee);
	}
}