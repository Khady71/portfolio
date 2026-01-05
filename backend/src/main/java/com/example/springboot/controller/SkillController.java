package com.example.springboot.controller;


import com.example.springboot.model.Skill;
import com.example.springboot.service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;



    @PostMapping("/create")
    public Skill createSkill(@RequestBody Skill skill) {
        return skillService.addSkill(skill);
    }

    @PutMapping("/update/{id}")
    public Skill updateSkill(@PathVariable UUID id, @RequestBody Skill skill) {
        return skillService.updateSkill(id, skill);
    }

    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable UUID id) {
        return skillService.getSkillById(id);
    }



}
