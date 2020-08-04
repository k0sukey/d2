import puppeteer from 'puppeteer';

import { generateRaceKey } from './generate-race-key';
import { generateRaceLabel } from './generate-race-label';
import { generateRaceMap } from './generate-race-map';
import { generateFusionResult } from './generate-fusion-result';
import {generateReverseFusion} from "./generate-reverse-fusion";

const urlJa = 'https://d2-megaten-l.sega.jp/news/detail/077290.html';
const urlEn = 'https://d2-megaten-l.sega.com/en/news/detail/077292.html';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.goto(urlEn, {
    waitUntil: 'networkidle0',
  });
  const raceKeys = await page.evaluate((): string[] => {
    const parent = document.querySelector<HTMLDivElement>('#RACETABLE');
    if (parent === null) {
      return [];
    }

    const table = Array.from(parent.children)[0]; // get header
    return Array.from(table.getElementsByTagName('tr')) // get table
      .filter((_, i) => i > 0) // ignore empty
      .map((tr) => tr.textContent ?? '');
  });
  await generateRaceKey(raceKeys);

  await page.goto(urlJa, {
    waitUntil: 'networkidle0',
  });
  const raceLabel = await page.evaluate((): string[] => {
    const parent = document.querySelector<HTMLDivElement>('#RACETABLE');
    if (parent === null) {
      return [];
    }

    const table = Array.from(parent.children)[0]; // get header
    return Array.from(table.getElementsByTagName('tr')) // get table
      .filter((_, i) => i > 0) // ignore empty
      .map((tr) => tr.textContent ?? '');
  });
  await generateRaceLabel(raceLabel);

  await generateRaceMap(raceKeys, raceLabel);

  await page.goto(urlEn, {
    waitUntil: 'networkidle0',
  });
  const fusions = await page.evaluate((): string[][] => {
    const parent = document.querySelector<HTMLDivElement>('#RACETABLE');
    if (parent === null) {
      return [];
    }

    const table = Array.from(parent.children)[1]; // ignore header
    return Array.from(table.getElementsByTagName('tbody')) // get table
      .filter((_, i) => i === 0) // the one
      .map((tbody) => Array.from(tbody.getElementsByTagName('tr'))) // get tr
      .map((tr) => Array.from(tr).filter((_, i) => i > 0)) // ignore header
      .map((tr) =>
        tr.map((v) => Array.from(v.children).map((td) => td.textContent ?? '')),
      )[0];
  });
  raceKeys.map((v, i) => generateFusionResult(v, raceKeys, fusions[i]));

  generateReverseFusion(raceKeys, fusions);

  await browser.close();
})();
