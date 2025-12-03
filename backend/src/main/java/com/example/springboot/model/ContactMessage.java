package com.example.springboot.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import java.time.Instant;
import java.util.UUID;


@Entity
@Table(name = "contact_messages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ContactMessage {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    private String name;
    private String email;

    @Column(columnDefinition = "text")
    private String message;
}