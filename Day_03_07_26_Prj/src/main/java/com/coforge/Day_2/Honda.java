package com.coforge.Day_2;

public class Honda implements Car{

	@Override
	public void start() {
		System.out.println("Car Started manually");
		
	}

	@Override
	public void stop() {
		System.out.println("car stopped manually");
		
	}

}