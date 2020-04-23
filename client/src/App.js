import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetContextProvider from './components/context/PetContext';
import QuizList from './components/quiz/QuizList';
import Results from './components/results/Results';
import PetDetails from './components/results/PetDetails';
import Home from './components/results/Home';

/* CONVERT TO ASYNC/AWAIT */
// Sample URL: https://api.petfinder.com/v2/animals?location=20850&type=dog&breed=pug

// fetch('https://api.petfinder.com/v2/oauth2/token', {
//   body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_SECRET}`,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   method: 'POST'
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     return data.access_token;
//   })
//   .then(token => {
//   fetch('https://api.petfinder.com/v2/animals/47201296', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// });

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
