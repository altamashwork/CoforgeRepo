package com.coforge.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
//@Table(name="booktable")
public class Book { 
	//minimal annotations required to create a table are 2, @Entity,@Id
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bookId;
	//@Column(name="firstTitle")
	private String title;
	//@Column(name="authorName")
	private String author;
	private Double price;
	public Object getPrice() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getAuthor() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getTitle() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setTitle(Object title2) {
		// TODO Auto-generated method stub
		
	}
	
}