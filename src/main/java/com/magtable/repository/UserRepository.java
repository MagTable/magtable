package com.magtable.repository;

import com.magtable.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

    //Custom method to find a user by its username
    Optional<User> findUserByUsername(String username);

}