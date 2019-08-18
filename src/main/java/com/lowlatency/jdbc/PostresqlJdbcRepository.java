package com.lowlatency.jdbc;

import com.lowlatency.functions.ResultParseFuntion;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.List;
import java.util.logging.Logger;

@Repository
public class PostresqlJdbcRepository {
    private static final Logger log = Logger.getLogger(PostresqlJdbcRepository.class.getName());

    public <T> List<T> select(String query, ResultParseFuntion<ResultSet, List<T>> parseResult){
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/dvdrental?user=tomaszzablocki")){//TODO add url
            try (Statement stn = con.createStatement()){
                ResultSet rs = stn.executeQuery(query);
                log.info(String.format("Execute query: %s", query));
                return parseResult.parse(rs);
            }
        } catch (SQLException e){
            throw new RuntimeException(e);
        }
    }

    public void insert(String query) {
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/dvdrental?user=tomaszzablocki")){
            try (Statement stn = con.createStatement()){
                stn.executeUpdate(query);
                log.info(String.format("Execute query: %s", query));
            }
        } catch (SQLException e){
            throw new RuntimeException(e);
        }
    }
}
