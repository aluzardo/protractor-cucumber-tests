Feature: Using Calculator and check if the history is working properly
  As a user of Calculator Page
  I should be able to add operations.
  This operations should be stored on a history.

  Scenario: The calculator history should work properly
    Given I go on "http://aluzardo.github.io/protractor-demo/"
    Then The history should contain the previous operations
    And The last and the fist operation should match