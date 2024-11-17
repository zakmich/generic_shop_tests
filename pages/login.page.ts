import { Locator, Page } from "@playwright/test";

export class LoginPage {
    accountLink: Locator;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    
    assert: Locator;
    userNameError: Locator;
    passwordError: Locator;
    emptyUserNameField: Locator;
    
    constructor(private page: Page) {
        this.accountLink = this.page.getByRole("link", { name: " Account" })
        this.username = this.page.getByLabel("Username or email address *");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.getByRole("button", { name: "Log in" });
    
        this.assert = this.page.getByText('fakeuser1');
        this.userNameError = this.page.locator('//li[contains(text(),"Unknown email address. Check again or try your use")]');
        this.passwordError = this.page.locator('//*[@id="post-8"]/div[2]/div[1]/ul/li/a')
        this.emptyUserNameField = this.page.locator('//div[@class="site-content"]//li[1]')
    }
        async login(username: string, userPassword: string): Promise<void>{
            await this.accountLink.click();
            await this.username.fill(username);
            await this.password.fill(userPassword);
            await this.loginButton.click();
    }
}