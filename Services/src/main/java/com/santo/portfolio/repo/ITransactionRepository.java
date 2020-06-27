package com.santo.portfolio.repo;

import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ITransactionRepository extends JpaRepository<Transaction, Long> {

    @Query("SELECT t FROM Txn t LEFT JOIN t.asset a WHERE a.id = :assetId")
    List<Transaction> findByAssetId(@Param("assetId") final Long assetId);

    @Query("SELECT SUM(t.amount) FROM Txn t WHERE t.assetId = :assetId AND t.type = 'PAYMENTS'")
    Optional<Double> getInvestedByAssetId(@Param("assetId") final Long assetId);

    @Query("SELECT SUM(t.amount) FROM Txn t WHERE t.assetId = :assetId AND t.type = 'NAV'")
    Optional<Double> getNavByAssetId(@Param("assetId") final Long assetId);

    @Modifying
    @Query("DELETE FROM Txn t WHERE t.assetId = :assetId")
    void deleteByAssetId(@Param("assetId") final Long assetId);
}
