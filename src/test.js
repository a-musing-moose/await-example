const fetch = require('isomorphic-fetch');

if (process.argv.length != 3) {
    console.error("You must specify a appid");
    process.exit(-1);
}
const appid = process.argv[2];

async function doGet() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=' + appid);
    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.log(e)
  }
}

doGet();
