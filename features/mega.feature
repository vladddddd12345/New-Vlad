   Feature: Main page

      Scenario Outline: Open link
          Given I am on main page "https://mezha.media/"
          When I successfully click 3 dots button
          And I successfully input searching <search>
          And I click on search button
          And I click switch theme
          And I click switch language
          And I click on link
          And I successfully input searching <search>
          And I clear search
          And I input new search <search1> and clear data

          Examples:
            | search | search1 |
            | dota   | Vlad    |



