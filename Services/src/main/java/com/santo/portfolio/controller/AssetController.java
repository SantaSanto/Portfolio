package com.santo.portfolio.controller;

import com.santo.portfolio.exception.NotFoundException;
import com.santo.portfolio.model.Asset;
import com.santo.portfolio.service.IAssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AssetController {

    @Autowired
    private IAssetService<Asset> assetService;

    @GetMapping("/folio/{folioId}/asset")
    public List<Asset> getAssetByFolio(
        @PathVariable("folioId") final Long folioId) {

        System.out.println("*****  AssetController::getAssetByPortfolio  *****");
        System.out.println("FolioId:" + folioId);

        return assetService.getByFolioId(folioId);
    }

    @GetMapping("/asset/{id}")
    public Asset getAsset(@PathVariable Long id) {
        final Asset asset = assetService.get(id)
            .orElseThrow(NotFoundException::new);
        return asset;
    }

    @PostMapping("/asset")
    public Asset createAsset(@RequestBody final Asset asset) {
        return assetService.create(asset);
    }

    @DeleteMapping("/asset/{id}")
    public void deleteAsset(@PathVariable final Long id) {
        assetService.delete(id);
    }

    @ExceptionHandler({ NotFoundException.class })
    protected ResponseEntity handleNotFound(NotFoundException e) {
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
