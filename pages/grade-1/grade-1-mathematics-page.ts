import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";

export default class GradeOneMathematicsPage extends BasePage {
  readonly urlPath: string;
  readonly gradeOneBreadcrumbLink: Locator;
  readonly resourcesForLearningLink: Locator;
  readonly resourcesForLearningHeader: Locator;
  readonly resourcesForLearningParagraph: Locator;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/pages/grade-1-mathematics";
    this.gradeOneBreadcrumbLink = page.getByRole("link", {
      name: "Grade 1",
      exact: true,
    });
    this.resourcesForLearningLink = page.getByRole("link", {
      name: "Resources for Learning",
      exact: true,
    });
    this.resourcesForLearningHeader = page.getByRole("heading", {
      name: "Resources for Learning",
    });
    this.resourcesForLearningParagraph = page.getByRole("paragraph", {
      name: "Chosen by TVO educators, these resources support the curriculum outlined above.",
    });
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }

  async clickGradeOneBreadCrumbLink() {
    await this.gradeOneBreadcrumbLink.click();
  }

  async clickResourcesForLearningLink() {
    await this.resourcesForLearningLink.click();
  }
}
