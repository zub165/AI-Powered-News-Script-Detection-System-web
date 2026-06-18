// build.js - Run this locally to inject your API key
// Usage: set HF_API_TOKEN=hf_xxx... then node build.js

const fs = require('fs');
const token = process.env.HF_API_TOKEN || 'hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

let html = fs.readFileSync('index.html', 'utf8');

// Replace placeholder with actual token
html = html.replace(/var API_KEY = '[^*]*';/, `var API_KEY = '${token}';`);

fs.writeFileSync('index-built.html', html);
console.log('✅ Created index-built.html with API key');
console.log('Token prefix:', token.substring(0, 10) + '...');