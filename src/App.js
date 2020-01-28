import React from 'react';
import './App.css';
import { QuizList } from './components/QuizList';

let TOKEN = null;
fetch('https://api.petfinder.com/v2/oauth2/token', {
  body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_SECRET}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  method: 'POST'
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    TOKEN = data.access_token;
  });

fetch('https://api.petfinder.com/v2/animals', {
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}).then(res => console.log(res));

function App() {
  return (
    <div>
      <QuizList />
    </div>
  );
}

export default App;
