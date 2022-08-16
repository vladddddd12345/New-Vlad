   Feature: Maint page login

      Scenario Outline: Login to Maint Client

      Given I'm on the page <maint>
      When  I input <email> and <password>
      And   I press the submit button
      Then  I will see Dashboard title <title>
      Then  I will see the page <url>

        Examples:
          | maint                                                  | email                   | password   | title     | url                                                   |
          | https://tenant-client-stage.dev.propify.com/user/login | thursdaycheck@gmail.com | Aaaaaaaa12 | Dashboard | https://tenant-client-stage.dev.propify.com/dashboard |
