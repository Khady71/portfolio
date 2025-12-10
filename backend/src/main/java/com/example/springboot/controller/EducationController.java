package com.example.springboot.controller;

import com.example.springboot.model.Education;
import com.example.springboot.repository.EducationRepository;
import com.example.springboot.service.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/education")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class EducationController {

    private final EducationService educationService;

    @GetMapping("/all")
    public List<Education> getAllEducation() {
        return educationService.getAllEducation();
    }

    @GetMapping("/{id}")
    public Education getEducation(@PathVariable UUID id) {
        return educationService.getEducationById(id);
    }

    @PostMapping("/create")
    public Education addEducation(@RequestBody Education education) {
        return educationService.addEducation(education);
    }

    @PutMapping("/{id}")
    public Education updateEducation(@PathVariable UUID id, @RequestBody Education education) {
        return educationService.updateEducation(id, education);
    }

    @DeleteMapping("/{id}")
    public void deleteEducation(@PathVariable UUID id) {
        educationService.deleteEducation(id);
    }
}
