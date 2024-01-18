import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  Theme,
  ElevatedButton,
  OutlinedButton,
  Heading,
  Text,
  Title,
  Highlight,
  Marked,
  Paragraph,
  Subtitle,
} from "./index";

const App = () => {
  return (
    <Theme
      themeType="dark"
      primaryColor="green"
      secondaryColor="lightGreen"
      defaultRadius={15}
      child={
        <>
          <Text>A Text Component</Text>

          <Heading level={1} align="center">
            <ElevatedButton>Elevated Button</ElevatedButton>
            <OutlinedButton>Outlined Button</OutlinedButton>
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
          </Heading>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
          <Title>This is a Title</Title>
          <Subtitle size={1.2}>Subtitle with custom size</Subtitle>
          <Paragraph font="cursive">A paragraph with cursive font</Paragraph>
          <Highlight>Highlighted Text</Highlight>
          <Marked>Marked Text</Marked>
        </>
      }
    />
  );
};

export default App;
