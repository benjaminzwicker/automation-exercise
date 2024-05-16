import { mergeTests } from "@playwright/test";
import homePageFixture from "./home-page-fixture";
import gradeOnePageFixture from "./grade-one-page-fixture";
import gradeOneMathematicsPageFixture from "./grade-one-mathematics-page.fixture";

const test = mergeTests(
  homePageFixture,
  gradeOnePageFixture,
  gradeOneMathematicsPageFixture
);

export default test;
export { expect } from "@playwright/test";
