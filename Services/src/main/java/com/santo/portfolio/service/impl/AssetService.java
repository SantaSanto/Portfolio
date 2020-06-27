package com.santo.portfolio.service.impl;

import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Portfolio;
import com.santo.portfolio.repo.IAssetRepository;
import com.santo.portfolio.service.IAssetService;
import com.santo.portfolio.service.ITransactionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class AssetService implements IAssetService<Asset> {

    public static final double ZERO = 0d;

    final Logger logger = LoggerFactory.getLogger(AssetService.class);

    @Autowired
    private IAssetRepository assetRepository;

    @Autowired
    private ITransactionService txnService;

    @Override
    public Asset create(final Asset asset) {
        logger.info("AssetService::create - Asset:{0}", asset.getName());

        final Long folioId = asset.getFolioId();
        final Portfolio folio = createFolio(folioId);
        asset.setFolio(folio);

        asset.setInvested(ZERO);
        asset.setNav(ZERO);

        return assetRepository.save(asset);
    }

    @Override
    public void update(final Asset asset) {
        logger.info("AssetService::update - Asset:{0}", asset.getId());
        assetRepository.save(asset);
    }

    @Override
    public void delete(final Long id) {
        logger.info("AssetService::delete - Asset:{0}", id);

        txnService.deleteByAssetId(id);
        assetRepository.deleteById(id);
    }

    @Override
    public Optional<Asset> get(final Long id) {
        logger.info("AssetService::get - Asset:{0}", id);
        return assetRepository.findById(id);
    }


    @Override
    public List<Asset> getByFolioId(final Long folioId) {
        logger.info("AssetService::getByFolioId - Folio:{0}", folioId);
        return assetRepository.findByFolioId(folioId);
    }

    private Portfolio createFolio(Long folioId) {
        final Portfolio folio = new Portfolio();
        folio.setId(folioId);
        return folio;
    }
}
