package com.santo.portfolio.controller;

import com.santo.portfolio.exception.NotFoundException;
import com.santo.portfolio.model.Allocation;
import com.santo.portfolio.model.Portfolio;
import com.santo.portfolio.service.IPortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private IPortfolioService<Portfolio> portfolioService;

    @GetMapping("/folio")
    public List<Portfolio> getFolios() {
        final List<Portfolio> folios = portfolioService.getFolios();
        return folios;
    }

    @GetMapping("/folio/{id}/allocation")
    public List<Allocation> getAllocation(@PathVariable final Long id) {
        return portfolioService.getAllocation(id);
    }

    @ExceptionHandler({ NotFoundException.class })
    protected ResponseEntity handleNotFound(NotFoundException e) {
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
