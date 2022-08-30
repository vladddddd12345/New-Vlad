Feature: Login form
  Scenario Outline: Recheck system message if try login with incorrect password/email
     Given I'm on link
     When  I input email <email>
     And  I input incorrect password <password>
     And  I click on submit
     Then I will see systemmm message error<text>
     And I'm on link

      Examples:
         | email          | password |  | text                                                                                                                                                  |
         | vlad@gmail.com | Aaaaaa1  |  | This user and password combination is not in our system. Please create an account or use the ‘Forgot your password’ link to recover your credentials. |