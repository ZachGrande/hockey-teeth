package com.hockeyteethband.api.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class SpotifyService {

    @Value("${spotify.api.url}")
    private String apiUrl;

    @Value("${spotify.api.artistId}")
    private String artistId;

    private final HttpClient httpClient;

    private final AccessTokenProvider accessTokenProvider;

    public SpotifyService(HttpClient httpClient, AccessTokenProvider accessTokenProvider) {
        this.httpClient = httpClient;
        this.accessTokenProvider = accessTokenProvider;
    }

    public String getTopTracksByArtist() throws Exception {
        String token = accessTokenProvider.getAccessToken();
        HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .header("Authorization", "Bearer " + token)
            .uri(URI.create(
                apiUrl +
                "/artists/" +
                artistId +
                "/top-tracks?market=US"
            ))
            .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}