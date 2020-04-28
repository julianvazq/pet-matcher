const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static(`${__dirname}/client/build`));

app.post('/pets/:page', async (req, res) => {
  try {
    const { genders, sizes, ages, distance, zipCode } = req.body;
    const { page } = req.params;

    const resToken = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });
    const dataToken = await resToken.json();
    const TOKEN = dataToken.access_token;

    const resPets = await fetch(
      `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&location=${zipCode}&distance=${distance}&limit=${28}&page=${page}&size=${sizes.join(
        ','
      )}&age=${ages.join(',')}&gender=${genders.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const pets = await resPets.json();

    res.send(pets || { status: '404', ok: 'false' });
  } catch (e) {
    console.log(e);
  }
});

app.get('/:id', async (req, res) => {
  const resToken = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });
  const dataToken = await resToken.json();
  const TOKEN = dataToken.access_token;

  const resPet = await fetch(
    `https://api.petfinder.com/v2/animals/${req.params.id}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
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
