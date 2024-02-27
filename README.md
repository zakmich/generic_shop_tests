# Test Automation training with Playwright

This project presents several examples of using the `Playwright` framework in test automation with `Typescript`. The tested site is demo of a shop, current tests covers login and registration page, for more details about tests proceed to `tests` catalog.

## Test Cases

- You can find test cases by direct [Click](https://github.com/zakmich/generic_shop_tests/tree/main/tests/test-case)

## Links

- Tested site: https://skleptest.pl/

## Patterns and library's used in the project:

- AAA (Arrange Act Assert),
- POM (Page Object Model)
- @faker-js/faker

## Prepare

### Local recommended tools:

- VS Code
- Node.js (version >18)

### Installation and setup

setup Playwright with:

```
npx playwright install --with-deps chromium
```

Faker - generator of fake data for register test:

```
npm install --save-dev @faker-js/faker
```

## Use/Commands

Run tests without browser GUI:

```
npx playwright test
```

Run tests with browser GUI:

```
npx playwright test --headed
```

Run test in UI mode

```
npx playwright test --ui
```

Run test by tag:

```
npx playwright test --grep "@TC01"
```

View report:

```
npx playwright show-report
```
