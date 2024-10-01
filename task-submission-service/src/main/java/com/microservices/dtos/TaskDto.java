package com.microservices.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TaskDto {
    private Long id;

    private String title;

    private String description;

    private String image;

    private String status;

    private LocalDateTime createdAt;

    private LocalDateTime deadline;
}
