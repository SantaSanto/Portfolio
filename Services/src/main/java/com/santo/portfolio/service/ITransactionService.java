package com.santo.portfolio.service;

import com.santo.portfolio.model.Transaction;

import java.util.List;
import java.util.Optional;

public interface ITransactionService<T extends Transaction> extends IService<T, Long> {

    public List<T> getByAssetId(final Long assetId);

    public void deleteByAssetId(final Long assetId);

}
