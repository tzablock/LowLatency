package com.lowlatency.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Result {
    private boolean success;
    private String errorMessage;

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
}
