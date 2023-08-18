package com.hockeyteethband.api.service;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.repository.ShowsRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShowService {

    private final ShowsRepository showsRepository;

    public ShowService(ShowsRepository showsRepository) {
        this.showsRepository = showsRepository;
    }

    public List<Show> getAllShows() {
        return showsRepository.getAllShows();
    }

    public List<Show> getAllPastShows() {
        return showsRepository.getAllShows().stream()
            .filter(show -> LocalDate.parse(show.getDate()).isBefore(LocalDate.now()))
            .collect(Collectors.toList());
    }

    public List<Show> getAllUpcomingShows() {
        return showsRepository.getAllShows().stream()
            .filter(show -> LocalDate.parse(show.getDate()).isAfter(LocalDate.now()))
            .collect(Collectors.toList());
    }

    public void addShow(Show show) {
        showsRepository.addShow(show);
    }
}
