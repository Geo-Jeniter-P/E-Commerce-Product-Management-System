package com.example.productdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.productdemo.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {}
