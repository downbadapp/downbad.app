import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#09090b"/>

  <!-- Subtle radial glow -->
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="40%">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Logo circle -->
  <circle cx="600" cy="220" r="80" fill="#18181b"/>
  <circle cx="600" cy="220" r="76" fill="none" stroke="#3f3f46" stroke-width="2"/>
  <text x="600" y="220" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="65" font-weight="700" fill="#60a5fa">DB</text>

  <!-- Brand name -->
  <text x="600" y="360" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="48" font-weight="700" fill="#ffffff">DownBad</text>

  <!-- Tagline -->
  <text x="600" y="410" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" fill="#a1a1aa">Infrastructure Monitoring Made Simple</text>

  <!-- Feature pills -->
  <text x="600" y="470" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="16" fill="#71717a">SSL  ·  DNS  ·  Email Security  ·  Uptime  ·  WHOIS  ·  Blacklist</text>

  <!-- Accent line -->
  <rect x="500" y="530" width="200" height="3" rx="1.5" fill="#60a5fa"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('Generated public/og-image.png (1200x630)');
