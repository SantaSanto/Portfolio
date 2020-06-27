package com.santo.portfolio.service;

import com.santo.portfolio.model.Asset;

import java.util.List;
import java.util.Optional;

public interface IAssetService<T extends Asset> extends IService<T, Long> {
    public List<T> getByFolioId(final Long folioId);
}
