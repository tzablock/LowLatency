package com.lowlatency.functions;

import java.sql.SQLException;
import java.util.function.Function;

@FunctionalInterface
public interface ResultParseFuntion<T, R> {
    R parse(T t) throws SQLException;
}
