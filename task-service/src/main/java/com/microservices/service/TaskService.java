package com.microservices.service;

import com.microservices.enums.TaskStatus;
import com.microservices.modal.Task;

import java.util.List;

public interface TaskService {

    Task createTask(Task task, String requestUserRole) throws Exception;

    Task getTaskById(Long id) throws Exception;

    List<Task> getAllTasks(TaskStatus status, String sortByDeadline, String sortByCreatedAt);

    Task updateTask(Long id, Task updatedTask, Long userId) throws Exception;

    void deleteTask(Long id);

    Task assignedToUser(Long userId, Long taksId) throws Exception;

    List<Task> assignedUsersTask(Long userId, TaskStatus status, String sortByDeadline, String sortByCreatedAt);

    Task completeTask(Long taskId) throws Exception;
}

