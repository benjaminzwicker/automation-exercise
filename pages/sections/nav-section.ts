import { Locator, Page } from "@playwright/test";

export default class NavSection {
  readonly page: Page;
  readonly tvoLogoLink: Locator;
  readonly learningResourcesDropdown: Locator;
  readonly collaborationsDropdown: Locator;
  readonly forTeachersLink: Locator;
  readonly francaisLink: Locator;

  constructor(page: Page) {
    this.page = page;
  }
}
