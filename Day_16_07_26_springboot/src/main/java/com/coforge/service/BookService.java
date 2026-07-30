package com.coforge.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.dao.BookDao;
import com.coforge.entities.Book;

@Service
public class BookService {

	@Autowired
	BookDao dao;
	
	public List<Book> getAllBooks() {
		return dao.getAllBooks();
	}
	
	public  Book addBook(Book book) {
		return dao.addBook(book);
	}
	public Book getBookById(long id) {
		return dao.getBookById(id);
	}

	public Book updateBook(Long id, Book book) {
		
		Book exBook=dao.getBookById(id);
		if(exBook!=null) {
			if(book.getTitle()!=null)
			exBook.setTitle(book.getTitle());
			if(book.getAuthor()!=null)
			exBook.setAuthor(book.getAuthor());
			if(book.getPrice()!=null)
			exBook.setPrice(book.getPrice());
			return dao.addBook(exBook);
		}
		else {
			return null;
		}
		
	}

	public void deleteBook(Long id) {
		 dao.deleteBook(id);
		
	}

}