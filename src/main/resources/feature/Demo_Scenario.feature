@tag 
Feature: Demo For API Cucumber. 

@Demo 
Scenario: Creating a User 
	Given I am requesting "BaseDummyRestAPI". 
	When I use resource "/create" and with body parameters as 
		| name   | salary | age |
		| Dubey8 |  70000 |  28 |
	Then I am sending the "POST" request. 
	And I am validating object "data.name" for String value "Dubey8". 
	And I am validating object "data.age" for String value "28". 
	And I am validating object "data.salary" for String value "70000". 
	And I am saving the value from the object "data.id" as variable. 
	
@Demo 	
Scenario: Verifying a created user 
	Given I am requesting "BaseDummyRestAPI". 
	When I go to "/employee/" with above variable and post "GET" Request 
	And I am validating object "name" for String value "Dubey8". 
	And I am validating object "age" for String value "28". 
