package com.lowlatency.controller;

import com.lowlatency.entities.Actor;
import com.lowlatency.entities.Result;
import com.lowlatency.jdbc.PostresqlJdbcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
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
    public @ResponseBody ResponseEntity<List<Actor>> getActorsByFirstName(@PathVariable("firstname") String firstName){
        HttpHeaders header = new HttpHeaders();
        header.set("Access-Control-Allow-Origin","*");

        return ResponseEntity.ok()
                .headers(header)
                .body(jdbcService.getActorsByFirstName(firstName));
    }

    @CrossOrigin //to prevent core exeption
    @DeleteMapping(value = "/delete-actor/{actorId}")
    public ResponseEntity<Result> deleteActorById(@PathVariable("actorId") String actorId){
        try {
            jdbcService.deleteActorById(actorId);
            return ResponseEntity.ok()
                    .body(Result.build().success(true).errorMessage("").actorId(actorId));
        } catch (Exception e){
            return ResponseEntity.status(400)
                    .body(Result.build().success(false).errorMessage(e.getMessage()).actorId(""));
        }
    }

    //TODO edit action                            make buttons near to listed actors

    @CrossOrigin //to prevent core exeption
    @PostMapping(value = "/new-actor")
    public @ResponseBody ResponseEntity<Result> insertNewActor(@RequestBody Actor actor){
        try {
            jdbcService.insertActor(actor);
            return ResponseEntity.ok()
                    .body(Result.build().success(true).errorMessage(""));
        } catch (Exception e){
            return ResponseEntity.status(400)
                    .body(Result.build().success(false).errorMessage(e.getMessage()));
        }
    }
}