package com.coforge;


import java.io.Closeable;
import java.io.IOException;

public class LoginSession implements Closeable{
	
	
	public void login() {
		System.out.println("User logged in ");
		
	}
	
	public void accessPages() {
		System.out.println("user accessing pagess");
	}

	@Override
	public void close() throws IOException {
		System.out.println("session completed automatically");
		
	}
	
	

}