package com.example.springboot.repository;

import com.example.springboot.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<ContactMessage, Long> {
}
