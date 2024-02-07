# Styled-tsx Framework Documentation

Welcome to the documentation for Styled-tsx Framework. This guide will help you understand the principles behind the framework and provide detailed information on how to use its components.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Design Principles](#design-principles)
4. [Components](#components)
   1. [Buttons](#buttons)
   2. [AppBar](#appbar)
   3. [Drawer](#drawer)
   4. [Page](#page)
   5. [Text](#text)

## Introduction

Styled-tsx Framework is a modern, lightweight UI framework designed to make building user interfaces easy and efficient. It provides a set of customizable components that follow a consistent design language.

## Getting Started

To get started with Styled-tsx Framework, follow these steps:

1. Install the framework using npm or yarn:

   ```bash
   npm install styled-tsx
   # or
   yarn add styled-tsx
   ```

2. Import the components you need in your project:

```jsx
import { Button, AppBar, Drawer, Page, Text } from "styled-tsx";
```

3. Use the components in your application according to the provided documentation.

## Design Principles

Styled-tsx Framework is built on the following design principles:

- > Consistency: All components follow a consistent design language for a cohesive look and feel.
- > Customizability: Components are highly customizable to fit different styles and themes.
- > Accessibility: The framework prioritizes accessibility to ensure a positive user experience for all.

## Components

1. Buttons

Buttons in Styled-tsx Framework are designed to be versatile and easily customizable. They support various styles and sizes.

```jsx
import { Button } from "styled-tsx";

const MyComponent = () => {
  return (
    <Button onClick={() => console.log("Button clicked")}>Click me</Button>
  );
};
```

2. AppBar
   The AppBar component provides a top navigation bar for your application. It can contain branding, navigation links, and additional actions.

```jsx
import { AppBar } from "styled-tsx";

const MyLayout = () => {
  return (
    <div>
      <AppBar title="My App" />
      {/* Other content goes here */}
    </div>
  );
};
```

3. Drawer
   The Drawer component creates a sliding menu that can be used for navigation or additional options.

```jsx
import { Drawer } from "styled-tsx";

const MyLayout = () => {
  return (
    <div>
      <Drawer>{/* Drawer content goes here */}</Drawer>
      {/* Other content goes here */}
    </div>
  );
};
```

4. Page
   The Page component represents a page or section of your application. It provides a consistent layout for content.

```jsx
import { Page } from "styled-tsx";

const MyPage = () => {
  return <Page>{/* Page content goes here */}</Page>;
};
```

5. Text
   The Text component is used for displaying text with consistent styling.

```jsx
import { Text } from "styled-tsx";

const MyComponent = () => {
  return (
    <Text size="large" color="primary">
      Hello, world!
    </Text>
  );
};
```
