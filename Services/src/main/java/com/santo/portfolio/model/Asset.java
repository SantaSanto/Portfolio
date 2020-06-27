package com.santo.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.santo.portfolio.service.impl.DateStringConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter @Setter
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "asset_id", nullable = false, unique = true, updatable = false)
    private long id;

    @Column(name = "asset_name", nullable = false, unique = true)
    private String name;

    @Column(name = "asset_type", nullable = false)
    private String type;

    @Column(name = "asset_institution", nullable = false)
    private String institution;

    @Column(name = "asset_holder", nullable = false)
    private String holder;

    @JsonSerialize(converter = DateStringConverter.class)
    @Temporal(TemporalType.DATE)
    @Column(name = "asset_start_date", nullable = false)
    private Date startDate;

    @JsonSerialize(converter = DateStringConverter.class)
    @Temporal(TemporalType.DATE)
    @Column(name = "asset_end_date", nullable = false)
    private Date endDate;

    @Column(name = "pf_id", updatable = false, insertable = false)
    private Long folioId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pf_id", nullable = false)
    private Portfolio folio;

    @Column(name = "asset_invested", nullable = false)
    private Double invested;

    @Column(name = "asset_nav", nullable = false)
    private Double nav;
}
