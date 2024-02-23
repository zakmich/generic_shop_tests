import { Page } from "@playwright/test";

  export class RegisterPage{
    constructor(private page: Page) {}

    // await page.getByRole('link', { name: ' Account' }).click();

    emailInput = this.page.getByLabel('Email address *', { exact: true });
    regPasswordInput = this.page.locator('#reg_password');
    pressEnter = this.page.keyboard.press('Enter');

  }
