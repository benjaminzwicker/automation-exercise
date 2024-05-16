import { test as base } from "@playwright/test";
import HomePage from "../pages/home-page";

export type HomePageFixture = {
  homePage: HomePage;
};

const test = base.extend<HomePageFixture>({
  homePage: [
    async ({ page }, use) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await use(homePage);
    },
    { scope: "test" },
  ],
});

export default test;
