package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "educations")
@Getter @Setter @NoArgsConstructor
@AllArgsConstructor @Builder
public class Education {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;


    private String school;
    private String degree;
    private String field;
    private String location;
    private String logoUrl;
    private LocalDate startDate;
    private LocalDate endDate;

    @Column(columnDefinition = "text")
    private String description;
}
