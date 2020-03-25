package com.magtable.repository;

import com.magtable.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

/**
 * Repository Interface for Users
 * @author David Ward
 */
public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

    //Custom method to find a user by its username
    Optional<User> findUserByUsername(String username);

}