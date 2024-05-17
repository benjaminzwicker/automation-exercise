import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";

export default class GradeOneMathematicsPage extends BasePage {
  readonly urlPath: string;
  readonly gradeOneBreadcrumbLink: Locator;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/pages/grade-1-mathematics";
    this.gradeOneBreadcrumbLink = page.getByRole("link", {
      name: "Grade 1",
      exact: true,
    });
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }

  async clickGradeOneBreadCrumbLink() {
    await this.gradeOneBreadcrumbLink.click();
  }
}
