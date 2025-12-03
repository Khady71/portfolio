package com.example.springboot.dto;
import lombok.*;
import java.util.Set;
import java.util.UUID;




@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class BlogPostDto {
    private UUID id;
    private String title;
    private String slug;
    private String content;
    private String coverImageUrl;
    private Set<String> tags;
    private UUID authorId;
}