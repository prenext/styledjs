import React from "react";
import Theme from "./styled/theme/Theme.styled";
import ElevatedButton from "./styled/button/ElevatedButton.styled";
import OutlinedButton from "./styled/button/OutlinedButton.styled";
import PrimaryButton from "./styled/button/PrimaryButton.styled";
import SecondaryButton from "./styled/button/SecondaryButton.styled";

const App = () => {
  return (
    <Theme
      themeType="dark"
      child={
        <>
          <h1>Elevated Button</h1>
          <ElevatedButton>Elevated Button</ElevatedButton>
          <h1>Outlined Button</h1>
          <OutlinedButton>Outlined Button</OutlinedButton>
          <h1>Primary Button</h1>
          <PrimaryButton>Primary Button</PrimaryButton>
          <h1>Secondary Button</h1>
          <SecondaryButton> Secondary Button</SecondaryButton>
        </>
      }
    />
  );
};

export default App;
