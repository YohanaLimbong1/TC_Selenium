@tweetWithData @twitty

Feature: Button tweet twitty
  Scenario: Create new Tweet with data
    Given user access page "http://sauron.dev.commsult.id/"
    Then  user click on login button on main page
    When user input on twitty login username "yohanalimbong1@gmail.com"
    And user input on twityy login password "12345"
    Then user click on twitty Login button
    And user click on twitty homepage button tweet
    And user see tweet Button is disable
    When user input on twitty homepage what's happening "I love Indonesia"
    Then user click on twitty homepage button Entertainment
    And user click on tweet Button