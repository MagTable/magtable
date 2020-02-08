package com.magtable.repository;

        import com.magtable.model.User;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;

        import java.util.Optional;

//@Repository annotation. This tells Spring to bootstrap the repository during component scan.
@Repository
//Generics are the Model and the type of its primary key
public interface UserRepository extends JpaRepository<User, Integer> {

    //Custom method to find a user by its username
    Optional<User> findUserByUsername(String username);

}

