import { test as base } from "@playwright/test";
import GradeOnePage from "../pages/grade-1/grade-1-page";
import { HomePageFixture } from "./home-page-fixture";

export type GradeOnePageFixture = {
  gradeOnePage: GradeOnePage;
};

const test = base.extend<GradeOnePageFixture & HomePageFixture>({
  gradeOnePage: [
    async ({ page, homePage }, use) => {
      const gradeOnePage = new GradeOnePage(page);
      await homePage.navSection.clickGradeOneLearningResources();
      await use(gradeOnePage);
    },
    { scope: "test" },
  ],
});

export default test;
