package com.magtable.repository;

import com.magtable.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//Generics are the Model and the type of its primary key
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByRolename(String rolename);

}