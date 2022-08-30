Feature: Main page

  Scenario Outline: Search
    Given I am on main page "https://automationteststore.com/"
    When I successfully input search <search>
    When I successfully click on the result
    When I click red value
    When I click Add chart

            Examples:
              | search |
              | shoes  |