package com.example.springboot.dto;


import com.example.springboot.model.Project;
import com.example.springboot.model.Skill;
import lombok.*;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponseDTO {
    private UUID id;
    private String title;
    private String slug;
    private String shortDescription;
    private String description;
    private String category;
    private String coverImageUrl;
    private String github;
    private String demoUrl;
    private List<SkillDTO> skills; // ← Changé de List<String> à List<SkillDTO>

    public ProjectResponseDTO(Project project) {
        this.title = project.getTitle();
        this.slug = project.getSlug();
        this.shortDescription = project.getShortDescription();
        this.description = project.getDescription();
        this.category = String.valueOf(project.getCategory());
        this.coverImageUrl = project.getCoverImageUrl();
        this.github = project.getGithub();
        this.demoUrl = project.getDemoUrl();
        this.skills = project.getSkills().stream()
                .map(SkillDTO::new)
                .collect(Collectors.toList());
    }

}

