package com.magtable.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Userlevel {
    private byte levelId;
    private String description;

    @Id
    @Column(name = "levelID")
    public byte getLevelId() {
        return levelId;
    }

    public void setLevelId(byte levelId) {
        this.levelId = levelId;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Userlevel userlevel = (Userlevel) o;
        return levelId == userlevel.levelId &&
                Objects.equals(description, userlevel.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(levelId, description);
    }
}
