import { Page } from "@playwright/test";
import BasePage from "../base-page";

export default class GradeOneMathematicsPage extends BasePage {
  readonly urlPath: string;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/pages/grade-1-mathematics";
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }
}
