package com.hockeyteethband.api.controller;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.service.ShowService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowsController {

    private static final Logger logger = LoggerFactory.getLogger(ShowsController.class);

    private final ShowService showService;

    public ShowsController(ShowService showService) {
        this.showService = showService;
    }

    @GetMapping
    public ResponseEntity<List<Show>> getAllShows() {
        List<Show> shows = showService.getAllShows();
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }

    @GetMapping("/past")
    public ResponseEntity<List<Show>> getAllPastShows() {
        List<Show> shows = showService.getAllPastShows();
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }

    @GetMapping("/upcoming")
    public ResponseEntity<List<Show>> getAllUpcomingShows() {
        List<Show> shows = showService.getAllUpcomingShows();
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addShow(@RequestBody Show show) {
        logger.info("Adding show: {}", show);
        showService.addShow(show);
        logger.info("Show added successfully");
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
