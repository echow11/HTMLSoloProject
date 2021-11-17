Feature: Change between "Main" page to "Help" page

    Scenario: Change page
        Given the loaded web-site
        When changePage on hyperlink clicked 
        Then the browser title should be 'Not so secret page'