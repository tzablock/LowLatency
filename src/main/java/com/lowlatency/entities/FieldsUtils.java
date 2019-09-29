package com.lowlatency.entities;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FieldsUtils {
    static String dateIntoSqlFormat(Date date){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return date == null ? null : sdf.format(date);
    }
}
