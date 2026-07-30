package com.coforge.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coforge.enttities.LibraryCard;

public interface LibraryCardRepository extends JpaRepository<LibraryCard, Integer> {

	List<LibraryCard> findAll();

}