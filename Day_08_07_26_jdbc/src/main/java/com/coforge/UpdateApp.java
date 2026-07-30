package com.coforge;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UpdateApp {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		System.out.println("Hello World");
		Class.forName("com.mysql.cj.jdbc.Driver");
		String url = "jdbc:mysql://localhost:3306/empdb";
		String uname = "root";
		String pwd = "altamash";
		Connection con = DriverManager.getConnection(url,uname,pwd);
		String query = "update employeesalary set salary=? where emp_name=?";
		PreparedStatement ps = con.prepareStatement(query);
		ps.setDouble(1,70000);
		ps.setString(2,"Altamash");
		int noOfRows = ps.executeUpdate();
		System.out.println(noOfRows+" rows got updated");
		
		
	}

}