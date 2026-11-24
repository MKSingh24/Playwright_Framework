# Playwright Test Framework

A Playwright Test automation framework for web UI and API testing, built with TypeScript. It includes reusable page objects, custom fixtures, CSV/Excel/JSON test data utilities, environment-specific configuration, and multiple test reporters.

Author
Mukesh Kumar

GitHub Repository
https://github.com/MKSingh24/Playwright_Framework

## Features

- Playwright Test with the Chromium project
- Page Object Model
- Custom page and API fixtures
- Environment-specific configuration through `.env` files
- CSV, Excel, and JSON test data support
- Faker data utilities
- Parallel test execution
- Trace, screenshot, and video capture
- HTML, Allure, and Reporting Labs reports
- GitHub Actions and Jenkins CI/CD examples

## Project Structure

```text
.
|-- .github/workflows/       # GitHub Actions workflows
|-- config/                  # Environment configuration files
|-- src/
|   |-- api/                 # API helpers
|   |-- fixtures/            # Custom Playwright fixtures
|   |-- pages/               # Page Object classes
|   |-- testData/            # CSV, Excel, and JSON test data
|   `-- utils/               # Data and utility helpers
|-- tests/                   # Playwright UI and API test specifications
|-- playwright.config.ts     # Playwright configuration
|-- reporting-labs.config.ts # Reporting Labs configuration
|-- Jenkinsfile              # Jenkins CI/CD pipeline
`-- package.json
```

## Prerequisites

- Node.js 20 or later
- npm
- Chromium (installed through Playwright)

## Installation

Clone the repository and install dependencies:

```powershell
npm ci
npx playwright install chromium
```

If browser dependencies are missing on a fresh Linux or CI machine, install them with:

```powershell
npx playwright install --with-deps chromium
```

## Environment Configuration

The active environment is selected with the `ENV` variable. `qa` is the default.

```powershell
$env:ENV="qa"
```

Supported environment files are under `config/`:

- `config/.env.dev`
- `config/.env.qa`
- `config/.env.stage`
- `config/.env.prod`

Create or update the required file with environment-specific values such as:

```dotenv
BASE_URL=https://example.com/
USER_NAME=test-user
PASSWORD=test-password
API_BASE_URL=https://api.example.com
API_TOKEN=your-api-token
```

Do not commit real credentials or API tokens. Keep sensitive values in CI secrets or a local environment file.

## Running Tests

Run the complete Chromium suite:

```powershell
npx playwright test --project=chromium
```

Run tests for a specific environment:

```powershell
$env:ENV="stage"
npx playwright test --project=chromium
```

Run a test file:

```powershell
npx playwright test tests/LoginPage.spec.ts --project=chromium
```

Run tests by grep tag:

```powershell
npx playwright test --grep "@sanity" --project=chromium
```

Run tests in headed mode:

```powershell
npx playwright test --project=chromium --headed
```

Open Playwright Test UI:

```powershell
npx playwright test --ui
```

## Test Reports

The framework generates these reports after execution:

- Playwright HTML: `reports/html-report/index.html`
- Allure results: `allure-results/`
- Reporting Labs: `reporting-labs/index.html`
- Playwright traces: stored for first retry failures
- Screenshots and videos: retained for failures

Open the HTML report:

```powershell
npx playwright show-report reports/html-report
```

Generate and open an Allure report:

```powershell
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## CI/CD

The GitHub Actions workflows run the Chromium suite for the `qa` environment by default and can manually select `dev`, `qa`, `stage`, or `uat`.

The Jenkins pipeline demonstrates build, deployment simulation, regression, sanity, and report publishing stages.
