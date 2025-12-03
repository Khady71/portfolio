package com.example.springboot.dto;


import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CreateContactRequest {
    private String name;
    private String email;
    private String message;
}
