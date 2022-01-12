@loginValid @twitty

Feature: Login twitty
  Scenario: Positive case Check user login with created data through sign up
    Given user access page "http://sauron.dev.commsult.id/"
    Then  user click on twitty sign up button on main page
    When user input on twitty signup username "yohanalimbong1@gmail.com"
    And user input on twitty signup Password "12345"
    And user input on twitty signup Phone "082274027988"
    And user select on twityy signup date Month of birth
    And user select on twityy signup date day  of birth
    And user select on twityy signup date Year  of birth
    Then user click on twitty Next button
    When user input on twitty login username "yohanalimbong1@gmail.com"
    And user input on twityy login password "12345"
    Then user click on twitty Login button
    And user click on twitty homepage button tweet