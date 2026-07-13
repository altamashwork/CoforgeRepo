package com.coforge;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;

public class InsertionApp {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		System.out.println("Hello World");
		Class.forName("com.mysql.cj.jdbc.Driver");
		String url = "jdbc:mysql://localhost:3306/empdb";
		String uname = "root";
		String pwd = "altamash";
		
		Connection con = DriverManager.getConnection(url,uname,pwd);
		
		String query = "Insert into employeesalary values (?,?,?,?,?)";
		PreparedStatement ps = con.prepareStatement(query); //Precompiled statement 
		ps.setInt(1, 123);
		ps.setString(2, "Ashar");
		ps.setString(3, "Finance");
		ps.setDouble(4, 70000.0);
		ps.setDate(5, java.sql.Date.valueOf( LocalDate.now()));
		
		ps.executeUpdate();
	}
	
	

}
