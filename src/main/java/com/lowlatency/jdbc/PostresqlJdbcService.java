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
}
