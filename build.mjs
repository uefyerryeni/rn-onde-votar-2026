import fs from 'node:fs';
const raw=fs.readFileSync('dist/secoes-alteradas-RN.csv','utf8').replace(/^\uFEFF/,'').trim().split(/\r?\n/);
const rows=raw.slice(1).map(l=>l.slice(1,-1).split('";"').map(v=>v.replaceAll('""','"')));
if(rows.length!==369 || new Set(rows.map(r=>[r[1],r[2],r[3],r[6]].join('|'))).size!==369) throw Error('Dados incompletos ou duplicados');
const grouped=new Map();
for(const r of rows){const key=r.slice(2,6).join('|');if(!grouped.has(key))grouped.set(key,{city:r[2],zone:r[3],from:r[4],to:r[5],sections:[],voters:0});const g=grouped.get(key);g.sections.push(Number(r[6]));g.voters+=Number(r[7]);}
fs.writeFileSync('dist/data.js','window.CHANGES = '+JSON.stringify([...grouped.values()])+';\n');
console.log(JSON.stringify({sections:rows.length,cities:new Set(rows.map(r=>r[2])).size,changes:grouped.size}));
