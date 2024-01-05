// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('ex3 login example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("The Internet");


    //validate username inputbox visible on page
    await expect(page.locator(`//input[@name='username']`)).toBeVisible();

    //enter value into username inputbox
    await page.fill(`//input[@name='username']`, 'Admin');

    //enter value into password inputbox
    await page.fill(`//input[@name='password']`, 'admin123');


    //click on login button
    await page.click(`//button[contains(@class,'oxd-button oxd-button--medium')]`)


//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");



//     //validate label
//     await expect(page.locator('div#flash')).toContainText('You logged into a secure area!')



    
//     //click on logout button
//     await page.click('a[href="/logout"]')


//     //validate username inputbox visible on page
//     await expect(page.locator('#username')).toBeVisible();


//     //validate label
//     await expect(page.locator('div#flash')).toContainText('You logged out of the secure area!')



});

