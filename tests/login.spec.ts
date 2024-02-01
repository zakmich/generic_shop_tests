import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test.describe("User login to Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("succesful login to shop", async ({ page }) => {
    //Arange
    const username = loginData.username;
    const userPassword = loginData.userPassword;
    const loginMessage = "fakeuser1";

    //Act
    const loginpage = new LoginPage(page);
    await loginpage.accountLink.click();
    await loginpage.username.fill(username);
    await loginpage.password.fill(userPassword);
    await loginpage.loginButton.click();

    // Assert
    await expect(loginpage.assert).toContainText([loginMessage]);
  });

  test("unsuccesful login to shop with inccorect username", async ({ page }) => {
    //Arange
    const username = loginData.incorrectUsername;
    const userPassword = loginData.userPassword;
    const passwordErrorMessage = "Error: A user could not be found with this email address.";

    //Act
    const loginpage = new LoginPage(page);
    await loginpage.accountLink.click();
    await loginpage.username.fill(username);
    await loginpage.password.fill(userPassword);
    await loginpage.loginButton.click();

    // Assert
    await expect(loginpage.passwordError).toContainText([passwordErrorMessage]);
  });

  
  // (unsuccesful login to shop with inccorect password);
  // (unsuccesful login to shop with empty username field);
  // (unsuccesful login to shop with empty password field);
  // (unsuccesful login to shop with both fields empty);
});
