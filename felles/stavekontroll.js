/* =====================================================================
   NORSK STAVEKONTROLL (bokmål) – kjører i nettleseren, sender ingenting ut.
   Ordliste: Hunspell nb_NO (spell-norwegian, GPL, se felles/nb/LICENSE),
   lest med nspell (MIT, felles/nspell.js).
   I tillegg:
   - sammensatte ord godtas når delene finnes (mobilfri = mobil + fri)
   - EKSTRA: vanlige ord som mangler i ordlista
   - REGLER: typiske skrivefeil som ordlista godtar (igår → i går, till → til)
   Bruk: const sk = await Stavekontroll.last(rot); sk.sjekk(tekst, ekstraOrd)
   ===================================================================== */
(function(global){
  const EKSTRA = ['noe','noen','roer','det','dette','disse','dere','deres','meg','deg','seg','oss','dem','hvordan','hvorfor','hvilke','hvilken','hvilket',
    'ganske','kanskje','egentlig','dessuten','likevel','allikevel','imidlertid','riktignok','dessverre','selvfølgelig','selvsagt','nemlig','altså','uansett',
    'ungdom','ungdommer','ungdommen','ungdommene','skjermtid','mobilbruk','mobilen','mobiler','nettet','appen','apper','apps','sosiale','influencere','influenser',
    'vlogg','vlogger','podkast','podkaster','talkshow','debattinnlegg','leserinnlegg','kronikk','kronikker','problemstilling','problemstillinger',
    'motargument','motargumenter','motargumentet','motargumentene','begrunnelse','begrunnelser','begrunnelsen','begrunnelsene','temasetning','temasetningen',
    'temasetninger','kommentarsetning','kommentarsetninger','kommentarsetningene','setningsstartere','argumenttyper','faktaargument','flertallsargument',
    'fornuftsargument','ekspertargument','parallellargument','følelsesargument','saklighetspyramiden','latterliggjøre','tilbakevise','mobilfri','mobilfrie',
    'utseendepress','utseendepresset','skoene','skoa','roes','urørbare','temasetningene','mattetimen','mattetimer','skytevåpen','aldersgrense','aldersgrensen','friminutt','friminuttet','friminuttene','skolehverdagen','skoledagen'];
  // Feil som ordlista godtar, men som nesten alltid er feil i skolesammenheng
  const REGLER = [
    [/\bigår\b/gi,'i går','Skrives i to ord.'],[/\bidag\b/gi,'i dag','Skrives i to ord.'],[/\bimorgen\b/gi,'i morgen','Skrives i to ord.'],
    [/\bifjor\b/gi,'i fjor','Skrives i to ord.'],[/\bikveld\b/gi,'i kveld','Skrives i to ord.'],[/\bihvertfall\b/gi,'i hvert fall','Skrives i tre ord.'],
    [/\biallefall\b/gi,'i alle fall','Skrives i tre ord.'],[/\btill\b/gi,'til','«til» har én l.'],[/\bmorro\b/gi,'moro','«moro» har én r.'],
    [/\bdesverre\b/gi,'dessverre','Dobbel s.'],[/\bforsåvidt\b/gi,'for så vidt','Skrives i tre ord.'],[/\bistedet for\b/gi,'i stedet for','Skrives i to ord.'],
    [/\bpga\b/gi,'på grunn av','Skriv det helt ut i en tekst.'],[/\bfeks\b/gi,'for eksempel','Skriv det helt ut i en tekst.'],
  ];
  const BIND = ['', 's', 'e'];
  function lag(nspell, aff, dic){
    const sp = nspell(aff, dic); EKSTRA.forEach(w => sp.add(w));
    const cache = new Map();
    function finnes(w){
      if(cache.has(w)) return cache.get(w);
      let ok = sp.correct(w) || sp.correct(w.toLowerCase());
      // sammensatt ord: del i to (eller tre) deler som finnes
      if(!ok && w.length >= 7){ const lw = w.toLowerCase();
        for(let i = 3; i <= lw.length - 3 && !ok; i++){ const a = lw.slice(0,i);
          for(const b of BIND){ if(!lw.startsWith(b, i)) continue; const rest = lw.slice(i + b.length);
            if(rest.length < 3) continue;
            if(sp.correct(a) && (sp.correct(rest) || (rest.length >= 7 && delbart(rest)))){ ok = true; break; } } } }
      // Sammensatt ord som ligger én bokstav unna et ekte ord, er trolig en skrivefeil (forstyrer → forstyrrer)
      if(ok && !sp.correct(w) && !sp.correct(w.toLowerCase())){
        const lw = w.toLowerCase();
        if(sp.suggest(lw).some(x => { const y = x.toLowerCase(); return !/[ -]/.test(y) && y !== lw && !y.startsWith(lw) && !lw.startsWith(y) && avstand(y, lw) === 1; })) ok = false;
      }
      cache.set(w, ok); return ok;
    }
    function avstand(a, b){ const d = Array.from({length:a.length+1}, (_,i) => [i, ...Array(b.length).fill(0)]); for(let j=1;j<=b.length;j++) d[0][j] = j;
      for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++){ d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
        if(i>1 && j>1 && a[i-1] === b[j-2] && a[i-2] === b[j-1]) d[i][j] = Math.min(d[i][j], d[i-2][j-2]+1); } return d[a.length][b.length]; }
    function delbart(lw){ for(let i = 3; i <= lw.length - 3; i++) for(const b of BIND){ if(!lw.startsWith(b, i)) continue; const r = lw.slice(i+b.length); if(r.length >= 3 && sp.correct(lw.slice(0,i)) && sp.correct(r)) return true; } return false; }
    function sjekk(tekst, ekstra = []){
      ekstra.forEach(w => sp.add(w.toLowerCase()));
      const out = [], tatt = new Set();
      for(const [re, riktig, why] of REGLER){ re.lastIndex = 0; let m;
        while((m = re.exec(tekst))){ out.push({offset:m.index, length:m[0].length, ord:m[0], forslag:[riktig], grunn:why}); for(let k=m.index;k<m.index+m[0].length;k++) tatt.add(k); } }
      const re = /[\p{L}]+(?:-[\p{L}]+)*/gu; let m;
      while((m = re.exec(tekst))){
        const w = m[0]; if(tatt.has(m.index) || w.length < 2 || /\d/.test(w)) continue;
        const forste = m.index === 0 || /[.!?:]\s*$/.test(tekst.slice(Math.max(0, m.index-3), m.index)) || /\n\s*$/.test(tekst.slice(Math.max(0,m.index-2), m.index));
        if(/^[A-ZÆØÅ]/.test(w) && !forste) continue;      // egennavn midt i setningen hoppes over
        if(w === w.toUpperCase() && w.length <= 5) continue; // forkortelser (EU, CO2)
        if(w.split('-').every(finnes)) continue;
        out.push({offset:m.index, length:w.length, ord:w, forslag: sp.suggest(w).slice(0,3), grunn:'Mulig stavefeil.'});
      }
      return out.sort((a,b) => a.offset - b.offset);
    }
    return {sjekk, finnes};
  }
  let lover = null;
  global.Stavekontroll = {
    lag,
    last(rot){ // rot = sti til mappa felles/, f.eks. '../../felles/'
      if(lover) return lover;
      lover = (async () => {
        if(!global.nspell) await new Promise((ok, feil) => { const s = document.createElement('script'); s.src = rot + 'nspell.js'; s.onload = ok; s.onerror = feil; document.head.append(s); });
        const [aff, dic] = await Promise.all(['nb/nb.aff.txt','nb/nb.dic.txt'].map(f => fetch(rot + f).then(r => { if(!r.ok) throw new Error(f); return r.text(); })));
        return lag(global.nspell, aff, dic);
      })();
      return lover;
    },
  };
})(typeof window !== 'undefined' ? window : globalThis);
