package com.example.springboot.controller;

import com.example.springboot.model.User;
import com.example.springboot.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/get")
    public User getUser() {
        return userService.getMainUser();
    }


    @PostMapping("/create")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }


}
