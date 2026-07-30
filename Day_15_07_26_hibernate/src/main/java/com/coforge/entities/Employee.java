package com.coforge.entities;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Employee {
	
	private int eid;
	private String ename;
	private double salary;
	public Serializable getEid() {

		return null;
	}
	public Object getEname() {


		return null;
	}
	public Object getSalary() {
		
		return null;
	}
	public void setEname(Object ename2) {

		
	}
	public void setSalary(Object salary2) {
		
		
	}

}