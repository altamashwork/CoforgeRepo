package com.coforge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coforge.entities.Book;


public interface BookRepository extends JpaRepository<Book, Long> {

}