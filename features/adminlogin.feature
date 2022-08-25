Feature: Login page, Admin

     Scenario: Successful login as admin
     Given I'm on thee page
     When I login with valid email and password and click login button
     Then I will see Dashboard title

    Scenario: Adding a lead
    Given I'm on thee page
    When I login with valid email and password and click login button
    And I navigate to Leads page
    And I add a lead with firstname, lastname, email, phonefield, units and press Save button
    Then I will see modal with systemmessage <message>

#      Examples:
#        | email1                  | password1    | firstname | lastname | emailfield     | phonefield       | units    | message                   |
#        | vkaramushka@propify.com | Aaaaaaaa12   | Vlad      | Kar      | vlad@gmail.com | 4434343345       | madison  | Lead created successfully |