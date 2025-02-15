package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public Map<String, String> registerUser(@RequestBody Map<String, String> signUpRequest) {
        String username = signUpRequest.get("username");
        String email = signUpRequest.get("email");
        String password = signUpRequest.get("password");

        if (userService.existsByUsername(username)) {
            throw new RuntimeException("Nom d'utilisateur déjà utilisé !");
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));

        userService.saveUser(user);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Inscription réussie");
        return response;
    }
}
