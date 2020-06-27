package com.santo.portfolio.service.impl;

import com.santo.portfolio.model.Allocation;
import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Portfolio;
import com.santo.portfolio.repo.IPortfolioRepository;
import com.santo.portfolio.service.IAssetService;
import com.santo.portfolio.service.IPortfolioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DecimalFormat;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
@Transactional
public class PortfolioService implements IPortfolioService<Portfolio> {

    final Logger logger = LoggerFactory.getLogger(PortfolioService.class);

    final static DecimalFormat decimalFormat = new DecimalFormat("#.##");

    @Autowired
    private IPortfolioRepository portfolioRepository;

    @Autowired
    private IAssetService assetService;



    @Override
    @Transactional(readOnly = true)
    public List<Portfolio> getFolios() {
        return portfolioRepository.findAll();
    }

    @Override
    public List<Allocation> getAllocation(final Long id) {
        logger.info("PortfolioService::getAllocation - Folio:{0}", id);
        List<Asset> assets = assetService.getByFolioId(id);


        final Map<String, Double> navMap = assets.stream().collect(
                Collectors.groupingBy(
                        Asset::getType,
                        Collectors.summingDouble(Asset::getNav)
                )
        );

        final Double totalNav = navMap.entrySet().stream()
            .collect(Collectors.summingDouble(Map.Entry::getValue));

        final List<Allocation> allocations = navMap.keySet().stream()
            .map(type -> createAllocation(type))
            .collect(Collectors.toList());

       final Map<String, Double> weightMap = new HashMap<>();
        weightMap.put("DEBT",       0.50d);
        weightMap.put("EQUITY",     0.35d);
        weightMap.put("BULLION",    0.10d);
        weightMap.put("CASH",       0.05d);




        allocations.stream()
            .forEach(allocation -> {
                final Double nav = navMap.get(allocation.getType());
                final Double wgt = Double.valueOf(decimalFormat.format(nav/totalNav));

                final Double balWgt = weightMap.get(allocation.getType());
                final Double  balNav = (totalNav * balWgt) - nav;

                allocation.setNav(nav);
                allocation.setWeight(wgt);
                allocation.setBalanced(balNav);
            }
        );

        allocations.sort(Comparator.comparing(Allocation::getWeight).reversed());

        final Allocation totalAllocation = createAllocation("TOTAL");
        totalAllocation.setNav(totalNav);
        totalAllocation.setWeight(1d);
        allocations.add(totalAllocation);

        return allocations;
    }

    private Allocation createAllocation(final String type) {
        final Allocation allocation = new Allocation();
        allocation.setType(type);
        return allocation;
    }
}
