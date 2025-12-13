package com.example.springboot.service;


import com.example.springboot.dto.ProjectResponseDTO;
import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Project;
import com.example.springboot.model.Skill;
import com.example.springboot.repository.ProjectRepository;
import com.example.springboot.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public Project getProjectById(UUID id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Projet non trouvé"));
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public List<Project> getByCategory(Project.Category category) {
        return projectRepository.findByCategory(category);
    }

    public Project createProject(Project project) {
        // Initialise la collection si elle est null
        if (project.getSkills() == null) {
            project.setSkills(new HashSet<>());
        }
        return projectRepository.save(project);
    }

    public Project updateProject(UUID id, Project project) {
        Project updatedProject = projectRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Project not found"));
        return projectRepository.save(project);
    }

    public void deleteProject(UUID id) {
        projectRepository.deleteById(id);
    }



    public List<ProjectResponseDTO> getAllProjectsWithSkills() {
        return projectRepository.findAll().stream()
                .map(ProjectResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Project addSkillToProject(UUID projectId, UUID skillId) {
        Project project = getProjectById(projectId);
        Skill skill = skillRepository.findById(skillId).orElseThrow(() -> new ResourceNotFoundException("Compétence non trouvée"));

        project.addSkill(skill);


        return projectRepository.save(project);
    }

    public Project getProjectBySlug(String slug) {
        return projectRepository.findBySlug(slug);
    }



    @Transactional
    public Project removeSkillFromProject(UUID projectId, UUID skillId) {
        Project project = getProjectById(projectId);
        Skill skill = skillRepository.findById(skillId)
                .orElseThrow(() -> new ResourceNotFoundException("Compétence non trouvée"));

        project.removeSkill(skill);

        return projectRepository.save(project);
    }


    @Transactional
    public Project addSkillsByTitles(UUID projectId, List<String> skillTitles) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Projet non trouvé"));

        if (project.getSkills() == null) {
            project.setSkills(new HashSet<>());
        }


        for (String title : skillTitles) {
            Skill skill = skillRepository.findByTitle(title)
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Compétence non trouvée: " + title
                    ));
            if (!project.getSkills().contains(skill)) {
                project.addSkill(skill);
            }
        }

        return projectRepository.save(project);
    }


}