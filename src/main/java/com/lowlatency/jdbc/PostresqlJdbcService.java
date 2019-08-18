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
}
