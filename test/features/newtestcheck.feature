 Feature: Just main page check

    Scenario Outline:
    Given I open main page <page>
    When I input email <email>
    And I input password <password>



       Examples:
         | page                                                   | email          | password   |
         | https://tenant-client-stage.dev.propify.com/user/login | vlad@gmail.com | Aaaaaaaa12 |