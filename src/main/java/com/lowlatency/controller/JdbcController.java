package com.lowlatency.controller;

import com.lowlatency.entities.Actor;
import com.lowlatency.jdbc.PostresqlJdbcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JdbcController {
    private PostresqlJdbcService jdbcService;

    @Autowired
    public JdbcController(PostresqlJdbcService jdbcService) {
        this.jdbcService = jdbcService;
    }

    @GetMapping(value = "/actor-by-first-name/{firstname}")
    public @ResponseBody List<Actor> getActorsByFirstName(@PathVariable("firstname") String firstName){
        return jdbcService.getActorsByFirstName(firstName);
    }
}
