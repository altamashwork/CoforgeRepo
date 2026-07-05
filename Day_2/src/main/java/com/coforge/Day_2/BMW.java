package com.coforge.Day_2;

public class BMW  implements Car{

	@Override
	public void start() {
		System.out.println("Car started remotely");
		
	}

	@Override
	public void stop() {
		System.out.println("car stopped remotely");
	}
	
	@Override
	public void provideAC() {
		System.out.println("AC provided");
	}
	

}