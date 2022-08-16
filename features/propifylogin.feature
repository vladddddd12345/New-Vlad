   Feature: Main page

        Scenario Outline: Successful login

        Given I am on login1 page
        When I input email <email> password <password>
        And I click on submit button
        And I input search <searchpropify>
        And I click erase icon
        And I click Dashboard in the side menu
        And I click Collections page
        Then I should see header with text <header>
        Then I should see url <url>
            Examples:
              | email                   | password     | searchpropify | header                | url                                                              |
              | vkaramushka@propify.com | Aaaaaaaa1234 | VLad          | Collections Dashboard | https://admin-client-stage.dev.propify.com/dashboard/collections |



