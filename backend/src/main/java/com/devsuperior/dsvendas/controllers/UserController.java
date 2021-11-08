package com.devsuperior.dsvendas.controllers;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.devsuperior.dsvendas.util.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.entities.User;
import com.devsuperior.dsvendas.dto.UserDTO;
import com.devsuperior.dsvendas.services.UserService;


/**
 * A Spring {@link RestController} used to showcase the modeling of a REST controller for CRUD operations
 *
 * @author Odilio Noronha Filho
 */
@RestController
@RequestMapping(
        path = "/user"
)
public class UserController {

    @Autowired
    private UserService UserService;

    @PostMapping
    public ResponseEntity<HttpStatus> create(@Valid @RequestBody User user) {
        UserService.create(user);
        return ResponseEntity.ok(HttpStatus.OK);
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