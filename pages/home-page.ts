import { Page } from "@playwright/test";
import BasePage from "./base-page";

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    this.page.goto("/")
  }
}
