package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name="skills")
@Getter
@Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Skill {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(nullable = false, unique = true)
    private String title;

    private String iconUrl;
    @Enumerated(EnumType.STRING)
    private Category category;

    @Enumerated(EnumType.STRING)
    private Level level;

    public enum Category {FRONTEND, BACKEND, DEVOPS, DATABASE, TOOL, DESIGN}
    public enum Level {BEGINNER, INTERMEDIATE, ADVANCED, EXPERT}
}