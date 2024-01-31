import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";

test.describe("User login to Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("succesful login to shop", async ({ page }) => {
    //Arange
    const username = loginData.username
    const userPassword = loginData.userPassword

    //Act
    await page.getByRole("link", { name: " Account" }).click();
    await page.getByLabel("Username or email address *").fill(username);
    await page.locator("#password").fill(userPassword);
    await page.getByRole("button", { name: "Login" }).click();

    // Assert
    // await expect(page.locator('.page-title.margin-top')).toContainText(['My account']);
    await expect(page.locator('xpath=//h1[@class="page-title margin-top"]')).toContainText(['My account']);
  });
});
