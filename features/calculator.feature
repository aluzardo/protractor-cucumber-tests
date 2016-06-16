Feature: Using Calculator and check the title
  As a user of Calculator Page
  I should be able to see the title

  Background:
    Given I go on "http://juliemr.github.io/protractor-demo/"

  Scenario: Check the Calculator title
    Then The title should be equal "Super Calculator"

  Scenario: Calculator should add one and two
    Then Add "1" + "2" = "3"