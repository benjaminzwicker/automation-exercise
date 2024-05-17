# Post Migration Automation Challenge

# Table of contents
- [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Running from GitHub Actions](#running-from-github-actions)
    - [Running Locally](#running-locally)
  - [Design Decisions](#design-decisions)
    - [Fixtures](#fixtures)
    - [Test Organization](#test-organization)

# Usage
## Running from GitHub Actions
GitHub actions have been created to manually run tests, and automatically run tests on every pull and PR. Manual runs take the base url as input, which is set to an environment variable that is read by playwright.config.ts.

## Running Locally
* Clone: `git clone https://github.com/benjaminzwicker/tvo-automation-exercise.git`
* Navigate to project: `cd '.\tvo-automation-exercise\`
* Create a `.env` file based on `.env.example` and populate the desired configuration settings such as `BASE_URL=https://tvolearn.com/`
  * Alternatively run `set BASE_URL=https://tvolearn.com/` in your Terminal
* Install packages from npm: `npm i`
* Run tests: `npx playwright test`
  * Add the `--headed` tag to watch the tests running
  * Use `--grep '@tag'` to run specific tests

# Design Decisions
## Fixtures
Fixtures were used to create test environments. This design pattern is useful to create reusable setup for every page or fixture that is needed for the tests.

## Test Organization
Since the requirements were only to wrote 10 tests, only functional tests for the Grade One Mathematics page were written.

1. Test breadcrumbs navigate as expected
2. Test `On this page:` options auto scroll to the relevant heading
3. Test `Learning Activities` tabs open the expected topic
4. Test clicking on one of the `Resources for Learning` navigates to the expected page
5. Test `Vocabulary` list loads the expected vocabulary
6. Test choosing a different subject navigates to the expected page
7. Test `Go to top` button in the bottom left navigates to top of page
8. Test clicking on one of the learning activities under one of the `Learning Activities` tabs navigates to the expected page
9. Test clicking on `View Curriculum PDF` navigates to the correct learning curriculum PDF
10. Test `helpful tips` navigates to the expected page