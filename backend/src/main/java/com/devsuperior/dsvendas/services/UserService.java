package com.devsuperior.dsvendas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.entities.User;
import com.devsuperior.dsvendas.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User create(User user) {
        String generatedSecuredPasswordHash = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
        user.setPassword(generatedSecuredPasswordHash);
        return userRepository.save(user);
    }

    public Optional<User> get(Long id) {
        return userRepository.findById(id);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAll() {
        // TODO Auto-generated method stub
        return userRepository.findAll();
    }


}