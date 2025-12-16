package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;


@Entity
@Table(name = "projects")
@Getter  @Setter @NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(nullable = false)
    private String title;

    private String slug;

    private String shortDescription;

    @Column()
    private String description;

    private String coverImageUrl;

    private String github;

    private String demoUrl;


    @Enumerated(EnumType.STRING)
    private Category category;

    public enum Category {MAIN, LAB}


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "project_skills",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Skill> skills = new HashSet<>();


    public void addSkill(Skill skill) {
        this.skills.add(skill);
        skill.addProject(this);
    }


    public void removeSkill(Skill skill) {
        this.skills.remove(skill);
        skill.removeProject(this);
    }


    public Project(String title, String description, String github) {
        this.title = title;
        this.description = description;
        this.github = github;
        this.skills = new HashSet<>();
    }



}
