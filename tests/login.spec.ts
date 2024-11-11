import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test.describe("User login to Generic shop", () => {
  let loginpage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginpage = new LoginPage(page);
  });

  test("successful login to shop with correct credentials @L-TC01", async ({ page }) => {
    // Arrange
    const username = loginData.username;
    const userPassword = loginData.userPassword;
    const loginMessage = "fakeuser1";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.assert).toContainText(loginMessage);
  });

  test("unsuccessful login to shop with incorrect username and correct password @L-TC02", async ({ page }) => {
    // Arrange
    const username = loginData.incorrectUsername;
    const userPassword = loginData.userPassword;
    const userNameErrorMessage = "Unknown email address. Check again or try your username.";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.userNameError).toContainText(userNameErrorMessage);
  });

  test("unsuccessful login to shop with correct username and incorrect password @L-TC03", async ({ page }) => {
    // Arrange
    const username = loginData.username;
    const userPassword = loginData.incorrectPassword;
    const passwordErrorMessage = "Error: The password you entered for the username fakeuser1@gmail.com is incorrect.";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.passwordError).toContainText(passwordErrorMessage);
  });

  test("unsuccessful login to shop with empty username field and correct password @L-TC04", async ({ page }) => {
    // Arrange
    const username = "";
    const userPassword = loginData.userPassword;
    const emptyUsernameErrorMessage = "Error: Username is required.";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.userNameError).toContainText(emptyUsernameErrorMessage);
  });

  test("unsuccessful login to shop with correct username and empty password field @L-TC05", async ({ page }) => {
    // Arrange
    const username = loginData.username;
    const userPassword = "";
    const emptyPasswordMessage = "Error: The password field is empty.";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.passwordError).toContainText(emptyPasswordMessage);
  });

  test("unsuccessful login to shop with both fields empty @L-TC06", async ({ page }) => {
    // Arrange
    const username = "";
    const userPassword = "";
    const loginFieldsMessage = "Error: Username is required.";

    // Act
    await loginpage.login(username, userPassword);

    // Assert
    await expect(loginpage.userNameError).toContainText(loginFieldsMessage);
  });
});

"https://skleptest.pl/"