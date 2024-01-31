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

    //Act
    const loginpage = new LoginPage(page);
    await loginpage.accountLink.click();
    await loginpage.username.fill(username);
    await loginpage.password.fill(userPassword);
    await loginpage.loginButton.click();

    // Assert
    await expect(loginpage.assert).toContainText(["My account"]);
  });
});
