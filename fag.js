/* =====================================================================
   OVERSIKT OVER FAG OG APPER (brukes av startsiden og alle fagsidene)
   PRØVE-APP:  <fag>/<navn>/  →  {type:'prove', ...}. Når prøven har vært:
               flytt mappa til <fag>/eldre-tester/ og sett eldre:true.
   UKELEKSE:   <fag>/lekser/uke<NN>-<navn>/  →  {type:'lekse', aar:2026, uke:NN, ...}
               Ukelekser sorteres etter uke og trenger ikke flyttes.
   url er relativ til skole-apper/. key = appens localStorage-nøkkel.
   ===================================================================== */
const FAG = [
  {id:'norsk', e:'✍️', navn:'Norsk', apper:[
    {e:'💬', navn:'Argumenterende tekst', desc:'Skriveprøve: påstand, argumenter, motargumenter og oppbygging (kurs 5.4)', type:'prove', url:'norsk/argumenterende-tekst-uke44/', dato:'2026-10-30', key:'norsk_argumenterende_v1'},
  ]},
  {id:'naturfag', e:'🔬', navn:'Naturfag', apper:[
    {e:'🧠', navn:'Nervesystemet', desc:'Celler, fotosyntese og nervesystemet', type:'prove', url:'naturfag/eldre-tester/nervesystemet/', dato:'2026-10-16', eldre:true, key:'naturfag_v1'},
  ]},
  {id:'tysk', e:'🇩🇪', navn:'Tysk', apper:[
    {e:'🏠', navn:'Mein Zimmer und mein Zuhause', desc:'Kapittel 3: rom, hus og eiendomsord', type:'prove', url:'tysk/uke46-mein-zuhause/', dato:null, uke:'uke 46', key:'tysk46_v1'},
    {e:'🌦️', navn:'Været, ferien og haben/sein', desc:'Kapittel 1–2', type:'prove', url:'tysk/eldre-tester/uke42-vaeret-og-ferien/', dato:'2026-10-12', eldre:true, key:'tyskTrening_v1'},
  ]},
  {id:'krle', e:'🕉️', navn:'KRLE', apper:[
    {e:'🕉️', navn:'Hinduisme', desc:'Tro, guder, ritualer, kaste, skrifter og Gandhi', type:'prove', url:'krle/eldre-tester/hinduisme/', dato:'2026-10-23', eldre:true, key:'krle_hinduisme_v1'},
  ]},
  {id:'mat-og-helse', e:'🍎', navn:'Mat og helse', apper:[
    {e:'🥦', navn:'Teoriprøve: kosthold og næringsstoffer', desc:'Kostsirkelen, kostrådene, vitaminer, baking og mattrygghet', type:'prove', url:'mat-og-helse/teoriprove-uke47/', dato:'2026-11-19', key:'mat_og_helse_v1'},
  ]},
];

const ROOT = document.currentScript.src.replace(/fag\.js(\?.*)?$/, '');
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today = () => { const t = new Date(); t.setHours(0,0,0,0); return t; };
const dateOf = a => a.dato ? new Date(a.dato + 'T00:00:00') : null;
const isOld = a => !!a.eldre;
const daysTo = a => a.dato ? Math.round((dateOf(a) - today())/864e5) : null;
// ISO-ukenummer
function isoWeek(d = new Date()){ const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day); const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return {aar:t.getUTCFullYear(), uke:Math.ceil(((t - y0)/864e5 + 1)/7)}; }
const NOW = isoWeek();
const weekVal = a => a.aar*100 + a.uke, nowVal = NOW.aar*100 + NOW.uke;
const isLekse = a => a.type === 'lekse';
// Fremgang lagret av appen (samme format i alle appene)
function progress(a){ try{ const d = JSON.parse(localStorage.getItem(a.key) || 'null'); if(!d) return null;
  const st = Object.values(d.stats || {}); return {xp:d.xp||0, sessions:d.sessions||0, last:d.lastDay||null, riktig:st.filter(x => x.s >= 1).length, forsok:st.reduce((n,x) => n + (x.n||0), 0)}; }catch(e){ return null; } }
function lastText(last){ if(!last) return ''; const [y,m,dd] = last.split('-').map(Number); const d = new Date(y, m-1, dd), diff = Math.round((today() - d)/864e5);
  return diff === 0 ? 'i dag' : diff === 1 ? 'i går' : diff < 7 ? `for ${diff} dager siden` : d.toLocaleDateString('no-NO', {day:'numeric', month:'short'}); }
