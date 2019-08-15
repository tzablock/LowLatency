package com.lowlatency.jdbc;

import com.lowlatency.functions.ResultParseFuntion;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.List;

@Repository
public class PostresqlJdbcRepository {
    public <T> List<T> select(String query, ResultParseFuntion<ResultSet, List<T>> parseResult){

        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/dvdrental?user=tomaszzablocki")){//TODO add url
            try (Statement stn = con.createStatement()){
                ResultSet rs = stn.executeQuery(query);
                return parseResult.parse(rs);
            }
        } catch (SQLException e){
            throw new RuntimeException(e);
        }
    }
}
