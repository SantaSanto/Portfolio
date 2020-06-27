package com.santo.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.santo.portfolio.service.impl.DateStringConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name="Txn")
@Getter @Setter
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "txn_id", nullable = false, unique = true, updatable = false)
    private long id;

    @JsonSerialize(converter = DateStringConverter.class)
    @Temporal(TemporalType.DATE)
    @Column(name = "txn_date", nullable = false)
    private Date date;

    @Column(name = "txn_type", nullable = false)
    private String type;

    @Column(name = "txn_amount", nullable = false)
    private Double amount;

    @Column(name = "asset_id", updatable = false, insertable = false)
    private Long assetId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "asset_id", nullable = false)
    private Asset asset;
}
