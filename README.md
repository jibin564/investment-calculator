# Investment Calculator

A modern, responsive investment calculator built with Angular 18. Enter your investment details and instantly see a year-by-year breakdown of your investment growth, interest earned, and total capital invested.

## Features

- **User Input Form**: Collects initial investment, annual investment, expected return, and duration.
- **Dynamic Results Table**: Displays yearly investment value, interest, total interest, and invested capital.
- **Responsive UI**: Clean, mobile-friendly design using standalone Angular components.
- **Type Safety**: Strongly typed models for input and results.

Technologies Used
Angular 18 (standalone components)
TypeScript
CSS
---

## Component Overview

### [`HeaderComponent`](src/app/header/header.component.ts)

- **Purpose**: Displays the app logo and title.
- **Files**:  
  - [header.component.ts](src/app/header/header.component.ts)  
  - [header.component.html](src/app/header/header.component.html)  
  - [header.component.css](src/app/header/header.component.css)

### [`UserInputComponent`](src/app/user-input/user-input.component.ts)

- **Purpose**: Collects user input for investment calculation.
- **Logic**:  
  - Uses Angular forms to bind input fields.
  - Emits a `calculate` event with the entered values.
- **Files**:  
  - [user-input.component.ts](src/app/user-input/user-input.component.ts)  
  - [user-input.component.html](src/app/user-input/user-input.component.html)  
  - [user-input.component.css](src/app/user-input/user-input.component.css)

### [`InvestmentResultsComponent`](src/app/investment-results/investment-results.component.ts)

- **Purpose**: Displays the calculated investment results in a table.
- **Logic**:  
  - Receives an array of yearly results via `@Input()`.
  - Shows a message if no results are available.
- **Files**:  
  - [investment-results.component.ts](src/app/investment-results/investment-results.component.ts)  
  - [investment-results.component.html](src/app/investment-results/investment-results.component.html)  
  - [investment-results.component.css](src/app/investment-results/investment-results.component.css)  
  - [result.model.ts](src/app/investment-results/result.model.ts)

### [`AppComponent`](src/app/app.component.ts)

- **Purpose**: Root component that ties everything together.
- **Logic**:  
  - Handles the calculation logic when the user submits the form.
  - Passes results to the results component.
- **Files**:  
  - [app.component.ts](src/app/app.component.ts)  
  - [app.component.html](src/app/app.component.html)

---

## Models

- [`investmentinput`](src/app/investment-input.model.ts): Defines the structure for user input.
- [`result`](src/app/investment-results/result.model.ts): Defines the structure for each year's result.

---

## How It Works

1. **User enters investment details** in the form.
2. **On submit**, [`UserInputComponent`](src/app/user-input/user-input.component.ts) emits the data.
3. [`AppComponent`](src/app/app.component.ts) receives the data, calculates yearly results, and updates the view.
4. [`InvestmentResultsComponent`](src/app/investment-results/investment-results.component.ts) displays the results in a table.

---
