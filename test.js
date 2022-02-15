const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://giphy.p.rapidapi.com/v1/gifs/search',
  params: { api_key: 'undefined', q: 'funny cat' },
  headers: {
    'x-rapidapi-host': 'giphy.p.rapidapi.com',
    'x-rapidapi-key': '621508502bmsh536ac72be9c2d4ep1bec8djsnbe86accf2207',
  },
};

axios.request(options).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
