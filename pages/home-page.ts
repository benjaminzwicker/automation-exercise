import { Page } from "@playwright/test";
import BasePage from "./base-page";

export default class HomePage extends BasePage {
  readonly urlPath: string;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/";
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }
}
