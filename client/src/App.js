import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetContextProvider from './components/context/PetContext';
import PetDetails from './components/home/PetDetails';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div>
        <PetContextProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/results' exact component={Results} /> */}
            <Route path='/results/:id' component={PetDetails} />
          </Switch>
        </PetContextProvider>
      </div>
    </Router>
  );
}

export default App;
