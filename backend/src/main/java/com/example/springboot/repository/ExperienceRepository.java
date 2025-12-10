package com.example.springboot.repository;

import com.example.springboot.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ExperienceRepository extends JpaRepository<Experience, UUID> {
    void deleteById(UUID id);

    Optional<Experience> findById(UUID id);


}
