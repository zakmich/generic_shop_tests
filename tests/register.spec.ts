import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { faker } from '@faker-js/faker/locale/en';
import { RegisterPage } from '../pages/register.page';

test('register with correct data', async ({ page }) => {
  // Arrange
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  const emailAddress = faker.internet.email({firstName: "Mike"});
  const registerPassword = faker.internet.password({length: 15});
  const loginMessage = "Mike";
  
  //Act
  await registerPage.emailInput.fill(emailAddress);
  await registerPage.regPasswordInput.fill(registerPassword);
  await page.keyboard.press('Enter');
  
  //  Assert
  const loginpage = new LoginPage(page); 
  await expect(loginpage.assert).toContainText([loginMessage]);
});
