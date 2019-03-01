const axios = require('axios');
const bcrypt = require('bcryptjs');

const tokenService = require('../auth/tokenService.js');
const Users = require('../api/routes-model.js');
const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  if(!req.body.username || !req.body.password){
    res.status(400).json({ error: 'Please input a Username and a Password' });
  } else {
    try {
      let newUser = req.body; 
      const hash = bcrypt.hashSync(newUser.password, 12);

      newUser.password = hash;

      const user = await Users.addUser(newUser);
      const token = tokenService.generateToken(user);

      res.status(201).json({ user, token });

    } catch (error) {
        console.log(error);
        if(error.errno === 19) {
          res.status(400).json({ error: 'A User with that username already exists' });
      } else {
          res.status(500).json({ error: 'Unable to register the User' });
      }
    }
  }
}

async function login(req, res) {
  // implement user login
  let { username, password } = req.body;

  try {
    const user = await Users.getUserBy({ username });
    
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = tokenService.generateToken(user);
      res.status(200).json({ message: `Welcome ${username}!!`, token });
    } else {
      res.status(401).json({ error: 'Invalid Username or Password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to login the User' });
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
