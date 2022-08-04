   Feature: Chai page

        Scenario Outline: Successful login
        Given I am on main page "https://auth-client-stage.dev.propify.com/login?returnTo=Lw%3D%3D&callbackUrl=https%3A%2F%2Fadmin-client-stage.dev.propify.com%2Fauth%2Fcallback"
        When I input email <email> password <password>
        And I click on submit button
        And I input search <searchpropify>
        And I click erase icon
            Examples:
              | email                   | password     | searchpropify |
              | vkaramushka@propify.com | Aaaaaaaa1234 | Vlad          |



