package com.example.springboot.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "blog_posts")
@Getter
@Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class BlogPost {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column()
    private String content;

    private String coverImageUrl;


}
