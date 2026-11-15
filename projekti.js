// Svi projekti na stranici. Novi projekat = novi objekat u ovoj listi.
// size: "big" (duplo visoka pločica), "normal", "small" (bez slike)
// links: url null = link još nije spreman, prikazuje se kao "uskoro"
// cover: putanja do slike u images/, null = obojena pločica sa ikonicom

window.KATEGORIJE = {
  "Kuća i prostor":   { tint: "#DCEBD8", ink: "#2B6236" },
  "Igre i zabava":    { tint: "#FADCCF", ink: "#9C3A1A" },
  "Korisni alati":    { tint: "#D9E5FA", ink: "#2049B5" },
  "Posao i karijera": { tint: "#D3EDE8", ink: "#1C5C55" },
  "AI asistenti":     { tint: "#E6DDF8", ink: "#5A30AE" },
  "Zajednica":        { tint: "#F6E7C4", ink: "#714F07" }
};

window.PROJEKTI = [
  {
    slug: "jg271",
    title: "Portal stambene zajednice",
    cat: "Zajednica",
    status: "Radi",
    size: "big",
    icon: "building",
    thumb: "images/plocice/jg271.jpg",
    cover: "images/jg271.jpg",
    gallery: ["images/portal/forum.jpg","images/portal/kvarovi.jpg","images/portal/registracija.jpg","images/portal/telefon.jpg"],
    short: "Kompletan portal za stanare naše zgrade: obaveštenja, forum, prijave kvarova i glasanja.",
    story: [
      "Jedan od mojih najvećih projekata: kompletan portal za stanare naše zgrade. Ima obaveštenja, forum, prijavu kvarova, profile stanara i glasanje u kome jedan stan ima jedan glas, uz odobravanje novih korisnika.",
      "Portal je napravljen kao WordPress sajt, postavljen na server i testiran uživo, ali ga zgrada nikad zvanično nije pustila u rad. Javni deo je dostupan svima, pa slobodno pogledaj, a sve što je za stanare ostaje zaključano."
    ],
    links: [{ label: "Pogledaj portal", url: "https://271.blok45.org/", kind: "open" }]
  },
  {
    slug: "olujni-let",
    title: "Orlovi ponovo lete",
    cat: "Igre i zabava",
    status: "Radi",
    size: "big",
    icon: "game",
    thumb: "images/orlovi/kartica.jpg",
    cover: "images/orlovi/cd-prednja.jpg",
    gallery: ["images/orlovi/cd-poledjina.jpg","images/orlovi/steam-kapsula.jpg","images/orlovi/steam-zaglavlje.jpg","images/orlovi/igra-orao.jpg","images/orlovi/igra-mig21.jpg","images/orlovi/igra-gazela.jpg"],
    short: "Pucačina u stilu starih arkada: biraš domaću letelicu i obaraš neprijatelje.",
    story: [
      "Napravljena kao proba, da vidim da li AI može da napravi jednostavnu igru kakve smo nekad igrali na automatima. Biraš J-22 Orao, MiG-21 ili helikopter Gazelu i pucaš na neprijatelje koji ti dolaze u susret.",
      "Celu igru je napravio Claude AI. Igra se u browseru, bez instaliranja. Na računaru tastaturom (strelice za kretanje, SPACE za pucanje), a na telefonu prstom: vučeš prst po ekranu i letelica ga prati, a puca dok držiš prst. Telefon drži uspravno."
    ],
    links: [{ label: "Igraj u browseru", url: "igra/", kind: "play" }]
  },
  {
    slug: "vikendica",
    title: "3D vikendica",
    cat: "Kuća i prostor",
    status: "Radi",
    size: "big",
    icon: "house",
    thumb: "images/plocice/vikendica.jpg",
    cover: "images/vikendica.jpg",
    gallery: ["images/vikendica/10-godina-jesen.jpg","images/vikendica/20-godina-leto.jpg","images/vikendica/20-godina-odozgo.jpg"],
    short: "Vikendica kao 3D model koji možeš da okrećeš, zumiraš i gledaš iz vazduha.",
    story: [
      "Kad sam bio na vikendici u selu, slikao sam kuću i dvorište i palo mi je na pamet da slike ubacim u AI i vidim da li od njih može da „sklopi“ 3D model. Na kraju je AI uradio mnogo više nego što sam zamišljao. Ceo model može da se okreće, zumira i gleda iz vazduha.",
      "Na njemu su ucrtana postojeća stabla i voćke koje tek planiram da posadim, pa se vidi kako će imanje izgledati za 10 i za 20 godina, i kako izgleda u različito doba godine.",
      "Upravljanje: levi klik okreće model, a desni pomera fokus. Na telefonu jednim prstom okrećeš model, a sa dva pomeraš fokus.",
      "Obavezno probaj:\n- kako će imanje izgledati sada, za 10 i za 20 godina\n- kako imanje izgleda u proleće, leto, jesen i zimu"
    ],
    links: [{ label: "Otvori model", url: "https://hejtazzman.github.io/vikendica/", kind: "open" }]
  },
  {
    slug: "travel-advisor",
    title: "Travel Advisor",
    cat: "AI asistenti",
    status: "Radi lokalno",
    size: "big",
    icon: "compass",
    thumb: "images/plocice/travel-advisor.jpg",
    cover: "images/travel-advisor.jpg",
    gallery: ["images/travel/izbor.jpg","images/travel/destinacija.jpg","images/travel/racunica.jpg"],
    short: "Kažeš kakav odmor želiš, a on pretraži aranžmane, hotele i letove i predloži gde da ideš.",
    story: [
      "Mala aplikacija iza koje stoji mnogo pretrage. Pomaže tebi i partneru, ili celoj porodici, da odlučite gde da putujete. Zadaš datume i kakav odmor želiš: more, city break, avantura, mir ili bilo šta drugo.",
      "AI onda prođe kroz aranžmane domaćih agencija, ali i kroz varijantu „sam svoj organizator“: hoteli, prevoz i avio karte po najboljoj ceni. Na kraju dobiješ lepo složenu stranicu sa predlozima: gde da ideš i zašto, koji hoteli, kolika je cena i od čega se sastoji, uz mogućnost da promeniš datume ili let."
    ],
    links: []
  },
  {
    slug: "novogradnja",
    title: "Mapa novogradnje",
    cat: "Kuća i prostor",
    status: "Radi",
    size: "normal",
    icon: "pin",
    thumb: "images/plocice/novogradnja.jpg",
    cover: "images/novogradnja.jpg",
    gallery: [],
    short: "Mapa Beograda sa novim zgradama i aktuelnim oglasima za stanove.",
    story: [
      "Mapa ima dva dela. Prvi pokazuje novogradnju u Beogradu, a drugi oglase za stanove sa različitih sajtova za nekretnine, pa se na jednom mestu vidi šta se trenutno prodaje."
    ],
    links: [{ label: "Otvori mapu", url: "https://hejtazzman.github.io/novogradnja-beograd/", kind: "open" }]
  },
  {
    slug: "clone-any-website",
    title: "Clone Any Website",
    cat: "Korisni alati",
    status: "Radi lokalno",
    size: "normal",
    icon: "copy",
    thumb: "images/plocice/clone-any-website.jpg",
    cover: "images/clone/racunar.jpg",
    gallery: ["images/clone/telefon.jpg"],
    short: "Daš mu adresu sajta, a dobiješ kopiju koja izgleda isto, ali je obična i brza HTML stranica.",
    story: [
      "Claude može da pogleda postojeći sajt i napravi njegovu kopiju u čistom HTML-u: isti raspored, boje, fontovi i tekstovi, i sve radi i na računaru i na telefonu. Kopija je obična stranica bez ikakve platforme iza, pa je brza i može da se postavi bilo gde.",
      "Prvi put sam to uradio za prijatelja čiji je sajt napravljen kao Flutter aplikacija. Na slikama su original i kopija jedan pored drugog, a ime i logo firme su zamućeni. Na telefonu je kopija čak urednija od originala.",
      "Korisno je kad hoćeš da preseliš sajt, da ga ubrzaš ili da na kopiji probaš novi izgled, a da ne diraš pravi sajt. Radim to samo za sajtove čiji vlasnik to traži."
    ],
    links: []
  },
  {
    slug: "rainmeter",
    title: "Rainmeter Custom Desktop",
    cat: "Igre i zabava",
    status: "Radi",
    size: "normal",
    icon: "screen",
    thumb: "images/plocice/rainmeter.jpg",
    cover: "images/rainmeter.jpg",
    gallery: [],
    short: "Gotov paket za Rainmeter: napravi desktop tačno po svom ukusu. Možeš da ga preuzmeš.",
    story: [
      "Rainmeter je jedan od najpopularnijih programa za uređivanje Windows desktopa. Ovaj projekat daje Claude-u sve što mu treba da ti napravi desktop tačno po meri: biraš koje widgete hoćeš, koje informacije prikazuju, kako izgledaju i kako rade.",
      "U projektu je već dosta toga spremno, pa možeš da promeniš boje, prepraviš postojeće ili napraviš potpuno svoj izgled od nule. Preuzmi ceo projekat i igraj se.",
      "Na internetu sigurno možeš da nađeš slike kako su ljudi sredili svoje desktope. Sada, uz Claude, i ti možeš da središ svoj desktop da izgleda tačno onako kako želiš."
    ],
    links: [
      { label: "Preuzmi projekat", url: null, kind: "download" },
      { label: "Preuzmi Rainmeter", url: "https://www.rainmeter.net/", kind: "open" },
      { label: "Pogledaj tuđe desktope", url: "https://www.reddit.com/r/Rainmeter/top/?t=all", kind: "open" }
    ]
  },
  {
    slug: "youtube-mp3",
    title: "YouTube u MP3",
    cat: "Korisni alati",
    status: "Radi",
    size: "normal",
    icon: "music",
    thumb: "images/plocice/youtube-mp3.jpg",
    cover: "images/youtube-mp3.jpg",
    gallery: [],
    short: "Pretvara YouTube Music plejliste u MP3 za tvoju ličnu muzičku biblioteku.",
    story: [
      "Koristi postojeći alat koji prebacuje YouTube video u druge formate. Meni je trebao za nešto konkretno: da YouTube Music plejliste izvezem u MP3 i tako napravim svoju biblioteku za ličnu upotrebu i istraživanje muzike."
    ],
    links: [{ label: "Preuzmi aplikaciju", url: null, kind: "download" }]
  },
  {
    slug: "nadji-mi-posao",
    title: "Nađi mi posao",
    cat: "Posao i karijera",
    status: "Radi lokalno",
    size: "normal",
    icon: "search",
    cover: null,
    gallery: [],
    short: "Pretražuje sajtove za posao, poredi oglase sa tvojim planovima i CV-jem i spremi prijavu.",
    story: [
      "Sistem koji sam napravio dok sam tražio posao. Pretražuje sve sajtove za zapošljavanje u Srbiji, LinkedIn i sajtove za rad na daljinu (remote). Zatim svaki oglas poredi sa tvojim karijernim planom, CV-jem i kriterijumima koje mu zadaš. Prati koji su oglasi novi, a koji stariji.",
      "Kad ti se neki posao dopadne, prepravi CV baš za to mesto i napiše propratno pismo, pa ti ostaje samo da pošalješ prijavu. Štedi ogromnu količinu vremena."
    ],
    links: []
  },
  {
    slug: "job-vetting",
    title: "Job Offer Vetting Agent",
    cat: "Posao i karijera",
    status: "Radi",
    size: "normal",
    icon: "check",
    cover: null,
    gallery: [],
    short: "Nalepiš oglas, a za minut dobiješ odgovor: da li da se prijaviš ili ne, i zašto.",
    story: [
      "Ovo sam koristio skoro svaki dan dok sam tražio posao. Nalepiš oglas sa LinkedIna ili bilo kog drugog sajta, a agent proveri firmu, način na koji je oglas napisan i koliko odgovara tvom CV-ju i onome što želiš u karijeri.",
      "Na kraju dobiješ jasnu odluku, prijavi se ili preskoči, sa objašnjenjem zašto. Sve to za oko minut."
    ],
    links: [{ label: "Otvori gem", url: null, kind: "open" }]
  },
  {
    slug: "cv-tailor",
    title: "CV Tailor AI",
    cat: "Posao i karijera",
    status: "Radi",
    size: "normal",
    icon: "doc",
    cover: null,
    gallery: [],
    short: "Ubaciš CV i oglas, a on ti predloži šta da promeniš da bi bio što bolji kandidat za tu poziciju.",
    story: [
      "Jedan od mojih prvih AI projekata, iz kog je kasnije nastao Nađi mi posao. Ubaciš svoj CV i oglas koji te zanima, a aplikacija ih uporedi i da ti konkretne savete šta da promeniš ili dopuniš u CV-ju da bi bio konkurentniji i bolje odgovarao oglasu."
    ],
    links: [{ label: "Isprobaj", url: null, kind: "open" }]
  },
  {
    slug: "360-corporate",
    title: "360 Corporate View",
    cat: "Posao i karijera",
    status: "Radi",
    size: "normal",
    icon: "bank",
    cover: null,
    gallery: [],
    short: "Kompletna provera bilo koje firme: osnovne informacije, finansije, kultura, crvene zastavice i konačna ocena.",
    story: [
      "Jedan od gemova koje sam najviše koristio dok sam tražio posao. Pošto je napravljen kao Gemini gem, radi veoma brzo. Postoji i kao aplikacija u Google AI Studiju.",
      "Ukucaš ime firme, a on istraži sve što je bitno: osnovne podatke, finansijsku stabilnost i javno objavljene finansije, kulturu u firmi, šta zaposleni i drugi pričaju o njoj i da li postoje crvene zastavice, kao što su istrage, problemi sa likvidnošću ili skandali. Svaku oblast oceni posebno, a na kraju ti da i ukupnu ocenu.",
      "Preporučujem svima kao jednostavan alat koji brzo analizira bilo koju firmu."
    ],
    links: [
      { label: "Otvori gem", url: null, kind: "open" },
      { label: "Otvori aplikaciju", url: null, kind: "open" }
    ]
  },
  {
    slug: "action-figure",
    title: "AI Action Figure Generator",
    cat: "AI asistenti",
    status: "Radi",
    size: "normal",
    icon: "figure",
    cover: null,
    gallery: [],
    short: "Ubaciš svoju fotku i postaneš akciona figurica, u stilu crtaća, stripa ili bilo čega što poželiš.",
    story: [
      "Napravio sam je pre nekoliko meseci, kad je ovaj trend bio na vrhuncu. Ubaciš svoj portret ili fotografiju celog tela, a aplikacija od tebe napravi akcionu figuricu. Ima gotove stilove, kao što su crtani filmovi i poznati stripovi, ali možeš da tražiš i bilo šta drugo.",
      "Neki od vas su je već probali: par ljudi se oduševilo, a za većinu je bila zabava za jedno veče. Probaj ponovo, možda te sad iznenadi."
    ],
    links: [{ label: "Napravi svoju figuricu", url: null, kind: "open" }]
  },
  {
    slug: "jarvis",
    title: "Jarvis",
    cat: "AI asistenti",
    status: "Radi lokalno",
    size: "normal",
    icon: "mic",
    cover: null,
    gallery: [],
    short: "Glasovni asistent po uzoru na Jarvisa iz Marvelovih filmova, sa britanskim naglaskom.",
    story: [
      "AI asistent inspirisan Jarvisom iz Marvelovih filmova. Moja verzija je zasnovana na javnom open-source projektu Open Jarvis. Ti mu nešto kažeš, on to prosledi AI-ju, a odgovor ti izgovori onim prepoznatljivim britanskim naglaskom.",
      "Napravljen je i testiran, ali radi samo na mom računaru, pa ne može da se isproba preko interneta. Ako hoćeš svog, kreni od javnog Open Jarvis projekta, a ja ga rado pokazujem uživo."
    ],
    links: [{ label: "Open Jarvis na GitHubu", url: null, kind: "open" }]
  },
  {
    slug: "business-idea",
    title: "Business Idea Guide",
    cat: "AI asistenti",
    status: "Radi",
    size: "normal",
    icon: "bulb",
    cover: null,
    gallery: [],
    short: "Imaš poslovnu ideju? Ovaj gem je proveri: tržište, konkurenciju, izvodljivost, prednosti i mane.",
    story: [
      "Gem za svakog ko ima neku poslovnu ideju, bilo koje vrste. Provede te kroz ceo proces provere: samu ideju, poslovni plan, nišu i konkurenciju.",
      "Na kraju dobiješ jasnu sliku koliko je ideja izvodljiva i koje su joj prednosti i mane, pre nego što uložiš vreme i novac."
    ],
    links: [{ label: "Otvori gem", url: null, kind: "open" }]
  },
  {
    slug: "price-tracker",
    title: "PriceTracker",
    cat: "Korisni alati",
    status: "Radi",
    size: "normal",
    icon: "tag",
    cover: null,
    gallery: ["images/price-tracker.jpg"],
    short: "Prati cene proizvoda koje izabereš i javi ti kad poskupe ili pojeftine.",
    story: [
      "Mali web crawler za praćenje cena. Prvo potraži proizvod i pronađe koji sajtovi ga prodaju, a onda prati cenu i javi ti kad se promeni, onako kako si mu zadao: kad padne, kad poraste ili oba. Radi online, pa ništa ne mora da ti bude uključeno na računaru. Ti samo izabereš kako želiš da dobijaš obaveštenja: mejlom ili preko Telegrama. Može da se podesi i za WhatsApp, ali je Telegram besplatan."
    ],
    links: []
  },
  {
    slug: "pdf-extractor",
    title: "PDF Data Extractor",
    cat: "Korisni alati",
    status: "Prototip",
    size: "normal",
    icon: "table",
    cover: null,
    gallery: [],
    short: "Kažeš koji podaci ti trebaju, a on ih sam izvuče iz PDF dokumenata i složi u tabelu.",
    story: [
      "Prototip koji pokazuje šta AI može da uradi sa dokumentima, zamišljen kao osnova za neku buduću aplikaciju. Ubaciš PDF i kažeš koja polja su ti bitna, a aplikacija ih izvuče i složi u tabelu. To radi i sa svakim sledećim dokumentom ili sa celom gomilom odjednom.",
      "Ideja je jednostavna: ako moraš da prođeš kroz mnogo dokumenata i iz svakog prepišeš iste podatke, podesiš to jednom, a posle sistem izvlači podatke i popunjava tabelu umesto tebe."
    ],
    links: [{ label: "Isprobaj", url: null, kind: "open" }]
  },
  {
    slug: "investment-kalkulator",
    title: "Investment kalkulator",
    cat: "Korisni alati",
    status: "Radi",
    size: "small",
    icon: "chart",
    cover: null,
    gallery: [],
    short: "Pokazuje kako ulaganje raste kroz godine. Koristan za svakog ko tek razmišlja o ulaganju.",
    story: [
      "Ovaj kalkulator nisam pravio ja, već je jedan od gotovih primera u Google AI Studiju, ali mi se toliko svideo da sam hteo da ga stavim ovde.",
      "Grafički pokazuje kako ulaganje raste kroz vreme, pa je zgodan za svakog ko se tek upoznaje sa ulaganjem."
    ],
    links: [{ label: "Otvori kalkulator", url: null, kind: "open" }]
  }
];
