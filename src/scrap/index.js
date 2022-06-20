/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { chromium } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();
// const createProduct = async () => {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('http://localhost:4200/login');
//   await page.locator('input[name="email"]').type(process.env.USER_LOG);
//   await page.waitForTimeout(2000);
//   await page.locator('input[type="password"]').type(process.env.USER_PASS);
//   await page.waitForTimeout(2000);
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(3000);
//   await page.locator('.card-body .btn').click();
//   await page.waitForTimeout(2000);
//   await page.locator('[placeholder="Product"]').type('Laptop lenovo');
//   await page.locator('[placeholder="Category"]').type('Laptop');
//   await page.locator('[placeholder="Ubication"]').type('Lima');
//   await page.locator('[placeholder="Price"]').type('2300');
//   await page.waitForTimeout(1000);
//   await page.locator('.card-body form button[type="submit"]').click();
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: 'example.png' });
//   await browser.close();
// };
// createProduct();
const data = [
 
];

const reniecLogin = async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1366, height: 1268 });
  await page.goto('https://cel.reniec.gob.pe/celweb/index.html');
  await page.waitForTimeout(2000);
  // SELECT INPUT USUARIO
  await page.locator('[placeholder="Usuario"]').type(process.env.USER_LOG);
  await page.waitForTimeout(2000);
  // SELECT INPUT PASS
  await page.locator('[placeholder="Contraseña"]').type(process.env.USER_PASS);
  await page.waitForTimeout(2000);
  // ACEPT CLICK
  await page.locator('.tab-content div div div a').click();
  await page.waitForTimeout(3000);
  // 2ND VALIDATION
  await page
    .locator(
      '.container-fluid div .row div terminos-legales div div div .sin-upper',
    )
    .click();

  // LOOP THROUGHT DATA
  for (let i = 0; i < data.length; i++) {
    await page.waitForTimeout(5000);
    // DNI INPUT QUERY
    await page.waitForSelector(
      '.container-fluid div .row div div consulta-dni div div .row div div div div [placeholder="Ingrese DNI"]',
    );

    await page
      .locator(
        '.container-fluid div .row div div consulta-dni div div .row div div div div [placeholder="Ingrese DNI"]',
      )
      .type(data[i].dni);

    await page.waitForTimeout(5000);
    // ACCEPT CLICK
    await page.waitForSelector(
      '.container-fluid div .row div div consulta-dni div div .row div div div a',
    );
    await page
      .locator(
        '.container-fluid div .row div div consulta-dni div div .row div div div a',
      )
      .click();
    await page.waitForTimeout(15000);
    await page.screenshot({ path: `${data[i].name}.png` });
    await page.waitForSelector(
      '.container-fluid div .row div .row consulta-dni div div ficha div .row div:first-child a span',
    );
    await page
      .locator(
        '.container-fluid div .row div .row consulta-dni div div ficha div .row div:first-child a span',
      )
      .click();
    await page.waitForTimeout(8000);
  }

  await browser.close();
};
reniecLogin();
