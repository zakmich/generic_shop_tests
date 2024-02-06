# Test Automation training with Playwright

This project presents several examples of using the `Playwright` framework in test automation with `Typescript`. The tested site is demo of a shop.

## Links

- Tested site: https://skleptest.pl/

## Patterns used in the project:

- AAA (Arrange Act Assert),
- POM (Page Object Model)

## Prepare

### Local recommended tools:

- VS Code
- Node.js (version >16)

### Installation and setup

setup Playwright with:

```
npx playwright install --with-deps chromium
```

## Use/Commands

Run all tests:

```
npx playwright test
```

Run tests without browser GUI:

```
npx playwright test
```

Run tests with browser GUI:

```
npx playwright test --headed
```

View report:

```
npx playwright show-report
```
