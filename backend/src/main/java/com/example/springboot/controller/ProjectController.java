package com.example.springboot.controller;

import com.example.springboot.dto.ProjectResponseDTO;
import com.example.springboot.model.Project;
import com.example.springboot.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping("/all")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/all-with-skills")
    public List<ProjectResponseDTO> getAllProjectSkill() {
        return projectService.getAllProjectsWithSkills();
    }

    @GetMapping("/{id}")
    public Project getProjectById(
            @PathVariable UUID id
    ) {
        return projectService.getProjectById(id);
    }

    @GetMapping("/get/category/{category}")
    public List<Project> getAllProjectsByCategory(@PathVariable Project.Category category) {
        return projectService.getByCategory(category);
    }

    @PostMapping("/create")
    public Project addProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @GetMapping("/with-skills")
    public List<ProjectResponseDTO> getAllProjectsWithSkills() {
        return projectService.getAllProjectsWithSkills();
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable UUID id, @RequestBody Project project) {
        return projectService.updateProject(id, project);
    }



    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable UUID id) {
        projectService.deleteProject(id);
    }

    @GetMapping("/slug/{slug}")
    private Project getProjectBySlug(@PathVariable String slug) {
        return projectService.getProjectBySlug(slug);
    }

    @PostMapping("/{projectId}/skills/{skillId}")
    public Project addSkillToProject(
            @PathVariable UUID projectId,
            @PathVariable UUID skillId) {
        return projectService.addSkillToProject(projectId, skillId);
    }

    @DeleteMapping("/{projectId}/skills/{skillId}")
    public Project removeSkillFromProject(
            @PathVariable UUID projectId,
            @PathVariable UUID skillId) {
        return projectService.removeSkillFromProject(projectId, skillId);
    }

    @PostMapping("/{projectId}/skills/batch")
    public Project addSkillsByTitles(
            @PathVariable UUID projectId,
            @RequestBody List<String> skillTitles) {
        return projectService.addSkillsByTitles(projectId, skillTitles);
    }



}
