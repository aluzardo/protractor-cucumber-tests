Feature: Using Calculator and check if it is working properly
  As a user of Calculator Page
  I should be able to add numbers

  Scenario: Should add one and two
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then Add "1" + "2" = "3"
