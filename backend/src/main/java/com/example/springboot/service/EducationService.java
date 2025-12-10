package com.example.springboot.service;


import com.example.springboot.model.Education;
import com.example.springboot.repository.EducationRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EducationService {

    private final EducationRepository educationRepository;


    public Education addEducation(Education education) {
        return educationRepository.save(education);
    }


    public Education getEducationById(UUID id) {
        if(educationRepository.findById(id).isPresent()){
            return educationRepository.findById(id).get();
        }
        else{
            throw new EntityNotFoundException("Education with id " + id + " not found");
        }


    }

    public Education updateEducation(UUID id, Education education) {
        Education education1 = educationRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Education not found"));
        education1.setDescription(education.getDescription());
        return educationRepository.save(education);

        }



    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }


    public void deleteEducation(UUID id) {
        educationRepository.deleteById(id);
    }
}