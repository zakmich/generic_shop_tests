import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test.describe("User login to Generic shop", () => {
  let loginpage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginpage = new LoginPage(page);

  });

  test("successful login to shop with correct credentials", async ({ page }) => {
    //Arrange
    const username = loginData.username;
    const userPassword = loginData.userPassword;
    const loginMessage = "fakeuser1";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.assert).toContainText([loginMessage]);
  });

  test("unsuccessful login to shop with incorrect username and correct password", async ({ page }) => {
    //Arrange
    const username = loginData.incorrectUsername;
    const userPassword = loginData.userPassword;
    const userNameErrorMessage = "Error: A user could not be found with this email address.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.userNameError).toContainText([userNameErrorMessage]);
  });

  
  test("unsuccessful login to shop with correct username and incorrect password", async ({ page }) => {
    //Arrange
    const username = loginData.username;
    const userPassword = loginData.incorrectPassword;
    const passwordErrorMessage = "Error: The password you entered for the username fakeuser1@gmail.com is incorrect.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.passwordError).toContainText([passwordErrorMessage]);
  });

  test("unsuccessful login to shop with empty username field and correct password", async ({ page }) => {
    //Arrange
    const username = ""
    const userPassword = loginData.incorrectPassword;
    const emptyUsernameErrorMessage = "Error: Username is required.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.emptyUserNameField).toContainText([emptyUsernameErrorMessage]);
  });

  test("unsuccessful login to shop with correct username and empty password field", async ({ page }) => {
    //Arrange
    const username = loginData.username
    const userPassword = ""
    const emptyPasswordMessage = "Error: The password field is empty.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.emptyUserNameField).toContainText([emptyPasswordMessage]);
  });

  test("unsuccessful login to shop with both fields empty", async ({ page }) => {
    //Arrange
    const username = ""
    const userPassword = ""
    const loginFieldsMessage = "Error: Username is required.";

    //Act
    await loginpage.login(username, userPassword)

    // Assert
    await expect(loginpage.emptyUserNameField).toContainText([loginFieldsMessage]);
  });

});
