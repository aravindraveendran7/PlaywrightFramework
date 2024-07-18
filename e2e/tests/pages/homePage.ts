import { Page } from "@playwright/test";
import LeftMenuComponent from "./components/leftMenuComponent";
import TopMenuComponent from "./components/topMenuComponent";

class HomePage {
  //homepage consists of leftmenu component and topmenu component

  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;

  constructor(private readonly page: Page) {
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  async getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  async getTopMenuComponent() {
    return this.topMenuComponent;
  }
}

export default HomePage;
