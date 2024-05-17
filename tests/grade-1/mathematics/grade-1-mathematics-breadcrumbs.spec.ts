import test, { expect } from "../../../fixtures/test-fixture";

test.describe("Grade One Mathematics", () => {
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
       */
      expect
        .soft(gradeOnePage.focusOnGradeOneHeading)
        .toHaveText("Focus on Grade 1");
      expect.soft(gradeOnePage.page).toHaveTitle("Grade 1 | TVO Learn");
      expect(gradeOnePage.page).toHaveURL("/pages/grade-1");
    }
  );
});
