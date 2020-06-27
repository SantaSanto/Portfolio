package com.santo.portfolio.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter @Setter
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pf_id", nullable = false, unique = true, updatable = false)
    private long id;

    @Column(name = "pf_name", nullable = false, unique = true)
    private String name;
}
