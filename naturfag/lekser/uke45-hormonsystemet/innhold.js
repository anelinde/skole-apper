/* =====================================================================
   INNHOLD: Naturfag uke 45 – Hormonsystemet (Eureka 9, kap. 4, s. 75–83)
   Alt er skrevet med egne ord. Ingenting er kopiert fra boka.
   Oppgaver merket tenk:true står ikke rett ut i boka, men kan tenkes ut
   fra det boka sier (kapitlets egne oppgaver 6 og 9b).
   ===================================================================== */
window.INNHOLD = {
  tittel: 'Hormonsystemet',
  lagringsnokkel: 'naturfag_hormon_v1',

  temaer: [
    {id:'intro',     e:'📡', navn:'Hormoner og kjertler', desc:'Hormoner, blodet som postbud, nøkkel og lås (s. 75–76)'},
    {id:'kjertler',  e:'🗺️', navn:'Kjertlene i kroppen',  desc:'Hypofysen og de andre kjertlene (s. 77)'},
    {id:'adrenalin', e:'🎢', navn:'Adrenalin',            desc:'Binyremargen, faresituasjoner og belønningssystemet (s. 78–79)'},
    {id:'insulin',   e:'🍬', navn:'Insulin og diabetes',  desc:'Sukkerdører, diabetes type 1 og 2 (s. 80–81, 83)'},
  ],

  /* ---------- BEGREPER: [id, tema, begrep, forklaring, godkjente skrivemåter] ---------- */
  begreper: [
    ['b1','intro','hormon','Stoff som lages i kroppen og fraktes med blodet. Setter i gang spesielle prosesser i bestemte celler.',['hormon','hormoner','hormonet']],
    ['b2','intro','kjertel','Klynge av spesialiserte celler som lager hormoner.',['kjertel','kjertler','kjertelen']],
    ['b3','intro','hormonsystemet','Kommunikasjonssystemet som sender stoffer (hormoner) rundt med blodet.',['hormonsystemet','hormonsystem']],
    ['b4','intro','nervesystemet','Kommunikasjonssystemet som sender elektriske impulser gjennom nerver.',['nervesystemet','nervesystem']],
    ['b5','intro','blodet','«Postbudet» i hormonsystemet: frakter hormonene rundt i kroppen.',['blodet','blod']],

    ['b10','kjertler','hypofysen','Liten kjertel som henger under hjernen, omtrent som en ert. «Dirigenten» som styrer det meste av hormonsystemet.',['hypofysen','hypofyse']],
    ['b11','kjertler','skjoldbruskkjertelen','Kjertel på halsen. Hormonene påvirker stoffskiftet (varmeproduksjonen), lengdeveksten og utviklingen av sentralnervesystemet.',['skjoldbruskkjertelen','skjoldbruskkjertel']],
    ['b12','kjertler','binyrene','Kjertler ved nyrene. Lager blant annet adrenalin, og styrer hvor mye salter vi har i kroppen.',['binyrene','binyre','binyrer']],
    ['b13','kjertler','eggstokkene','Kjertlene som lager kjønnshormonene østrogen og progesteron hos kvinner.',['eggstokkene','eggstokker','eggstokk']],
    ['b14','kjertler','testiklene','Kjertlene som lager kjønnshormonet testosteron hos menn.',['testiklene','testikler','testikkel']],
    ['b15','kjertler','kjønnshormoner','Hormoner som trengs for normal kjønnsutvikling, og som setter i gang endringene i puberteten.',['kjønnshormoner','kjønnshormon','kjønnshormonene']],
    ['b16','kjertler','testosteron','Kjønnshormonet hos menn.',['testosteron']],
    ['b17','kjertler','østrogen','Et av kjønnshormonene hos kvinner (det andre er progesteron).',['østrogen']],
    ['b18','kjertler','progesteron','Et av kjønnshormonene hos kvinner (det andre er østrogen).',['progesteron']],
    ['b19','kjertler','stoffskiftet','Boka bruker ordet om varmeproduksjonen i kroppen. Påvirkes av hormoner fra skjoldbruskkjertelen.',['stoffskiftet','stoffskifte']],

    ['b20','adrenalin','adrenalin','Hormon som gjør kroppen klar for fysiske og psykiske utfordringer, for eksempel i en faresituasjon.',['adrenalin','adrenalinet']],
    ['b21','adrenalin','binyremargen','Den delen av binyrene som lager adrenalin.',['binyremargen','binyremarg']],
    ['b22','adrenalin','adrenalinkick','Det du kjenner når hjertet dunker hardt, du svetter og pusten går fortere.',['adrenalinkick','adrenalinkicket','adrenalinkikk']],
    ['b23','adrenalin','pupillene','Utvider seg når det er mye adrenalin i blodet, så mer lys slipper inn.',['pupillene','pupiller','pupill']],
    ['b24','adrenalin','løgndetektor','Apparat som blant annet måler puls, størrelsen på pupillene og hvor mye en svetter.',['løgndetektor','løgndetektoren']],
    ['b25','adrenalin','belønningssystem','System i hjernen som gir en god følelse når vi gjør noe lurt for å overleve, som å spise og drikke. Rus kan gi den samme følelsen.',['belønningssystem','belønningssystemet']],
    ['b26','adrenalin','leveren','Har et sukkerlager. Adrenalin får den til å slippe mer sukker ut i blodet.',['leveren','lever']],

    ['b30','insulin','insulin','Hormon fra bukspyttkjertelen som åpner «sukkerdørene», så druesukker kommer inn i cellene.',['insulin','insulinet']],
    ['b31','insulin','bukspyttkjertelen','Organ som lager bukspytt til tarmen og hormonet insulin.',['bukspyttkjertelen','bukspyttkjertel']],
    ['b32','insulin','druesukker','Den viktigste energikilden for cellene. Molekylene er for store til å komme inn i cellen uten hjelp.',['druesukker','druesukkeret','glukose']],
    ['b33','insulin','bukspytt','Lages i bukspyttkjertelen og skilles ut i tarmen. Hjelper til å bryte ned maten til næringsstoffer.',['bukspytt','bukspyttet']],
    ['b34','insulin','sukkerdører','«Dører» i overflaten av cellene. Når insulin åpner dem, slipper druesukker inn.',['sukkerdører','sukkerdørene','sukkerdør','insulindører','insulindørene']],
    ['b35','insulin','diabetes type 1','Bukspyttkjertelen lager ikke insulin, så druesukkeret kommer ikke inn i cellene.',['diabetes type 1','type 1','diabetes 1','type1']],
    ['b36','insulin','diabetes type 2','Det finnes nok insulin, men sukkerdørene åpner seg ikke som de skal. Den vanligste formen.',['diabetes type 2','type 2','diabetes 2','type2']],
    ['b37','insulin','sukkersyke','Et annet ord for diabetes.',['sukkersyke','sukkersyken']],
    ['b38','insulin','diabetiker','En som har sukkersyke (diabetes).',['diabetiker','diabetikere','diabetikeren']],
    ['b39','insulin','åreforkalkning','Trange blodårer. Kan komme av for mye eller for lite druesukker i blodet.',['åreforkalkning']],
  ],

  /* ---------- SANT ELLER USANT: [id, tema, påstand, sann?, forklaring] ---------- */
  sant: [
    ['s1','intro','Hormoner fraktes rundt i kroppen med blodet.',true,'Blodet er «postbudet» som bringer hormonene rundt.'],
    ['s2','intro','Et hormon virker på alle cellene i kroppen.',false,'Bare cellene som «abonnerer» på hormonet, tar imot det. Som en nøkkel som bare passer i én lås.'],
    ['s3','intro','Nerveimpulser går raskere enn hormoner.',true,'Nervesystemet virker med en gang. Hormoner bruker litt tid på å nå målet.'],
    ['s4','intro','Hormoner kan virke lenge.',true,'Ja. Hormoner bruker litt tid, men virker på mange celler samtidig og kan virke lenge.'],
    ['s5','intro','Et hormon virker bare på én celle om gangen.',false,'Hormoner virker på mange celler samtidig.'],
    ['s6','intro','Nervesystemet sender informasjon som elektriske impulser.',true,'Ja, gjennom nervene. Hormonsystemet bruker stoffer i blodet i stedet.'],
    ['s7','intro','Hormonene fraktes gjennom nervene.',false,'Det er blodet som frakter hormonene. Nervene leder elektriske impulser.'],

    ['s10','kjertler','Hypofysen henger under hjernen og er omtrent så stor som en ert.',true,'Riktig. Den er liten, men styrer det meste av hormonsystemet.'],
    ['s11','kjertler','Hypofysen er «dirigenten» i hormonsystemet.',true,'Den bestemmer når de andre kjertlene skal lage hormonene sine, hvilke og hvor mye.'],
    ['s12','kjertler','Skjoldbruskkjertelen lager insulin.',false,'Insulin lages i bukspyttkjertelen. Skjoldbruskkjertelen påvirker stoffskiftet og lengdeveksten.'],
    ['s13','kjertler','Testosteron er kjønnshormonet hos menn.',true,'Ja. Hos kvinner heter kjønnshormonene østrogen og progesteron.'],
    ['s14','kjertler','Østrogen og progesteron lages i testiklene.',false,'De lages i eggstokkene. Testiklene lager testosteron.'],
    ['s15','kjertler','Hypofysen lager hormoner som regulerer vannmengden i kroppen.',true,'Riktig. Den er også viktig for melkeproduksjonen i brystene.'],
    ['s16','kjertler','Binyrene styrer også hvor mye salter vi har i kroppen.',true,'Ja, i tillegg til at de lager adrenalin.'],
    ['s17','kjertler','Kjønnshormonene setter i gang endringene i puberteten.',true,'Riktig. De trengs for normal kjønnsutvikling.'],
    ['s18','kjertler','Hypofysen jobber helt alene, uten hjelp fra nervesystemet.',false,'Hypofysen samarbeider med resten av sentralnervesystemet.'],

    ['s20','adrenalin','Adrenalin får hjertet til å slå saktere.',false,'Motsatt: hjertet slår fortere og kraftigere.'],
    ['s21','adrenalin','Pupillene blir mindre når du får mye adrenalin.',false,'Pupillene utvider seg, så mer lys slipper inn.'],
    ['s22','adrenalin','Du kan bestemme selv hvor mye adrenalin kroppen lager.',false,'Nei, du kan ikke styre det med viljen. Derfor virker løgndetektorer.'],
    ['s23','adrenalin','Adrenalin får leveren til å slippe mer sukker ut i blodet.',true,'Sukkeret blir drivstoff til musklene.'],
    ['s24','adrenalin','Både fysiske og psykiske utfordringer kan gi adrenalin.',true,'For eksempel å springe 100-meteren, eller å be noen du liker med på kino.'],
    ['s25','adrenalin','Alle mennesker liker følelsen av adrenalin like godt.',false,'Vi er forskjellige. Noen oppsøker kicket, andre unngår det.'],
    ['s26','adrenalin','Belønningssystemet gir en god følelse når vi gjør noe lurt for å overleve.',true,'For eksempel å spise og drikke. Rus kan gi den samme følelsen.'],
    ['s27','adrenalin','Adrenalin slippes rett ut i blodet.',true,'Binyremargen slipper adrenalinet direkte ut i blodet.'],
    ['s28','adrenalin','Med mye adrenalin går pulsen og reaksjonshastigheten opp.',true,'Riktig. Kroppen blir klar til å handle raskt.'],

    ['s30','insulin','Insulin lages i bukspyttkjertelen.',true,'Riktig. Bukspyttkjertelen lager også bukspytt til tarmen.'],
    ['s31','insulin','Druesukker er så lite at det kommer inn i cellene uten hjelp.',false,'Druesukkermolekylene er for store. Insulin må åpne «sukkerdørene».'],
    ['s32','insulin','Uten insulin kommer ikke druesukker inn i cellene.',true,'Uansett hvor mye søtt du spiser.'],
    ['s33','insulin','Ved diabetes type 2 finnes det insulin, men sukkerdørene virker ikke som de skal.',true,'Riktig. Ved type 1 lager bukspyttkjertelen ikke insulin.'],
    ['s34','insulin','Diabetes type 1 er den vanligste formen for diabetes.',false,'Type 2 er den vanligste.'],
    ['s35','insulin','I dag lages insulin til diabetikere av spesielle bakterier.',true,'Før brukte de insulin fra gris.'],
    ['s36','insulin','Insulinsprøyten settes dypt inn i en muskel med en lang nål.',false,'Den settes rett under huden, ofte i magen eller låret. Nålen er sjelden lengre enn 1 cm.'],
    ['s37','insulin','Diabetes er arvelig.',true,'25 % av diabetikerne har en diabetiker i slekten.'],
    ['s38','insulin','Sunt kosthold og fysisk aktivitet kan gjøre det mindre sannsynlig å få diabetes type 2.',true,'Da virker insulinet bedre på sukkerdørene.'],
    ['s39','insulin','Det er mye du kan gjøre for å unngå diabetes type 1.',false,'Boka sier at det ikke er så mye du kan gjøre for å unngå type 1.'],
    ['s40','insulin','Normal mengde sukker i blodet er 4–9 mmol per liter.',true,'Det står i aktiviteten om måling av blodsukker (s. 83).'],
    ['s41','insulin','Bukspyttkjertelen lager insulin når sukkernivået i blodet blir høyt.',true,'Riktig. Insulinet får sukkeret inn i cellene.'],
    ['s42','insulin','Grisens insulin er nesten likt menneskets.',true,'Derfor brukte man insulin fra gris før.'],
  ],

  /* ---------- FLERVALG: første svar er riktig ---------- */
  mc: [
    {id:'m1', t:'intro', spm:'Hvorfor virker ikke et hormon på alle cellene i kroppen?', svar:['Bare cellene som har en «lås» som passer hormonet, reagerer','Blodet når ikke fram til alle cellene','Hormonet blir brukt opp i hjertet','Cellene er for små'], fork:'Tenk på nøkkel og lås, eller avisen som bare kommer til dem som abonnerer.'},
    {id:'m2', t:'intro', spm:'Hva kaller vi en klynge av celler som lager hormoner?', svar:['En kjertel','En nerve','En synapse','En blodåre'], fork:'De hormonproduserende cellene ligger i klynger som kalles kjertler.'},
    {id:'m3', t:'intro', spm:'Boka sammenligner blodet med …', svar:['et postbud','en dirigent','en lås','et kraftverk'], fork:'Blodet bringer hormonene rundt, slik postbudet bringer aviser.'},
    {id:'m4', t:'intro', spm:'Hva er en fordel med hormoner sammenlignet med nerveimpulser?', svar:['De virker på mange celler samtidig og kan virke lenge','De går mye raskere','De treffer mer presist','De går gjennom nervene'], fork:'Nerver er raske og presise. Hormoner er tregere, men når mange celler og varer lenger.'},

    {id:'m10', t:'kjertler', spm:'Hvem bestemmer når de andre kjertlene skal lage hormonene sine?', svar:['Hypofysen','Bukspyttkjertelen','Binyrene','Skjoldbruskkjertelen'], fork:'Hypofysen er dirigenten.'},
    {id:'m11', t:'kjertler', spm:'Hvilken kjertel påvirker lengdeveksten?', svar:['Skjoldbruskkjertelen','Bukspyttkjertelen','Binyrene','Eggstokkene'], fork:'Skjoldbruskkjertelen påvirker stoffskiftet, lengdeveksten og utviklingen av sentralnervesystemet.'},
    {id:'m12', t:'kjertler', spm:'Hva styrer kjønnshormonene hos kvinner? (blant annet)', svar:['Menstruasjonssyklusen og melkeproduksjonen','Sukkernivået i blodet','Pulsen og pupillene','Hvor mye salter vi har'], fork:'Østrogen og progesteron styrer menstruasjonssyklusen og melkeproduksjonen.'},
    {id:'m13', t:'kjertler', spm:'Hvor henger hypofysen?', svar:['Under hjernen','I halsen','Ved nyrene','I magen'], fork:'Den henger som en ert under selve hjernen.'},

    {id:'m20', t:'adrenalin', spm:'Hvorfor er det lurt at hjertet slår fortere i en faresituasjon?', svar:['Mer blod rundt i kroppen gir mer oksygen til musklene','Da blir du trøtt og rolig','Da lager kroppen mer insulin','Da blir pupillene mindre'], fork:'Oksygenet er bundet til blodet. Musklene trenger oksygen for å utnytte energien i sukkeret.'},
    {id:'m21', t:'adrenalin', spm:'Hvorfor utvider pupillene seg når du får adrenalin?', svar:['Så mer lys slipper inn, og du blir mer oppmerksom','Så du skal svette mer','Så hjertet skal slå saktere','Så leveren lager mer sukker'], fork:'Mer lys inn hjelper oppmerksomheten.'},
    {id:'m22', t:'adrenalin', spm:'Hvorfor er det vanskelig å lure en løgndetektor?', svar:['Du kan ikke styre adrenalinet med viljen','Den måler hvor mye insulin du har','Den leser tankene dine','Den måler lengden din'], fork:'Puls, pupiller og svette styres av adrenalinet, og det kan du ikke bestemme over.'},
    {id:'m23', t:'adrenalin', spm:'Hvorfor slapp kroppen ut adrenalin da menneskene møtte en bjørn i skogen?', svar:['For å komme seg unna fortest mulig eller kjempe','For å bli rolig og sove','For å fordøye maten bedre','For å lage mer bukspytt'], fork:'Adrenalinet gjorde kroppen klar til å flykte eller ta opp kampen.'},
    {id:'m24', t:'adrenalin', spm:'Hva er et eksempel på en psykisk utfordring som kan gi adrenalin?', svar:['Å be noen du liker med på kino','Å springe 100-meteren','Å sove lenge','Å spise frokost'], fork:'100-meteren er en fysisk utfordring. Kino-invitasjonen er psykisk.'},
    {id:'m25', t:'adrenalin', spm:'Hvilke aktiviteter oppsøker noen for å kjenne adrenalinkicket?', svar:['Rafting, strikkhopping og berg-og-dal-bane','Lesing, strikking og søvn','Frokost, lunsj og middag','Lekser og husarbeid'], fork:'Noen liker kicket, andre unngår slike situasjoner.'},

    {id:'m30', t:'insulin', spm:'Hvorfor tisser en med ubehandlet diabetes type 1 mye?', svar:['Sukkeret blir i blodet, og nyrene skiller det ut i urinen','Insulinet lager mer vann','Adrenalinet gjør blæren mindre','Hypofysen slutter å virke'], fork:'Druesukkeret kommer ikke inn i cellene. Nyrene renser blodet og skiller ut sukkeret i urinen. Da tisser personen mye og blir tørst.'},
    {id:'m31', t:'insulin', spm:'Hvorfor brukte man insulin fra gris før?', svar:['Grisens insulin er nesten likt menneskets','Grisen har ingen bukspyttkjertel','Det var søtere','Grisen lager adrenalin'], fork:'I dag lager spesielle bakterier insulinet.'},
    {id:'m32', t:'insulin', spm:'Hvorfor får stadig flere unge diabetes type 2?', svar:['Kosthold rikt på sukker og lite fysisk aktivitet','For mye søvn','For lite adrenalin','De har for mange sukkerdører'], fork:'Det står i boka på s. 81.'},
    {id:'m33', t:'insulin', spm:'Når lager bukspyttkjertelen insulin?', svar:['Når sukkernivået i blodet blir høyt','Når du er redd','Når du sover','Når pupillene utvider seg'], fork:'Insulinet hjelper sukkeret inn i cellene, så nivået i blodet går ned.'},
    {id:'m34', t:'insulin', spm:'Hvorfor trenger ikke alltid en type 2-diabetiker å ta insulin? (oppgave 9a)', svar:['Med fornuftig kosthold og fysisk aktivitet virker insulinet bedre på sukkerdørene','Fordi de ikke har bukspyttkjertel','Fordi de har for lite insulin','Fordi adrenalin gjør samme jobb'], fork:'Ved type 2 finnes det insulin. Sunn mat og aktivitet gjør at det virker bedre.'},
    {id:'m35', t:'insulin', spm:'Tenk selv: Hvorfor kan det være farlig å ta for mye insulin? (oppgave 9b)', tenk:true, svar:['For mye sukker går inn i cellene, så det blir for lite druesukker i blodet','Du får for mye sukker i blodet','Pupillene blir for store','Nyrene slutter å virke med en gang'], fork:'Insulin åpner sukkerdørene. For mye insulin trekker for mye sukker ut av blodet, og for lite druesukker i blodet er ikke bra.'},
    {id:'m36', t:'insulin', spm:'Tenk selv: Hvorfor har en diabetiker ofte noe søtt med seg? (oppgave 6)', tenk:true, svar:['For å få opp sukkeret i blodet hvis det blir for lavt','For å slippe å ta insulin','Fordi søtt lager insulin','For å få mer adrenalin'], fork:'Sukkernivået skal være jevnt. Blir det for lavt, kan noe søtt få det opp igjen raskt.'},
    {id:'m37', t:'insulin', spm:'En måler blodsukkeret og får 6 mmol per liter. Er det normalt?', svar:['Ja, normalt er 4–9 mmol per liter','Nei, det er altfor høyt','Nei, det er altfor lavt','Det kan man ikke vite'], fork:'Aktiviteten på s. 83: normal mengde er 4–9 mmol per liter blod.'},
    {id:'m38', t:'insulin', spm:'Hvor settes insulinsprøyten oftest?', svar:['I magen eller låret, rett under huden','I armen, dypt inn i muskelen','I hodet','I fingeren, inn i blodåren'], fork:'Nålen er tynn og sjelden lengre enn 1 cm.'},
    {id:'m39', t:'insulin', spm:'Hvilke sykdommer kan komme av for mye eller for lite druesukker i blodet?', svar:['Synsforstyrrelser og trange blodårer (åreforkalkning)','Brukket arm','Forkjølelse','Epilepsi'], fork:'Derfor prøver diabetikere å holde sukkeret på et jevnt og normalt nivå.'},
  ],

  /* ---------- FYLL INN (skriv ordet): [id, tema, før, etter, svar[]] ---------- */
  fyll: [
    ['f1','intro','Klynger av celler som lager hormoner, kaller vi','.',['kjertler','kjertel']],
    ['f2','intro','Hormonene fraktes rundt i kroppen med','.',['blodet','blod']],
    ['f3','intro','Nervesystemet sender elektriske','gjennom nervene.',['impulser','impuls','nerveimpulser']],
    ['f10','kjertler','«Dirigenten» i hormonsystemet heter','.',['hypofysen','hypofyse']],
    ['f11','kjertler','Kjønnshormonet hos menn heter','.',['testosteron']],
    ['f12','kjertler','Hos kvinner heter kjønnshormonene østrogen og','.',['progesteron']],
    ['f13','kjertler','Skjoldbruskkjertelen påvirker varmeproduksjonen, som også kalles','.',['stoffskiftet','stoffskifte']],
    ['f20','adrenalin','Adrenalin lages i','av binyrene.',['binyremargen','margen','binyremarg']],
    ['f21','adrenalin','Adrenalin får','til å slippe ut mer sukker i blodet.',['leveren','lever']],
    ['f22','adrenalin','Systemet i hjernen som gir en god følelse når vi spiser og drikker, kalles','.',['belønningssystemet','belønningssystem']],
    ['f30','insulin','Insulin lages i','.',['bukspyttkjertelen','bukspyttkjertel']],
    ['f31','insulin','Den viktigste energikilden for cellene er','.',['druesukker','glukose']],
    ['f32','insulin','Et annet ord for diabetes er','.',['sukkersyke']],
    ['f33','insulin','Insulin til diabetikere lages i dag av spesielle','.',['bakterier','bakterie']],
    ['f34','insulin','Trange blodårer kalles','.',['åreforkalkning']],
  ],

  /* ---------- REKKEFØLGE ---------- */
  rekke: [
    {id:'r1', t:'intro', spm:'Hvordan virker et hormon? Sett i riktig rekkefølge.', steg:['Hypofysen gir beskjed til en kjertel','Kjertelen lager hormonet sitt','Blodet frakter hormonet rundt i kroppen','Hormonet passer bare i celler med riktig «lås»','Cellene setter i gang en spesiell prosess']},
    {id:'r2', t:'adrenalin', spm:'Du møter en bjørn i skogen! Hva skjer i kroppen?', steg:['Hjernen vurderer situasjonen som en fare','Binyremargen slipper adrenalin ut i blodet','Leveren slipper ut sukker, og hjertet slår fortere','Musklene får mer sukker og oksygen','Du er klar til å stikke av eller kjempe']},
    {id:'r3', t:'insulin', spm:'Fra matpakke til energi i cellene. Sett i riktig rekkefølge.', steg:['Du spiser, og sukkeret i blodet blir høyt','Bukspyttkjertelen lager insulin','Blodet frakter insulinet rundt','Insulinet åpner sukkerdørene','Druesukker kommer inn i cellene og gir energi']},
    {id:'r4', t:'insulin', spm:'Hva skjer ved diabetes type 1 uten behandling?', steg:['Bukspyttkjertelen lager ikke insulin','Druesukkeret kommer ikke inn i cellene','Sukkeret blir værende i blodet','Nyrene skiller ut sukker i urinen','Personen tisser mye og blir tørst']},
  ],

  /* ---------- SORTER i to grupper ---------- */
  sorter: [
    {id:'so1', t:'intro', spm:'Hører det til nervesystemet eller hormonsystemet?', a:'⚡ Nervesystemet', b:'🩸 Hormonsystemet',
     A:['Elektriske impulser','Går gjennom nervene','Går veldig raskt','Treffer presist','Virker med en gang'],
     B:['Stoffer i blodet','Bruker litt tid','Virker på mange celler samtidig','Kan virke lenge','Settes i gang av kjertler']},
    {id:'so2', t:'insulin', spm:'Passer det best med diabetes type 1 eller type 2?', a:'1️⃣ Type 1', b:'2️⃣ Type 2',
     A:['Bukspyttkjertelen lager ikke insulin','Nesten 20 000 i Norge har den','Ikke så mye du kan gjøre for å unngå den'],
     B:['Det finnes insulin, men dørene åpner seg ikke','Den vanligste formen','Vanlig hos eldre','Sunn mat og mosjon kan hjelpe']},
    {id:'so3', t:'adrenalin', spm:'Fysisk eller psykisk utfordring? (eksemplene i boka)', a:'💪 Fysisk', b:'🧠 Psykisk',
     A:['Springe 100-meteren','Kjempe mot et rovdyr'],
     B:['Be noen du liker med på kino','Gjøre et godt inntrykk på noen']},
  ],

  /* ---------- MATCH: koble sammen ---------- */
  par: [
    {id:'p1', t:'kjertler', spm:'Koble kjertelen med hormonet', L:['Binyremargen','Bukspyttkjertelen','Testiklene','Eggstokkene','Hypofysen'], R:['Adrenalin','Insulin','Testosteron','Østrogen og progesteron','Hormoner som styrer andre kjertler']},
    {id:'p2', t:'kjertler', spm:'Koble kjertelen med det den påvirker', L:['Skjoldbruskkjertelen','Bukspyttkjertelen','Binyrene','Hypofysen','Eggstokkene'], R:['Stoffskiftet og lengdeveksten','Sukkernivået i blodet','Puls og reaksjonshastighet','Vannmengden i kroppen','Menstruasjonssyklusen']},
    {id:'p3', t:'adrenalin', spm:'Hva gjør adrenalinet med …', L:['Hjertet','Leveren','Pupillene','Hjernen','Huden'], R:['Slår fortere og kraftigere','Slipper ut mer sukker','Utvider seg','Får mer blod, du blir oppmerksom','Du svetter']},
    {id:'p4', t:'insulin', spm:'Koble sammen', L:['Insulin','Bukspytt','Druesukker','Type 1','Type 2'], R:['Åpner sukkerdørene','Bryter ned maten i tarmen','Cellenes viktigste energikilde','Lager ikke insulin','Dørene åpner seg ikke']},
  ],

  /* ---------- VELG ALLE SOM STEMMER ---------- */
  velg: [
    {id:'v1', t:'adrenalin', spm:'Mye adrenalin i blodet! Hva skjer? Velg alle som stemmer.', rett:['Pulsen øker','Pupillene utvider seg','Du svetter','Pusten går fortere','Leveren slipper ut sukker','Hjernen får mer blod'], feil:['Hjertet slår saktere','Pupillene blir mindre','Mindre sukker i blodet','Du blir trøtt']},
    {id:'v2', t:'insulin', kart:'diabetes', spm:'Oppgave 7: Lag tankekart! Hvilke ord hører sammen med diabetes?', rett:['Insulin','Bukspyttkjertelen','Druesukker','Sukkerdører','Sukker i urinen','Tørst','Arvelig','Sukkersyke','Insulinsprøyte','Kosthold og mosjon'], feil:['Adrenalin','Testosteron','Pupillene','Løgndetektor']},
    {id:'v3', t:'adrenalin', spm:'Hva måler en løgndetektor blant annet? Velg alle.', rett:['Puls','Størrelsen på pupillene','Hvor mye en svetter'], feil:['Blodsukkeret','Hvor høy du er','Hvor mye du tisser']},
    {id:'v4', t:'kjertler', spm:'Hva gjør hypofysen? Velg alle som stemmer.', rett:['Får andre kjertler til å lage sine hormoner','Regulerer vannmengden i kroppen','Viktig for melkeproduksjonen i brystene','Samarbeider med sentralnervesystemet'], feil:['Lager insulin','Lager adrenalin','Lager bukspytt']},
    {id:'v5', t:'intro', spm:'Hva stemmer om hormoner? Velg alle.', rett:['Lages i kjertler','Fraktes med blodet','Virker på mange celler samtidig','Kan virke lenge'], feil:['Går gjennom nervene','Virker på alle cellene i kroppen','Virker på et øyeblikk']},
  ],

  /* ---------- SKRIV: forklar med egne ord ----------
     begreper: [navn som vises, ...ordstammer som teller]   min: hvor mange som må med */
  skriv: [
    {id:'w1', t:'intro', spm:'Hva er en kjertel?', kilde:'Nøkkelspørsmål s. 77',
     begreper:[['celler','celle'],['klynge/samling','klynge','samling','gruppe','mange'],['lager hormoner','hormon']], min:2,
     modell:'En kjertel er en klynge av spesialiserte celler som lager hormoner.'},
    {id:'w2', t:'intro', spm:'Hva er hovedforskjellene på hormonsystemet og nervesystemet?', kilde:'Nøkkelspørsmål s. 77',
     begreper:[['elektriske impulser','elektrisk','impuls'],['nerver','nerve'],['blodet','blod'],['raskt / tregere','rask','fort','treg','sakte','tid','momentan','med en gang'],['mange celler','mange celle','samtidig'],['virker lenge','lenge','lang tid'],['presist','presis']], min:4,
     modell:'Nervesystemet sender elektriske impulser gjennom nervene. Det går raskt, treffer presist og virker med en gang. Hormonsystemet sender stoffer med blodet. Hormonene bruker litt tid, men virker på mange celler samtidig og kan virke lenge.'},
    {id:'w3', t:'intro', spm:'Forklar med nøkkel og lås (eller postbud og avis) hvorfor et hormon bare virker på noen celler.', kilde:'s. 76',
     begreper:[['nøkkel/lås eller avis/abonnerer','nøkkel','lås','avis','abonn','postkass'],['bare bestemte celler','bestemt','bare','noen celle','ikke alle'],['blodet frakter','blod','postbud']], min:2,
     modell:'Blodet er som et postbud som frakter hormonet til alle cellene. Men hormonet er som en nøkkel som bare passer i én lås. Bare de bestemte cellene som har riktig lås, setter i gang en prosess.'},
    {id:'w4', t:'intro', spm:'Oppgave 1: Hvordan blir hormoner transportert?', kilde:'Oppgave 1 s. 82',
     begreper:[['med blodet','blod']], min:1,
     modell:'Hormonene blir transportert med blodet rundt i kroppen.'},

    {id:'w10', t:'kjertler', spm:'Hva gjør hypofysen?', kilde:'Nøkkelspørsmål s. 77',
     begreper:[['styrer de andre kjertlene','andre kjert','styr','dirigent','bestemm','beskjed'],['vannmengden','vann'],['melkeproduksjon','melk'],['under hjernen / samarbeider med nervesystemet','hjern','nervesystem']], min:2,
     modell:'Hypofysen henger under hjernen og er dirigenten i hormonsystemet. Den lager hormoner som får de andre kjertlene til å lage sine hormoner. Den lager også hormoner som regulerer vannmengden i kroppen, og den er viktig for melkeproduksjonen.'},
    {id:'w11', t:'kjertler', spm:'Hva heter kjønnshormonene, og hvor lages de?', kilde:'Nøkkelspørsmål s. 77',
     begreper:[['testosteron','testosteron'],['østrogen','østrogen','ostrogen'],['progesteron','progesteron'],['testiklene/eggstokkene','testik','eggstok']], min:3,
     modell:'Hos menn heter kjønnshormonet testosteron, og det lages i testiklene. Hos kvinner heter kjønnshormonene østrogen og progesteron, og de lages i eggstokkene.'},
    {id:'w12', t:'kjertler', spm:'Oppgave 3: Hormonene styrer mange prosesser i kroppen. Skriv en liste med fem slike prosesser.', kilde:'Oppgave 3 s. 82', liste:5,
     begreper:[['vannmengden','vann'],['melkeproduksjon','melk'],['stoffskiftet / varmeproduksjon','stoffskift','varme'],['lengdeveksten','lengde','vekst'],['utvikling av sentralnervesystemet','sentralnerve','nervesystem'],['puls','puls','hjert'],['reaksjonshastighet','reaksjon'],['salter','salt'],['sukkernivået i blodet','sukker'],['kjønnsutvikling / pubertet','kjønn','pubertet'],['menstruasjonssyklus','menstruasjon']], min:5,
     modell:'1. Vannmengden i kroppen\n2. Stoffskiftet (varmeproduksjonen)\n3. Lengdeveksten\n4. Sukkernivået i blodet\n5. Endringene i puberteten\n(Også: melkeproduksjon, puls, salter, menstruasjonssyklus.)'},
    {id:'w13', t:'kjertler', spm:'Hva gjør hormonene fra skjoldbruskkjertelen?', kilde:'s. 77',
     begreper:[['stoffskiftet / varmeproduksjon','stoffskift','varme'],['lengdeveksten','lengde','vekst'],['utviklingen av sentralnervesystemet','sentralnerve','nervesystem','hjern']], min:2,
     modell:'Hormonene fra skjoldbruskkjertelen påvirker varmeproduksjonen (stoffskiftet), lengdeveksten og utviklingen av sentralnervesystemet.'},

    {id:'w20', t:'adrenalin', spm:'Hvilken kjertel produserer adrenalin?', kilde:'Nøkkelspørsmål s. 79',
     begreper:[['binyrene / binyremargen','binyre']], min:1,
     modell:'Adrenalin lages i binyremargen, som er en del av binyrene.'},
    {id:'w21', t:'adrenalin', spm:'Hvordan virker adrenalin på leveren?', kilde:'Nøkkelspørsmål s. 79',
     begreper:[['sukker','sukker'],['ut i blodet','blod'],['drivstoff til musklene','musk','drivstoff','energi']], min:2,
     modell:'Adrenalin virker på sukkerlageret i leveren, så mer sukker slippes ut i blodet. Sukkeret blir drivstoff til musklene.'},
    {id:'w22', t:'adrenalin', spm:'Hvordan kan adrenalinet hjelpe deg i en faresituasjon?', kilde:'Nøkkelspørsmål s. 79',
     begreper:[['hjertet/pulsen','hjert','puls'],['mer blod og oksygen','oksygen','blod'],['sukker fra leveren','sukker','lever'],['musklene','musk'],['oppmerksom / pupillene','oppmerksom','pupill'],['kjempe eller stikke av','kjemp','kamp','stikk','flykt','komme seg','løpe','slåss']], min:3,
     modell:'Adrenalinet gjør kroppen klar. Leveren slipper ut sukker, og hjertet slår fortere, så musklene får mer sukker og oksygen. Pupillene utvider seg og hjernen får mer blod, så du blir mer oppmerksom. Da kan du stikke av eller kjempe.'},
    {id:'w23', t:'adrenalin', spm:'Hva menes med «belønningssystem»?', kilde:'Nøkkelspørsmål s. 79',
     begreper:[['i hjernen','hjern'],['god følelse','god','godt','følelse'],['noe lurt for å overleve (spise, drikke)','overlev','spis','drikk'],['rus','rus']], min:2,
     modell:'Belønningssystemet er et system i hjernen som gir oss en god følelse når vi gjør noe lurt for å overleve, som å spise og drikke. Rus kan gi den samme gode følelsen.'},
    {id:'w24', t:'adrenalin', spm:'Hvorfor kan man ikke så lett lure en løgndetektor?', kilde:'s. 79',
     begreper:[['kan ikke styre adrenalinet','vilje','styr','bestemm','kontroll'],['puls','puls'],['pupillene','pupill'],['svette','svett']], min:2,
     modell:'Løgndetektoren måler blant annet puls, pupillene og hvor mye du svetter. Alt dette påvirkes av adrenalinet, og det kan du ikke styre med viljen.'},

    {id:'w30', t:'insulin', spm:'Hvilken funksjon har insulin?', kilde:'Nøkkelspørsmål s. 81',
     begreper:[['druesukker','sukker','glukose'],['inn i cellene','celle'],['åpner dørene','dør','åpne']], min:2,
     modell:'Insulin åpner «sukkerdørene» på cellene, så druesukker kommer inn i cellene og kan gi dem energi.'},
    {id:'w31', t:'insulin', spm:'Hvordan lages insulinet som brukes i behandling av diabetes?', kilde:'Nøkkelspørsmål s. 81',
     begreper:[['bakterier (i dag)','bakteri'],['fra gris (før)','gris']], min:1,
     modell:'I dag lages insulinet av spesielle bakterier. Før i tiden brukte man insulin fra gris.'},
    {id:'w32', t:'insulin', spm:'Hva kan forklaringen være på at stadig flere får diabetes type 2?', kilde:'Nøkkelspørsmål s. 81',
     begreper:[['kosthold med mye sukker','kost','sukker','mat','spis','søt'],['lite fysisk aktivitet','aktiv','mosjon','trening','trener','bevege','sitt']], min:2,
     modell:'Mange har et kosthold som er veldig rikt på sukker, og de er lite fysisk aktive.'},
    {id:'w33', t:'insulin', spm:'Hva er forskjellen på diabetes type 1 og type 2?', kilde:'Nøkkelspørsmål s. 81',
     begreper:[['type 1: lager ikke insulin','ikke insulin','mangel','mangler','lager ikke','produserer ikke','ingen insulin'],['type 2: dørene åpner seg ikke','dør','åpne','virker ikke','fungerer ikke'],['type 2 er vanligst / eldre','vanlig','eldre']], min:2,
     modell:'Ved type 1 lager ikke bukspyttkjertelen insulin. Ved type 2 finnes det insulin, men sukkerdørene åpner seg ikke som de skal. Type 2 er vanligst og er spesielt vanlig hos eldre.'},
    {id:'w34', t:'insulin', spm:'Oppgave 2: Hvilket hormon lager bukspyttkjertelen, og hvorfor er det viktig?', kilde:'Oppgave 2 s. 82',
     begreper:[['insulin','insulin'],['sukkeret i blodet','sukker','glukose'],['inn i cellene / energi','celle','energi']], min:2,
     modell:'Bukspyttkjertelen lager insulin. Insulin er viktig fordi det får druesukkeret inn i cellene, så de får energi og sukkernivået i blodet holdes riktig.'},
    {id:'w35', t:'insulin', spm:'Hvorfor tisser en ubehandlet diabetiker mye og blir tørst?', kilde:'s. 80',
     begreper:[['sukkeret blir i blodet','blod'],['nyrene','nyre'],['sukker i urinen','urin','tiss']], min:2,
     modell:'Uten insulin kommer ikke druesukkeret inn i cellene, så det blir værende i blodet. Nyrene skiller ut sukkeret i urinen, så personen tisser mye og blir tørst.'},
    {id:'w36', t:'insulin', spm:'Oppgave 9a: Hvorfor trenger ikke alltid en type 2-diabetiker å ta insulin?', kilde:'Oppgave 9a s. 82',
     begreper:[['det finnes insulin','finnes','har insulin','lager insulin','nok insulin'],['sunn mat','kost','mat','spis'],['fysisk aktiv','aktiv','mosjon','trening','trener','bevege'],['insulinet virker bedre','bedre','dør']], min:2,
     modell:'Ved type 2 finnes det insulin i kroppen. Hvis personen spiser fornuftig og er fysisk aktiv, virker insulinet bedre på sukkerdørene, og sukkeret holdes på et normalt nivå.'},
  ],

  /* ---------- TABELL (oppgave 11). fast: tekst som står i boka. ellers ordstammer som godtas ---------- */
  tabell: {id:'tab1', t:'kjertler', spm:'Oppgave 11: Fyll ut tabellen. Skriv inn det som mangler.',
    kol:['Kjertel','Hormon','Virkning'],
    rader:[
      [{fast:'hypofyse'}, {stammer:['styr','andre kjert','vann','melk','antidiuretisk'], fasit:'hormoner som styrer andre kjertler'}, {stammer:['andre kjert','styr','vann','melk'], fasit:'styrer andre kjertler, vannmengden'}],
      [{stammer:['eggstok'], fasit:'eggstokk'}, {fast:'østrogen'}, {stammer:['kjønn','pubertet','menstruasjon','melk'], fasit:'kjønnsutvikling, menstruasjonssyklus'}],
      [{stammer:['bukspytt'], fasit:'bukspyttkjertel'}, {stammer:['insulin'], fasit:'insulin'}, {fast:'sukkernivå'}],
      [{fast:'testikkel'}, {stammer:['testosteron'], fasit:'testosteron'}, {stammer:['kjønn','pubertet'], fasit:'kjønnsutvikling, pubertet'}],
    ]},

  /* Fagord som stavekontrollen skal godta */
  fagord: ['hypofysen','hypofyse','skjoldbruskkjertelen','skjoldbruskkjertel','binyrene','binyre','binyrer','binyremargen','binyremarg','bukspyttkjertelen','bukspyttkjertel','bukspytt',
    'eggstokkene','eggstokker','testiklene','testikler','testosteron','østrogen','progesteron','insulin','insulinet','adrenalin','adrenalinet','adrenalinkick','druesukker','druesukkeret',
    'sukkerdører','sukkerdørene','sukkerdør','insulindører','diabetes','diabetiker','diabetikere','sukkersyke','åreforkalkning','belønningssystem','belønningssystemet','løgndetektor',
    'kjønnshormoner','kjønnshormonene','kjønnshormon','stoffskiftet','stoffskifte','lengdeveksten','melkeproduksjonen','menstruasjonssyklusen','menstruasjonssyklus','momentant','mmol','pupillene'],
};
