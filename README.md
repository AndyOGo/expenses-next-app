# Expenses Next.js App

This is a [Next.js](https://nextjs.org/) project to track expenses.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Project Structure](#project-structure)
- [Concepts](#concepts)
  - [State](#state)
  - [Headless Components](#headless-components)
  - [Client-side Validation](#client-side-validation)
  - [API](#api)
  - [Logging](#logging)
- [Styleguides](#styleguides)
  - [JavaScript, SCSS](#javascript-scss)
  - [Git Commit Messages](#git-commit-messages)
  - [Editors](#editors)
- [CI/CD](#cicd)
  - [Git Hooks](#git-hooks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

First, install all dependencies:

```bash
npm install
# or
yarn
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Project Structure

```sh
.
├── README.md
├── assets                        # Assets - icons, ...
│   ├── [...]
├── components                    # Global Reusable Components
│   ├── bootstrap [...]           # Bootstrap React Components and related SCSS imports
│   ├── expenses [...]            # Expenses Form and Table Listing
│   ├── form [...]                # Form Fields wrapped for react-final-form
│   └── table [...]               # Headless Table
├── container                     # Unstated container
│   ├── CurrenciesContainer.js    # Currencies fetched from openexchangerates.org
│   └── ExpensesContainer.js      # Expenses fetched from local API
├── next.config.js                # Next Config
├── node_modules
│   ├── [...]
├── package.json
├── package-lock.lock
├── pages                         # All public routes
│   ├── api/v1/expenses           # Expenses RESTful API
│   ├── _app.js                   # Custom App
│   └── index.js                  # Index Route
├── utils                         # Utilities
│   ├── fetch.js                  # Fetch with retry and network and server error handling
└── [...]                         # Various rc files
```

## Concepts

### State

Global state is managed with [`unstated`](https://github.com/jamiebuilds/unstated).

### Headless Components

Interface Logic of [`react-final-form`](https://final-form.org/react) and [`react-table`](https://github.com/tannerlinsley/react-table) are used to drive the UI state.

[`react-bootstrap`](https://react-bootstrap.netlify.com/) and [`bootstrap`](https://getbootstrap.com/) are used to visually display the UI.

### Client-side Validation

Built-in [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#Using_built-in_form_validation) is implemented by utilizing [`react-final-form-html5-validation`](https://github.com/final-form/react-final-form-html5-validation).

### API

RESTful APIs are consumed with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), network and `5xx` errors may be mitigated with [`fetch-retry`](https://github.com/jonbern/fetch-retry).

### Logging

For client-side logging the [web `console` API](https://developer.mozilla.org/en-US/docs/Web/API/Console) is used.

## Styleguides

### JavaScript, SCSS

JavaScript and SCSS is linted and autoformatted by [`prettier`](https://prettier.io/).

### Git Commit Messages

This project utilizes [`commitlint`](https://commitlint.js.org/) to enforce [**Conventional Commits**](https://www.conventionalcommits.org/).

### Editors

Basic configuration for various editors is provided by an [`editorconfig`](https://editorconfig.org/) file.

## CI/CD

### Git Hooks

We use [`husky`](https://github.com/typicode/husky#readme) and [`lintstaged`](https://github.com/okonet/lint-staged#readme) to enforce those styleguide rules for each commit.
