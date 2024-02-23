import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class RegisterPage extends BasePage {
  url = "my-account";
  emailInput = this.page.getByLabel("Email address *", { exact: true });
  regPasswordInput = this.page.locator("#reg_password");
  pressEnter = this.page.keyboard.press("Enter");
}
