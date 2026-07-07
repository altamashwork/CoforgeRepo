package com.coforge;

import java.util.Enumeration;
import java.util.List;
import java.util.Vector;

public class VectorMain {

	public static void main(String[] args) {
		
		Vector<Integer>vector=new Vector<Integer>();
		// vector.add(56);
		// vector.add(76);
		// vector.add(67);
		for (int i=1;i<=10;i++)
		vector.add(i);	
		System.out.println(vector);
		System.out.println(vector.capacity());
		
		vector.add(11);
		System.out.println(vector.capacity());// vector capacity gets doubled
		// ArryList capacity is going to be increased by half of its original capacity
		// initial capacity gets exhausted
		
		Enumeration<Integer> enumeration= vector.elements();
		while(enumeration.hasMoreElements());
		System.out.println(enumeration.nextElement()); // concurrent modification
		//are not possible on enumeration like iterator
		
		

	}

}
