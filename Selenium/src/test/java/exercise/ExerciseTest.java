package exercise;

import org.testng.Assert;
import org.testng.annotations.Test;


public class ExerciseTest extends ExerciseBase {
	 @Test
	    public void verifyLogin() {
	        
	              
	        lp.enterEmail("Admin");
	        lp.enterPassword("admin123");
	      
	        
	        lp.loginClick();
	        
	        System.out.println("title : "+driver.getTitle());
	        
	        Assert.assertEquals(driver.getCurrentUrl(), "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
	        
	        
	       
              lp.clickLogoutButton();
              lp.clickforgotPassword();
              Assert.assertEquals(driver.getCurrentUrl(), "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
              
              lp.clickforgotPasswordCencle();
	        
	        
	        
	    }

}
