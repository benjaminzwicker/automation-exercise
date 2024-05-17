import test, { expect } from "../../../fixtures/test-fixture";

test.describe(
  "Grade One Mathematics",
  { tag: ["@grade-1", "@mathematics"] },
  () => {
    test(
      "Clicking on 'Grade One' from the grade one mathematics breadcrumbs should navigate back to the Grade One page",
      { tag: "@functional" },
      async ({ gradeOneMathematicsPage, gradeOnePage }) => {
        await gradeOneMathematicsPage.clickGradeOneBreadCrumbLink();
        /**
         * This expect may seem trivial since gradeOnePage.focusOnGradeOneHeading
         * is located by that exact text, but that could change in the future so
         * it is best to not use .toBeVisible() under that assumption.
         *
         * Additionally, I prefer to have the actual expected text in the test
         * file so that is easily readable what is being asserted.
         * 
         * We also use expect.soft() here since we are at the end of the test
         * and no further functionality depends on these assertions passing.
         * I would prefer to know which of these failed even after one has
         * already failed.
         */
        expect
          .soft(gradeOnePage.focusOnGradeOneHeading)
          .toHaveText("Focus on Grade 1");
        expect.soft(gradeOnePage.page).toHaveTitle("Grade 1 | TVO Learn");
        expect(gradeOnePage.page).toHaveURL("/pages/grade-1");
      }
    );

    test(
      "Clicking on 'Resources for Learning' from the 'On this page' section should navigate to the 'Resources for Learning' heading",
      { tag: "@functional" },
      async ({ gradeOneMathematicsPage }) => {
        await gradeOneMathematicsPage.clickResourcesForLearningLink();
        /**
         * Here we specify that we want the header to be in the viewport to verify
         * that the page scrolled to the header as expected
         */
        expect
          .soft(gradeOneMathematicsPage.resourcesForLearningHeader)
          .toBeInViewport();
        expect(
          gradeOneMathematicsPage.resourcesForLearningHeader
        ).toBeInViewport();
      }
    );
  }
);
