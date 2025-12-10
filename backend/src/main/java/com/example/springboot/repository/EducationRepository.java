package com.example.springboot.repository;

import com.example.springboot.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface EducationRepository extends JpaRepository<Education, UUID> {

    void deleteById(UUID id);

    Optional<Education> findById(UUID id);
}
