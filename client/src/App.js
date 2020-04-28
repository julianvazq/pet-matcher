import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetContextProvider from './components/context/PetContext';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div>
        <PetContextProvider>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </PetContextProvider>
      </div>
    </Router>
  );
}

export default App;
