package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "experiences")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor @Builder
public class Experience {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(unique = true)
    private String slug;


    private String company;

    private String position;
    private String logoUrl;
    private String location;

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "experience_skills",
            joinColumns = @JoinColumn(name = "experience_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Skill> skills = new HashSet<>();


    public void addSkill(Skill skill) {
        this.skills.add(skill);
    }


    public void removeSkill(Skill skill) {
        this.skills.remove(skill);
    }

    @Column(columnDefinition = "text")
    private String description;
}
