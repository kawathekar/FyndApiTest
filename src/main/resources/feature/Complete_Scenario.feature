@tag
Feature: Complete Scenario for User Administration.

  @tag1
  Scenario: Title of your scenario
    Given I am requesting "BaseDummyRestAPI".
    When I use resource "/create" and with body parameters as
      | name   | salary | age |
      | Dubey8 |  70000 |  28 |
    Then I am sending the "POST" request.
    And I am validating object "name" for String value "Dubey8".
    And I am validating object "age" for String value "28".
    And I am saving the value from the object "id" as variable.
    When I go to "/employee/" with above variable and post "GET" Request
    When I use resource "/update/" and with above variable and body parameters as
      | name   | salary | age |
      | Dubey7 |  70000 |  30 |
    Then I am sending the "Put" request.
    When I go to "/employee/" with above variable and post "GET" Request
    And I am validating object "employee_age" for String value "30".
    When I go to "/delete/" with above variable and post "delete" Request
    And I am validating object "success.text" for String value "successfully! deleted Records".
    When I go to "/employee/" with above variable and post "GET" Request

    
