Feature: Using Calculator and check the title
  As a user of Calculator Page
  I should be able to see the title


  Scenario: Check the Calculator title
    Given The Calculator is open
    Then The title should be equal "Super Calculator"

  Scenario: Calculator should add one and two
    Given The Calculator is open
    Then Add "1" + "2" = "3"