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
        "Dubey1",
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
formatter.step({
  "line": 11,
  "name": "I am validating object \"name\" for String value \"Dubey1\".",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am validating object \"age\" for String value \"28\".",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am saving the value from the object \"id\" as variable.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I use resource \"/update/\" and with above variable and body parameters as",
  "rows": [
    {
      "cells": [
        "name",
        "salary",
        "age"
      ],
      "line": 16
    },
    {
      "cells": [
        "Dubey",
        "70000",
        "28"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
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
  "duration": 114901452,
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
  "duration": 16444930,
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
  "duration": 2157721825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 24
    },
    {
      "val": "Dubey1",
      "offset": 48
    }
  ],
  "location": "StepDefinition.i_am_validating_object_for_String_value(String,String)"
});
formatter.result({
  "duration": 326655271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age",
      "offset": 24
    },
    {
      "val": "28",
      "offset": 47
    }
  ],
  "location": "StepDefinition.i_am_validating_object_for_String_value(String,String)"
});
formatter.result({
  "duration": 9243415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_am_saving_the_value_from_the_object_as_variable(String)"
});
formatter.result({
  "duration": 8073131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/employee/",
      "offset": 9
    },
    {
      "val": "GET",
      "offset": 51
    }
  ],
  "location": "StepDefinition.i_go_to_with_above_variable_and_post_Request(String,String)"
});
formatter.result({
  "duration": 2536320089,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});