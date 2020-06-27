package com.santo.portfolio.service;

import com.santo.portfolio.model.Asset;

import java.util.Optional;

public interface IService<T, TID> {
    public Optional<T> get(final TID id);
    public T create(final T domain);
    public void update(final T domain);
    public void delete(TID id);
}
