Feature: Leads page

    Scenario Outline: Adding a lead
    Given I'm on thee page <url>
    When I'm input email <email1>
    And I'm input password <password1>
    And Click login button
    And I click View Leads
    And I click Add Lead button
    And I fill First name <firstname>
    And I fill Last name <lastname>
    And I fill emailfield <emailfield>
    And I fill phone <phonefield>
    And I input unit <units>
    And I select unit
    And I click button save
    Then I will see modal with systemmessage <message>

      Examples:
        |url                                                                                                                                                                 | email1                  | password1    | firstname | lastname | emailfield     | phonefield       | units    | message                    |
        |https://auth-client-stage.dev.propify.com/login?returnTo=L3Byb3NwZWN0cy9sZWFkcw%3D%3D&callbackUrl=https%3A%2F%2Fadmin-client-stage.dev.propify.com%2Fauth%2Fcallback| vkaramushka@propify.com | Aaaaaaaa12 | Vlad      | Kar      | vlad@gmail.com | 4434343345       | madison  | Lead created successfully  |