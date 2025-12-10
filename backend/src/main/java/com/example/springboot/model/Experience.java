package com.example.springboot.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
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

    private LocalDate startDate;
    private LocalDate endDate;

    @Column(columnDefinition = "text")
    private String description;
}
