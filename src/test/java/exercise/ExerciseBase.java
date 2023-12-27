package exercise;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import POM.POMLoginPage;



public class ExerciseBase {
	
	WebDriver driver;
	POMLoginPage lp;
	
	  @BeforeTest
	    public void setup() throws Exception {

	        System.out.println("launching app on chrome browser -----using TestNG");
	        driver = new ChromeDriver();
	        driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
	        
	        
	        lp= new POMLoginPage(driver);
	        
	    }

	    @AfterTest
	    public void teardown() throws Exception {

	        Thread.sleep(7000);
	        driver.close();
	        System.out.println("closing an app");

	    }
	    
	

}
