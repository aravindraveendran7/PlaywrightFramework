import { Page } from "@playwright/test";

class LeftMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly leftMenu = (menuName) =>
    this.page.getByRole("link", { name: menuName });

  async selectFromLeftMenu(menuItem: String) {
    await this.leftMenu(menuItem).click;
  }
}

export default LeftMenuComponent;
