package com.example.springboot.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;


@Entity
@Table(name = "users")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class User {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    private String firstName;
    private String lastName;

    @Column(unique = true)
    private String email;

    @Column()
    private String bio;

    private String jobTitle;

    private String location;

    private String profileImageUrl;

}
