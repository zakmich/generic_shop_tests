# Test Automation training with Playwright

This project presents several examples of using the `Playwright` framework in test automation with `Typescript`. The tested site is demo of a shop, current tests covers login page.

## Test Cases
- You can find test cases in project main catalog or by direct [Click](https://github.com/zakmich/generic_shop_tests/blob/main/TEST-CASE.md)

## Links

- Tested site: https://skleptest.pl/

## Patterns used in the project:

- AAA (Arrange Act Assert),
- POM (Page Object Model)

## Prepare

### Local recommended tools:

- VS Code
- Node.js (version >18)

### Installation and setup

setup Playwright with:

```
npx playwright install --with-deps chromium
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

Run test by tag:
```
npx playwright test --grep "@TC01"
```

View report:

```
npx playwright show-report
```
