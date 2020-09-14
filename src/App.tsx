import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};
interface IConfig {
  starsColor: string;
}
export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const initialConfigurationState = { starsColor: "red" };
  const [getConfig, setConfig] = useState(initialConfigurationState);

  return (
    <Router>
      <ConfigurationContext.Provider value={[getConfig, setConfig]}>
        <MealsContext.Provider value={[globalState, setGlobalState]}>
          <div className="container">
            <NavBarApp />
            <AppRouter />
          </div>
        </MealsContext.Provider>
      </ConfigurationContext.Provider>
    </Router>
  );
}

export default App;
