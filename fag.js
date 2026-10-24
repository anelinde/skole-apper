/* =====================================================================
   OVERSIKT OVER FAG OG APPER (brukes av startsiden og alle fagsidene)
   Ny app: legg den i <fag>/<navn>/ og legg til et objekt under riktig fag.
   Når prøven har vært: flytt mappa til <fag>/eldre-tester/ og sett eldre:true.
   url er relativ til skole-apper/.
   ===================================================================== */
const FAG = [
  {id:'naturfag', e:'🔬', navn:'Naturfag', apper:[
    {e:'🧠', navn:'Nervesystemet', desc:'Celler, fotosyntese og nervesystemet', url:'naturfag/eldre-tester/nervesystemet/', dato:'2026-10-16', eldre:true, key:'naturfag_v1'},
  ]},
  {id:'tysk', e:'🇩🇪', navn:'Tysk', apper:[
    {e:'🏠', navn:'Mein Zimmer und mein Zuhause', desc:'Kapittel 3: rom, hus og eiendomsord', url:'tysk/uke46-mein-zuhause/', dato:null, uke:'uke 46', key:'tysk46_v1'},
    {e:'🌦️', navn:'Været, ferien og haben/sein', desc:'Kapittel 1–2', url:'tysk/eldre-tester/uke42-vaeret-og-ferien/', dato:'2026-10-12', eldre:true, key:'tyskTrening_v1'},
  ]},
  {id:'krle', e:'🕉️', navn:'KRLE', apper:[
    {e:'🕉️', navn:'Hinduisme', desc:'Tro, guder, ritualer, kaste, skrifter og Gandhi', url:'krle/eldre-tester/hinduisme/', dato:'2026-10-23', eldre:true, key:'krle_hinduisme_v1'},
  ]},
  {id:'mat-og-helse', e:'🍎', navn:'Mat og helse', apper:[
    {e:'🥦', navn:'Teoriprøve: kosthold og næringsstoffer', desc:'Kostsirkelen, kostrådene, vitaminer, baking og mattrygghet', url:'mat-og-helse/teoriprove-uke47/', dato:'2026-11-19', key:'mat_og_helse_v1'},
  ]},
];

const ROOT = document.currentScript.src.replace(/fag\.js(\?.*)?$/, '');
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today = () => { const t = new Date(); t.setHours(0,0,0,0); return t; };
const dateOf = a => a.dato ? new Date(a.dato + 'T00:00:00') : null;
const isOld = a => !!a.eldre;
const daysTo = a => a.dato ? Math.round((dateOf(a) - today())/864e5) : null;
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
function renderHome(){
  const upcoming = FAG.flatMap(f => f.apper.filter(a => !isOld(a) && a.dato && daysTo(a) >= 0).map(a => ({...a, fag:f}))).sort((x,y) => dateOf(x) - dateOf(y));
  $('#app').innerHTML = `<h1>📚 Skole-apper</h1><p class="lead">Velg fag.</p>
    ${upcoming.length ? `<h2>Neste prøve</h2>${upcoming.slice(0,2).map(a => `<a class="next" href="${ROOT}${a.url}"><span class="em">${a.fag.e}</span><span><b>${esc(a.fag.navn)}: ${esc(a.navn)}</b><small>${when(a)} · ${fmt(dateOf(a))}</small></span></a>`).join('')}` : ''}
    <h2>Fag</h2>
    <div class="grid">${FAG.map(f => { const act = f.apper.filter(a => !isOld(a)).length, old = f.apper.length - act;
      return `<a class="card" href="${ROOT}${f.id}/"><span class="em">${f.e}</span><b>${esc(f.navn)}</b>
        <div class="tags">${act ? `<span class="tag soon">${act} aktiv${act > 1 ? 'e' : ''}</span>` : '<span class="tag">Ingen aktive</span>'}${old ? `<span class="tag">🗂️ ${old} eldre</span>` : ''}</div></a>`; }).join('')}</div>`;
}
function renderFag(id){
  const f = FAG.find(x => x.id === id);
  const active = f.apper.filter(a => !isOld(a)), old = f.apper.filter(isOld);
  document.title = f.navn;
  $('#app').innerHTML = `<a class="back" href="${ROOT}">← Alle fag</a>
    <div class="subj"><span class="em">${f.e}</span><h1>${esc(f.navn)}</h1></div>
    <h2>Øv til neste prøve</h2>
    ${active.length ? `<div class="grid">${active.map(appCard).join('')}</div>` : '<p class="empty">Ingen kommende prøver her ennå.</p>'}
    ${old.length ? `<details ${active.length ? '' : 'open'}><summary>🗂️ Eldre tester – prøven har vært (${old.length})</summary>
      <p class="empty" style="margin:8px 0 0">Kan fortsatt brukes til repetisjon. Fremgangen er lagret.</p>
      <div class="grid">${old.map(appCard).join('')}</div></details>` : ''}`;
}
