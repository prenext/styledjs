# styled-tsx Components Library

This library is a collection of reusable UI components built using the popular styled-components package for React. Styled-components allows you to write actual CSS code to style your components, making it easy to create visually appealing and customizable user interfaces.

## Installation

To use this library in your React project, you need to install both the styled-components package and this library. You can do this by running the following command:

```bash
  npm install styled-components alidante/styled-tsx
```
## Usage

Once you have installed the required packages, you can start using the components in your React application. Import the desired component from the library and use it in your JSX code.

```jsx
import React from 'react';
import { Button, Card } from 'alidante/styled-tsx';

const App = () => {
  return (
    <Card>
      <h2>Welcome to My App</h2>
      <p>This is a sample application using the styled-components library.</p>
      <Button primary>Click me</Button>
    </Card>
  );
};
export default App;
```

## Available Components
1. Button
A customizable button component with various styling options.

Example:
```jsx
Copy code
import { Button } from '@your-organization/react-styled-components-library';

const MyComponent = () => {
  return <Button primary>Click me</Button>;
};
2. Card
A styled card component for organizing and presenting content.

Example:
jsx
Copy code
import { Card } from '@your-organization/react-styled-components-library';

const MyComponent = () => {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content.</p>
    </Card>
  );
};
```
![image](https://github.com/Alidante254/styled-tsx/assets/117439552/9ca069fe-a130-4292-baa1-515826a64069)

## Customization
All components in this library support customization through styled-components' prop-based styling. Refer to the documentation for each component to learn about available props and customization options.

## Contributing
Feel free to contribute to the development of this library. If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.

## License
This library is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.
