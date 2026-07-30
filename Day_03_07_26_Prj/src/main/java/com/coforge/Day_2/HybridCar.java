package com.coforge.Day_2;

public class HybridCar implements PetrolCar,ElectricCar {

	@Override
	public void provideAC() {
		PetrolCar.super.provideAC();
		ElectricCar.super.provideAC();
		System.out.println("Hybrid car can provide AC in both modes");
	}
	
}