/* =====================================================================
   INNHOLD: Tysk 9 (Cappelen Damm), kapittel 3 «Mein Zimmer und mein Zuhause»
   Kilde: bokbildene i kilder/tysk/uke46 (s. 46–65). Bare det som står der.
   Der boka ikke gir norsk oversettelse, står det merket i slik-er-appen-laget.md.
   ===================================================================== */
window.TYSK = {
  tittel: 'Tysk: Mein Zimmer und mein Zuhause',
  lagringsnokkel: 'tysk46_v1',

  temaer: [
    {id:'rom',    e:'🏠', navn:'Rom og møbler',      desc:'Plantegningen (s. 48) og ordene fra rom-tekstene'},
    {id:'ord',    e:'📒', navn:'Vokabeln',           desc:'Ordene fra Vokabeln-boksene (s. 50–57)'},
    {id:'hvor',   e:'📍', navn:'Hvor er det?',       desc:'links neben, über, vor … (s. 58)'},
    {id:'eiendom',e:'🔑', navn:'Eiendomsord',        desc:'mein, dein, sein, ihr … (s. 62 og 65)'},
    {id:'setning',e:'✍️', navn:'Skriv setninger',    desc:'Beskriv rommet og huset på tysk'},
    {id:'hus',    e:'🏢', navn:'Etasjer og hus',     desc:'Erdgeschoss, Stock, hustypene (s. 50–52)'},
  ],

  /* ---------- ORD: norsk → skriv tysk ----------
     [id, tema, norsk, [godkjente tyske svar], merknad] */
  ord: [
    // Plantegningen s. 48 (boka gir ikke norsk – se dokumentet)
    ['p1','rom','kjøkken',['Küche','die Küche']],
    ['p2','rom','bad',['Bad','das Bad']],
    ['p3','rom','soverom',['Schlafzimmer','das Schlafzimmer']],
    ['p4','rom','barnerom',['Kinderzimmer','das Kinderzimmer']],
    ['p5','rom','stue',['Wohnzimmer','das Wohnzimmer'], 'das Wohnzimmer = stua (s. 56).'],
    ['p6','rom','gang (entré)',['Flur','der Flur']],
    ['p7','rom','balkong',['Balkon','der Balkon']],
    ['p8','rom','trappeoppgang',['Treppenhaus','das Treppenhaus']],
    // Rom-tekstene s. 55–57
    ['m1','rom','nattbordet',['der Nachttisch','Nachttisch']],
    ['m2','rom','vinduet',['das Fenster','Fenster']],
    ['m3','rom','bokhylle',['das Bücherregal','Bücherregal']],
    ['m4','rom','klesskapet',['der Kleiderschrank','Kleiderschrank']],
    ['m5','rom','gulvet',['der Boden','Boden']],
    ['m6','rom','klær (flertall)',['Klamotten','die Klamotten']],
    ['m7','rom','senga (mi)',['Bett','das Bett','mein Bett']],
    ['m8','rom','skrivebordet',['Schreibtisch','der Schreibtisch']],
    ['m9','rom','døra',['Tür','die Tür']],
    ['m10','rom','lampe',['Lampe','die Lampe']],
    ['m11','rom','dobbeltseng',['Doppelbett','das Doppelbett']],
    // Vokabeln-boksene s. 50–57
    ['v1','ord','etasjen',['der Stock','Stock']],
    ['v2','ord','høy (om lyd)',['laut']],
    ['v3','ord','ikke bare …, men også',['nicht nur …, sondern auch','nicht nur, sondern auch','nicht nur ... sondern auch','nicht nur sondern auch']],
    ['v4','ord','nærmeste',['nächste']],
    ['v5','ord','til gjengjeld',['dafür']],
    ['v6','ord','av dem',['von ihnen']],
    ['v7','ord','noe annet',['was anderes']],
    ['v8','ord','ved siden av det',['daneben']],
    ['v9','ord','for å (um … zu)',['um … zu','um zu','um ... zu']],
    ['v10','ord','fordelen',['der Vorteil','Vorteil']],
    ['v11','ord','flyttet inn',['eingezogen']],
    ['v12','ord','akkurat slik',['genauso']],
    ['v13','ord','totalt',['insgesamt']],
    ['v14','ord','blindveien',['die Sackgasse','Sackgasse']],
    ['v15','ord','ved siden av hverandre',['nebeneinander']],
    ['v16','ord','en slags',['eine Art']],
    ['v17','ord','ganske, temmelig',['ziemlich']],
    ['v18','ord','av en eller annen grunn',['aus irgendwelchem Grund']],
    ['v19','ord','å ligne',['ähneln']],
    ['v20','ord','setningen',['der Satz','Satz']],
    // Posisjonsord s. 58 (Vertiefen 2), svar fra tekstene s. 55–57
    ['h1','hvor','bak den',['dahinter']],
    ['h2','hvor','over (f.eks. over skrivebordet)',['über','über dem']],
    ['h3','hvor','oppå (det)',['darauf']],
    ['h4','hvor','i midten',['in der Mitte']],
    ['h5','hvor','til venstre for døra',['links neben der Tür']],
    ['h6','hvor','til høyre for døra',['rechts neben der Tür']],
    ['h7','hvor','på gulvet',['auf dem Boden']],
    ['h8','hvor','på veggene',['an den Wänden']],
    ['h9','hvor','på bordet',['auf dem Tisch']],
    ['h10','hvor','foran (TV-en)',['vor','vor dem Fernseher']],
    ['h11','hvor','ved siden av skrivebordet',['neben dem Schreibtisch']],
    // Etasjer s. 52
    ['e1','hus','1. etasje (norsk) heter på tysk …',['Erdgeschoss','das Erdgeschoss']],
    ['e2','hus','2. etasje (norsk) heter på tysk …',['1. Stock','1. Etage','erster Stock','der erste Stock']],
    ['e3','hus','3. etasje (norsk) heter på tysk …',['2. Stock','2. Etage','zweiter Stock','der zweite Stock']],
    ['e4','hus','4. etasje (norsk) heter på tysk …',['3. Stock','3. Etage','dritter Stock','der dritte Stock']],
    // Eiendomsordene s. 65
    ['t1','eiendom','eiendomsordet til ich (min)',['mein','meine','mein / meine','mein/meine']],
    ['t2','eiendom','eiendomsordet til du (din)',['dein','deine','dein / deine','dein/deine']],
    ['t3','eiendom','eiendomsordet til er (hans)',['sein','seine','sein / seine','sein/seine']],
    ['t4','eiendom','eiendomsordet til sie (hennes)',['ihr','ihre','ihr / ihre','ihr/ihre']],
    ['t5','eiendom','eiendomsordet til es (dets/dens)',['sein','seine','sein / seine','sein/seine']],
    ['t6','eiendom','eiendomsordet til wir (vår)',['unser','unsere','unser / unsere','unser/unsere']],
    ['t7','eiendom','eiendomsordet til ihr (deres, «dere»)',['euer','eure','euer / eure','euer/eure']],
    ['t8','eiendom','eiendomsordet til sie (de: sin/deres)',['ihr','ihre','ihr / ihre','ihr/ihre']],
    ['t9','eiendom','eiendomsordet til Sie (De: Deres)',['Ihr','Ihre','Ihr / Ihre','Ihr/Ihre']],
  ],

  /* ---------- FYLL INN EIENDOMSORDET (s. 62 og 65) ----------
     s: setning med ___, svar, hint (ordklasse fra boka), forklaring */
  fyll: [
    // Bøyning s. 65
    {id:'f1', s:'Ich suche ___ Jacke.', no:'Jeg leter etter jakka mi.', svar:['meine'], fork:'die Jacke er hunkjønn: eine Jacke → meine Jacke.'},
    {id:'f2', s:'Ich brauche ___ Handy.', no:'Jeg trenger mobilen min.', svar:['mein'], fork:'das Handy er intetkjønn: ein Handy → mein Handy.'},
    // Wir üben 2, s. 62 (sein eller ihr)
    {id:'f3', s:'Max spielt gern Volleyball. ___ Freunde (pl), Adam und Leon, spielen auch gern.', svar:['Seine'], fork:'Max = er → sein. Flertall → seine.'},
    {id:'f4', s:'Leon spielt auch Klavier. ___ Klavier (n) ist sehr teuer.', svar:['Sein'], fork:'Leon = er → sein. Intetkjønn → sein.'},
    {id:'f5', s:'Maria wohnt in der Weinmeisterstraße. ___ Wohnung (f) ist modern.', svar:['Ihre'], fork:'Maria = sie → ihr. Hunkjønn → ihre.'},
    {id:'f6', s:'Peters Wohnung ist auch in der Weinmeisterstraße, ___ Wohnung (f) ist sehr klein.', svar:['seine'], fork:'Peter = er → sein. Hunkjønn → seine.'},
    {id:'f7', s:'Das Kind spielt mit einer Katze. ___ Katze (f) ist klein und süß.', svar:['Seine'], fork:'das Kind = es → sein. Hunkjønn → seine.'},
    {id:'f8', s:'Das Kind ist jetzt müde. ___ Opa (m) singt ein Schlaflied.', svar:['Sein'], fork:'das Kind = es → sein. Hankjønn → sein.'},
    {id:'f9', s:'Leah lernt gern Norwegisch. ___ Norwegisch (n) ist sehr gut.', svar:['Ihr'], fork:'Leah = sie → ihr. Intetkjønn → ihr.'},
    // Wir üben 1, s. 62 (fasit: se dokumentet)
    {id:'f10', s:'___ Vater (m) heißt Peter und ist in München aufgewachsen.', no:'Fortelleren snakker om faren sin.', svar:['Mein'], fork:'Fortelleren (ich) → mein. Hankjønn → mein.'},
    {id:'f11', s:'Peter: ___ Freunde (pl) wohnen alle in der Nähe.', svar:['Seine'], fork:'Peters venner: er → sein. Flertall → seine.'},
    {id:'f12', s:'Peter und seine Freunde: ___ Hobbies (pl) sind klassische Musik und Volleyball.', svar:['Ihre'], fork:'Deres (sie, flertall) → ihr. Flertall → ihre.'},
    {id:'f13', s:'Er liebt ___ Hobby (n).', svar:['sein'], fork:'er → sein. Intetkjønn → sein.'},
    {id:'f14', s:'___ Mutter liest gerne.', no:'Fortelleren snakker om moren sin.', svar:['Meine'], fork:'ich → mein. Hunkjønn → meine.'},
    {id:'f15', s:'Wir haben viele Bücher in ___ Wohnung (f).', svar:['unserer'], fork:'wir → unser. «in» + hunkjønn her → unserer (står i ordlista i oppgaven).'},
    {id:'f16', s:'___ Schwester Hannah liest auch oft Bücher.', no:'Fortelleren snakker om søsteren sin.', svar:['Meine'], fork:'ich → mein. Hunkjønn → meine.'},
    {id:'f17', s:'Hannah: ___ Bücher (pl) sind aber vor allem Fachbücher für die Universität.', svar:['Ihre'], fork:'Hannah = sie → ihr. Flertall → ihre.'},
  ],

  /* ---------- SKRIV SETNINGEN PÅ TYSK ----------
     Fasit er setninger fra tekstene i boka (s. 50–57 og 65).
     keys: det som MÅ være med (stor/liten bokstav teller) */
  setninger: [
    {id:'s1', t:'setning', no:'Til venstre for døra står senga mi.', fasit:'Links neben der Tür steht mein Bett.', keys:['links neben der Tür','steht','mein Bett']},
    {id:'s2', t:'setning', no:'Bak den er det lille nattbordet mitt.', fasit:'Dahinter ist mein kleiner Nachttisch.', keys:['dahinter','ist','mein kleiner Nachttisch']},
    {id:'s3', t:'setning', no:'Over skrivebordet er det en liten bokhylle.', fasit:'Über dem Schreibtisch ist ein kleines Bücherregal.', keys:['über dem Schreibtisch','ist','ein kleines Bücherregal']},
    {id:'s4', t:'setning', no:'Ved siden av skrivebordet er klesskapet mitt.', fasit:'Neben dem Schreibtisch ist mein Kleiderschrank.', keys:['neben dem Schreibtisch','ist','mein Kleiderschrank']},
    {id:'s5', t:'setning', no:'I midten henger en stor lampe.', fasit:'In der Mitte hängt eine große Lampe.', keys:['in der Mitte','hängt','eine große Lampe']},
    {id:'s6', t:'setning', no:'Til høyre står skrivebordet mitt, og på det står laptopen min.', fasit:'Rechts steht mein Schreibtisch, und darauf steht mein Laptop.', keys:['rechts','mein Schreibtisch','darauf','mein Laptop']},
    {id:'s7', t:'setning', no:'Til venstre for døra står klesskapet hans.', fasit:'Links neben der Tür steht sein Kleiderschrank.', keys:['links neben der Tür','steht','sein Kleiderschrank']},
    {id:'s8', t:'setning', no:'Klærne hans ligger på gulvet.', fasit:'Seine Klamotten liegen auf dem Boden.', keys:['seine Klamotten','liegen','auf dem Boden']},
    {id:'s9', t:'setning', no:'På veggene har Leon fotballplakater.', fasit:'An den Wänden hat Leon Fußballposter.', keys:['an den Wänden','hat Leon','Fußballposter']},
    {id:'s10', t:'setning', no:'Leon har ikke noe skrivebord.', fasit:'Leon hat keinen Schreibtisch.', keys:['Leon hat','keinen Schreibtisch']},
    {id:'s11', t:'setning', no:'På bordet ligger skolebøkene hennes.', fasit:'Auf dem Tisch liegen ihre Schulbücher.', keys:['auf dem Tisch','liegen','ihre Schulbücher']},
    {id:'s12', t:'setning', no:'Foran TV-en står en sofa og et bord.', fasit:'Vor dem Fernseher stehen ein Sofa und ein Tisch.', keys:['vor dem Fernseher','stehen','ein Sofa','ein Tisch']},
    {id:'s13', t:'setning', no:'Rommet hennes er større enn mitt.', fasit:'Ihr Zimmer ist größer als meins.', keys:['ihr Zimmer','ist','größer als','meins']},
    {id:'s14', t:'setning', no:'Hun bor i 1. etasje (Erdgeschoss).', fasit:'Sie wohnt im Erdgeschoss.', keys:['sie wohnt','im Erdgeschoss']},
    {id:'s15', t:'setning', no:'Jeg bor i 9. etasje (norsk telling) med familien min.', fasit:'Ich wohne mit meiner Familie im achten Stock.', keys:['ich wohne','mit meiner Familie','im achten Stock']},
    {id:'s16', t:'setning', no:'Utsikten min er virkelig fin.', fasit:'Meine Aussicht ist wirklich schön.', keys:['meine Aussicht','ist','wirklich schön']},
    {id:'s17', t:'setning', no:'Vi deler huset vårt med en annen familie.', fasit:'Wir teilen unser Haus mit einer anderen Familie.', keys:['wir teilen','unser Haus','mit einer anderen Familie']},
    {id:'s18', t:'setning', no:'Jeg leter etter jakka mi.', fasit:'Ich suche meine Jacke.', keys:['ich suche','meine Jacke']},
    {id:'s19', t:'setning', no:'Jeg trenger mobilen min.', fasit:'Ich brauche mein Handy.', keys:['ich brauche','mein Handy']},
    {id:'s20', t:'setning', no:'Jeg leter etter en jakke.', fasit:'Ich suche eine Jacke.', keys:['ich suche','eine Jacke']},
    {id:'s21', t:'setning', no:'Det er rommet mitt.', fasit:'Das ist mein Zimmer.', keys:['das ist','mein Zimmer']},
    {id:'s22', t:'setning', no:'Ved enden av rommet er det et stort vindu.', fasit:'Am Ende vom Zimmer ist ein großes Fenster.', keys:['am Ende vom Zimmer','ist','ein großes Fenster']},
  ],

  /* ---------- HUSTYPENE (s. 50–51): les ledetråden, skriv hustypen ----------
     Ledetrådene bygger på de fem tekstene i boka. */
  hus: [
    {id:'u1', clue:'Personen bor med familien i 8. Stock, har en flott utsikt og en nabo som spiller høy musikk i helgene.', svar:['Hochhaus','das Hochhaus']},
    {id:'u2', clue:'Familien har mye plass, flere bygninger, og dyr bor i en av dem. Nærmeste nabo bor 20 minutter unna til fots.', svar:['Bauernhof','der Bauernhof']},
    {id:'u3', clue:'Familien deler huset og hagen med en annen familie.', svar:['Zweifamilienhaus','das Zweifamilienhaus']},
    {id:'u4', clue:'Bestemor, søsteren og foreldrene bor i samme hus. Bestemor flyttet inn etter at bestefar døde.', svar:['Mehrgenerationenhaus','das Mehrgenerationenhaus']},
    {id:'u5', clue:'Huset ser akkurat ut som husene til naboene. 12 hus ligger rett ved siden av hverandre i en blindvei.', svar:['Reihenhaus','das Reihenhaus']},
    {id:'u6', clue:'Et hus der bare én familie bor (står i spørsmål 3, s. 52).', svar:['Einfamilienhaus','das Einfamilienhaus']},
  ],

  /* ---------- SKRIVEOPPDRAG (læringsmålene s. 47) ---------- */
  skriv: {
    zimmer: {
      tittel:'Beskriv rommet ditt', e:'🛏️',
      oppgave:'Skriv 5–8 setninger på tysk om rommet ditt. Fortell hva som står hvor. Bruk ordene fra rom-tekstene.',
      ordbank:['Wenn man in mein Zimmer kommt,','steht links neben der Tür','rechts neben der Tür','mein Bett','mein Schreibtisch','mein Kleiderschrank','mein Nachttisch','ein Bücherregal','ein großes Fenster','Darauf steht','Dahinter ist','Über dem Schreibtisch','In der Mitte hängt','auf dem Boden','an den Wänden','Das ist mein Zimmer.'],
      eksempel:'Wenn man in mein Zimmer kommt, steht links neben der Tür mein Bett. Dahinter ist mein Nachttisch. Rechts steht mein Schreibtisch, und darauf steht mein Laptop. Über dem Schreibtisch ist ein Bücherregal. Neben dem Schreibtisch ist mein Kleiderschrank. In der Mitte hängt eine Lampe. Das ist mein Zimmer.',
      sjekk:[
        ['Minst 5 setninger', 'setn', 5],
        ['Et ord for hvor noe står (links/rechts neben, über, vor, dahinter, darauf, in der Mitte …)', 'noen', ['links neben','rechts neben','über','vor dem','vor der','dahinter','darauf','in der mitte','auf dem boden','an den wänden','neben dem','neben der','links','rechts']],
        ['Et eiendomsord (mein, meine …)', 'noen', ['mein','meine','meinen']],
        ['Minst tre møbler eller ting (Bett, Schreibtisch, Kleiderschrank, Lampe …)', 'antall', [['bett','schreibtisch','kleiderschrank','nachttisch','bücherregal','fenster','lampe','tür','sofa','tisch','laptop','fernseher'], 3]],
        ['Verbet står/ligger/henger (steht, liegt, hängt, ist)', 'noen', ['steht','stehen','liegt','liegen','hängt','ist']],
      ],
    },
    zuhause: {
      tittel:'Beskriv hjemmet ditt', e:'🏠',
      oppgave:'Skriv 5–8 setninger på tysk om huset eller leiligheten du bor i. Hva slags hus er det, hvilke rom har dere, og hvor ligger rommet ditt?',
      ordbank:['Ich wohne mit meiner Familie in einem','Hochhaus','Reihenhaus','Zweifamilienhaus','Einfamilienhaus','Wir haben','eine Küche','ein Bad','ein Wohnzimmer','einen Balkon','einen Flur','Mein Zimmer ist im','Erdgeschoss','ersten Stock','Meine Aussicht ist','Unser Haus ist'],
      eksempel:'Ich wohne mit meiner Familie in einem Reihenhaus. Unser Haus hat zwei Stockwerke. Im Erdgeschoss haben wir eine Küche und ein Wohnzimmer. Mein Zimmer ist im ersten Stock. Neben meinem Zimmer ist das Bad. Meine Aussicht ist schön.',
      sjekk:[
        ['Minst 5 setninger', 'setn', 5],
        ['Hva slags hus (Hochhaus, Reihenhaus, Zweifamilienhaus, Einfamilienhaus, Wohnung …)', 'noen', ['hochhaus','reihenhaus','zweifamilienhaus','einfamilienhaus','mehrgenerationenhaus','bauernhof','wohnung']],
        ['Minst tre rom (Küche, Bad, Wohnzimmer, Schlafzimmer, Flur, Balkon …)', 'antall', [['küche','bad','wohnzimmer','schlafzimmer','kinderzimmer','flur','balkon','treppenhaus','zimmer'], 3]],
        ['Etasje (Erdgeschoss eller Stock)', 'noen', ['erdgeschoss','stock','etage']],
        ['Et eiendomsord (mein, meine, unser, unsere …)', 'noen', ['mein','meine','meinem','meiner','unser','unsere','unserem']],
      ],
    },
  },
};
