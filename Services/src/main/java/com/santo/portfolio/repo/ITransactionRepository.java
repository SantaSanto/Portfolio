package com.santo.portfolio.repo;

import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Transaction;
import org.hibernate.annotations.BatchSize;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ITransactionRepository extends JpaRepository<Transaction, Long> {

    @Query("SELECT t FROM Txn t LEFT JOIN t.asset a WHERE a.id = :assetId ORDER BY t.date DESC")
    List<Transaction> findByAssetId(@Param("assetId") final Long assetId);

    @Query("SELECT SUM(t.amount) FROM Txn t WHERE t.assetId = :assetId AND t.type = 'PAYMENTS'")
    Optional<Double> getInvestedByAssetId(@Param("assetId") final Long assetId);


    @Query(value =
            "SELECT txn_amount " +
            "FROM Txn " +
            "WHERE asset_id = :assetId AND txn_type = 'NAV' " +
            "ORDER BY txn_date DESC " +
            "LIMIT 1",
        nativeQuery = true)
    Optional<Double> getNavByAssetId(@Param("assetId") final Long assetId);

    @Modifying
    @Query("DELETE FROM Txn t WHERE t.assetId = :assetId")
    void deleteByAssetId(@Param("assetId") final Long assetId);
}
