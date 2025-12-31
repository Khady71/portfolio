package com.example.springboot.service;



import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Skill;
import com.example.springboot.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;


    public Skill getSkillById(UUID id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill non trouvé"));

    }

    public Skill addSkill(Skill skill) {
        if (skill.getId() != null) {
            throw new IllegalArgumentException("L'ID ne doit pas être fourni pour la création");
        }
        return skillRepository.save(skill);
    }

    public Skill updateSkill(UUID id, Skill skill) {
        Skill existingSkill = getSkillById(id);
        existingSkill.setCategory(skill.getCategory());
        existingSkill.setIconUrl(skill.getIconUrl());
        return skillRepository.save(existingSkill);
    }

    public List<Skill> getAllSkills() {

        return skillRepository.findAll();
    }

}