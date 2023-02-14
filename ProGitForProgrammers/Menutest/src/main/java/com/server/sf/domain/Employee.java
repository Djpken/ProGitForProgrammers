package com.server.sf.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Employee")
@Data // 解作用比較全，其包含註解的集合@ToString，@EqualsAndHashCode，所有字段的@Getter和所有非final字段的@Setter,
@NoArgsConstructor // 這幾個註解分別為類自動產生了無參構造器、指定參數的構造器和包含所有參數的構造器
@AllArgsConstructor
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 主鍵由數據庫自動維護(AUTO_INCREMENT)
	@Column
	private int id;
	@Column
	private String account;
	@Column
	private String password;
	@Column
	private String name;
	@Column
	private int score;
	@Column
	private String cellphone;
	@Column
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate birthday;
	@Column
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime updatetime;
	
}
