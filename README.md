# MUI Customisable Password Component

A Customisable Material-UI component that provides real-time password strength evaluation and password rule compliance visualisation.

## Features

- Real-time password strength updates
- Password strength bar visualisation
- Interactive checkboxes for rule compliance
- Customisable styling and rule definitions
- TypeScript support for enhanced type safety

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

## Installation

Install the library using your package manager of choice:

```bash
npm i mui-customisable-password-component
```
or 
```bash
yarn add mui-customisable-password-component
```
## Usage
Once installed, import the MUICustomisablePasswordComponent in your React component:

```bash
  import React from 'react';
  import MUICustomisablePasswordComponent from 'react-mui-password-strength';
  
  function App() {
    return (
      <div>
        <h1>Password Strength Indicator</h1>
        <MUICustomisablePasswordComponent />
      </div>
    );
  }

export default App;
```
Customise the component's behavior and appearance by passing props as needed.
For a full list of available props and their descriptions, refer to the [Props](#props) section in the README.

## Props

| Prop                     | Type                 | Description                                                        |
|--------------------------|----------------------|--------------------------------------------------------------------|
| `rules`                  | `object`             | Custom password rules.                                            |
| `value`                  | `string`             | The password string to evaluate.                                  |
| `minLength`              | `number`             | Minimum password length.                                          |
| `maxLength`              | `number`             | Maximum password length.                                          |
| `onChange`               | `function`           | Callback function triggered on value change.                      |
| `specialCharactersRegex` | `RegExp`             | Regular expression for special characters.                        |
| `passwordStrengthBar`    | `boolean`            | Enable/disable password strength bar.                            |
| `successColourProgressBar`| `string`             | Color for successful progress bar.                                |
| `warningColourProgressBar`| `string`             | Color for warning progress bar.                                    |

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

