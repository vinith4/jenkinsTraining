// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';



test.describe('Vinith Portfolio', ()=>{


  test('frame example ----- single frame', async ({page})=>{

    await page.goto('https://dev-vinithkumar.vercel.app/');

    await expect(page).toHaveTitle("Vinithkumar_S")

    await page.waitForTimeout(2000)
    await page.locator(`//span[text()='About Me']`).click();

    await expect(page).toHaveURL("https://dev-vinithkumar.vercel.app/about")

    await page.waitForTimeout(2000)
    await page.locator(`//span[text()='Contact']`).click();

    await expect(page).toHaveURL("https://dev-vinithkumar.vercel.app/contact")

    await page.getByPlaceholder('name@gmail.com').click();
  await page.getByPlaceholder('name@gmail.com').fill('vinith@gmail.com');
  await page.getByPlaceholder('Your name').click();
  await page.getByPlaceholder('Your name').fill('vinith');
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('1234567890');
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').fill('Demo Playwright');
  await page.waitForTimeout(5000)
  await page.getByRole('button', { name: 'Send Message' }).click();
  

    
  })

  


})