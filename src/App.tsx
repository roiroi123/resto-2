import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarApp from './components/ui-components/header/';
import AppRouter from './components/containers/appRouter';
import { BrowserRouter as Router } from "react-router-dom"

const initialState = { meals: [], orders: [] }
export const MealsContext: any = React.createContext(null)

function App() {
    const [globalState, setGlobalState] = useState(initialState)
    return (
        <Router>
            <MealsContext.Provider value={[globalState, setGlobalState]}>
                <div className="container">
                    <NavBarApp />
                    <AppRouter />
                </div>
            </MealsContext.Provider>
        </Router>


    );
}

export default App;
