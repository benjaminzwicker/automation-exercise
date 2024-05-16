import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";

export default class GradeOnePage extends BasePage {
  readonly urlPath: string;
  readonly mathematicsLink: Locator;
  readonly languageLink: Locator;
  readonly scienceAndTechnologyLink: Locator;
  readonly socialStudiesLink: Locator;
  readonly theArtsLink: Locator;
  readonly healthAndPhysicalEducationLink: Locator;

  constructor(page: Page) {
    super(page);
    this.urlPath = "/pages/grade-1";
    this.mathematicsLink = page.getByRole("link", {
      name: "Mathematics",
    });
    this.languageLink = page.getByRole("link", {
      name: "Language",
    });
    this.scienceAndTechnologyLink = page.getByRole("link", {
      name: "Science & Technology",
    });
    this.socialStudiesLink = page.getByRole("link", {
      name: "Social Studies",
    });
    this.theArtsLink = page.getByRole("link", {
      name: "The Arts",
    });
    this.healthAndPhysicalEducationLink = page.getByRole("link", {
      name: "Health & Physical Education",
    });
  }

  async goto() {
    await this.page.goto(this.urlPath);
  }

  async clickMathematicsLink() {
    await this.mathematicsLink.click();
  }

  async clickLanguageLink() {
    await this.languageLink.click();
  }

  async clickScienceAndTechnologyLink() {
    await this.scienceAndTechnologyLink.click();
  }

  async clickSocialStudiesLink() {
    await this.socialStudiesLink.click();
  }

  async clickTheArtsLink() {
    await this.theArtsLink.click();
  }

  async clickHealthAndPhysicalEducationLink() {
    await this.healthAndPhysicalEducationLink.click();
  }
}
