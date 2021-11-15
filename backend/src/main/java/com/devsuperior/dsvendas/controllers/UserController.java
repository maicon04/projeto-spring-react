package com.devsuperior.dsvendas.controllers;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import com.devsuperior.dsvendas.config.JwtTokenUtil;
import com.devsuperior.dsvendas.services.JwtUserDetailsService;
import com.devsuperior.dsvendas.util.Converter;
import org.apache.tomcat.util.bcel.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.entities.User;
import com.devsuperior.dsvendas.dto.UserDTO;
import com.devsuperior.dsvendas.services.UserService;

@RestController
@RequestMapping(
        path = "/user"
)
public class UserController {

    @Autowired
    private UserService UserService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @PostMapping(
            path = "/register"
    )
    public Object create(@Valid @RequestBody User user) throws Exception {
        try {
            UserService.create(user);
            UserDTO userDTO = (UserDTO) Converter.toModel(user, UserDTO.class);
            userDTO.add(linkTo(methodOn(UserController.class).get(user.getId())).withSelfRel());
            final UserDetails userDetails = userDetailsService
                    .loadUserByUsername(user.getEmail());
            final String token = jwtTokenUtil.generateToken(userDetails);
            userDTO.setToken(token);
            return ResponseEntity.ok(userDTO);
        }catch(ConstraintViolationException e) {
            return new ConstraintViolationException("Email já cadastrado",e.getConstraintViolations());
            //return ResponseEntity.status(HttpStatus.FORBIDDEN);
        }

    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/{id}"
    )
    public ResponseEntity<UserDTO> get(@PathVariable final Long id) {
        Optional<User> user = UserService.get(id);
        if (user.isPresent()) {
            UserDTO userDTO = (UserDTO) Converter.toModel(user.get(), UserDTO.class);
            userDTO.add(linkTo(methodOn(UserController.class).get(id)).withSelfRel());
            return ResponseEntity.ok(userDTO);
        }


        return ResponseEntity.notFound().build();
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = ""
    )
    public List<UserDTO> getAll() {
        return (List<UserDTO>)Converter.toCollection(UserService.getAll(), UserDTO.class);
    }


}