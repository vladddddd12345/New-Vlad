Feature: Vendor Login page

  Scenario: Successfull login as vendor
  Given I open page vendor
  When I input valid email
  And I input valid password
  And I click login button
  Then I will see newpage <newpage>
  And I will see logo
  And I will see work order blocks

#    Examples:
#      | vemail                   | vpassword   | newpage                                                    |
#      | maintchecknew1@gmail.com | Aaaaaaaa123 | https://maintenance-client-stage.dev.propify.com/dashboard |