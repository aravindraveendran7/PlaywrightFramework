import { Page } from "@playwright/test";

class TopMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly topMenu = (menuName) =>
    this.page.getByRole("link", { name: menuName });

  async selectTopMenuItem(menuItem: String) {
    await this.topMenu(menuItem).click();
  }
}

export default TopMenuComponent;
