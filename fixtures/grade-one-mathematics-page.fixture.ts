import { test as base } from "@playwright/test";
import { GradeOnePageFixture } from "./grade-one-page-fixture";
import GradeOneMathematicsPage from "../pages/grade-1/grade-1-mathematics-page";

export type GradeOneMathematicsPageFixture = {
  gradeOneMathematicsPage: GradeOneMathematicsPage;
};

const test = base.extend<GradeOneMathematicsPageFixture & GradeOnePageFixture>({
  gradeOneMathematicsPage: [
    async ({ page, gradeOnePage }, use) => {
      const gradeOneMathematicsPage = new GradeOneMathematicsPage(page);
      gradeOnePage.clickMathematicsLink();
      await use(gradeOneMathematicsPage);
    },
    { scope: "test" },
  ],
});

export default test;
