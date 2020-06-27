package com.santo.portfolio.service.impl;

import com.fasterxml.jackson.databind.util.StdConverter;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DateStringConverter extends StdConverter<Date, String> {
    @Override
    public String convert(final Date date) {
        return date != null ? date.toString() : null;
    }
}