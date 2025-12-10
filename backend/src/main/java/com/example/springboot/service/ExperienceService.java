package com.example.springboot.service;

import com.example.springboot.model.Experience;
import com.example.springboot.repository.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor // Utilise ça au lieu de @NoArgsConstructor @AllArgsConstructor
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public Experience registerNewExperience(Experience experience){
        return experienceRepository.save(experience);
    }

    public Experience updateExperience(UUID id, Experience experience){
        Experience existingExperience = experienceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience not found"));;
        existingExperience.setDescription(experience.getDescription());
        return experienceRepository.save(existingExperience);
    }



    public List<Experience> getAllExperiences(){
        return experienceRepository.findAll();
    }

    public void deleteExperience(UUID id){
        experienceRepository.deleteById(id);
    }
}