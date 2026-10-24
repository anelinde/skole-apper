/* =====================================================================
   INNHOLD: Norsk – skriveprøve, argumenterende tekst (fredag uke 44)
   Kilde: Horisonter 9, kapittel 5, kurs 5.4 «Argumenterende tekster»
   (s. 214–221), bilder i kilder/norsk (IMG_7827–7836).
   Bare det som står i boka. Ingen egne fakta: skriveoppgavene vurderes
   med sjekklister for oppbygging og ord, ikke med fasit.
   ===================================================================== */
window.FAG = {
  tittel: 'Norsk: Argumenterende tekst',
  provedato: '2026-10-30', // «fredag» (sagt 25. oktober)
  lagringsnokkel: 'norsk_argumenterende_v1',
  ikkeFag: ['argumentet','argumentene','argumenter'],

  temaer: [  // brukes til å gruppere de korte skriveøvelsene
    {id:'begr',     e:'📚', navn:'Fagbegrepene',          desc:'Påstand, begrunnelse, argument, motargument, drøfte …'},
    {id:'typer',    e:'🧰', navn:'Argumenttyper',         desc:'Fakta, flertall, fornuft, ekspert, parallell, følelse (s. 218)'},
    {id:'saklig',   e:'🤝', navn:'God debattskikk',       desc:'Saklighetspyramiden (s. 219)'},
    {id:'struktur', e:'🧱', navn:'Oppbygging',            desc:'Tema- og kommentarsetninger, setningsstartere (s. 220–221)'},
    {id:'drofte',   e:'⚖️', navn:'Argumentere eller drøfte', desc:'«Slik er det!» eller «Er det slik?» (s. 214–215, 221)'},
    {id:'les',      e:'🐝', navn:'Framtiden sulter',      desc:'Undersøk eksempelteksten (s. 220, oppgave 6)'},
  ],





  /* ---------- SKRIVEOPPGAVER med sjekkliste ----------
     sjekk: [etikett, type, arg]   type: ord | setn | noen | ikke | start | spm */
  skriv: [
    // Bygg argumenter (oppgave 3, s. 217)
    ...['Alle ungdommer bør ha en time fysisk aktivitet hver dag.','Aldersgrense for å kjøre bil bør være 20 år.','Sosiale medier forsterker utseendepresset hos ungdom.','Vi trenger strenge regler for hvem som kan eie et skytevåpen.'].map((p,i) => ({
      id:'a'+(i+1), t:'begr', tittel:'Bygg et argument', gitt:`Påstand: «${p}»`,
      oppgave:'Skriv 2–4 setninger med begrunnelser for påstanden. Beskriv, forklar, kom med et eksempel, og vis gjerne til fakta eller forskning (oppgave 3, s. 217).',
      modell:'Modell fra boka: «Vi bør spise mindre rødt kjøtt.» + «Forskning viser at det kreves ti kilo korn for å produsere én kilo kjøtt.» (viser til forskning) + «Ti kilo korn gir omtrent tjue brød, mens én kilo kjøtt gir middag til seks–sju mennesker.» (eksempel som skal vekke følelser)',
      sjekk:[['Minst 2 setninger','setn',2],['Begrunnelse: fordi, siden, ettersom, derfor …','noen',['fordi','siden','ettersom','derfor','på grunn av','det er fordi','for det']],['Et eksempel: for eksempel, blant annet, som når …','noen',['for eksempel','blant annet','f.eks','eksempel','som når','tenk deg']],['Viser til fakta, forskning eller erfaring','noen',['forskning','forskere','undersøkelse','statistikk','fakta','ifølge','prosent','erfar','jeg har selv']]]})),
    // Motargument
    ...[['Alle skoler bør være mobilfrie.','Mobilen forstyrrer konsentrasjonen i timene.'],['Ungdom bør stå tidligere opp.','Da får man mer ut av dagen.'],['Vi bør spise mindre rødt kjøtt.','Det kreves ti kilo korn for å produsere én kilo kjøtt.']].map(([p,b],i) => ({
      id:'m'+(i+1), t:'drofte', tittel:'Møt motargumentet', gitt:`Argument: «${p} ${b}»`,
      oppgave:'Skriv et motargument (1–2 setninger). Skriv så én setning der du svarer på motargumentet og holder fast ved standpunktet ditt, eller veier dem opp mot hverandre.',
      modell:'Bokas eksempel på motargument til «Vi bør spise mindre rødt kjøtt»: «Kjøtt har alltid vært en viktig del av kostholdet til mennesker. Mange forskere mener dette har vært viktig for utviklingen av hjernen vår.»',
      sjekk:[['Minst 3 setninger','setn',3],['Innleder motargumentet: noen mener, på den annen side, selv om, riktignok …','noen',['noen mener','andre mener','på den annen side','selv om','riktignok','mange vil si','en kan hevde','man kan si','motargument']],['Svarer på det: men, likevel, derfor, allikevel …','noen',['men','likevel','allikevel','derfor','imidlertid','uansett']]]})),
    // Skriv om til drøftende (oppgave 2, s. 215)
    {id:'d1', t:'drofte', tittel:'Gjør teksten drøftende', gitt:'«Å «like» alt vennene dine legger ut, er ikke særlig smart. Mange legger ut mye rart og deler ting uten å tenke seg om, de syns bare det er gøy. Jeg syns vi heller skal si fra når vi reagerer på noe, i stedet for å «like» eller dele det. Da skjønner vennene dine at du er en ekte venn.»',
     oppgave:'Skriv om setningene slik at teksten blir drøftende og spørrende (oppgave 2, s. 215). Still spørsmål, og se saken fra flere sider.',
     modell:'Tips: Gjør påstandene om til spørsmål («Er det egentlig smart å …?»), og ta med begge sider («Kanskje …, men på den annen side …»).',
     sjekk:[['Minst 4 setninger','setn',4],['Minst 2 spørsmål','spm',2],['Åpne, forsiktige ord: kanskje, kan, egentlig, eller …','noen',['kanskje','egentlig','kan det','er det','eller','kan vi']],['Ser saken fra flere sider: på den annen side, samtidig, men …','noen',['på den annen side','samtidig','men','selv om','likevel']]]},
    {id:'d2', t:'drofte', tittel:'Drøft: Er idrett sunt?', gitt:'Problemstilling: «Er idrett sunt?» (eksempelet i Tips-boksen, s. 221)',
     oppgave:'Skriv et kort drøftende avsnitt (4–6 setninger). Ta med noe positivt og noe negativt fra Tips-boksen, vei dem opp mot hverandre, og avslutt med en konklusjon.',
     modell:'Fra boka: Positivt: trening gir bedre helse, de som er i form gjør det bedre på skolen, mange liker idrett. Negativt: overtrening, belastningsskader, mange sitter hele helga og ser på sport, dårlig stemning, ekskludering, stygg språkbruk.',
     sjekk:[['Minst 4 setninger','setn',4],['Noe positivt (helse, form, skolen, liker …)','noen',['helse','form','skolen','liker','sunt']],['Noe negativt (overtrening, skader, ekskludering …)','noen',['overtrening','skade','belastning','ekskluder','sitter','språkbruk','stemning']],['Veier opp: på den ene siden / på den andre siden / men','noen',['på den ene siden','på den andre siden','på den annen side','men','samtidig']],['Konklusjon: derfor, alt i alt, kanskje …','noen',['derfor','alt i alt','konklusjon','kanskje','til slutt','jeg tror']]]},
    // Gjør usaklig om til saklig
    ...['«Er han helt dust, eller?»','«Selvfølgelig sier han det, han skjønner jo ingenting av hvordan vi har det.»','«Han sier at det ikke er bra for oss å høre på musikk. Jeg er ikke enig, jeg synes vi bør få lov, for jeg elsker å ha musikk på.»'].map((u,i) => ({
      id:'u'+(i+1), t:'saklig', tittel:'Klatre opp i pyramiden', gitt:`Usaklig svar i en debatt om musikk i timene: ${u}`,
      oppgave:'Skriv svaret om, så det blir saklig: argumenter (begrunn med eksempler) eller tilbakevis (vis feil i argumentasjonen). Hold deg til saken, ikke personen.',
      modell:'Toppen av pyramiden i boka: «Det stemmer nok ikke at man alltid blir mer konsentrert av å høre på musikk. Jeg har lest forskning som viser at dersom du er mer opptatt av musikken enn av det du holder på med, så kan det forstyrre.»',
      sjekk:[['Minst 2 setninger','setn',2],['Ingen nedsettende ord om personen','ikke',['dust','idiot','teit','dum','skjønner jo ingenting','skjønner ingenting']],['Begrunnelse: fordi, derfor, siden …','noen',['fordi','derfor','siden','ettersom','for det']],['Om selve saken (musikk, konsentrasjon …)','noen',['musikk','konsentr','timene','lære','forstyrr','jobbe']]]})),
    // Setningsstartere
    ...[['Har du tenkt på','innledning','Mobilfri skole'],['Mange mener at','innledning','Fysisk aktivitet hver dag'],['En av fordelene er at','hoveddel','Mobilfri skole'],['På den annen side','hoveddel','Sosiale medier'],['Derfor tror jeg at','avslutning','Mindre rødt kjøtt'],['Er det så sikkert at','avslutning','Aldersgrense 20 år for bil']].map(([st,del,tema],i) => ({
      id:'t'+(i+1), t:'struktur', tittel:`Setningsstarter til ${del}en`, gitt:`Tema: ${tema}. Start med: «${st} …»`,
      oppgave:`Skriv én til to setninger som starter med «${st}». Setningen skal passe i ${del}en av en argumenterende tekst.`,
      modell:'Setningsstarterne står på s. 221.',
      sjekk:[[`Starter med «${st}»`,'start',st],['Minst 8 ord','ord',8]]})),
    // Tema- og kommentarsetninger
    ...['Ungdom bør stå tidligere opp.','Gutter og jenter har like muligheter.','Alle skoler bør være mobilfrie.'].map((p,i) => ({
      id:'v'+(i+1), t:'struktur', tittel:'Skriv et avsnitt', gitt:`Temasetning (påstand): «${p}»`,
      oppgave:'Skriv et helt avsnitt: start med temasetningen, og skriv minst tre kommentarsetninger med begrunnelser, slik avsnittene i «Framtiden sulter» er bygd opp.',
      modell:'Hvert avsnitt i «Framtiden sulter» er et argument: temasetningen er påstanden, og kommentarsetningene kommer med begrunnelser (s. 220).',
      sjekk:[['Starter med temasetningen','start',p.replace(/\.$/,'')],['Minst 4 setninger (temasetning + 3 kommentarsetninger)','setn',4],['Begrunnelse: fordi, derfor, siden …','noen',['fordi','derfor','siden','ettersom','på grunn av']],['Et eksempel eller fakta','noen',['for eksempel','blant annet','forskning','undersøkelse','statistikk','erfar','ifølge']]]})),
  ],

  /* ---------- PRØVETRENING: skriv en hel argumenterende tekst ---------- */
  temaForslag: ['Alle skoler bør være mobilfrie.','Alle ungdommer bør ha en time fysisk aktivitet hver dag.','Aldersgrense for å kjøre bil bør være 20 år.','Sosiale medier forsterker utseendepresset hos ungdom.','Vi bør spise mindre rødt kjøtt.','Ungdom bør stå tidligere opp.','Vi trenger strenge regler for hvem som kan eie et skytevåpen.'],
  // Ord som tyder på de ulike argumenttypene (s. 218)
  typeOrd: {
    'Faktaargument':['forskning','forskere','undersøkelse','statistikk','prosent','fakta','ifølge','rapport','studie'],
    'Flertallsargument':['de fleste','alle vet','mange mener','mange vil','flertallet','de aller fleste'],
    'Fornuftsargument':['sunn fornuft','lett å forstå','selvsagt','det sier seg selv','logisk','fornuftig'],
    'Ekspertargument':['ekspert','professor','lege','sier forsker','sier eksperter','fagfolk','psykolog'],
    'Parallellargument':['naboskolen','andre skoler','i andre land','i sverige','i danmark','akkurat som','på samme måte som'],
    'Følelsesargument':['grusomt','trist','forferdelig','fantastisk','urettferdig','tenk deg','skremmende','vondt'],
  },
  /* ---------- ARGUMENTTYPER (s. 218) – vises når han planlegger og skriver ---------- */
  argtyper: [
    {id:'fakta', navn:'Faktaargument', e:'📊', hva:'Viser til fakta, undersøkelser eller forskning.', eks:'«Statistikken viser at 90 000 barn i Norge er rammet av fattigdom.»', styrke:'Argumentet kan kontrolleres, og vi kan se om det er riktig eller galt.', start:['Forskning viser at …','Ifølge …','Undersøkelser viser at …']},
    {id:'flertall', navn:'Flertallsargument', e:'👥', hva:'Viser til «alle» eller «mange».', eks:'«De fleste vil være enige i at ungdom bør være inne før klokka ti om kvelden.»', styrke:'Vi kan ikke vite hvor mange som mener dette. Det virker sant og fornuftig avhengig av hva vi selv mener.', start:['De fleste vil være enige i at …','Mange mener at …']},
    {id:'fornuft', navn:'Fornuftsargument', e:'🧠', hva:'Viser til hva sunn fornuft sier.', eks:'«Det må være lett å forstå at det ikke er sunt for unge mennesker å slanke seg.»', styrke:'Trenger ikke mye begrunnelse hvis det virker sannsynlig.', start:['Det må være lett å forstå at …','Det sier seg selv at …']},
    {id:'ekspert', navn:'Ekspertargument', e:'🎓', hva:'Viser til noen med høy troverdighet, for eksempel en ekspert.', eks:'«Vi er ganske sikre på at bruk av mobil og nettbrett om kvelden påvirker søvnen negativt, sier søvnforsker Hilde.»', styrke:'Hvis vi har tillit til eksperten, har argumentet høy troverdighet.', start:['… sier eksperten …','Ifølge forskeren …']},
    {id:'parallell', navn:'Parallellargument', e:'🔁', hva:'Viser til liknende tilfeller.', eks:'«Naboskolen arrangerte skoleball uten problemer. Det skal vi også få til.»', styrke:'Selv om eksemplet er riktig, behøver det ikke bety at det vil gå problemfritt hos deg.', start:['På naboskolen …','Akkurat som …']},
    {id:'folelse', navn:'Følelsesargument', e:'❤️', hva:'Viser til følelser.', eks:'«Å holde dyr i bur er rett og slett grusomt.»', styrke:'Vekker følelser og kan få noen over på din side. Følelsesargumenter virker ofte sterkere enn fornuftsargumenter.', start:['Tenk deg …','Det er rett og slett …']},
  ],

  /* ---------- HUSKELAPP (kurs 5.4, med egne ord) ---------- */
  huskelapp: [
    {tittel:'Argument = påstand + begrunnelse', side:'s. 216', tekst:'En påstand er noe som påstås, uten at det er begrunnet. For å overbevise må påstanden begrunnes: du beskriver, forklarer, utdyper og kommer med eksempler. Eksemplene kan bygge på erfaringer, eller du kan vise til fakta, forskning og statistikk.', eks:'Påstand: «Det er ikke smart å spise glovarm pizza.» Begrunnelse: «Jeg har selv erfart å brenne meg kraftig på osten.»'},
    {tittel:'Motargumenter', side:'s. 217', tekst:'Alle argumenter kan møtes med motargumenter. Legger du selv fram motargumentene, viser du at du har tenkt godt gjennom saken, og det kan skape tillit.', eks:'Argument: «Vi bør spise mindre rødt kjøtt.» Motargument: «Kjøtt har alltid vært en viktig del av kostholdet til mennesker.»'},
    {tittel:'Oppbygging: avsnitt', side:'s. 220', tekst:'Hvert avsnitt er ett argument. Temasetningen (den første setningen) er påstanden. Kommentarsetningene etter den kommer med begrunnelsene. «Framtiden sulter» har fem avsnitt bygd opp slik.', eks:''},
    {tittel:'Når du skal debattere en sak', side:'s. 221', tekst:'Vær overbevisende, og få tydelig fram standpunktet ditt. Bruk argumenter: underbygg det du mener med fakta, eksempler og statistikk. Tenk ut motargumenter, slik at du kan drøfte og avvise dem. Bruk ulike typer argumenter.', eks:''},
    {tittel:'Vær saklig', side:'s. 219', tekst:'Saklighetspyramiden, fra dårligst til best: latterliggjøre (nedsettende ord om motparten) → kritisere (angripe personen uten argumenter) → motsi (være uenig uten å begrunne) → argumentere (begrunne og forklare med eksempler) → tilbakevise (vise feil i argumentasjonen og argumentere mot). Argumenter for og mot saken, ikke personen.', eks:''},
  ],
  setningsstartere: {
    inn:['Har du tenkt på …','Mange mener at …, men jeg er ikke så sikker …'],
    hoved:['Det er kjent for mange at …','De fleste vil være enige i …','En av fordelene/ulempene er at …','Det viser seg (imidlertid) at …','I tillegg så …','For det første/andre/tredje …'],
    mot:['På den annen side …','Selv om det kanskje …'],
    avs:['Derfor tror jeg at …','Derfor vil det beste være …','Tenk derfor over …, neste gang …','Kanskje kan det være …'],
  },
};
