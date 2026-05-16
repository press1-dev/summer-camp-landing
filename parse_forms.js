const https = require('https');

const urls = [
  'https://docs.google.com/forms/d/e/1FAIpQLScGLBGuN64N2x_3eVPxQ4L_3-MZI_edUGpq3vCbfEhR6nUdwA/viewform',
  'https://docs.google.com/forms/d/e/1FAIpQLSey0duDy0zpEdW-O34iSrauR-gvOSJ0Msy7e3MjmspJeCWuJg/viewform',
  'https://docs.google.com/forms/d/e/1FAIpQLSco6MF2fDKIDkrRaLttExpv78KZSREP7zF_PBr7265Gf9VZgQ/viewform'
];

async function fetchForm(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    console.log(`\n--- Form: ${url} ---`);
    const html = await fetchForm(url);
    const match = html.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);\s*<\/script>/);
    if (match && match[1]) {
      const data = JSON.parse(match[1]);
      const title = data[1][8];
      const description = data[1][0];
      const items = data[1][1];
      console.log(`Title: ${title}`);
      for (const item of items) {
        if (item[3] === 0 || item[3] === 1 || item[3] === 2 || item[3] === 3 || item[3] === 4) { // Question types
           const qTitle = item[1];
           const required = item[4] && item[4][0] ? item[4][0][2] : false;
           const typeInfo = item[4] && item[4][0] && item[4][0][1] ? item[4][0][1] : [];
           let options = [];
           if (typeInfo.length > 0) {
             options = typeInfo.map(o => o[0]);
           }
           console.log(`- ${qTitle} (Required: ${required}) ${options.length > 0 ? `Options: ${JSON.stringify(options)}` : ''}`);
        }
      }
    } else {
      console.log("Could not find data");
    }
  }
}

main();
