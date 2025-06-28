import { TermsSection } from "../types/term";

export const terms: TermsSection[] = [
  {
    id: 'acceptance',
    title: 'Godkännande av villkor',
    description:
      'Vad det innebär att använda Kurshub och godkänna våra villkor',
    icon: 'check-circle',
    color: 'green',
    category: 'legal',
    content: `
      Genom att besöka, registrera dig för eller använda Kurshub.se och dess tjänster godkänner du att vara bunden av dessa användarvillkor, vår integritetspolicy och alla tillämpliga lagar och regler.

      Detta avtal träder i kraft omedelbart när du börjar använda våra tjänster och fortsätter så länge du använder plattformen.
    `,
    keyPoints: [
      'Villkoren gäller för all användning av Kurshub',
      'Inkluderar webbplats, mobilapp och alla tjänster',
      'Måste följas av alla användare och besökare',
      'Avtalet är juridiskt bindande',
    ],
    userResponsibilities: [
      'Läsa och förstå alla villkor innan användning',
      'Hålla dig uppdaterad om ändringar i villkoren',
      'Sluta använda tjänsten om du inte godkänner villkoren',
    ],
  },
  {
    id: 'changes',
    title: 'Ändringar av villkoren',
    description:
      'Hur vi uppdaterar villkoren och hur du meddelas om ändringar',
    icon: 'refresh-cw',
    color: 'blue',
    category: 'legal',
    content: `
      Vi förbehåller oss rätten att ändra, uppdatera eller ersätta delar av dessa användarvillkor när som helst. Ändringar publiceras på denna sida med uppdaterat datum.

      För större ändringar meddelar vi användare via e-post minst 30 dagar innan de träder i kraft.
    `,
    keyPoints: [
      'Vi kan uppdatera villkoren när som helst',
      'Större ändringar meddelas via e-post',
      '30 dagars förvarning för betydande ändringar',
      'Fortsatt användning = godkännande av nya villkor',
    ],
    userResponsibilities: [
      'Kontrollera regelbundet för uppdateringar',
      'Läsa meddelanden om ändringar',
      'Sluta använda tjänsten om du inte godkänner ändringar',
    ],
  },
  {
    id: 'account',
    title: 'Användarkonto och säkerhet',
    description:
      'Ditt ansvar för kontosäkerhet och hantering av personlig information',
    icon: 'user-shield',
    color: 'purple',
    category: 'usage',
    content: `
      För att få tillgång till alla funktioner behöver du skapa ett konto med giltig e-postadress. Du är fullt ansvarig för all aktivitet som sker under ditt konto.

      Vi erbjuder tvåfaktorsautentisering och rekommenderar starkt att du aktiverar detta för extra säkerhet.
    `,
    keyPoints: [
      'Ett konto krävs för full funktionalitet',
      'Du ansvarar för all kontoaktivitet',
      'Stark lösenordssäkerhet rekommenderas',
      'Tvåfaktorsautentisering tillgängligt',
    ],
    userResponsibilities: [
      'Skydda ditt lösenord och inloggningsuppgifter',
      'Meddela oss omedelbart vid misstänkt obehörig åtkomst',
      'Hålla din kontoinformation uppdaterad',
      'Inte dela ditt konto med andra',
    ],
    examples: [
      'Använd unikt, starkt lösenord',
      'Logga inte in på offentliga datorer',
      'Aktivera tvåfaktorsautentisering',
      'Logga ut efter varje session',
    ],
  },
  {
    id: 'conduct',
    title: 'Användarbeteende och community-regler',
    description:
      'Regler för respektfullt och lagligt beteende på plattformen',
    icon: 'users-solid',
    color: 'orange',
    category: 'usage',
    content: `
      Kurshub är en lärplattform byggd på respekt och inkludering. Vi förväntar oss att alla användare bidrar till en positiv lärmiljö.

      Brott mot våra community-regler kan resultera i varningar, tillfällig avstängning eller permanent uteslutning.
    `,
    keyPoints: [
      'Respektera andra användare och instruktörer',
      'Ingen trakasserier eller diskriminering',
      'Inget spam eller olämpligt innehåll',
      'Följ svenska lagar och internationella regler',
    ],
    userResponsibilities: [
      'Behandla alla med respekt och värdighet',
      'Rapportera olämpligt beteende till moderatorer',
      'Bidra konstruktivt till diskussioner',
      'Följa alla community-riktlinjer',
    ],
    examples: [
      '❌ Trakasserier eller hot mot andra användare',
      '❌ Spam eller irrelevant reklam',
      '❌ Delning av piratkopierat material',
      '✅ Konstruktiva frågor och hjälpsam feedback',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Immaterialrätter och innehåll',
    description:
      'Äganderätt till kursmaterial och regler för användning av innehåll',
    icon: 'copyright',
    color: 'red',
    category: 'rights',
    content: `
      Allt innehåll på Kurshub - kurser, videor, text, kod, bilder och andra material - skyddas av upphovsrätt och andra immaterialrätter.

      Du får använda materialet för personligt lärande men inte distribuera, sälja eller använda kommersiellt utan tillstånd.
    `,
    keyPoints: [
      'Allt innehåll ägs av Kurshub eller våra partners',
      'Endast för personligt, icke-kommersiellt bruk',
      'Ingen redistribution eller videodelning tillåten',
      'Respektera instruktörers och skapares rättigheter',
    ],
    userResponsibilities: [
      'Inte ladda ner eller distribuera kursmaterial',
      'Inte skapa kopior för andra att använda',
      'Respektera upphovsrättsliga varningar',
      'Anmäla potentiella upphovsrättsöverträdelser',
    ],
    examples: [
      '✅ Titta på videor för egen utbildning',
      '✅ Ta anteckningar för personligt bruk',
      '❌ Ladda ner videor för offline-delning',
      '❌ Kopiera kursmaterial till andra plattformar',
    ],
  },
  {
    id: 'payments',
    title: 'Betalningar och återbetalningar',
    description:
      'Regler för köp, prenumerationer och vår återbetalningspolicy',
    icon: 'credit-card',
    color: 'green',
    category: 'usage',
    content: `
      Vi erbjuder flexibla betalningsalternativ inklusive enskilda kurser och månads-/årsprenumerationer. Alla priser är inklusive moms där det gäller.

      Vi har en generös 30-dagars återbetalningspolicy för användare som inte är nöjda med våra tjänster.
    `,
    keyPoints: [
      '30-dagars pengarna-tillbaka-garanti',
      'Prenumerationer förnyas automatiskt',
      'Alla priser inkluderar svensk moms (25%)',
      'Säkra betalningar via certifierade leverantörer',
    ],
    userResponsibilities: [
      'Betala i tid för prenumerationer',
      'Meddela oss om betalningsproblem',
      'Läsa våra återbetalningsvillkor',
      'Säga upp prenumerationer innan förnyelse',
    ],
    examples: [
      'Månadsvis prenumeration: 199 kr/månad',
      'Årlig prenumeration: 1990 kr/år (17% rabatt)',
      'Studentrabatt: 50% med giltig legitimation',
      'Företagsavtal: Anpassade priser från 149 kr/användare',
    ],
  },
  {
    id: 'disclaimers',
    title: 'Ansvarsfriskrivningar',
    description: 'Begränsningar av vårt ansvar och garantier för tjänsten',
    icon: 'warning-triangle',
    color: 'yellow',
    category: 'liability',
    content: `
      Kurshub tillhandahålls "i befintligt skick" och vi strävar efter högsta kvalitet men kan inte garantera perfekt funktion dygnet runt.

      Vi ansvarar inte för skador som uppstår från användning av plattformen, men följer alla svenska konsumentskyddsregler.
    `,
    keyPoints: [
      'Tjänsten tillhandahålls "som den är"',
      'Inga garantier för oavbruten tillgång',
      'Vi strävar efter 99.9% upptid',
      'Konsumentskyddsregler gäller fortfarande',
    ],
    userResponsibilities: [
      'Använda tjänsten på egen risk',
      'Ha realistiska förväntningar',
      'Rapportera tekniska problem',
      'Säkerhetskopiera viktiga anteckningar',
    ],
  },
  {
    id: 'liability',
    title: 'Ansvarsbegränsning',
    description: 'Vårt ansvar gentemot användare enligt svensk lag',
    icon: 'shield-off',
    color: 'red',
    category: 'liability',
    content: `
      Enligt svensk konsumentlagstiftning har du rätt till skadestånd vid fel i tjänsten, men vårt ansvar är begränsat till det belopp du betalat för tjänsten.

      Vi ansvarar inte för indirekta skador eller förlust av data, men följer alla lagkrav för konsumentskydd.
    `,
    keyPoints: [
      'Ansvar begränsat till betalt belopp',
      'Inga indirekta skador eller förlorad vinst',
      'Svenska konsumentlagar gäller',
      'Försäkring täcker större incidenter',
    ],
    userResponsibilities: [
      'Förstå ansvarsbegränsningar',
      'Säkerhetskopiera din data',
      'Anmäla skador inom rimlig tid',
      'Söka juridisk rådgivning vid behov',
    ],
  },
  {
    id: 'termination',
    title: 'Uppsägning och avslutning',
    description: 'Hur konton kan avslutas och vad som händer med din data',
    icon: 'x-circle',
    color: 'red',
    category: 'usage',
    content: `
      Du kan avsluta ditt konto när som helst via kontoinställningar. Vi kan även avstänga konton som bryter mot våra villkor efter varning.

      Vid kontoavslutning raderas dina personuppgifter enligt GDPR, men vissa data kan behållas för juridiska krav.
    `,
    keyPoints: [
      'Du kan avsluta ditt konto när som helst',
      'Vi kan avstänga konton vid villkorsbrott',
      'Persondata raderas enligt GDPR',
      'Vissa juridiska poster kan behållas',
    ],
    userResponsibilities: [
      'Följa korrekt avslutningsprocess',
      'Exportera viktiga data före avslutning',
      'Betala eventuella utestående avgifter',
      'Respektera eventuella avslutningsvillkor',
    ],
  },
  {
    id: 'governing-law',
    title: 'Tillämplig lag och tvistlösning',
    description: 'Svensk lag gäller och hur tvister löses',
    icon: 'scale',
    color: 'blue',
    category: 'legal',
    content: `
      Dessa villkor styrs av svensk lag och eventuella tvister löses först genom medling, sedan via svenska domstolar.

      För konsumenttvister kan du även vända dig till Allmänna reklamationsnämnden (ARN) kostnadsfritt.
    `,
    keyPoints: [
      'Svensk lag gäller för alla tvister',
      'Medling före rättsliga processer',
      'ARN tillgängligt för konsumenttvister',
      'Svenska domstolar har jurisdiktion',
    ],
    userResponsibilities: [
      'Försöka lösa tvister direkt med oss först',
      'Använda medling när det är möjligt',
      'Följa svenska rättsprocesser',
      'Söka juridisk rådgivning vid behov',
    ],
  },
]
