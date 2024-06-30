import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";

const App = () => {
  const prefernce = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", prefernce);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <h1>Example of Dark theme</h1>
      <div className="box">
        <h2>This is box</h2>
      </div>
    </div>
  );
};

export default App;
