import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test.describe("User login to Generic shop", () => {
  let loginpage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginpage = new LoginPage(page);

  });

  test("succesful login to shop with correct credentials", async ({ page }) => {
    //Arange
    const username = loginData.username;
    const userPassword = loginData.userPassword;
    const loginMessage = "fakeuser1";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.assert).toContainText([loginMessage]);
  });

  test("unsuccesful login to shop with inccorect username and correct password", async ({ page }) => {
    //Arange
    const username = loginData.incorrectUsername;
    const userPassword = loginData.userPassword;
    const userNameErrorMessage = "Error: A user could not be found with this email address.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.userNameError).toContainText([userNameErrorMessage]);
  });

  
  test("unsuccesful login to shop with correct username and inccorect password", async ({ page }) => {
    //Arange
    const username = loginData.username;
    const userPassword = loginData.inncorectPassword;
    const passwordErrorMessage = "Error: The password you entered for the username fakeuser1@gmail.com is incorrect.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.passwordError).toContainText([passwordErrorMessage]);
  });

  

  // (unsuccesful login to shop with empty username field);
  // (unsuccesful login to shop with empty password field);
  // (unsuccesful login to shop with both fields empty);
});
