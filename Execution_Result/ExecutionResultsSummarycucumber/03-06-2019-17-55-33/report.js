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
formatter.scenarioOutline({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "complete-scenario-for-user-administration.;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
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
        "\u003cname\u003e",
        "\u003csalary\u003e",
        "\u003cage\u003e"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am sending the \"POST\" request.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I am validating object \"name\" for String value \u003cname\u003e.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am validating object \"age\" for String value \u003cage\u003e.",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am saving the value from the object \"id\" as variable.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I use resource \"/update/\" and with above variable and body parameters as",
  "rows": [
    {
      "cells": [
        "\u003cname\u003e",
        "\u003csalary\u003e",
        "\u003cage1\u003e"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am sending the \"Put\" request.",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am validating object \"employee_age\" for String value \u003cage1\u003e.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I go to \"/delete/\" with above variable and post \"delete\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am validating object \"success.text\" for String value \"successfully! deleted Records\".",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "complete-scenario-for-user-administration.;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "name",
        "salary",
        "age",
        "age1"
      ],
      "line": 24,
      "id": "complete-scenario-for-user-administration.;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "Dubey7",
        "70000",
        "28",
        "31"
      ],
      "line": 25,
      "id": "complete-scenario-for-user-administration.;title-of-your-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Title of your scenario",
  "description": "",
  "id": "complete-scenario-for-user-administration.;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
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
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "Dubey7",
        "70000",
        "28"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am sending the \"POST\" request.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I am validating object \"name\" for String value Dubey7.",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am validating object \"age\" for String value 28.",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am saving the value from the object \"id\" as variable.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I use resource \"/update/\" and with above variable and body parameters as",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "rows": [
    {
      "cells": [
        "Dubey7",
        "70000",
        "31"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am sending the \"Put\" request.",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am validating object \"employee_age\" for String value 31.",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I go to \"/delete/\" with above variable and post \"delete\" Request",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am validating object \"success.text\" for String value \"successfully! deleted Records\".",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I go to \"/employee/\" with above variable and post \"GET\" Request",
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
  "duration": 80398850,
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
  "duration": 2750334,
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
  "duration": 2043273637,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/update/",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_use_resource_and_with_above_variable_and_body_parameters_as(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Put",
      "offset": 18
    }
  ],
  "location": "StepDefinition.i_am_sending_the_request(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "/delete/",
      "offset": 9
    },
    {
      "val": "delete",
      "offset": 49
    }
  ],
  "location": "StepDefinition.i_go_to_with_above_variable_and_post_Request(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success.text",
      "offset": 24
    },
    {
      "val": "successfully! deleted Records",
      "offset": 56
    }
  ],
  "location": "StepDefinition.i_am_validating_object_for_String_value(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
});