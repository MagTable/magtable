package com.magtable.model.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * Entity class for the Role Table
 */
@Entity
public class Role implements Serializable {
    private Integer id;
    private String name;

    public Role (){
    }

    public Role(Integer id){
        this.id = id;
    }

    public Role(String name){
        this.name = name;
    }

    @Id
    @Column(name = "roleID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer roleId) {
        this.id = roleId;
    }

    @Basic
    @Column(name = "rolename", nullable = false, length = 25)
    public String getName() {
        return name;
    }

    public void setName(String rolename) {
        this.name = rolename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role role = (Role) o;
        return Objects.equals(id, role.id) &&
                Objects.equals(name, role.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

}