package com.lowlatency.jdbc;

import com.lowlatency.functions.ResultParseFuntion;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.List;
import java.util.logging.Logger;

@Repository
public class PostresqlJdbcRepository { //TODO write tests
    private static final Logger log = Logger.getLogger(PostresqlJdbcRepository.class.getName());

    public <T> List<T> select(String query, ResultParseFuntion<ResultSet, List<T>> parseResult){
        return exceptionHandle((stn) -> {
                                          ResultSet rs = stn.executeQuery(query);
                                          return parseResult.parse(rs);
                                        },
                query, String.format("Problem with selection with use of query: %s", query));
    }

    public void insert(String query) {
        exceptionHandle((stn) -> stn.executeUpdate(query), query, String.format("Problem with inserting with use of query: %s", query));
    }

    public void delete(String query) {
        exceptionHandle((stn) -> stn.executeUpdate(query), query, String.format("Problem with deletion with use of query: %s", query));
    }

    private <T> T exceptionHandle(ResultParseFuntion<Statement, T> executeQuery, String query, String exceptionMessage){
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/dvdrental?user=tomaszzablocki")){
            try (Statement stn = con.createStatement()){
                log.info(String.format("Execute query: %s", query));
                return executeQuery.parse(stn);
            }
        } catch (SQLException e){
            throw new RuntimeException(exceptionMessage);
        }
    }
}
