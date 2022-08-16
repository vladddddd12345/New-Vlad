Feature: Maint page login

  Scenario Outline: Forgot your password
    Given I'm on the page <maint>
    When I press on the button Forgot your password
    And I input email <email>
    And I press the button Resend password
    Then I will see system message <texts>
    Then I will see page <newurl>


    Examples:
      | maint                                                  | email | texts               | newurl                                                          |
      | https://tenant-client-stage.dev.propify.com/user/login | grgrr | Invalid Email/Phone | https://tenant-client-stage.dev.propify.com/user/password-reset |