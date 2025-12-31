package com.example.springboot.controller;

import com.example.springboot.model.Experience;
import com.example.springboot.model.Project;
import com.example.springboot.service.ExperienceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping("/all")
    public List<Experience> getAllExperiences() {
        return experienceService.getAllExperiences();
    }

    @PostMapping("/create")
    public Experience addExperience(@RequestBody Experience experience) {
        return experienceService.registerNewExperience(experience);
    }
    @GetMapping("/{id}")
    public Experience getExperienceById(
            @PathVariable UUID id
    ) {
        return experienceService.getExperienceById(id);
    }

    @PostMapping("/{experienceId}/skills/batch")
    public Experience addSkillsByTitles(
            @PathVariable UUID experienceId,
            @RequestBody List<String> skillTitles) {
        return experienceService.addSkillsByTitles(experienceId, skillTitles);
    }

    @PutMapping("{idExperience}/update")
    public Experience updateExperience(@PathVariable UUID idExperience, @RequestBody Experience experience) {
        return experienceService.updateExperience(idExperience, experience);
    }
}