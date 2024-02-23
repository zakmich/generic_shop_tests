import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { faker } from '@faker-js/faker/locale/en';

test('register with correct data', async ({ page }) => {
  // Arrange
  const loginpage = new LoginPage(page); 
  await page.goto("/");
  await page.getByRole('link', { name: ' Account' }).click();
  const emailAddress = faker.internet.email({firstName: "Mike"});
  const registerPassword = faker.internet.password({length: 15});
  const loginMessage = "Mike";

  //Act
  await page.getByLabel('Email address *', { exact: true }).fill(emailAddress);
  await page.locator('#reg_password').fill(registerPassword);
  await page.keyboard.press('Enter');

  //  Assert
   await expect(loginpage.assert).toContainText([loginMessage]);
});
