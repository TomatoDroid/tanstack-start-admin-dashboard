import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  // Set auth token to bypass login
  await context.addCookies([
    {
      name: 'access_token',
      value: JSON.stringify('mock-access-token'),
      domain: 'localhost',
      path: '/',
    },
  ]);

  const page = await context.newPage();

  console.log('Visiting http://localhost:9527/...');
  await page.goto('http://localhost:9527/', { waitUntil: 'networkidle' });

  // Function to capture screenshot with a specific theme
  async function captureTheme(themeName) {
    console.log(`Setting theme to ${themeName}...`);
    
    // Set theme via cookie
    await context.addCookies([
      {
        name: 'vite-ui-theme',
        value: themeName,
        domain: 'localhost',
        path: '/',
      },
    ]);

    // Apply theme class to <html> directly for immediate effect
    await page.evaluate((t) => {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(t);
    }, themeName);

    // Wait for any animations or re-renders
    await page.waitForTimeout(2000);

    const screenshotPath = path.join(process.cwd(), 'public', `${themeName}-dashboard.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Saved ${themeName} screenshot to ${screenshotPath}`);
  }

  // Capture Light Mode
  await captureTheme('light');

  // Capture Dark Mode
  await captureTheme('dark');

  await browser.close();
  console.log('Screenshot capture complete!');
})();
