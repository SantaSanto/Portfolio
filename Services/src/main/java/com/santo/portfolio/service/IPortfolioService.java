package com.santo.portfolio.service;

import com.santo.portfolio.model.Allocation;
import com.santo.portfolio.model.Portfolio;

import java.util.List;

public interface IPortfolioService<T extends Portfolio> {

    public List<T> getFolios();

    public List<Allocation> getAllocation(final Long id);
}
