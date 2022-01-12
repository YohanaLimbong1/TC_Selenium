@signupInvalid @twitty

Feature: Signup twitty
    Scenario: Negative case sign up for Twitty with invalid data
        Given user access page "http://sauron.dev.commsult.id/"
        Then  user click on twitty sign up button on main page
        When user input on twitty signup username "yohanalimbong1@gmail.com"
        And user input on twitty signup Password "12345"
        Then user see Next Button is disable




