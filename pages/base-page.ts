import { Page } from "@playwright/test";
import NavSection from "./sections/nav-section";

export default class BasePage {
  readonly page: Page;
  readonly navSection: NavSection;

  constructor(page: Page) {
    this.page = page;
    this.navSection = new NavSection(page);
  }
}
