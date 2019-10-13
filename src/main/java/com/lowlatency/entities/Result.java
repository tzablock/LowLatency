package com.lowlatency.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Result {
    private boolean success;
    private String errorMessage;
    private String actorId;

    public Result success(boolean success){
        this.success = success;
        return this;
    }
    public Result errorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }

    public static Result build(){
        return new Result();
    }
    private Result(){}

    public Result actorId(String actorId) {
        this.actorId = actorId;
        return this;
    }
}
