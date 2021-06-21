import fs from 'fs';
import got from 'got';
import path from 'path';
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.goto('https://dx2wiki.com/index.php/Demon_List', {
    waitUntil: 'networkidle0',
  });
  const list = await page.evaluate((): string[] => {
    const parent = document.querySelector<HTMLDivElement>('#mw-content-text');
    if (parent === null) {
      return [];
    }
    const tbody = Array.from(parent.getElementsByTagName('tbody'))[0];
    return Array.from(tbody.getElementsByTagName('tr'))
      .map((tr) => Array.from(tr.getElementsByTagName('td'))[0])
      .map((td) => Array.from(td.getElementsByTagName('a'))[1])
      .map((a) => a.textContent ?? '');
  });
  const renamed = list
    .filter((name) => name !== 'Halloween Jack' && name !== 'Helper Frost')
    .map((name) =>
      name
        .replace(/\sA$/, '02')
        .replace(/^Surt/, 'Surtr')
        .replace('☆', '')
        .replace("'", '')
        .replace(/-/g, '')
        .replace(/\s/g, '')
        .toLowerCase()
        .replace('asuralord', 'asuraoh')
        .replace('erlkonig', 'earlking')
        .replace('lucifuge', 'lucifugus')
        .replace('berserkerguts', 'guts02')
        .replace('marici', 'marishiten')
        .replace('motokokusanagi', 'motoko')
        .replace('demoneeho', 'demoniho')
        .replace('shikome', 'yomotsushikome')
        .replace('reikokashima', 'kashimareiko')
        .replace('mishaguji', 'mishagujisama')
        .replace('huangdi', 'koutei')
        .replace('huanglong', 'kouryu')
        .replace('long', 'seiryu')
        .replace('hellbiker', 'hellsangel')
        .replace('ongyoki', 'ongyouki')
        .replace('preta', 'gaki')
        .replace('sandman', 'sandmann')
        .replace('apsaras', 'apsara')
        .replace('koropokkur', 'korpokkur')
        .replace('pyrojack', 'jackolantern')
        .replace('orochi', 'yamatanoorochi')
        .replace('wukong', 'seitentaisei')
        .replace('mouryo', 'mouryou')
        .replace('pisaca', 'pishacha')
        .replace('huapo', 'kahaku')
        .replace('ikusa', 'yomotsuikusa')
        .replace('seth', 'set')
        .replace('mastema', 'mansemat')
        .replace('nidhoggr', 'nidhogg')
        .replace('dantalian', 'dantalion')
        .replace('gucumatz', 'gukumatz')
        .replace('ganesha', 'ganesa')
        .replace('hecatoncheires', 'hecatoncheir')
        .replace('efreet', 'ifrit')
        .replace('baihu', 'byakko')
        .replace('illuyanka', 'illuyankas')
        .replace('kushinada', 'kushinadahime')
        .replace('kwancha', 'kawancha')
        .replace('aniel', 'haniel')
        .replace('lilim', 'lilin')
        .replace('zodd', 'zod')
        .replace('xiwangmu', 'seioubo')
        .replace('kartikeya', 'karttikeya')
        .replace('ym', 'yam')
        .replace('beijiweng', 'hokutoseikun')
        .replace('fenghuang', 'suzaku')
        .replace('berserker', 'berserk')
        .replace('chatterskull', 'laughinskull')
        .replace('peallaidh', 'pialay')
        .replace('ardha', 'alder')
        .replace('guanyu', 'kanteiseikun')
        .replace('zhongkui', 'shouki')
        .replace('sarasvati', 'saraswati')
        .replace('fomorian', 'fomorians')
        .replace('hresvelgr', 'hraesvelgr')
        .replace('trumpeter', 'trunpeter')
        .replace('shikiouji', 'sikiouji')
        .replace('hareofinaba', 'inabasirousagi')
        .replace('shiisaa', 'shisa')
        .replace('yaksini', 'yakshini')
        .replace('asherah', 'ashratu')
        .replace('ammut', 'aman')
        .replace('succubus', 'sucubus')
        .replace('raijuu', 'raijyu')
        .replace('orcus', 'orcusreaper')
        .replace('horkos', 'orcus')
        .replace(/^v$/, 'vdmc')
        .replace('guixian', 'genbu'),
    );
  for (const tmp of renamed) {
    const file = path.join(
      process.cwd(),
      'public',
      'images',
      'devil',
      `dvl_ic_m_${tmp}.png`,
    );
    if (fs.existsSync(file)) {
      continue;
    }

    try {
      const res = await got(
        `https://d2-megaten-l.sega.jp/d2-megaten-l/devil_img/Medium/dvl_ic_m_${tmp}.png`,
      );
      fs.writeFileSync(file, res.rawBody);
    } catch (e) {
      console.log(`${tmp}\t${e.response.statusCode}`);
    }
  }

  await browser.close();
})();
