package com.example.springboot.repository;

import com.example.springboot.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlogPostRepository extends JpaRepository<BlogPost,String> {
}