function xpOf(a){ try{ const d = JSON.parse(localStorage.getItem(a.key) || 'null'); return d && d.xp ? d.xp : 0; }catch(e){ return 0; } }
const fmt = d => d.toLocaleDateString('no-NO', {weekday:'long', day:'numeric', month:'long'});
function when(a){
  if(isOld(a)) return a.dato ? 'Prøve ' + dateOf(a).toLocaleDateString('no-NO', {day:'numeric', month:'long'}) : 'Prøven har vært';
  if(!a.dato) return a.uke ? `Prøve ${a.uke}` : 'Dato ikke satt';
  const d = daysTo(a);
  if(d < 0) return 'Prøven har vært';
  if(d === 0) return '🍀 Prøve i dag!';
  if(d === 1) return '⏳ Prøve i morgen!';
  return `⏳ ${d} dager til prøven`;
}
function appCard(a){
  const xp = xpOf(a), old = isOld(a), d = daysTo(a);
  return `<a class="card ${old ? 'old' : ''}" href="${ROOT}${a.url}"><span class="em">${a.e}</span><b>${esc(a.navn)}</b><small>${esc(a.desc)}</small>
    <div class="tags"><span class="tag ${!old && d !== null && d >= 0 && d <= 7 ? 'soon' : ''}">${when(a)}</span>${xp ? `<span class="tag xp">⭐ ${xp} XP</span>` : ''}</div></a>`;
}
function lekseCard(a){
  const pr = progress(a), cur = weekVal(a) === nowVal;
  return `<a class="card ${weekVal(a) < nowVal ? 'old' : ''}" href="${ROOT}${a.url}"><span class="em">${a.e}</span><b>${esc(a.navn)}</b><small>${esc(a.desc || '')}</small>
    <div class="tags"><span class="tag ${cur ? 'soon' : ''}">Uke ${a.uke}${cur ? ' · denne uka' : ''}</span>${pr && pr.xp ? `<span class="tag xp">⭐ ${pr.xp} XP</span>` : ''}${pr && pr.sessions ? '<span class="tag">✅ øvd</span>' : ''}</div></a>`;
}
function weekList(lekser){
  const by = {}; lekser.forEach(a => (by[weekVal(a)] = by[weekVal(a)] || []).push(a));
  const prev = isoWeek(new Date(Date.now() - 7*864e5)), prevVal = prev.aar*100 + prev.uke;
  const block = k => { const w = by[k][0], cur = +k === nowVal;
    return `<div class="week ${cur ? 'cur' : ''}"><div class="wk">${cur ? '📌 ' : ''}Uke ${w.uke}${cur ? ' (denne uka)' : +k > nowVal ? ' (kommer)' : +k === prevVal ? ' (forrige uke)' : ''}</div><div class="grid">${by[k].map(lekseCard).join('')}</div></div>`; };
  const keys = Object.keys(by).sort((x,y) => y - x), recent = keys.filter(k => +k >= prevVal), older = keys.filter(k => +k < prevVal);
  return recent.map(block).join('') + (older.length ? `<details><summary>📚 Tidligere uker (${older.length})</summary>${older.map(block).join('')}</details>` : '');
}
function trainingTable(apps){
  const rows = apps.map(a => ({a, pr: progress(a)})).filter(r => r.pr && (r.pr.xp || r.pr.sessions || r.pr.forsok));
  if(!rows.length) return '<p class="empty">Du har ikke øvd på denne enheten ennå.</p>';
  rows.sort((x,y) => (y.pr.last || '').localeCompare(x.pr.last || ''));
  const tot = rows.reduce((t,r) => ({xp:t.xp + r.pr.xp, s:t.s + r.pr.sessions, r:t.r + r.pr.riktig}), {xp:0, s:0, r:0});
  return `<div class="sum"><span>⭐ <b>${tot.xp}</b> XP</span><span>🔁 <b>${tot.s}</b> økter</span><span>✅ <b>${tot.r}</b> oppgaver klart</span></div>
    <div class="tlist">${rows.map(({a, pr}) => `<a class="trow" href="${ROOT}${a.url}"><span class="em">${a.e}</span><span class="tn"><b>${esc(a.navn)}</b>
      <small>${isLekse(a) ? 'Ukelekse uke ' + a.uke : isOld(a) ? 'Prøve (har vært)' : 'Prøve'}${pr.last ? ' · sist øvd ' + lastText(pr.last) : ''}</small></span>
      <span class="tv">${pr.xp} XP<small>${pr.sessions} økt${pr.sessions === 1 ? '' : 'er'} · ${pr.riktig} klart</small></span></a>`).join('')}</div>
    <p class="empty" style="font-size:13px;margin-top:6px">Viser det du har øvd på denne enheten og nettleseren.</p>`;
}
function renderHome(){
  const ukaLekser = FAG.flatMap(f => f.apper.filter(a => isLekse(a) && weekVal(a) === nowVal).map(a => ({...a, fag:f})));
  const upcoming = FAG.flatMap(f => f.apper.filter(a => !isLekse(a) && !isOld(a) && a.dato && daysTo(a) >= 0).map(a => ({...a, fag:f}))).sort((x,y) => dateOf(x) - dateOf(y));
  $('#app').innerHTML = `<h1>📚 Skole-apper</h1><p class="lead">Velg fag. Nå er det uke ${NOW.uke}.</p>
    ${ukaLekser.length ? `<h2>Lekser denne uka</h2>${ukaLekser.map(a => `<a class="next" href="${ROOT}${a.url}"><span class="em">${a.fag.e}</span><span><b>${esc(a.fag.navn)}: ${esc(a.navn)}</b><small>Uke ${a.uke}</small></span></a>`).join('')}` : ''}
    ${upcoming.length ? `<h2>Neste prøve</h2>${upcoming.slice(0,2).map(a => `<a class="next" href="${ROOT}${a.url}"><span class="em">${a.fag.e}</span><span><b>${esc(a.fag.navn)}: ${esc(a.navn)}</b><small>${when(a)} · ${fmt(dateOf(a))}</small></span></a>`).join('')}` : ''}
    <h2>Fag</h2>
    <div class="grid">${FAG.map(f => { const pr = f.apper.filter(a => !isLekse(a)), act = pr.filter(a => !isOld(a)).length, old = pr.length - act, lk = f.apper.filter(isLekse).length;
      const xp = f.apper.reduce((n,a) => n + ((progress(a) || {}).xp || 0), 0);
      return `<a class="card" href="${ROOT}${f.id}/"><span class="em">${f.e}</span><b>${esc(f.navn)}</b>
        <div class="tags">${act ? `<span class="tag soon">📝 ${act} prøve${act > 1 ? 'r' : ''}</span>` : ''}${lk ? `<span class="tag">📅 ${lk} ukelekse${lk > 1 ? 'r' : ''}</span>` : ''}${old ? `<span class="tag">🗂️ ${old} eldre</span>` : ''}${xp ? `<span class="tag xp">⭐ ${xp} XP</span>` : ''}</div></a>`; }).join('')}</div>`;
}
function renderFag(id){
  const f = FAG.find(x => x.id === id);
  const prover = f.apper.filter(a => !isLekse(a)), active = prover.filter(a => !isOld(a)), old = prover.filter(isOld), lekser = f.apper.filter(isLekse);
  document.title = f.navn;
  $('#app').innerHTML = `<a class="back" href="${ROOT}">← Alle fag</a>
    <div class="subj"><span class="em">${f.e}</span><h1>${esc(f.navn)}</h1></div>
    <h2>📝 Kommende prøver</h2>
    ${active.length ? `<div class="grid">${active.map(appCard).join('')}</div>` : '<p class="empty">Ingen kommende prøver her ennå.</p>'}
    <h2>📅 Ukelekser</h2>
    ${lekser.length ? weekList(lekser) : '<p class="empty">Ingen ukelekser her ennå.</p>'}
    <h2>📊 Dette har du trent på</h2>
    ${trainingTable(f.apper)}
    ${old.length ? `<details ${active.length ? '' : 'open'}><summary>🗂️ Eldre tester – prøven har vært (${old.length})</summary>
      <p class="empty" style="margin:8px 0 0">Kan fortsatt brukes til repetisjon. Fremgangen er lagret.</p>
      <div class="grid">${old.map(appCard).join('')}</div></details>` : ''}`;
}
