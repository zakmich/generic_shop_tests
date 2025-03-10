import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { RegisterPage } from "../pages/register.page";
import { randomRegisterUserData } from "../factories/user.factory";

test("register with correct data @R-TC01", async ({ page }) => {
  // Arrange
  const registerUserData = randomRegisterUserData();
  const registerPage = new RegisterPage(page);
  const loginMessage = "Hello";

  //Act
  await registerPage.goto();
  await registerPage.emailInput.fill(registerUserData.emailAddress);
  await registerPage.regPasswordInput.fill(registerUserData.registerPassword);
  await page.keyboard.press("Enter");

  //  Assert
  const loginpage = new LoginPage(page);
  await expect(page.getByText(loginMessage)).toBeVisible
});
