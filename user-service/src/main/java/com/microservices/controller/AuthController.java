package com.microservices.controller;

import com.microservices.config.JwtProvider;
import com.microservices.modal.User;
import com.microservices.repositories.UserRepository;
import com.microservices.request.LoginRequest;
import com.microservices.response.AuthResponse;
import com.microservices.service.CustomerUserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerUserServiceImplementation customUserDetails;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception{

        String email=user.getEmail();
        String password=user.getPassword();
        String fullName=user.getFullName();
        int mobile=user.getMobile();
        String role=user.getRole();

        User isEmailExist=userRepository.findByEmail(email);

        if(isEmailExist!=null){
            throw new Exception("Email is Already Used With Another Account");
        }

        User createUser=new User();
        createUser.setEmail(email);
        createUser.setFullName(fullName);
        createUser.setPassword(passwordEncoder.encode(password));
        createUser.setMobile(mobile);
        createUser.setRole(role);

        userRepository.save(createUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(email,password);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token= JwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Register Success");
        authResponse.setStatus(true);

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest){

        String username=loginRequest.getEmail();
        String password=loginRequest.getPassword();

         Authentication authentication=authenticate(username,password);
         SecurityContextHolder.getContext().setAuthentication(authentication);

         String token=JwtProvider.generateToken(authentication);
         AuthResponse authResponse=new AuthResponse();

         authResponse.setMessage("Login Success");
         authResponse.setJwt(token);
         authResponse.setStatus(true);

         return new ResponseEntity<>(authResponse,HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password){

        UserDetails userDetails=customUserDetails.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("Invalid username or password");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
