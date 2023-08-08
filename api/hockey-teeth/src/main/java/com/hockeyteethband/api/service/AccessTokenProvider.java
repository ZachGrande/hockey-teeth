package com.hockeyteethband.api.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;

@Service
public class AccessTokenProvider {

    private final HttpClient httpClient;

    @Value("${spotify.api.client.id}")
    private String clientId;

    @Value("${spotify.api.client.secret}")
    private String clientSecret;

    public AccessTokenProvider(HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    public String getAccessToken() throws Exception {
        String auth = clientId + ":" + clientSecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
        HttpRequest request = HttpRequest.newBuilder()
            .POST(HttpRequest.BodyPublishers.ofString(
                "grant_type=client_credentials"
            ))
            .header("Authorization", "Basic " + encodedAuth)
            .header("Content-Type", "application/x-www-form-urlencoded")
            .uri(URI.create(
                "https://accounts.spotify.com/api/token"
            ))
            .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        String body = response.body();

        JSONObject bodyJson = new JSONObject(body);

        return bodyJson.getString("access_token");
    }
}
