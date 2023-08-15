package com.hockeyteethband.api.repository;

import com.hockeyteethband.api.model.Show;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.PutItemRequest;
import software.amazon.awssdk.services.dynamodb.model.ScanRequest;
import software.amazon.awssdk.services.dynamodb.model.ScanResponse;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class ShowsRepository {

    private final DynamoDbClient dynamoDbClient;

    public ShowsRepository(DynamoDbClient dynamoDbClient) {
        this.dynamoDbClient = dynamoDbClient;
    }

    public List<Show> getAllShows() {
        ScanRequest scanRequest = ScanRequest.builder()
            .tableName("Shows")
            .build();

        ScanResponse scanResponse = dynamoDbClient.scan(scanRequest);

        return scanResponse.items().stream()
            .map(this::convertToModel)
            .collect(Collectors.toList());
    }

    public void addShow(Show show) {
        Map<String, AttributeValue> item = Map.of(
            "Date", AttributeValue.builder().s(show.getDate()).build(),
            "Venue", AttributeValue.builder().s(show.getVenue()).build(),
            "Link", AttributeValue.builder().s(show.getLink()).build(),
            "Location", AttributeValue.builder().s(show.getLocation()).build()
        );

        PutItemRequest putItemRequest = PutItemRequest.builder()
            .tableName("Shows")
            .item(item)
            .build();

        dynamoDbClient.putItem(putItemRequest);
    }

    private Show convertToModel(Map<String, AttributeValue> item) {
        return new Show(
            item.get("Date").s(),
            item.get("Venue").s(),
            item.get("Link").s(),
            item.get("Location").s()
        );
    }
}
