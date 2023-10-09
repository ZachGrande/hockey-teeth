package com.hockeyteethband.api.service;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.repository.ShowsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShowService {

    private final ShowsRepository showsRepository;

    private static final Logger logger = LoggerFactory.getLogger(ShowService.class);

    public ShowService(ShowsRepository showsRepository) {
        this.showsRepository = showsRepository;
    }

    public List<Show> getAllShows() {
        return showsRepository.getAllShows();
    }

    public List<Show> getAllPastShows() {
        return showsRepository.getAllShows().stream()
            .filter(show -> LocalDate.parse(show.getDate()).isBefore(LocalDate.now()))
            .sorted((show1, show2) -> {
                LocalDate date1 = LocalDate.parse(show1.getDate());
                LocalDate date2 = LocalDate.parse(show2.getDate());
                return date2.compareTo(date1);
            })
            .collect(Collectors.toList());
    }

    public List<Show> getAllUpcomingShows() {
        ZoneId pacificTimeZone = ZoneId.of("America/Los_Angeles");

        return showsRepository.getAllShows().stream()
            .filter(show -> {
                try {
                    LocalDate showDate = LocalDate.parse(show.getDate());
                    LocalDate currentDate = LocalDate.now(pacificTimeZone);
                    logger.info("Comparing show date {} to current date {}", showDate, currentDate);
                    return showDate.isAfter(currentDate.minusDays(1));
                } catch (Exception e) {
                    logger.error(e.getMessage());
                    return false;
                }
            })
            .sorted((show1, show2) -> {
                LocalDate date1 = LocalDate.parse(show1.getDate());
                LocalDate date2 = LocalDate.parse(show2.getDate());
                return date1.compareTo(date2);
            })
            .collect(Collectors.toList());
    }

    public void addShow(Show show) {
        showsRepository.addShow(show);
    }
}
