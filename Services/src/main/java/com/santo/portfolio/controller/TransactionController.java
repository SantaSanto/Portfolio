package com.santo.portfolio.controller;

import com.santo.portfolio.exception.NotFoundException;
import com.santo.portfolio.model.Asset;
import com.santo.portfolio.model.Transaction;
import com.santo.portfolio.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    private ITransactionService<Transaction> txnService;

    @GetMapping("/asset/{assetId}/txn")
    public List<Transaction> getTxnByAsset(
            @PathVariable("assetId") final Long assetId) {

        System.out.println("*****  TransactionController::getTxnByAsset  *****");
        System.out.println("AssetId:" + assetId);

        final List<Transaction> txn = txnService.getByAssetId(assetId);
        System.out.println("Transaction :" + txn.size());
        return txn;
    }

    @GetMapping("/txn/{txnId}")
    public Transaction getTxn(@PathVariable("txnId") final Long txnId) {
        return txnService.get(txnId)
            .orElseThrow(NotFoundException::new);
    }

    @PostMapping("/txn")
    public Transaction createTxn(@RequestBody final Transaction txn) {
        return txnService.create(txn);
    }

    @DeleteMapping("/txn/{id}")
    public void deleteTxn(@PathVariable final Long id) {
        txnService.delete(id);
    }

    @ExceptionHandler({ NotFoundException.class })
    protected ResponseEntity handleNotFound(NotFoundException e) {
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
