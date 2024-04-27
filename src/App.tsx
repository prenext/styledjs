import React from "react";
import { Theme } from "./index";

const App = () => {
  return (
    <Theme
      themeType="dark"
      primaryColor="green"
      secondaryColor="lightGreen"
      child={<></>}
    />
  );
};

export default App;
