package com.coforge.Day_2;


public class CarMain {

	public static void main(String[] args) {
	
		Car car=new BMW();
		car.start();
		car.stop();
		car.provideAC();
		Car.musicSystem();
		
		car=new Honda();
		car.start();
		car.stop();
		car.provideAC();
		Car.musicSystem();
		

	}

}
