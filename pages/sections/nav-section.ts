import { Locator, Page } from "@playwright/test";

export default class NavSection {
  readonly page: Page;

  /* Navbar buttons / links */
  readonly tvoLogoLink: Locator;
  readonly learningResourcesDropdown: Locator;

  /* Learning resources dropdown */
  readonly learningResourcesDropdownRoot: Locator;
  readonly gradeOneLearningResources: Locator;

  /* Search */
  readonly searchButton: Locator;
  readonly searchTextInput: Locator;
  readonly closeSearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tvoLogoLink = page.getByAltText("TVO Learn");
    this.learningResourcesDropdown = page.getByRole("button", {
      name: "Learning Resources (K-12)",
    });

    /**
     * This root is necessary to avoid collisions with the breadcrumbs.
     * Ideally I would add a test id for this element since ids are
     * ocassionaly changed by developers.
     */
    this.learningResourcesDropdownRoot = page.locator(
      "#SiteNavLabel-learning-resources-k-12"
    );
    /**
     * Grade 1 link needs to be located using exact text since there
     * could be a collision with Grade 10
     */
    this.gradeOneLearningResources = this.learningResourcesDropdownRoot
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 1", exact: true });

    this.searchButton = page.getByRole("button", { name: "Search" });
    this.searchTextInput = page.getByPlaceholder("Search");
    this.closeSearchButton = page.getByRole("button", { name: "Close search" });
  }

  async clickGradeOneLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeOneLearningResources.click();
  }
}
