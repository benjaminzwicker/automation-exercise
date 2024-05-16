import { Locator, Page } from "@playwright/test";

export default class NavSection {
  readonly page: Page;

  /* Navbar buttons / links */
  readonly tvoLogoLink: Locator;
  readonly learningResourcesDropdown: Locator;
  readonly collaborationsDropdown: Locator;
  readonly forTeachersLink: Locator;
  readonly francaisLink: Locator;

  /* Learning resources dropdown */
  readonly kindergartenLearningResources: Locator;
  readonly gradeOneLearningResources: Locator;
  readonly gradeTwoLearningResources: Locator;
  readonly gradeThreeLearningResources: Locator;
  readonly gradeFourLearningResources: Locator;
  readonly gradeFiveLearningResources: Locator;
  readonly gradeSixLearningResources: Locator;
  readonly gradeSevenLearningResources: Locator;
  readonly gradeEightLearningResources: Locator;
  readonly gradeNineLearningResources: Locator;
  readonly gradeTenLearningResources: Locator;
  readonly gradeElevenLearningResources: Locator;
  readonly gradeTwelveLearningResources: Locator;
  readonly allGradesLearningResources: Locator;

  /* Collaborations dropdown */
  readonly nbaCollaboration: Locator;

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
    this.collaborationsDropdown = page.getByRole("button", {
      name: "Collaborations",
    });
    this.forTeachersLink = page.getByRole("link", { name: "For Teachers" });
    this.francaisLink = page.getByRole("link", { name: "Français" });

    this.kindergartenLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Kindergarten" });
    this.gradeOneLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 1" });
    this.gradeTwoLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 2" });
    this.gradeThreeLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 3" });
    this.gradeFourLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 4" });
    this.gradeFiveLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 5" });
    this.gradeSixLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 6" });
    this.gradeSevenLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 7" });
    this.gradeEightLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 8" });
    this.gradeNineLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 9" });
    this.gradeTenLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 10" });
    this.gradeElevenLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 11" });
    this.gradeTwelveLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "Grade 12" });
    this.allGradesLearningResources = page
      .getByRole("listitem")
      .getByRole("link", { name: "All Grades" });

    this.nbaCollaboration = page
      .getByRole("listitem")
      .getByRole("link", { name: "NBA" });

    this.searchButton = page.getByRole("button", { name: "Search" });
    this.searchTextInput = page.getByPlaceholder("Search");
    this.closeSearchButton = page.getByRole("button", { name: "Close search" });
  }

  async clickGradeOneLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeOneLearningResources.click();
  }

  async clickGradeTwoLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeTwoLearningResources.click();
  }

  async clickGradeThreeLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeThreeLearningResources.click();
  }

  async clickGradeFourLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeFourLearningResources.click();
  }

  async clickGradeFiveLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeFiveLearningResources.click();
  }

  async clickGradeSixLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeSixLearningResources.click();
  }

  async clickGradeSevenLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeSevenLearningResources.click();
  }

  async clickGradeEightLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeEightLearningResources.click();
  }

  async clickGradeNineLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeNineLearningResources.click();
  }

  async clickGradeTenLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeTenLearningResources.click();
  }

  async clickGradeElevenLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeElevenLearningResources.click();
  }

  async clickGradeTwelveLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.gradeTwelveLearningResources.click();
  }

  async clickAllGradesLearningResources() {
    await this.learningResourcesDropdown.click();
    await this.allGradesLearningResources.click();
  }
}
