package com.lowlatency.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

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
}
