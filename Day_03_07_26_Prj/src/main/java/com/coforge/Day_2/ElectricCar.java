package com.coforge.Day_2;

public interface ElectricCar {
	
	public default void provideAC(){
	System.out.println("Petrol Car provides smart AC");
}

}