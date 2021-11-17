Feature: Toggle Button
    Scenario: Clicking the toggle button
        Given the loaded web-site
        When toggled using the button
        Then the return should be "Submission Accepted. Thank you!"