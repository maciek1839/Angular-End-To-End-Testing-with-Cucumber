Feature: Go to the home
  Display the title

  Scenario: Display home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title
