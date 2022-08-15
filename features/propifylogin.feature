   Feature: Main page

        Scenario Outline: Successful login

        Given I am on home page <homepage>
        When I input email <email> password <password>
        And I click on submit button
        And I input search <searchpropify>
        And I click erase icon
        And I click Dashboard in the side menu
        And I click Collections page
        Then I should see header with text <header>
        Then I should see url <url>
            Examples:
              | homepage                                                                                                                                         | email                   | password     | searchpropify | header                | url                                                              |
              | https://auth-client-stage.dev.propify.com/login?returnTo=Lw%3D%3D&callbackUrl=https%3A%2F%2Fadmin-client-stage.dev.propify.com%2Fauth%2Fcallback | vkaramushka@propify.com | Aaaaaaaa1234 | Vlad          | Collections Dashboard | https://admin-client-stage.dev.propify.com/dashboard/collections |



