const https = require('https');

https.get('https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_of_Tokopedia.svg', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
