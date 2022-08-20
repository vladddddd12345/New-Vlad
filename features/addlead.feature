Feature: Leads page

    Scenario Outline: Adding a lead
    Given I'm on thee page <url>
    When I'm input email <email1>
    And I'm input password <password1>
    And Click login button
    And I click Leasing page
    And I click View Leads
    And I click Add Lead button
    Then I will see Leads modal

      Examples:
        |url                                                                                                                                                                 | email1                  | password1    |
        |https://auth-client-stage.dev.propify.com/login?returnTo=L3Byb3NwZWN0cy9sZWFkcw%3D%3D&callbackUrl=https%3A%2F%2Fadmin-client-stage.dev.propify.com%2Fauth%2Fcallback| vkaramushka@propify.com | Aaaaaaaa1234 |