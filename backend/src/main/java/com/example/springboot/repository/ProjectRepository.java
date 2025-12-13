package com.example.springboot.repository;

import com.example.springboot.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {

    Project findBySlug(String slug);
    List<Project> findByCategory(Project.Category category);



}
