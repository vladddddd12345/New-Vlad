@Regression
Feature: Login page, Admin
     @1
     Scenario: Successful login as admin
     Given I'm on thee page
     When I login with valid email and password and click login button
     Then I will see Dashboard title
     And I will see dashboards url

    @2
    Scenario: Adding a lead
    Given I'm on thee page
    When I login with valid email and password and click login button
    And I navigate to Leads page
    And I add a lead and press Save button
    Then I will see modal with systemmessage message
    And I will see leads URL