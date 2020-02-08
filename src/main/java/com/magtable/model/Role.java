package com.magtable.model;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Role {
    private Integer roleId;
    private String rolename;

    public Role (){
    }

    public Role(Integer roleId){
        this.roleId = roleId;
    }

    @Id
    @Column(name = "roleID", nullable = false)
    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    @Basic
    @Column(name = "rolename", nullable = false, length = 25)
    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role role = (Role) o;
        return Objects.equals(roleId, role.roleId) &&
                Objects.equals(rolename, role.rolename);
    }

    @Override
    public int hashCode() {
        return Objects.hash(roleId, rolename);
    }

}
