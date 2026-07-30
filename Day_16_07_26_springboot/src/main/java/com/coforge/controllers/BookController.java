package com.coforge.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.coforge.entities.Book;
import com.coforge.service.BookService;

//@Controller
//@ResponseBody
@RestController
public class BookController {
	
	@Autowired
	BookService service;
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return service.getAllBooks();
	}
	@PostMapping("/books")
	public  Book addBook(@RequestBody Book book) {
		return service.addBook(book);
	}
	@GetMapping("/books/{bookId}")
	public Book getBookById(@PathVariable("bookId")  long bookId) {
		return service.getBookById(bookId);
	}
	
	@PatchExchange("/books/{id}")
	public Book updateBook(@PathVariable("id") Long id,@RequestBody Book book) {
		return service.updateBook(id,book);
		
	}
	
	@DeleteMapping("/books/{id}")
	public void deleteBook(@PathVariable("id") Long id) {
		service.deleteBook(id);
	}

}