import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}
    
    accountLink = this.page.getByRole("link", { name: " Account" })
    username = this.page.getByLabel("Username or email address *");
    password = this.page.locator("#password");
    loginButton = this.page.getByRole("button", { name: "Login" });
    assert = this.page.locator('xpath=//p[contains(text(),"Hello")]');

    passwordError = this.page.locator('xpath=//div[@class="site-content"]//li[1]');
}