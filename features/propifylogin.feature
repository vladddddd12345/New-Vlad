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
        Then I should see collections url
            Examples:
              | email                   | password     | searchpropify | header                |
              | vkaramushka@propify.com | Aaaaaaaa1234 | VLad          | Collections Dashboard |



