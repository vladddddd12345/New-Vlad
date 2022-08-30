Feature: Maint page login


  Scenario: Forgot your password
    Given I'm on the newpage tenantpage
    When I press on the button Forgot your password
    And I inputting email
    And I press the button Resend password
    Then I will see system message texts


  Scenario: Login to Maint Client

    Given I'm on the newpage tenantpage
    When  I input emailnew and passwordnew and press the submit button
    Then  I will see Dashboard title title
#    Then  I will see the page url

