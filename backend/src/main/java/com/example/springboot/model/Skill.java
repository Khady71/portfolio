package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
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



    public enum Category {LANGUAGES, FRONTEND, BACKEND, DEVOPS, DATABASE, TOOL, DESIGN, MOBILE}

    @Enumerated(EnumType.STRING)
    private Level level;

    public enum Level {BEGINNER, INTERMEDIATE, ADVANCED, EXPERT}

    @ManyToMany(mappedBy = "skills", fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Project> projects = new HashSet<>();

    public void addProject(Project project) {
        this.projects.add(project);
        project.getSkills().add(this);
    }


    public void removeProject(Project project) {
        this.projects.remove(project);
        project.getSkills().remove(this);
    }

    @ManyToMany(mappedBy = "skills", fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Experience> experiences = new HashSet<>();



}