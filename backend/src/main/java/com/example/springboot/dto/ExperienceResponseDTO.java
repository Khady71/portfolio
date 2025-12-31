package com.example.springboot.dto;

import com.example.springboot.model.Experience;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ExperienceResponseDTO {
    private UUID id;
    private String slug;
    private String company;
    private String position;
    private String logoUrl;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private List<SkillDTO> skills;

    public ExperienceResponseDTO(Experience experience) {
        this.id = experience.getId();
        this.slug = experience.getSlug();
        this.company = experience.getCompany();
        this.position = experience.getPosition();
        this.logoUrl = experience.getLogoUrl();
        this.startDate = experience.getStartDate();
        this.endDate = experience.getEndDate();
        this.description = experience.getDescription();
        this.skills = experience.getSkills().stream()
                .map(SkillDTO::new)
                .collect(Collectors.toList());



    }
}
