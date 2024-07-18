import { Page } from "@playwright/test";

class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly userNameTextBox = this.page.getByPlaceholder("username");
  private readonly passwordTextBox = this.page.getByPlaceholder("password");
  private readonly logginButton = this.page.getByRole("button", {
    name: "Login",
  });

  async login(username: string, password: string) {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.logginButton.click();
  }
}

export default LoginPage;
