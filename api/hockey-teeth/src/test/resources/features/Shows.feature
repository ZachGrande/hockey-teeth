Feature: Shows Management
  Scenario: Retrieve all shows
    Given the shows table is populated with shows data
    When the client calls GET '/shows'
    Then the response should include all the shows