Feature: Counter

    Scenario: Counting up
        Given I visit the page
        When I click on increment 1 time
        Then The counter should show 1

    Scenario Outline: Counting down
        Given I visit the page
        When I click on decrement <times> time
        Then The counter should show <count>
        Examples:
            | times | count |
            | 1     | -1    |
            | 20    | -20   |