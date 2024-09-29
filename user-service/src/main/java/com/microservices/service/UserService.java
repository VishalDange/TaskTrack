package com.microservices.service;

import com.microservices.exception.UserException;
import com.microservices.modal.User;

import java.util.List;


public interface UserService {

    public User findUserProfileByJwt(String jwt) throws UserException;

    public User findUserByEmail(String email) throws UserException;

    public User findUserById(Long userId) throws UserException;

    public List<User> findAllUsers();

}
