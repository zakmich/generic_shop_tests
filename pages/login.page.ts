import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page
    private accountLink;
    private username;
    private password;
    private loginButton;
    assert;
    userNameError;
    passwordError;
    emptyUserNameField;

    constructor(page: Page) {
        this.accountLink = this.page.getByRole("link", { name: " Account" });
        this.username = this.page.getByLabel("Username or email address *");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.getByRole("button", { name: "Log in" });
        this.assert = this.page.locator('//p[contains(text(),"Hello")]');
        this.userNameError = this.page.locator('//div[@class="site-content"]//li[1]');
        this.passwordError = this.page.locator('//li[contains(text(),"The password")]');
        this.emptyUserNameField = this.page.locator('//div[@class="site-content"]//li[1]');
    }

    async login(username: string, userPassword: string): Promise<void> {
        await this.accountLink.click();
        await this.username.fill(username);
        await this.password.fill(userPassword);
        await this.loginButton.click();
    }
}
