const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static(`${__dirname}/client/build`));

app.post('/pets', async (req, res) => {
  try {
    const {
      sizesArray = ['small', 'medium', 'large'],
      agesArray = ['baby', 'young', 'adult', 'senior'],
      gendersArray = ['male', 'female'],
      zip = 20850,
      distance = 50
    } = req.body;
    const resToken = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    });
    const dataToken = await resToken.json();
    const TOKEN = dataToken.access_token;

    const resPets = await fetch(
      `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&location=${zip}&distance=${distance}&size=${sizesArray.join(
        ','
      )}&age=${agesArray.join(',')}&gender=${gendersArray.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
    const pets = await resPets.json();

    res.send(pets.animals);
  } catch (e) {
    console.log(e);
  }
});

app.get('/:id', async (req, res) => {
  const resToken = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  });
  const dataToken = await resToken.json();
  const TOKEN = dataToken.access_token;

  const resPet = await fetch(
    `https://api.petfinder.com/v2/animals/${req.params.id}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  const pet = await resPet.json();
  res.send(pet);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

const port = 3005;

app.listen(port, () => console.log(`Server running on port ${port}`));
