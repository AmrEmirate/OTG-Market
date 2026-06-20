import fs from 'fs';
const img = fs.readFileSync('./public/logo otg.jpeg');
const b64 = img.toString('base64');

// Fix the favicon - logo is square, clip to circle with proper centering
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleView">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image x="0" y="0" width="100" height="100" href="data:image/jpeg;base64,${b64}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync('./public/favicon.svg', svg);
console.log('favicon.svg updated successfully');
