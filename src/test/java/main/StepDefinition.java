package main;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.testng.Assert;

import com.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import net.minidev.json.JSONObject;

public class StepDefinition {

	private String BaseURI;
	private String URI;
	private JSONObject jsonobj;
	private JsonPath jsonPathEvaluator;
	private Response response;
	private String parameter;
	
	@Given("^I am requesting \"([^\"]*)\"\\.$")
	public void i_am_requesting(String arg1) {

		File file = new File(System.getProperty("user.dir") + "\\src\\test\\java\\main\\DataFile.properties");
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();

		// load properties file
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
		BaseURI = prop.getProperty(arg1);
		
		Reporter.addStepLog(" Base URI is " +BaseURI);
		System.out.println(BaseURI);
	}
	
	@When("^I use resource \"([^\"]*)\" and with body parameters as$")
	public void i_use_resource_and_with_body_parameters_as(String arg1, DataTable arg2)  {
		try {
		URI = BaseURI + arg1;
		Reporter.addStepLog("This is URI :"+ URI);
		jsonobj = new JSONObject();
		List<List<String>> data = arg2.raw();
		for (int i = 0; i < data.get(0).size(); ++i) {
			jsonobj.put(data.get(0).get(i).toString(), data.get(1).get(i).toString());
		}
		System.out.println(jsonobj);
		Reporter.addStepLog("This is Request Payload :"+ jsonobj);
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	
	@Then("^I am sending the \"([^\"]*)\" request\\.$")
	public void i_am_sending_the_request(String arg1) {
		try {
		System.out.println(URI);
		RequestSpecification httpRequest = RestAssured.given();
		httpRequest.body(jsonobj.toJSONString());
		httpRequest.contentType(ContentType.JSON);
		
		String P = "Post";
		String P1 = "Put";
		String D = "Delete";
		String G = "Get";
				
		if (P.equalsIgnoreCase(arg1)) {
		 response = httpRequest.post(URI);
		}
		else if (P1.equalsIgnoreCase(arg1))		
		{
		response = httpRequest.put(URI);
		}
		else if (D.equalsIgnoreCase(arg1))		
		{
		response = httpRequest.delete(URI);
		}
		else if (G.equalsIgnoreCase(arg1))		
		{
		response = httpRequest.get(URI);
		}
		
		Reporter.addStepLog("The Response Code is :"+ response.getStatusCode());
		Reporter.addStepLog("The Response Time in Miliseconds :"+ response.getTime());
		System.out.println(response.getStatusCode());
		System.out.println(response.asString());
		jsonPathEvaluator = response.jsonPath();
		}catch(Exception e){
			e.printStackTrace();
		}
		}
	
	@Then("^I am validating object \"([^\"]*)\" for String value \"([^\"]*)\"\\.$")
	public void i_am_validating_object_for_String_value(String arg1, String arg2) {
	 
		String value = jsonPathEvaluator.get(arg1);		
		System.out.println(value);
		Reporter.addStepLog("Value frm JSON is :"+ value);
		Assert.assertEquals(arg2, value);
	}
	
	@Then("^I am saving the value from the object \"([^\"]*)\" as variable\\.$")
	public void i_am_saving_the_value_from_the_object_as_variable(String arg1) {
		parameter = jsonPathEvaluator.get(arg1);		
		System.out.println(parameter);
		
	}
	
	
	@When("^I go to \"([^\"]*)\" with above variable and post \"([^\"]*)\" Request$")
	public void i_go_to_with_above_variable_and_post_Request(String arg1, String arg2) throws Throwable {
		try {
			URI = BaseURI + arg1+parameter;
			Reporter.addStepLog("This is URI :"+ URI);
			System.out.println(URI);
			RequestSpecification httpRequest = RestAssured.given();
			httpRequest.body(jsonobj.toJSONString());
			httpRequest.contentType(ContentType.JSON);
			
			String P = "Post";
			String G = "Get";
			String P1 = "Put";
			String D = "Delete";
					
			if (P.equalsIgnoreCase(arg2)) {
			 response = httpRequest.post(URI);
			}
			else if (P1.equalsIgnoreCase(arg2))		
			{
			response = httpRequest.put(URI);
			}
			else if (D.equalsIgnoreCase(arg2))		
			{
			response = httpRequest.delete(URI);
			}
			else if (G.equalsIgnoreCase(arg2))		
			{
			response = httpRequest.get(URI);
			}
			
			Reporter.addStepLog("The Response Code is :"+ response.getStatusCode());
			Reporter.addStepLog("The Response Time in Miliseconds :"+ response.getTime());
			System.out.println(response.getStatusCode());
			System.out.println(response.asString());
			jsonPathEvaluator = response.jsonPath();
			}catch(Exception e){
				e.printStackTrace();
			}
		
			}
	
	@When("^I use resource \"([^\"]*)\" and with above variable and body parameters as$")
	public void i_use_resource_and_with_above_variable_and_body_parameters_as(String arg1, DataTable arg2) throws Throwable {
		try {
			URI = BaseURI + arg1+parameter;
			Reporter.addStepLog("This is URI :"+ URI);
			jsonobj = new JSONObject();
			List<List<String>> data = arg2.raw();
			for (int i = 0; i < data.get(0).size(); ++i) {
				jsonobj.put(data.get(0).get(i).toString(), data.get(1).get(i).toString());
			}
			System.out.println(jsonobj);
			Reporter.addStepLog("This is Request Payload :"+ jsonobj);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
		
	
		}
