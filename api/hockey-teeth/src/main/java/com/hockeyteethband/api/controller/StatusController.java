package com.hockeyteethband.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class StatusController {
    private static final Logger logger = LoggerFactory.getLogger(StatusController.class);

    @GetMapping("/status")
    public Mono<String> getStatus() {
        logger.info("Returning status");
        return Mono.just("{\"status\": \"up\"}");
    }

}
