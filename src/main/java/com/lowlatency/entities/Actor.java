package com.lowlatency.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

import static com.lowlatency.entities.FieldsUtils.dateIntoSqlFormat;

@Getter
@Setter
public class Actor {
    // actor_id
    private Integer actorId;
    // first_name
    private String firstName;
    //last_name
    private String lastName;
    //last_update
    private Date lastUpdate;

    public Actor(Integer actorId, String firstName, String lastName, Date lastUpdate) {
        this.actorId = actorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastUpdate = lastUpdate;
    }

    public String colNames(){
        return "actor_id, first_name, last_name, last_update";
    }

    public String colValues(){
        return String.format("%s, %s, %s, %s", actorId, "'"+firstName+"'", "'"+lastName+"'", "'"+dateIntoSqlFormat(lastUpdate)+"'");
    }
}
