Feature: Counter

    Scenario: Counting up
        Given I visit the page
        When I click on increment 1 time
        Then The counter should show 1

    Scenario: Counting down
        Given I visit the page
        When I click on decrement 1 time
        Then The counter should show -1