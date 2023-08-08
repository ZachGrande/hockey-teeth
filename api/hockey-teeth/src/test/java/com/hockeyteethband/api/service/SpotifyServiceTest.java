package com.hockeyteethband.api.service;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.util.ReflectionTestUtils.setField;
import static org.mockito.Mockito.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SpotifyServiceTest {

    @Mock
    private HttpClient httpClient;

    @Mock
    private AccessTokenProvider accessTokenProvider;

    @InjectMocks
    private SpotifyService spotifyService;

    @BeforeEach
    public void init() throws Exception {
        MockitoAnnotations.openMocks(this);

        HttpResponse<String> mockResponse = mock(HttpResponse.class);
        when(mockResponse.body()).thenReturn(new JSONObject("key", "test").toString());

        when(httpClient.send(
            any(HttpRequest.class),
            eq(HttpResponse.BodyHandlers.ofString())
        )).thenReturn(mockResponse);

        when(accessTokenProvider.getAccessToken())
            .thenReturn("12345");

        setField(spotifyService, "apiUrl", "https://mock-spotify-url.com");
    }

    @Test
    public void getTopTracksByArtist() throws Exception {
        String response = spotifyService.getTopTracksByArtist();

        assertEquals(new JSONObject("key", "test").toString(), response);
    }
}
