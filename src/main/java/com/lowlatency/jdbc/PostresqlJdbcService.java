package com.lowlatency.jdbc;

import com.lowlatency.entities.Actor;
import com.lowlatency.functions.ResultParseFuntion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PostresqlJdbcService {
    private PostresqlJdbcRepository repository;

    private static final String SELECT_QUERY = "SELECT * FROM %s WHERE %s=%s";
    private static final String INSERT_QUERY = "INSERT INTO %s(%s) VALUES (%s)";
    private static final String DELETE_QUERY = "DELETE FROM %s WHERE actor_id=%s;";
    private static final String UPDATE_QUERY = "UPDATE %s SET %s WHERE actor_id=%s";

    @Autowired
    public PostresqlJdbcService(PostresqlJdbcRepository repository) {
        this.repository = repository;
    }

    public List<Actor> getActorsByFirstName(String firstName){
        ResultParseFuntion<ResultSet, List<Actor>> parseActors = rs -> {
            List<Actor> res = new ArrayList<>();
            while (rs.next()) {
                res.add(new Actor(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getDate(4)));
            }
            return res;
        };
        String tableName = "actor";
        String colName = "first_name";
        String query = String.format(SELECT_QUERY, tableName, colName, "'"+firstName+"'");
        return repository.select(query, parseActors);
    }

    public void insertActor(Actor actor){
        String tableName = "actor";
        String query = String.format(INSERT_QUERY, tableName, actor.colNames(), actor.colValues());
        repository.insert(query);
    }

    public void deleteActorById(String actorId) {
        String tableName = "actor";
        String query = String.format(DELETE_QUERY, tableName, actorId);
        repository.delete(query);
    }

    public void updateActor(Actor actor) {
        String tableName = "actor";
        String query = String.format(UPDATE_QUERY, tableName, actor.colNamesToValues(), actor.getActorId());
        repository.update(query);
    }
}
