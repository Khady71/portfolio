package com.example.springboot.service;

import com.example.springboot.dto.ExperienceResponseDTO;
import com.example.springboot.dto.ProjectResponseDTO;
import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Experience;
import com.example.springboot.model.Project;
import com.example.springboot.model.Skill;
import com.example.springboot.repository.ExperienceRepository;
import com.example.springboot.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor // Utilise ça au lieu de @NoArgsConstructor @AllArgsConstructor
public class ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final SkillRepository skillRepository;


    public Experience registerNewExperience(Experience experience){
        return experienceRepository.save(experience);
    }

    public Experience updateExperience(UUID id, Experience experience){
        Experience existingExperience = experienceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience not found"));;
        existingExperience.setDescription(experience.getDescription());
        return experienceRepository.save(existingExperience);
    }

    public Experience getExperienceById(UUID id) {
        return experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Experience non trouvé"));
    }



    public List<Experience> getAllExperiences(){
        return experienceRepository.findAll();
    }


    public List<ExperienceResponseDTO> getAllExperiencesWithSkills() {
        return experienceRepository.findAll().stream()
                .map(ExperienceResponseDTO::new)
                .collect(Collectors.toList());
    }

    public void deleteExperience(UUID id){
        experienceRepository.deleteById(id);
    }

    @Transactional
    public Experience addSkillsByTitles(UUID experienceId, List<String> skillTitles) {
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() -> new ResourceNotFoundException("Experience non trouvé"));

        if (experience.getSkills() == null) {
            experience.setSkills(new HashSet<>());
        }


        for (String title : skillTitles) {
            Skill skill = skillRepository.findByTitle(title)
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Compétence non trouvée: " + title
                    ));

            if (skill.getExperiences() == null) {
                skill.setExperiences(new HashSet<>());
            }

            // Utiliser la méthode helper
            if (!experience.getSkills().contains(skill)) {
                experience.addSkill(skill); // ← Cette méthode met à jour les deux côtés
            }

        }

        return experienceRepository.save(experience);
    }
}