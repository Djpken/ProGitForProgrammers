package com.server.sf.domain;


import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
	Employee findByAccountAndPassword(String account, String password);
	Employee findByAccount(String account);	
}