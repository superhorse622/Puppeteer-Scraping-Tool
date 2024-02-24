// Import necessary libraries
import puppeteer from 'puppeteer';

// Function to scrape Zillow
async function scrapeZillow(city: string) {
    // Launch browser and create a new page
    const browser = await puppeteer.launch({headless:false, timeout: 0});
    const page = await browser.newPage();

    try {
        // Step 1: Search for "top home listing websites"
        await page.goto('https://www.google.com/');
        await page.type('textarea[name="q"]', 'top home listing websites');
        await page.keyboard.press('Enter');
        await page.waitForNavigation();

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser
        await browser.close();
    }
}

export default scrapeZillow;