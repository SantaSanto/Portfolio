package com.santo.portfolio.repo;

import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IPortfolioRepository extends JpaRepository<Portfolio, Long> {

}
