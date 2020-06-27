package com.santo.portfolio.service.impl;

import com.santo.portfolio.exception.NotFoundException;
import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Portfolio;
import com.santo.portfolio.model.Transaction;
import com.santo.portfolio.repo.ITransactionRepository;
import com.santo.portfolio.service.IAssetService;
import com.santo.portfolio.service.ITransactionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class TransactionService implements ITransactionService<Transaction> {

    final Logger logger = LoggerFactory.getLogger(TransactionService.class);

    @Autowired
    private ITransactionRepository txnRepository;

    @Autowired
    IAssetService<Asset> assetService;

    @Override
    public Optional<Transaction> get(Long txnId) {
        return txnRepository.findById(txnId);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Transaction create(final Transaction txn) {

        final Long assetId = txn.getAssetId();
        final Asset asset =  assetService.get(assetId)
            .orElseThrow(NotFoundException::new);
        txn.setAsset(asset);

        final Transaction newTxn = txnRepository.save(txn);

        updateAmount(asset);

        assetService.update(asset);

        return newTxn;
    }



    @Override
    public void update(final Transaction txn) {
        create(txn);
    }

    @Override
    public void delete(final Long id) {
        logger.info("TransactionService::deleteByAssetId - Txn:{0}", id);

        final Transaction txn = txnRepository.findById(id)
            .orElseThrow(NotFoundException::new);
        final Asset asset = txn.getAsset();
        updateAmount(asset);

        txnRepository.deleteById(id);
        assetService.update(asset);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Transaction> getByAssetId(final Long assetId) {
        return txnRepository.findByAssetId(assetId);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void deleteByAssetId(final Long assetId) {
        logger.info("TransactionService::deleteByAssetId - AssetId:{0}", assetId);
        txnRepository.deleteByAssetId(assetId);
    }

    private Asset createAsset(Long assetId) {
        final Asset asset = new Asset();
        asset.setId(assetId);
        return asset;
    }

    private void updateAmount(final Asset asset) {
        final Long assetId = asset.getId();
        final Double invested = txnRepository.getInvestedByAssetId(assetId)
                .orElse(0d);
        asset.setInvested(invested);

        final Double nav = txnRepository.getNavByAssetId(assetId)
                .orElse(0d);
        asset.setNav(nav);
    }
}
