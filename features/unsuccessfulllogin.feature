Feature: Maint page login

  Scenario Outline: Uncusseful login
    Given I'm on the page <maint>
    When I input email <email> and input password <password>
    And I press the login button
    Then I will see system error
    Then I will see page <url>


    Examples:
      | maint                                                  | email                   | password | url                                                             |
      | https://tenant-client-stage.dev.propify.com/user/login | thursdaycheck@gmail.com | Aaaaaa   | https://tenant-client-stage.dev.propify.com/user/login          |