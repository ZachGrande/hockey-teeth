package com.hockeyteethband.api.controller;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.service.ShowService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowsController {

    private final ShowService showService;

    public ShowsController(ShowService showService) {
        this.showService = showService;
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
}
