 Feature: Auto test page

    Scenario Outline: Test auto form
      Given I am on practice page "https://automationteststore.com/index.php?rt=account%2Fcreate"
      Then I validate page header "CREATE ACCOUNT"
      When I enter firstname <fname> lastname <lname>
      And  I enter random email <email>
      And  I enter address1 <address> city <city>
      And  I select country <country>
      And  I select region <states>
      And  I enter zipcode <zipcode>
      And  I enter login <login> password <pass> passwordrepeat <pass1>
      And  I click policy <policy>
      And  I click on submit button
      Then I validate page header "Your Account Has Been Created!"

       Examples:
         | fname | lname       | email             | address | city    | country | states | zipcode | login    | pass       | pass1      | policy
         | Vlad1 | Karamushka1 | newnew1@gmail.com | Hm19    | Nikopol | Ukraine | Kyiv   | 53204   | vladosss | Aaaaaaaa12 | Aaaaaaaa12 | policy
