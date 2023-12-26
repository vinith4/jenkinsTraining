package testRunner;
//This is my test runner class

import org.testng.annotations.DataProvider;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//import org.junit.runner.RunWith;
//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;





//@RunWith(Cucumber.class)


@CucumberOptions(
//					features=".\\Genpact_Features\\Login1.feature",
					features=".\\Genpact_Features\\Customers1.feature",
//					features=".\\Genpact_Features\\Customers2.feature",
					glue="stepDefinitions",
					monochrome=false,
					tags= "@sanity",
					dryRun = false,
					//tags= "@regression",
					//tags= {"@positive"},
					plugin= {"pretty",
							"html:target/genpact_CucumberReport.html",
							"json:target/genpact_CucumberReport.json",
							"junit:target/genpact_CucumberReport.xml"
							
							
							}
				)


public class TestRunner extends AbstractTestNGCucumberTests{
	
	@DataProvider(parallel = true)
	public Object[][] scenarios() {
		
		return super.scenarios();
	}

}
