package com.example.springboot.dto;


import lombok.*;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ProjectDto {
    private UUID id;
    private String title;
    private String slug;
    private String shortDescription;
    private String description;
    private String coverImageUrl;
    private List<String> images;
    private Set<UUID> skillIds;
    private String githubUrl;
    private String demoUrl;
    private boolean featured;
}