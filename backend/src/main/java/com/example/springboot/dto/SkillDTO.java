package com.example.springboot.dto;

import com.example.springboot.model.Skill;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillDTO {
    private UUID id;
    private String title;
    private String iconUrl;
    private String category;
    private String level;

    public SkillDTO(Skill skill) {
        this.id = skill.getId();
        this.title = skill.getTitle();
        this.iconUrl = skill.getIconUrl();
        this.category = skill.getCategory() != null ? skill.getCategory().name() : null;
        this.level = skill.getLevel() != null ? skill.getLevel().name() : null;
    }
}