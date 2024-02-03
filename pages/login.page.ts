import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}
    
    
    accountLink = this.page.getByRole("link", { name: " Account" })
    username = this.page.getByLabel("Username or email address *");
    password = this.page.locator("#password");
    loginButton = this.page.getByRole("button", { name: "Login" });
    
    assert = this.page.locator('//p[contains(text(),"Hello")]');
    userNameError = this.page.locator('//div[@class="site-content"]//li[1]');
    passwordError = this.page.locator('//li[contains(text(),"The password")]')
    emptyUserNameField = this.page.locator('//div[@class="site-content"]//li[1]')
    
    async login(username: string, userPassword: string): Promise<void>{
        await this.accountLink.click();
        await this.username.fill(username);
        await this.password.fill(userPassword);
        await this.loginButton.click();
    }
}