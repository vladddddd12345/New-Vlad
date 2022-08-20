Feature: Login form
  Scenario Outline: Recheck system message if try login with incorrect password/email
     Given I'm on login page <page>
     When  I input email <email>
     And  I input incorrect password <password>
     And  I click on submit
     Then I will see systemmm message error<text>
     And I can see mainpage<mainpage>

      Examples:
        | page                                                   | email          | password |  | text                                                                                                                                                  | mainpage                                                        |
        | https://tenant-client-stage.dev.propify.com/user/login | vlad@gmail.com | Aaaaaa1  |  | This user and password combination is not in our system. Please create an account or use the ‘Forgot your password’ link to recover your credentials. | https://tenant-client-stage.dev.propify.com/user/login          |