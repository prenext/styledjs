import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  Theme,
  ElevatedButton,
  OutlinedButton,
} from "./index";

const App = () => {
  return (
    <Theme
      themeType="light"
      primaryColor="purple"
      secondaryColor="pink"
      defaultRadius={15}
      child={
        <>
          <h1>Elevated Button</h1>
          <ElevatedButton>Elevated Button</ElevatedButton>
          <h1>Outlined Button</h1>
          <OutlinedButton>Outlined Button</OutlinedButton>
          <h1>Primary Button</h1>
          <PrimaryButton>Primary Button</PrimaryButton>
          <h1>Secondary Button</h1>
          <SecondaryButton>Secondary Button</SecondaryButton>
        </>
      }
    />
  );
};

export default App;
