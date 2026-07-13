package com.coforge;


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
public class Product implements Comparable<Product>{
	
	private int prodId;
	private String prodName;
	private double prodCost;
	private int nou;
	@Override
	public int compareTo(Product o) {
		
		return this.getProdName().compareTo(o.getProdName());
	}
	
	

}