$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber/Demo.API/src/main/resources/feature/Complete_Scenario.feature");
formatter.feature({
  "line": 2,
  "name": "Complete Scenario for User Administration.",
  "description": "",
  "id": "complete-scenario-for-user-administration.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "complete-scenario-for-user-administration.;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am requesting \"BaseDummyRestAPI\".",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I use resource \"/create\" and with body parameters as",
  "rows": [
    {
      "cells": [
        "name",
        "salary",
        "age"
      ],
      "line": 8
    },
    {
      "cells": [
        "Morai",
        "70000",
        "28"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am sending the \"POST\" request.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseDummyRestAPI",
      "offset": 17
    }
  ],
  "location": "StepDefinition.i_am_requesting(String)"
});
formatter.result({
  "duration": 98101059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/create",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_use_resource_and_with_body_parameters_as(String,DataTable)"
});
formatter.result({
  "duration": 15890264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 18
    }
  ],
  "location": "StepDefinition.i_am_sending_the_request(String)"
});
formatter.result({
  "duration": 4175631826,
  "error_message": "java.lang.AssertionError: expected [POST] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:179)\r\n\tat main.StepDefinition.i_am_sending_the_request(StepDefinition.java:107)\r\n\tat ✽.Then I am sending the \"POST\" request.(D:/Cucumber/Demo.API/src/main/resources/feature/Complete_Scenario.feature:10)\r\n",
  "status": "failed"
});
});