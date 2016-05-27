const fetch = require('isomorphic-fetch');

async function doGet() {
  try {
    const response = await fetch('https://www.google.com');
    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.log(e)
  }
}

doGet();
