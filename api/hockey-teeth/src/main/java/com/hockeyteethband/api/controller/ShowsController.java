package com.hockeyteethband.api.controller;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.repository.ShowsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowsController {

    private final ShowsRepository showsRepository;

    public ShowsController(ShowsRepository showsRepository) {
        this.showsRepository = showsRepository;
    }

    @GetMapping
    public ResponseEntity<List<Show>> getAllShows() {
        List<Show> shows = showsRepository.getAllShows();
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }
}
