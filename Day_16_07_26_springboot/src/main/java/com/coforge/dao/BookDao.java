package com.coforge.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.coforge.entities.Book;
import com.coforge.repositories.BookRepository;

@Repository
public class BookDao {
	
	@Autowired
	BookRepository repository;

	
	public List<Book> getAllBooks() {
		return repository.findAll();
	}
	
	public  Book addBook(Book book) {
		return repository.save(book);
	}
	
	public Book getBookById(long id) {
		return repository.findById(id).get();
	}

	public void deleteBook(Long id) {
		 repository.deleteById(id);
		 System.out.println("book deleted successfully");
		
	}
	
	
	
}