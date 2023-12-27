package POM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class POMLoginPage {
	
	 WebDriver driver;

	    public POMLoginPage(WebDriver driver) {

	        System.out.println("constructor called......");

	        this.driver = driver;

	    }
	    
	    By enterEmail = By.name("username");
	    By enterPass = By.name("password");
	    By loginButton = By.xpath("//button[contains(@class,'oxd-button oxd-button--medium')]");
	    By clickDroup = By.xpath("//p[@class='oxd-userdropdown-name']");
	    By clickLogout = By.xpath("//a[@href='/web/index.php/auth/logout']");
	    By forgotPassword = By.xpath("(//p[contains(@class,'oxd-text oxd-text--p')])[3]");
	    By forgotPasswordCencle = By.xpath("//button[contains(@class,'oxd-button oxd-button--large')]");
//	    clickLogoutButton
	    
	    public void enterEmail(String email) {
	        driver.findElement(enterEmail).clear();
	        driver.findElement(enterEmail).sendKeys(email);
	    }
	    
	    public void enterPassword(String password) {
	        driver.findElement(enterPass).clear();
	        driver.findElement(enterPass).sendKeys(password); 
	    }
	    
	    public void loginClick() {
	        driver.findElement(loginButton).click();
	       
	    }
	    
	    public void clickLogoutButton() {
	        driver.findElement(clickDroup).click();
	        driver.findElement(clickLogout).click();
	       
	    }
	    
	    
	    public void clickforgotPassword() {
	        driver.findElement(forgotPassword).click();
	      
	    }
	    
	    public void clickforgotPasswordCencle() {
	        driver.findElement(forgotPasswordCencle).click();
	      
	    }
	    
	    




}
