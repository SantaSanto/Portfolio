package com.santo.portfolio.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
public class Allocation {

    private String type;
    private Double invested;
    private Double nav;
    private Double weight;

    private Double balanced;
}
