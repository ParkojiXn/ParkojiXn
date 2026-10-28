const http = require('http');
const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('index.html size in bytes:', indexHtml.length);
console.log('Contains Reza Sepdide:', indexHtml.includes('REZA SEPDIDE'));
console.log('Contains VoiceBox tokens (#0A0A0A):', indexHtml.includes('#0A0A0A'));
console.log('Contains Red Accent (#EF4444):', indexHtml.includes('#EF4444'));
console.log('Contains DED & RAB:', indexHtml.includes('Detailed Engineering Design (DED)'));
console.log('Contains BNSP Jenjang 5:', indexHtml.includes('Jenjang 5'));
console.log('Contains IPK 3.72:', indexHtml.includes('3,72') || indexHtml.includes('3.72'));
