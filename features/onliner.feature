Feature: Onliner tests

  Scenario: Login Onliner
    Given I open Onliner Login page
    When I Login with <email> and <password>
    Then I should see user image

    Examples: 
      | email            | password  |
      | qazaqab@any.pink | 123123123 |

  Scenario: Find item
    Given I Open Onliner Main page
    When I search <item>
    Then I should see list of <item>

    Examples: 
      | item      |
      | iPhone 15 |

  Scenario: Add iPhone 15 to the cart using API
    When I send a POST request to <url> add iPhone 15 to the cart
    Then The response status code should be 200

    Examples: 
      | url                                                                                               |
      | https://catalog.onliner.by/sdapi/cart.api/detached-cart/505c1900-61f2-11ee-8882-d4ae52a2111a/add/ |
