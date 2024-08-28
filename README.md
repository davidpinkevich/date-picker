# React Date Picker

This simple little **React** library provides the ability to use two components of your choice with a few optional properties.

## Installation

Your project must include **React**, **React-DOM** and **styled-components** already installed.

The package can be installed via **nmp**:

```js
npm install @davidpinkevich95/date-picker
```

Or via **yarn**:

```js
yarn add @davidpinkevich95/date-picker
```

## Usage

You can import one of the two components provided and use them anywhere in your project.

```js
import { DatePicker, DateRangeCalendar } from "@davidpinkevich95/date-picker";

function App() {
  return (
    <div className="App">
      <DatePicker />
    </div>
  );
}

export default App;
```

**DatePicker** is a component with the ability to add a task list for any day.
**DateRangeCalendar** is a component with the ability to select a date range

## Configuration

You can use components without specifying additional parameters or pass one of these props to any of the components.

```js
import { DatePicker } from "@davidpinkevich95/date-picker";

function App() {
  return (
    <div className="App">
      <DatePicker
        min={2020}
        max={2030}
        typeStart="Mo"
        colorHoliday="apple"
        withHolidays
      />
    </div>
  );
}

export default App;
```

Types of configurable parameters:

- **min** (number) - calendar start year
- **max** (number) - year of the end of the calendar
- **typeStart** ("Mo" | "Su") - week display from Monday or Sunday
- **withHolidays** (boolean) - whether to display holidays
- **colorHoliday** ("red" | "lightRed" | "apple") - holiday color
