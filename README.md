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
import { Button }, StyledApp from 'alidante/styled-tsx';

const App = () => {
  return (
    <StyledApp>
      <Button primary text="click me" onClick={(){}} />
    </StyledApp>
  );
};
export default App;
```

## Available Components

Visit the [DOCUMENTATION](DOCS.md) to learn about how to use each of these:

1. **Button:** Interactive element for user actions.
2. **Input:** Accepts user input, like text or numbers.
3. **Checkbox:** Allows users to make binary choices.
4. **Radio Button:** Allows users to select one option from a set.
5. **Dropdown:** Presents a list of options for selection.
6. **Toggle Switch:** A switch for toggling between two states.
7. **Slider:** Allows users to select a value from a range.
8. **Alert:** Displays important messages or notifications.
9. **Modal:** A popup or overlay for additional content.
10. **Card:** Container for organized content with a consistent structure.
11. **Accordion:** Expands and collapses content sections.
12. **Navbar:** Navigation bar for website or app.
13. **Breadcrumb:** Navigation aid indicating the current page's location.
14. **Tabs:** Organizes content into tabbed sections.
15. **Pagination:** Breaks content into multiple pages.
16. **Tooltip:** Provides additional information on hover.
17. **Avatar:** Represents a user or entity with an image.
18. **Progress Bar:** Displays the progress of a task.
19. **Spinner/Loader:** Indicates loading or processing.
20. **Date Picker:** Allows users to pick a date.
21. **Time Picker:** Allows users to pick a time.
22. **Calendar:** Displays dates and allows interaction.
23. **Map:** Embeds an interactive map in the UI.
24. **Video Player:** Embeds video content with controls.
25. **Audio Player:** Embeds audio content with controls.
26. **Rating/Review:** Allows users to rate or review items.
27. **Tag:** Represents labels or categories.
28. **Badge:** Displays additional information or status.
29. **Menu:** Presents a list of actions or options.
30. **Stepper:** Guides users through a multi-step process.
31. **Form:** Collects and submits user input.
32. **Table:** Displays structured data in rows and columns.
33. **Slider Carousel:** Displays a rotating set of items.
34. **Notification Bell:** Indicates new notifications.
35. **Search Bar:** Allows users to search for content.
36. **Progress Indicator:** Indicates ongoing operations.
37. **Chat Box:** Facilitates real-time communication.
38. **Social Share:** Allows users to share content on social media.

## Customization

All components in this library support customization through styled-components' prop-based styling. Refer to the documentation for each component to learn about available props and customization options.

## Contributing

Feel free to contribute to the development of this library. If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.

## License

This library is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.
