import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";

export default class GradeOnePage extends BasePage {
  readonly urlPath: string;
  readonly focusOnGradeOneHeading: Locator;
  readonly mathematicsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/pages/grade-1";
    this.focusOnGradeOneHeading = page.getByRole("heading", {
      name: "Focus on Grade 1",
    });
    this.mathematicsLink = page.getByRole("link", {
      name: "Mathematics Explore Details",
    });
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }

  async clickMathematicsLink() {
    await this.mathematicsLink.click();
  }
}
