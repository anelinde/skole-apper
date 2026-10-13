/* =====================================================================
   INNHOLD: Naturfagsprøve uke 42 – Nervesystemet (Eureka 9, kap. 3, s. 55–69)
   + celler, fotosyntese og celleånding fra pensumlista.
   Alt er skrevet med egne ord. Ingenting er kopiert fra boka.
   ===================================================================== */
window.PROVE = {
  tittel: 'Naturfag: Nervesystemet',
  provedato: '2026-10-16', // FORELØPIG: uke 42. Oppdateres når datoen er kjent.
  lagringsnokkel: 'naturfag_v1',

  temaer: [
    {id:'celle',    e:'🧫', navn:'Celler',                 desc:'Plantecelle og dyrecelle', kilde:'Fra pensumlista. Ikke i bokbildene.'},
    {id:'foto',     e:'🌱', navn:'Fotosyntese og celleånding', desc:'Ordlikning og reaksjonslikning', kilde:'Fra pensumlista. Ikke i bokbildene.'},
    {id:'nerve',    e:'⚡', navn:'Nervecellen',            desc:'Akson, dendritter og myelin (s. 56–57)'},
    {id:'synapse',  e:'🔀', navn:'Nervecellene samarbeider', desc:'Synaptisk spalte, transmitterstoff, gift og narkotika (s. 58–59)'},
    {id:'sns',      e:'🧠', navn:'Sentralnervesystemet',   desc:'Hjernen og ryggmargen (s. 60–61)'},
    {id:'perifer',  e:'🌐', navn:'Det perifere nervesystemet', desc:'Somatisk, sympatisk, parasympatisk (s. 62–63)'},
    {id:'refleks',  e:'🦵', navn:'Reflekser og sanser',    desc:'Refleksbuen, og fra katt til brems (s. 64–65)'},
    {id:'sykdom',   e:'🏥', navn:'Sykdommer',              desc:'Epilepsi, hjernehinnebetennelse, MS (s. 66–69)', kilde:'MS og Parkinson står ikke i bokbildene.'},
    {id:'bedovelse',e:'💊', navn:'Bedøvelse og smertestillende', desc:'Hvordan stoffene påvirker nervesystemet', kilde:'Fra pensumlista. Bare delvis i boka (s. 59).'},
  ],

  /* ---------- BEGREPER (begrepskort, begrep ↔ forklaring) ---------- */
  begreper: [
    // Celler
    ['b1','celle','cellemembran','Tynn hinne rundt cellen som bestemmer hvilke stoffer som slipper inn og ut.'],
    ['b2','celle','cellekjerne','Inneholder arvestoffet (DNA) og styrer det som skjer i cellen.'],
    ['b3','celle','cytoplasma','Væske som ligner gelé, inne i cellen. Her skjer mange av cellens prosesser.'],
    ['b4','celle','mitokondrie','Cellens «kraftverk». Her skjer celleåndingen, som gir cellen energi.'],
    ['b5','celle','cellevegg','Stiv vegg utenfor cellemembranen i planteceller. Gir cellen fast form og støtte.'],
    ['b6','celle','kloroplast','Grønnkorn i planteceller. Inneholder klorofyll, og her skjer fotosyntesen.'],
    ['b7','celle','vakuole','Stor væskefylt blære i planteceller. Lagrer vann og stoffer og holder cellen spent.'],
    ['b8','celle','klorofyll','Grønt fargestoff i kloroplastene som fanger opp lysenergi.'],
    // Fotosyntese
    ['b9','foto','fotosyntese','Planter lager glukose og oksygen av karbondioksid og vann, ved hjelp av lysenergi.'],
    ['b10','foto','celleånding','Cellene bryter ned glukose med oksygen og får energi. Det dannes karbondioksid og vann.'],
    ['b11','foto','glukose','Druesukker (C₆H₁₂O₆). Lages i fotosyntesen og brukes som energi i celleåndingen.'],
    // Nervecellen
    ['b12','nerve','nervecelle','Spesiell celle som kan motta og sende informasjon som elektriske impulser.'],
    ['b13','nerve','cellekropp','Delen av nervecellen der cellekjernen ligger.'],
    ['b14','nerve','dendritt','Korte, greinete utløpere som tar imot impulser fra andre celler.'],
    ['b15','nerve','akson','Lang utløper som sender impulsen videre til neste celle. Kan være over en meter lang.'],
    ['b16','nerve','myelin (hjelpeceller)','Hjelpeceller som ligger rundt aksonet med jevne mellomrom. De gjør at impulsene går mye raskere.'],
    ['b17','nerve','nerveimpuls','Svakt elektrisk signal som går gjennom nervecellen.'],
    ['b18','nerve','nerve (nervestreng)','En bunt av mange aksoner som går til samme område i kroppen.'],
    ['b19','nerve','sensorisk nervecelle','Fører impulser fra sansecellene inn til sentralnervesystemet.'],
    ['b20','nerve','motorisk nervecelle','Fører impulser fra sentralnervesystemet ut til musklene.'],
    ['b21','nerve','sansecelle','Celle som registrerer noe vi ser, hører, smaker, lukter eller føler, og sender impulser videre.'],
    // Synapsen
    ['b23','synapse','synaptisk spalte','Det lille mellomrommet mellom enden av aksonet og neste celle.'],
    ['b24','synapse','transmitterstoff','Signalstoff som slippes ut i den synaptiske spalten og bærer signalet over til neste celle.'],
    ['b25','synapse','mottaker','Spesielle steder på dendritten til neste celle der transmitterstoffet binder seg, så signalet går videre.'],
    ['b26','synapse','avhengighet','Kroppen har vent seg til et stoff, så man trenger mer for samme virkning og får det vondt uten.'],
    // SNS
    ['b28','sns','sentralnervesystemet','Hjernen og ryggmargen.'],
    ['b29','sns','storhjernen','Største del av hjernen. Styrer tankene, bevisstheten og intelligensen vår.'],
    ['b30','sns','hjernebarken','Det grå, ytterste laget av storhjernen, ca. 3 mm tykt. Består av nervecellekropper og styrer bevisstheten og intelligensen.']
    ,['b61','sns','venstre hjernehalvdel','Kalles ofte den «logiske» halvdelen. Viktigst når du skal oppfatte detaljer, lese, skrive og huske ord og tall.']
    ,['b62','sns','høyre hjernehalvdel','Kalles ofte den «kunstneriske» halvdelen. Arbeider mer helhetlig, og er viktigst når du synger, tegner og er kreativ.'],
    ['b31','sns','lillehjernen','Styrer balansen og finjusterer bevegelsene våre.'],
    ['b32','sns','hjernestammen','Styrer livsviktige ting som går automatisk: pust og hjerteslag.'],
    ['b33','sns','hypofysen','Ligger i hjernestammen og er ikke større enn en ert. Viktig for produksjonen av hormoner i kroppen.'],
    ['b34','sns','ryggmargen','Hovedkabelen som forbinder hjernen med nervene i resten av kroppen. Ligger inne i ryggsøylen.'],
    ['b35','sns','hjernehinner','Hinner som ligger rundt hjernen og ryggmargen og beskytter dem.'],
    ['b36','sns','hjernevæske','Væske rundt hjernen og ryggmargen som virker som støtdemper.'],
    // Perifere
    ['b37','perifer','det perifere nervesystemet','Alle nervene utenfor hjernen og ryggmargen.'],
    ['b38','perifer','det somatiske nervesystemet','Den viljestyrte delen: styrer skjelettmusklene og tar imot informasjon fra sanseorganene.'],
    ['b39','perifer','det autonome nervesystemet','Den automatiske delen (ikke viljestyrt): styrer indre organer, for eksempel hjertet, pusten og fordøyelsen.'],
    ['b40','perifer','det sympatiske nervesystemet','Gjør kroppen kampklar: pulsen øker, pupillene utvides og fordøyelsen dempes.'],
    ['b41','perifer','det parasympatiske nervesystemet','Roer kroppen ned etter stress: pulsen går ned og fordøyelsen kommer i gang igjen.'],
    ['b42','perifer','viljestyrt','Noe vi bestemmer selv, for eksempel å løfte armen.'],
    // Reflekser
    ['b43','refleks','refleks','Rask, ubevisst og automatisk reaksjon. Impulsen går via ryggmargen uten å vente på storhjernen.'],
    ['b44','refleks','refleksbue','Veien impulsen går i en refleks (boka kaller den også en refleksløyfe): sansecelle → sensorisk nerve → ryggmargen → motorisk nerve → muskel.'],
    ['b45','refleks','knerefleksen','Et forsiktig slag rett under kneskåla strekker muskelen på framsiden av låret. Muskelen får beskjed om å trekke seg sammen, og leggen vipper fram.'],
    ['b46','refleks','medfødt refleks','Refleks vi har fra vi blir født, for eksempel sugerefleksen og griperefleksen.'],
    ['b47','refleks','lært refleks','Bevegelse som blir automatisk etter mye øving, for eksempel å sykle.'],
    // Sykdommer
    ['b48','sykdom','epilepsi','Sykdom der nerveceller i hjernen plutselig sender ukontrollerte impulser («elektrisk kaos»), som gir anfall.'],
    ['b49','sykdom','partielt anfall','Epilepsianfall i bare en del av hjernen, for eksempel rykninger i en arm.'],
    ['b50','sykdom','generalisert anfall','Epilepsianfall i store deler av hjernen. Personen blir ofte bevisstløs og får kramper.'],
    ['b52','sykdom','hjernehinnebetennelse','Betennelse i hjernehinnene, skyldes bakterier eller virus. Kan være livsfarlig.'],
    ['b53','sykdom','spinalpunksjon','Prøve av hjernevæsken med en nål mellom ryggvirvlene nederst i ryggen.'],
    ['b54','sykdom','MS (multippel sklerose)','Immunforsvaret ødelegger myelinet rundt aksonene i hjernen og ryggmargen, så signalene går dårlig.'],
    ['b55','sykdom','Parkinsons sykdom','Boka nevner den som eksempel på en sykdom som kan komme av at overføringen av impulser mellom nervecellene ikke fungerer som den skal.'],
    ['b56','sykdom','vaksine','Gjør at kroppen danner motstandsstoffer mot for eksempel en bakterie. Må tas før man får sykdommen.'],
    // Bedøvelse
    ['b57','bedovelse','lokalbedøvelse','Stopper nerveimpulsene i et lite område, så smertesignalene ikke når hjernen. Du er våken.'],
    ['b58','bedovelse','narkose','Full bedøvelse: påvirker hjernen så du sover og ikke kjenner eller husker smerte.'],
    ['b59','bedovelse','smertestillende','Medisin som demper smertesignalene, så du kjenner mindre smerte.'],
    ['b60','bedovelse','muskelavslappende','Stoff som hindrer transmitterstoffet i å virke på musklene, så de slapper av.'],
  ],

  /* ---------- FORKLAR (skriveoppgaver med begrepssjekk) ----------
     begreper: [visningsnavn, ...ordstammer som teller]  min: hvor mange som må med */
  forklar: [
    {id:'f1', t:'celle', spm:'Beskriv hvordan en plantecelle er bygd opp, og forklar hva de ulike delene gjør.',
     begreper:[['cellevegg','cellevegg'],['cellemembran','cellemembran','membran'],['cellekjerne','cellekjerne','kjerne'],['cytoplasma','cytoplasma'],['kloroplast','kloroplast','grønnkorn'],['vakuole','vakuole'],['mitokondrie','mitokondri']], min:5,
     modell:'En plantecelle har en stiv cellevegg ytterst som gir form og støtte. Innenfor ligger cellemembranen, som bestemmer hva som slipper inn og ut. Cellekjernen har arvestoffet og styrer cellen. Cellen er fylt med cytoplasma. Kloroplastene har klorofyll og er der fotosyntesen skjer. Mitokondriene står for celleåndingen og gir energi. Den store vakuolen lagrer vann og holder cellen spent.'},
    {id:'f2', t:'celle', spm:'Hva er forskjellen på en plantecelle og en dyrecelle?',
     begreper:[['cellevegg','cellevegg'],['kloroplast','kloroplast','grønnkorn'],['vakuole','vakuole'],['begge har cellekjerne/cellemembran','cellekjerne','cellemembran','begge']], min:3,
     modell:'Begge har cellemembran, cellekjerne, cytoplasma og mitokondrier. Bare plantecellen har cellevegg, kloroplaster og en stor vakuole. Dyreceller har ikke cellevegg, og de har ingen kloroplaster fordi dyr ikke driver fotosyntese.'},
    {id:'f3', t:'foto', spm:'Forklar hva fotosyntese er. Skriv også ordlikningen.',
     begreper:[['karbondioksid','karbondioksid','co2'],['vann','vann','h2o'],['lysenergi','lys','sollys'],['glukose','glukose','druesukker','sukker'],['oksygen','oksygen','o2'],['kloroplast/klorofyll','kloroplast','klorofyll','grønnkorn']], min:5,
     modell:'Fotosyntese er prosessen der planter lager sin egen næring. I kloroplastene bruker de lysenergi som klorofyllet fanger opp, til å lage glukose og oksygen av karbondioksid og vann. Ordlikning: karbondioksid + vann → glukose + oksygen (med lysenergi).'},
    {id:'f4', t:'foto', spm:'Forklar hva celleånding er, og hvor i cellen det skjer. Skriv ordlikningen.',
     begreper:[['glukose','glukose','druesukker','sukker'],['oksygen','oksygen','o2'],['karbondioksid','karbondioksid','co2'],['vann','vann','h2o'],['energi','energi'],['mitokondrie','mitokondri']], min:5,
     modell:'Celleånding er prosessen der cellene får energi. I mitokondriene brytes glukose ned ved hjelp av oksygen. Da dannes karbondioksid og vann, og det frigjøres energi. Ordlikning: glukose + oksygen → karbondioksid + vann + energi. Celleånding skjer både i planteceller og dyreceller.'},
    {id:'f5', t:'foto', spm:'Hvordan henger fotosyntese og celleånding sammen?',
     begreper:[['motsatte/omvendte prosesser','motsatt','omvendt','snudd'],['glukose','glukose','sukker'],['oksygen','oksygen'],['karbondioksid','karbondioksid','co2'],['energi','energi']], min:4,
     modell:'Fotosyntese og celleånding er motsatte prosesser. Fotosyntesen bruker karbondioksid og vann og lager glukose og oksygen. Celleåndingen bruker glukose og oksygen og lager karbondioksid og vann, og frigjør energi. Det plantene lager, bruker dyr og mennesker, og omvendt.'},
    {id:'f6', t:'nerve', spm:'Beskriv hvordan en nervecelle er bygd opp, og forklar hva delene gjør.',
     begreper:[['cellekropp','cellekropp'],['cellekjerne','cellekjerne','kjerne'],['dendritter (mottar)','dendritt'],['akson (sender)','akson'],['myelin/hjelpeceller','myelin','hjelpecelle'],['impuls','impuls','signal']], min:5,
     modell:'En nervecelle har en cellekropp med cellekjerne. Ut fra cellekroppen går utløpere. Dendrittene er korte og greinete og tar imot impulser fra andre celler. Aksonet er en lang utløper som sender impulsen videre til neste celle. Rundt mange aksoner ligger hjelpeceller (myelin), som gjør at impulsene går mye raskere.'},
    {id:'f7', t:'nerve', spm:'Hvorfor er myelin (hjelpecellene) viktig?',
     begreper:[['myelin/hjelpeceller','myelin','hjelpecelle'],['akson','akson'],['raskere','rask','fort'],['impuls','impuls','signal'],['ligger rundt aksonet','rundt','lomp','pølse']], min:4,
     modell:'Myelin er hjelpeceller som ligger rundt aksonet med jevne mellomrom, litt som lomper rundt en pølse. Hjelpecellene gjør at impulsene går mye raskere: fra noen få meter per sekund til over 100 meter per sekund. Uten hjelpecellene ville vi reagert altfor tregt, for eksempel når vi tråkker på en spiker.'},
    {id:'f8', t:'synapse', spm:'Forklar hva en synaptisk spalte er, og hva som skjer der.',
     begreper:[['akson','akson'],['synaptisk spalte/mellomrom','spalte','mellomrom'],['blærer','blære'],['transmitterstoff','transmitter','signalstoff'],['mottakere','mottaker','reseptor'],['neste celle / dendritt','dendritt','neste'],['ny impuls','impuls','signal']], min:5,
     modell:'Den synaptiske spalten er et lite mellomrom mellom enden av aksonet og neste celle. Når den elektriske impulsen kommer til enden av aksonet, slipper små blærer ut transmitterstoff i spalten. Transmitterstoffet binder seg til mottakere på dendritten til neste nervecelle, og der starter en ny elektrisk impuls. Slik går signalet videre fra celle til celle.'},
    {id:'f9', t:'synapse', spm:'Hvorfor kan bruk av narkotika gjøre deg avhengig?',
     begreper:[['nerveceller','nervecelle'],['transmitterstoff','transmitter'],['mottakere (blir færre)','mottaker','reseptor'],['trenger mer','mer'],['ubehag uten','ubehag','abstinens','vondt','dårlig'],['avhengig','avhengig']], min:4,
     modell:'Narkotika stimulerer de samme nervecellene som gir god følelse, men mye kraftigere enn normalt. Kroppen tilpasser seg ved at antallet mottakere for transmitterstoffet blir mindre. Da trengs mer av stoffet for å få samme gode følelse, og uten stoffet føles det ubehagelig fordi cellene blir for lite stimulert. Det er dette som er avhengighet.'},
    {id:'f10', t:'synapse', spm:'Forklar hvordan gift i en giftpil lammer et dyr.',
     begreper:[['transmitterstoff','transmitter'],['mottakere','mottaker','reseptor'],['muskelceller','muskel','muskl'],['lammet','lam'],['pustemuskler/kveles','pust','kvel']], min:4,
     modell:'Giften hindrer transmitterstoffet fra nervecellene i å binde seg til mottakerne på muskelcellene. Da får ikke musklene beskjed om å trekke seg sammen, og dyret blir lammet. Også pustemusklene slutter å virke, så dyret kveles.'},
    {id:'f11', t:'sns', spm:'Gjør rede for hvordan sentralnervesystemet er bygd opp og hvordan det fungerer.',
     begreper:[['hjernen','hjerne'],['ryggmargen','ryggmarg'],['storhjernen','storhjern'],['lillehjernen','lillehjern'],['hjernestammen','hjernestamme'],['beskyttelse (hodeskalle/hinner/væske)','hodeskalle','hjernehinne','hinne','væske','ryggvirvel']], min:5,
     modell:'Sentralnervesystemet består av hjernen og ryggmargen. Hjernen deles i storhjernen (tanker, bevissthet og intelligens), lillehjernen (bevegelse og balanse) og hjernestammen (pust, hjerteslag og spytt). Ryggmargen er hovedkabelen mellom hjernen og nervene i kroppen. Hjernen er beskyttet av hodeskallen og ryggmargen av ryggvirvlene, og begge av hjernehinner og hjernevæske som demper støt.'},
    {id:'f12', t:'sns', spm:'Hva skjer hvis ryggmargen blir skadet? Forklar hvorfor.',
     begreper:[['ryggmargen','ryggmarg'],['hjernen','hjerne'],['signaler/impulser kommer ikke fram','signal','impuls','beskjed','informasjon'],['lammet','lam'],['høyere opp = større skade','høyere','nakke','høyt']], min:4,
     modell:'Ryggmargen er forbindelsen mellom hjernen og resten av kroppen. Blir den skadet, kommer ikke signalene fram forbi skadestedet. Da kan man bli lammet og miste følelsen i den delen av kroppen som ligger nedenfor skaden. Jo høyere opp skaden er, for eksempel i nakken, desto større del av kroppen blir lammet.'},
    {id:'f13', t:'perifer', spm:'Gjør rede for hvordan det perifere nervesystemet er bygd opp og hvordan det fungerer.',
     begreper:[['nervene utenfor hjernen og ryggmargen','utenfor'],['somatiske','somatisk'],['viljestyrt','viljestyrt'],['autonome','autonom'],['sympatiske','sympatisk'],['parasympatiske','parasympatisk']], min:5,
     modell:'Det perifere nervesystemet er alle nervene utenfor hjernen og ryggmargen. Det har to deler. Det somatiske nervesystemet er viljestyrt: det styrer skjelettmusklene og tar imot informasjon fra sanseorganene. Det autonome nervesystemet er ikke viljestyrt og styrer de indre organene automatisk. Det autonome deles i det sympatiske, som gjør oss kampklare, og det parasympatiske, som roer oss ned.'},
    {id:'f14', t:'perifer', spm:'Hva skjer i kroppen når du blir redd og det sympatiske nervesystemet gjør deg kampklar?',
     begreper:[['sympatiske','sympatisk'],['puls/hjertet slår fortere','puls','hjerte'],['pupillene utvides','pupill'],['luftveiene utvides / pust','luftvei','pust'],['fordøyelsen dempes','fordøy','tarm','spytt']], min:4,
     modell:'Det sympatiske nervesystemet gjør kroppen klar til å slåss eller flykte. Hjertet slår fortere og kraftigere, pupillene utvides og luftveiene utvides så vi får inn mer luft. Fordøyelsen og spyttproduksjonen dempes, fordi det ikke er viktig akkurat da. Etterpå roer det parasympatiske nervesystemet kroppen ned igjen.'},
    {id:'f15', t:'refleks', spm:'Hva er en refleks? Forklar refleksbuen.',
     begreper:[['rask og ubevisst','rask','ubevisst','automatisk'],['sansecelle','sansecelle'],['sensorisk nerve','sensorisk'],['ryggmargen','ryggmarg'],['motorisk nerve','motorisk'],['muskel','muskel','muskl']], min:5,
     modell:'En refleks er en rask og ubevisst reaksjon. I refleksbuen registrerer en sansecelle noe, og impulsen går gjennom en sensorisk nerve inn til ryggmargen. Der kobles den direkte over til en motorisk nerve, som sender impulsen ut til en muskel som trekker seg sammen. Impulsen trenger ikke gå til storhjernen først, og derfor går det så fort.'},
    {id:'f16', t:'refleks', spm:'Du tar på en varm kokeplate. Beskriv hva som skjer i kroppen, og forklar hvorfor du trekker hånda unna før du kjenner smerten.',
     begreper:[['sanseceller i huden','sansecelle','hud'],['sensorisk nerve','sensorisk'],['ryggmargen','ryggmarg'],['motorisk nerve','motorisk'],['muskel','muskel','muskl'],['storhjernen (kommer senere)','storhjern','hjerne','smerte']], min:5,
     modell:'Sansecellene i huden registrerer varmen og sender impulser gjennom en sensorisk nerve til ryggmargen. Der kobles signalet direkte over til en motorisk nerve, og musklene i armen trekker hånda unna. Dette er en refleks. Samtidig går signalet videre opp til storhjernen, men den veien er lengre. Derfor kjenner vi smerten først etter at hånda allerede er trukket unna.'},
    {id:'f17', t:'refleks', spm:'Du sykler, og en katt hopper ut foran deg. Beskriv hva som skjer fra du ser katten til du har bremset.',
     begreper:[['øyet/sanseceller','øye','sansecelle'],['nerver til hjernen','synsnerv','sensorisk','nerve'],['synssenteret i storhjernen','syns','storhjern'],['tenke/vurdere/bestemme','vurder','tenk','bestem'],['ryggmargen','ryggmarg'],['motorisk nerve til musklene','motorisk','muskel','muskl']], min:5,
     modell:'Sansecellene i øyet registrerer katten og sender impulser gjennom nerver til synssenteret i storhjernen, der det du ser blir bearbeidet. Storhjernen vurderer situasjonen og bestemmer at du må bremse. Bevegelsessenteret sender impulser ned gjennom ryggmargen og ut i motoriske nerver til musklene i hendene, som klemmer inn bremsen. Fordi du må tenke og vurdere, tar dette lengre tid enn en refleks.'},
    {id:'f18', t:'refleks', spm:'Hva er forskjellen på medfødte og lærte reflekser? Gi eksempler.',
     begreper:[['medfødt = fra fødselen','født','medfødt'],['lært = øving','øv','lær','trening'],['eksempel medfødt (suge/gripe/kne)','suge','gripe','kne'],['eksempel lært (sykle/sjonglere)','sykl','sjongl'],['automatisk','automatisk']], min:4,
     modell:'Medfødte reflekser har vi fra vi blir født, for eksempel sugerefleksen, griperefleksen og knerefleksen. Lærte reflekser er bevegelser vi øver på så mye at de til slutt går automatisk, for eksempel å sykle eller sjonglere. I starten må vi tenke på hver bevegelse, men etter mye øving trenger vi ikke det lenger.'},
    {id:'f19', t:'sykdom', spm:'Hva er epilepsi? Forklar forskjellen på et partielt og et generalisert anfall.',
     begreper:[['nerveceller/impulser ukontrollert','nervecelle','impuls','kaos','ukontroll'],['hjernen','hjerne'],['partielt = en del av hjernen','partiel','del'],['generalisert = store deler','generalis','store'],['bevisstløs/kramper','bevisst','krampe','rykning']], min:4,
     modell:'Epilepsi er en sykdom der nerveceller i hjernen plutselig sender ukontrollerte impulser, et slags elektrisk kaos. Ved et partielt anfall er kaoset begrenset til en del av hjernen, for eksempel så man får rykninger i en arm. Ved et generalisert anfall gjelder det store deler av hjernen. Personen blir ofte bevisstløs, stiv og får kramper. Hjerneaktiviteten kan måles med elektroder festet på hodet. De fleste blir anfallsfrie med medisiner.'},
    {id:'f20', t:'sykdom', spm:'Hvorfor er hjernehinnebetennelse en alvorlig sykdom, og hva er symptomene?',
     begreper:[['bakterier eller virus','bakterie','virus'],['nær hjernen / varige skader','nær','skade','varig'],['hevelse i lukket rom','hevelse','hovn','trang','hodeskalle'],['nakkestiv','nakke'],['feber','feber'],['prikker (glasstest)','prikk','glass']], min:4,
     modell:'Hjernehinnebetennelse skyldes bakterier eller virus. Den er alvorlig fordi hjernehinnene ligger helt inntil hjernen. Betennelsen gir hevelse, og fordi hjernen ligger inne i den lukkede hodeskallen, blir det trangt og trykket øker. Det kan gi varige skader som blindhet og døvhet, eller død. Symptomene er feber, slapphet, nakkestivhet (klarer ikke å legge haken på brystet) og røde prikker som ikke blir bleke når man presser et glass mot dem.'},
    {id:'f21', t:'sykdom', spm:'Hva er MS (multippel sklerose), og hvorfor gir sykdommen problemer?',
     begreper:[['myelin','myelin','hjelpecelle'],['immunforsvaret angriper','immun','angrip'],['akson','akson','nerve'],['signalene går tregere/stopper','treg','signal','impuls'],['symptomer (nummen/syn/balanse/lammelser)','nummen','syn','balanse','lam','tretthet','slit']], min:4,
     modell:'MS er en sykdom der kroppens eget immunforsvar angriper myelinet rundt aksonene i hjernen og ryggmargen. Uten myelin går signalene tregere, eller de kommer ikke fram. Det kan gi nummenhet, synsforstyrrelser, problemer med balansen, tretthet og lammelser. Det finnes medisiner som bremser sykdommen, men ingen kur.'},
    {id:'f22', t:'bedovelse', spm:'Forklar hvordan lokalbedøvelse (f.eks. hos tannlegen) virker på nervesystemet.',
     begreper:[['nerveimpulser stoppes/blokkeres','stopp','blokker','hindr'],['nerver/nerveceller','nerve'],['smertesignal','smerte','signal','impuls'],['når ikke hjernen','hjerne'],['våken / bare et område','våken','område','lokal']], min:4,
     modell:'Lokalbedøvelse sprøytes inn i et lite område og stopper nervene der fra å sende impulser. Smertesignalene fra sansecellene kommer derfor ikke fram til hjernen, og da kjenner vi ikke smerten. Vi er våkne hele tiden, og det er bare området rundt sprøyta som blir bedøvd.'},
    {id:'f23', t:'bedovelse', spm:'Forklar forskjellen på lokalbedøvelse, narkose og smertestillende tabletter.',
     begreper:[['lokalbedøvelse: et område, våken','lokal','område','våken'],['narkose: sover/bevisstløs','narkose','sov','bevisst'],['smertestillende: demper smerte','demp','mindre','smertestill'],['nerveimpulser/signaler','impuls','signal'],['hjernen','hjerne']], min:4,
     modell:'Lokalbedøvelse stopper nerveimpulsene i et lite område, så smerten ikke når hjernen, mens du er våken. Narkose virker på hjernen så du sover og verken kjenner eller husker smerte. Ofte får du også muskelavslappende stoff, og da trenger du hjelp til å puste. Smertestillende tabletter fjerner ikke all følelse, men demper smertesignalene så du kjenner mindre smerte.'},
  ],

  /* ---------- REKKEFØLGE (prosesser) ---------- */
  rekkefolge: [
    {id:'r1', t:'refleks', tittel:'Refleksbuen: sett stegene i riktig rekkefølge', steg:[
      'Sansecellen registrerer noe (f.eks. et slag eller varme)','Impulsen går gjennom en sensorisk nerve','Impulsen kommer inn i ryggmargen','Impulsen kobles over til en motorisk nerve','Muskelen trekker seg sammen']},
    {id:'r2', t:'synapse', tittel:'Hva skjer i synapsen? Sett i riktig rekkefølge', steg:[
      'Den elektriske impulsen kommer til enden av aksonet','Blærene slipper ut transmitterstoff','Transmitterstoffet krysser den synaptiske spalten','Transmitterstoffet binder seg til mottakere på neste celle','En ny elektrisk impuls starter i neste nervecelle']},
    {id:'r3', t:'refleks', tittel:'Fra du ser katten til du bremser', steg:[
      'Sansecellene i øyet registrerer katten','Nerver sender impulser til hjernen','Synssenteret i storhjernen bearbeider det du ser','Storhjernen vurderer og bestemmer at du må bremse','Impulser går ned ryggmargen og ut i motoriske nerver','Musklene i hendene klemmer inn bremsen']},
    {id:'r4', t:'nerve', tittel:'Veien gjennom én nervecelle', steg:[
      'Dendrittene tar imot signalet','Signalet går til cellekroppen','Impulsen sendes ut gjennom aksonet','Impulsen når enden av aksonet']},
    {id:'r5', t:'refleks', tittel:'Knerefleksen', steg:[
      'Noen slår forsiktig rett under kneskåla','Muskelen på framsiden av låret blir strukket','Sanseceller i muskelen sender impulser gjennom nerver til ryggmargen','Fra ryggmargen går beskjeden tilbake gjennom nerver til muskelen','Muskelen trekker seg sammen og leggen vipper fram']},
    {id:'r7', t:'bedovelse', tittel:'Hvordan smerte fra en tå når hjernen', steg:[
      'Smertesanseceller i tåa registrerer skaden','Impulser går gjennom en sensorisk nerve','Impulsene går opp gjennom ryggmargen','Storhjernen tolker signalene som smerte']},
    {id:'r8', t:'sykdom', tittel:'Mistanke om hjernehinnebetennelse: hva skjer?', steg:[
      'Personen får feber, blir slapp og nakkestiv','Legen tar en spinalpunksjon og får ut litt hjernevæske','Hjernevæsken undersøkes for å finne ut om det er bakterier eller virus','Er det bakterier, får personen antibiotika med en gang']},
  ],

  /* ---------- SORTER ---------- */
  sorter: [
    {id:'s1', t:'perifer', tittel:'Sympatisk eller parasympatisk?', kurver:['Sympatisk (kampklar)','Parasympatisk (hvile)'], ting:[
      ['Pulsen øker',0],['Pupillene utvides',0],['Luftveiene utvides',0],['Mindre spytt',0],['Fordøyelsen dempes',0],
      ['Pulsen går ned',1],['Pupillene trekker seg sammen',1],['Luftveiene trekker seg sammen',1],['Mer spytt',1],['Tarmen jobber mer',1]]},
    {id:'s2', t:'celle', tittel:'Hvor finnes delen?', kurver:['Bare plantecelle','Begge celletyper'], ting:[
      ['Cellevegg',0],['Kloroplast',0],['Stor vakuole',0],['Cellemembran',1],['Cellekjerne',1],['Cytoplasma',1],['Mitokondrie',1]]},
    {id:'s3', t:'sns', tittel:'Sentralnervesystemet eller det perifere?', kurver:['Sentralnervesystemet','Det perifere'], ting:[
      ['Storhjernen',0],['Lillehjernen',0],['Hjernestammen',0],['Ryggmargen',0],['Isjasnerven i beinet',1],['Nervene i fingrene',1],['Nervene til hjertet',1]]},
    {id:'s4', t:'refleks', tittel:'Medfødt eller lært?', kurver:['Medfødt refleks','Lært refleks'], ting:[
      ['Sugerefleksen',0],['Griperefleksen',0],['Knerefleksen',0],['Å sykle (etter mye øving)',1],['Å sjonglere (etter mye øving)',1]]},
    {id:'s5', t:'perifer', tittel:'Somatisk eller autonomt?', kurver:['Somatisk (viljestyrt)','Autonomt (automatisk)'], ting:[
      ['Løfte armen',0],['Sende informasjon om hva vi ser og hører',0],['Sende informasjon om hva vi smaker og lukter',0],['Hjertet slår ca. 70 slag i minuttet',1],['Vi puster ca. 12 ganger i minuttet',1],['Fordøyelsen av maten',1],['Pupillene utvides når vi blir redde',1]]},
    {id:'s6', t:'sns', tittel:'Hvilken del av hjernen styrer det?', kurver:['Storhjernen','Lillehjernen','Hjernestammen'], ting:[
      ['Tanker og bevissthet',0],['Lese, skrive og huske ord og tall',0],['Synge og tegne',0],['Holde balansen',1],['Finjustere bevegelser',1],['Pusten',2],['Hjerteslagene',2],['At det dannes spytt',2]]},
    {id:'s7', t:'foto', tittel:'Fotosyntese eller celleånding?', kurver:['Fotosyntese','Celleånding'], ting:[
      ['Skjer i kloroplastene',0],['Trenger lysenergi',0],['Lager oksygen',0],['Bruker karbondioksid',0],['Skjer i mitokondriene',1],['Frigjør energi',1],['Bruker oksygen',1],['Lager karbondioksid',1]]},
    {id:'s8', t:'sykdom', tittel:'Hvilken sykdom passer?', kurver:['Epilepsi','Hjernehinnebetennelse','MS'], ting:[
      ['Elektrisk kaos i hjernen',0],['Partielt anfall: rykninger i en arm',0],['Partielle og generaliserte anfall',0],['Nakkestivhet og feber',1],['Spinalpunksjon',1],['Kan forebygges med vaksine',1],['Myelinet ødelegges',2],['Immunforsvaret angriper nervesystemet',2]]},
  ],

  /* ---------- HVORFOR / HVA SKJER HVIS (første svar er riktig) ---------- */
  hvorfor: [
    {id:'h1', t:'nerve', spm:'Hva er oppgaven til hjelpecellene (myelin) rundt aksonet?', svar:['Å gjøre at impulsene går mye raskere','Å lage transmitterstoff','Å gjøre aksonet kortere','Å ta imot impulser fra andre celler'], fork:'Med hjelpeceller går impulsen over 100 m/s. Uten går den bare noen få meter per sekund.'},
    {id:'h2', t:'refleks', spm:'Hvorfor trekker du foten unna FØR du kjenner smerten når du tråkker på en spiker?', svar:['Refleksen går via ryggmargen, mens signalet til storhjernen tar lengre tid','Smerten kommer alltid fra foten et sekund senere','Musklene i foten har sin egen hjerne','Det sympatiske nervesystemet stopper smerten'], fork:'Refleksbuen kobles i ryggmargen og trenger ikke storhjernen. Smerten kjenner vi først når signalet når storhjernen, og den veien er lengre.'},
    {id:'h3', t:'sns', spm:'En person skader ryggmargen i nakken. Hva skjer mest sannsynlig?', svar:['Store deler av kroppen nedenfor nakken blir lammet','Personen mister hukommelsen','Personen blir blind','Bare tærne blir lammet'], fork:'Signalene fra hjernen kommer ikke forbi skaden. Jo høyere opp skaden er, desto større del av kroppen blir lammet.'},
    {id:'h4', t:'sns', spm:'Hvorfor kan du gå og holde balansen uten å tenke på det?', svar:['Lillehjernen styrer balansen og finjusterer bevegelsene','Hjernestammen styrer synet','Hypofysen lager balansehormoner','Ryggmargen tenker for deg'], fork:'Øynene, balanseapparatet i øret og leddene sender informasjon. Lillehjernen setter den sammen og finjusterer bevegelsene.'},
    {id:'h5', t:'sns', spm:'Hvorfor er det livsfarlig å skade hjernestammen?', svar:['Den styrer pusten og hjerteslagene','Den styrer bare hukommelsen','Den lager blod','Den er den største delen av hjernen'], fork:'Hjernestammen styrer livsviktige funksjoner som går automatisk, som pust og hjerteslag.'},
    {id:'h6', t:'synapse', spm:'Hva skjer hvis transmitterstoffet ikke kan binde seg til mottakerne på muskelcellene?', svar:['Musklene får ikke beskjed og blir lammet','Musklene trekker seg sammen hele tiden','Nervecellene vokser','Ingenting, musklene klarer seg selv'], fork:'Uten at transmitterstoffet binder seg, får ikke muskelen signal om å trekke seg sammen. Det er slik gift i giftpiler virker.'},
    {id:'h7', t:'synapse', spm:'Hvorfor trenger en som bruker narkotika mer og mer for å få samme rus?', svar:['Antallet mottakere for transmitterstoffet blir færre','Narkotikaen blir svakere over tid','Nervecellene lager mer myelin','Hjernen glemmer stoffet'], fork:'Kroppen tilpasser seg: Mottakerne blir færre, så det trengs mer for samme virkning. Det er en del av avhengigheten.'},
    {id:'h8', t:'synapse', spm:'Hvorfor må en pasient i narkose ofte få hjelp til å puste?', svar:['De får et muskelavslappende stoff som også stopper pustemusklene','Lungene sovner','Hjernestammen fjernes under operasjonen','Det er for lite oksygen på sykehuset'], fork:'Narkose gis ofte med et stoff som virker som gift i en giftpil: musklene slapper av, også pustemusklene.'},
    {id:'h9', t:'perifer', spm:'Hvorfor får du munntørrhet og hjertebank når du er veldig nervøs før en prøve?', svar:['Det sympatiske nervesystemet gjør kroppen kampklar','Det parasympatiske nervesystemet roer deg ned','Lillehjernen mister balansen','Du har for lite myelin'], fork:'Det sympatiske nervesystemet øker pulsen og reduserer spyttproduksjonen. Det gjør kroppen klar til innsats.'},
    {id:'h11', t:'sykdom', spm:'Hvorfor er det viktig å finne ut om hjernehinnebetennelse skyldes bakterier eller virus?', svar:['Bakterier kan behandles med antibiotika, virus kan ikke','Virus er alltid farligere enn bakterier','Bakterier gir ingen symptomer','Det har ingen betydning'], fork:'Antibiotika virker bare mot bakterier. Bakteriell hjernehinnebetennelse er ofte farligst og må behandles raskt.'},
    {id:'h12', t:'sykdom', spm:'Hvorfor presser man et glass mot røde prikker ved mistanke om hjernehinnebetennelse?', svar:['Prikker som ikke blir bleke under glasset, kan være et faresignal','Glasset kjøler ned huden','For å telle prikkene','For å ta en spinalpunksjon'], fork:'Vanlig utslett forsvinner når man trykker. Prikker som ikke blir bleke, kan skyldes små blødninger, og det er et alvorlig tegn.'},
    {id:'h13', t:'sykdom', spm:'Hvorfor går signalene dårligere hos en som har MS?', svar:['Myelinet rundt aksonene blir ødelagt','Personen har for mange nerveceller','Hjernehinnene er betente','Det er for mye transmitterstoff'], fork:'Ved MS angriper immunforsvaret myelinet. Uten isolasjon går impulsene tregere eller stopper.'},
    {id:'h14', t:'sykdom', spm:'Hva kan utløse et epilepsianfall hos noen med epilepsi?', svar:['For lite søvn, stress eller alkohol','For mye frukt','Å lese en bok','Kald luft'], fork:'Mange med epilepsi merker at søvnmangel, stress og alkohol gjør at de lettere får anfall.'},
    {id:'h15', t:'bedovelse', spm:'Hvorfor kjenner du ikke at tannlegen borer, selv om du er våken?', svar:['Lokalbedøvelsen stopper nerveimpulsene fra tanna før de når hjernen','Tanna har ingen nerver','Storhjernen sover','Bedøvelsen fjerner sansecellene for alltid'], fork:'Lokalbedøvelse blokkerer nervene i et lite område. Smertesignalene når ikke hjernen, så vi kjenner ikke smerten.'},
    {id:'h17', t:'celle', spm:'Hvorfor har dyreceller ikke kloroplaster?', svar:['Dyr driver ikke fotosyntese, de får energi fra maten de spiser','Dyreceller er for små','Kloroplastene ligger i blodet','Dyreceller har cellevegg i stedet'], fork:'Kloroplaster brukes til fotosyntese. Dyr får glukose fra maten og trenger dem ikke.'},
    {id:'h18', t:'foto', spm:'Hvorfor trenger både planter og dyr mitokondrier?', svar:['Alle celler trenger energi fra celleånding','Bare for å lage oksygen','For å lage cellevegg','For å fange opp lys'], fork:'Celleånding skjer i mitokondriene i både planteceller og dyreceller og gir cellene energi.'},
    {id:'h19', t:'refleks', spm:'Hvorfor går det tregere å bremse for en katt enn å trekke hånda fra en varm plate?', svar:['Du må tenke og vurdere i storhjernen før du handler','Øynene er tregere enn huden','Bremsen er tung','Ryggmargen er sovende om dagen'], fork:'Bremsing krever at storhjernen tolker synsinntrykket og bestemmer seg. En refleks kobles i ryggmargen uten å gå via storhjernen.'},
    {id:'h20', t:'nerve', spm:'Hva er oppgaven til en motorisk nervecelle?', svar:['Å sende impulser fra sentralnervesystemet ut til musklene','Å registrere lys og lyd','Å lage transmitterstoff til blodet','Å beskytte hjernen'], fork:'Motoriske nerveceller går ut til musklene. Sensoriske nerveceller går motsatt vei, fra sansecellene og inn.'},
  ],

  /* ---------- SANT ELLER USANT ---------- */
  santusant: [
    ['u1','nerve','Dendrittene sender impulsen videre til neste celle.',false,'Det er aksonet som sender. Dendrittene tar imot.'],
    ['u2','nerve','Et akson kan være over én meter langt.',true,'Aksoner fra ryggmargen og ned til føttene kan være over en meter lange.'],
    ['u3','synapse','Nervecellene er i direkte kontakt med hverandre.',false,'Mellom dem er det et lite mellomrom: den synaptiske spalten.'],
    ['u4','synapse','Signalet er elektrisk i nervecellen, men kjemisk over den synaptiske spalten.',true,'Over spalten bæres signalet av transmitterstoff.'],
    ['u5','sns','Sentralnervesystemet består av hjernen og ryggmargen.',true,'Alt annet hører til det perifere nervesystemet.'],
    ['u6','sns','Lillehjernen styrer pusten og hjertet.',false,'Det er hjernestammen. Lillehjernen styrer balanse og finjustering av bevegelser.'],
    ['u7','sns','Hjernevæsken virker som en støtdemper for hjernen.',true,'Sammen med hodeskallen og hjernehinnene beskytter den hjernen.'],
    ['u8','perifer','Det autonome nervesystemet er viljestyrt.',false,'Det autonome nervesystemet jobber automatisk. Det somatiske er viljestyrt.'],
    ['u9','perifer','Det parasympatiske nervesystemet gjør oss kampklare.',false,'Det er det sympatiske. Det parasympatiske roer oss ned.'],
    ['u10','refleks','I en refleks går impulsen alltid først til storhjernen.',false,'Refleksen kobles i ryggmargen. Derfor går den så raskt.'],
    ['u11','refleks','Griperefleksen er en medfødt refleks.',true,'Spedbarn griper rundt fingeren din helt av seg selv.'],
    ['u12','refleks','Å sykle kan bli en lært refleks.',true,'Etter mye øving går bevegelsene automatisk.'],
    ['u13','sykdom','Epilepsi skyldes elektrisk kaos i hjernen.',true,'Nerveceller sender plutselig ukontrollerte impulser.'],
    ['u14','sykdom','Hjernehinnebetennelse kan bare skyldes bakterier.',false,'Den kan skyldes både bakterier og virus.'],
    ['u15','sykdom','Hjerneaktiviteten kan måles med elektroder festet på hodet.',true,'Impulsene fra mange tusen nerveceller måles og vises som bølger på en skjerm.'],
    ['u21','sns','Venstre hjernehalvdel kalles ofte den «logiske» halvdelen.',true,'Den er viktigst for detaljer og når du skal lese, skrive og huske ord og tall.'],
    ['u22','sns','Hypofysen ligger i hjernestammen.',true,'Den er ikke større enn en ert, men er viktig for produksjonen av hormoner.'],
    ['u16','celle','Dyreceller har cellevegg.',false,'Planteceller har cellevegg. Dyreceller har bare cellemembran.'],
    ['u17','foto','Fotosyntesen lager oksygen.',true,'Karbondioksid + vann → glukose + oksygen.'],
    ['u18','foto','Celleånding skjer bare i dyreceller.',false,'Den skjer i alle celler med mitokondrier, også planteceller.'],
    ['u19','bedovelse','Lokalbedøvelse gjør at du sovner.',false,'Lokalbedøvelse virker bare i et lite område. Det er narkose som får deg til å sove.'],
    ['u20','bedovelse','Smertestillende demper smertesignalene.',true,'Du kjenner mindre smerte, men skaden er der fortsatt.'],
  ],

  /* ---------- LIKNINGER ---------- */
  likninger: [
    {id:'l1', t:'foto', tittel:'Fotosyntese: ordlikning', inn:['karbondioksid','vann'], ut:['glukose','oksygen'], over:'lysenergi',
     lure:['nitrogen','energi','protein']},
    {id:'l2', t:'foto', tittel:'Fotosyntese: reaksjonslikning', inn:['6CO₂','6H₂O'], ut:['C₆H₁₂O₆','6O₂'], over:'lysenergi',
     lure:['6CO','O₂','C₆H₆O₆','12H₂O']},
    {id:'l3', t:'foto', tittel:'Celleånding: ordlikning', inn:['glukose','oksygen'], ut:['karbondioksid','vann','energi'],
     lure:['nitrogen','lysenergi','klorofyll']},
    {id:'l4', t:'foto', tittel:'Celleånding: reaksjonslikning', inn:['C₆H₁₂O₆','6O₂'], ut:['6CO₂','6H₂O','energi'],
     lure:['6CO','O₂','C₆H₆O₆','12H₂O']},
  ],

  /* ---------- FIGURER (egne tegninger, SVG) ----------
     Hver del: [nr, navn, x, y]  (x/y i figurens koordinater, der markøren står) */
  figurer: [
    {id:'g1', t:'nerve', tittel:'Nervecellen', svg:'nervecelle', deler:[[1,'dendritt',40,50],[2,'cellekjerne',125,110],[3,'cellekropp',160,145],[4,'akson',212,115],[5,'myelin',381,115],[6,'enden av aksonet',582,115]]},
    {id:'g2', t:'synapse', tittel:'Den synaptiske spalten', svg:'synapse', deler:[[1,'akson',150,35],[2,'blære med transmitterstoff',120,130],[3,'synaptisk spalte',245,215],[4,'mottaker',200,240],[5,'neste nervecelle (dendritt)',150,300]]},
    {id:'g3', t:'sns', tittel:'Hjernen (sett fra siden)', svg:'hjerne', deler:[[1,'storhjernen',200,105],[2,'lillehjernen',318,228],[3,'hjernestammen',250,252],[4,'ryggmargen',250,345],[5,'hjernebarken',52,140]]},
    {id:'g4', t:'celle', tittel:'Plantecellen', svg:'plantecelle', deler:[[1,'cellevegg',8,60],[2,'cellemembran',32,135],[3,'cellekjerne',310,110],[4,'kloroplast',80,235],[5,'vakuole',190,150],[6,'mitokondrie',320,240]]},
    {id:'g5', t:'celle', tittel:'Dyrecellen', svg:'dyrecelle', deler:[[1,'cellemembran',27,150],[2,'cellekjerne',190,140],[3,'cytoplasma',110,215],[4,'mitokondrie',295,215]]},
    {id:'g6', t:'refleks', tittel:'Refleksbuen', svg:'refleksbue', deler:[[1,'sansecelle',50,290],[2,'sensorisk nerve',170,185],[3,'ryggmargen',385,130],[4,'motorisk nerve',235,255],[5,'muskel',140,335]]},
  ],

  /* ---------- SKRIVEOPPDRAG / PRØVETRENING ----------
     Prøvetreningen bruker «forklar»-oppgavene over, som på en ekte prøve. */

  /* Fagord: stavesjekken godtar alle ord som starter med disse stammene (bøyde former) */
  fagord: ['akson','dendritt','myelin','synaps','synaptisk','transmitterstoff','transmitter','refleks','kneskål','knerefleks','griperefleks','sugerefleks',
    'parasympatisk','sympatisk','somatisk','autonom','mitokondri','kloroplast','klorofyll','vakuole','cytoplasma','cellemembran','cellevegg','cellekjerne',
    'cellekropp','celleånding','fotosyntese','glukose','karbondioksid','oksygen','dopamin','hjernevæske','hjernehinne','hjernebark','hjernestamme','storhjerne',
    'lillehjerne','ryggmarg','ryggvirvl','ryggvirvel','hypofyse','sentralnervesystem','nervesystem','nervecelle','nerveimpuls','nervestreng','sansecelle','sensorisk',
    'motorisk','reseptor','epilepsi','partiel','generalisert','spinalpunksjon','hjernehinnebetennelse','narkose','lokalbedøvelse','smertestillende',
    'muskelavslappende','antibiotika','viljestyrt','perifer','synssenter','bevegelsessenter','muskelcelle','nervecellekropp'],
  /* Grunnformene som foreslås når et fagord er feilstavet. Bare ekte ord, ingen konstruerte former. */
  fagordVisning: ['akson','dendritt','myelin','synapse','synaptisk','transmitterstoff','refleks','knerefleks','parasympatisk','sympatisk','somatisk',
    'autonom','mitokondrie','kloroplast','klorofyll','vakuole','cytoplasma','cellemembran','cellevegg','cellekjerne','cellekropp','celleånding','fotosyntese',
    'glukose','karbondioksid','oksygen','hjernevæske','hjernehinne','hjernebark','hjernestamme','storhjerne','lillehjerne','ryggmarg','ryggvirvel',
    'hypofyse','sentralnervesystemet','nervesystemet','nervecelle','nerveimpuls','sansecelle','sensorisk','motorisk','epilepsi','generalisert',
    'spinalpunksjon','hjernehinnebetennelse','narkose','lokalbedøvelse','smertestillende','muskelavslappende','antibiotika','viljestyrt','perifer'],
  /* Vanlige ord som ligner fagord, men er riktige (skal aldri markeres) */
  ikkeFagord: ['aksjon','reflekt','hjerte','motor','sympati','synet','synes','perfekt','periode','kloakk','glukosen'],
};
