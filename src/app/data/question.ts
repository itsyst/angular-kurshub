import { Question, FaqCategory } from "../types/question";

export const faqCategories: FaqCategory[] = [
  {
    id: 1,
    name: 'Kom igång',
    description: 'Allt du behöver veta för att börja lära dig',
    order: 1,
    icon: 'rocket'
  },
  {
    id: 2,
    name: 'Betalning & Prenumerationer',
    description: 'Information om priser, betalningar och återbetalningar',
    order: 2,
    icon: 'credit-card'
  },
  {
    id: 3,
    name: 'Kurser & Certifiering',
    description: 'Om kursmaterial, progression och certifikat',
    order: 3,
    icon: 'graduation-cap'
  },
  {
    id: 4,
    name: 'Teknisk Support',
    description: 'Hjälp med tekniska frågor och enhetskompatibilitet',
    order: 4,
    icon: 'settings'
  },
  {
    id: 5,
    name: 'Konto & Profil',
    description: 'Hantera ditt konto och personliga inställningar',
    order: 5,
    icon: 'user'
  },
  {
    id: 6,
    name: 'Community & Support',
    description: 'Få hjälp från vår community och supportteam',
    order: 6,
    icon: 'message-circle'
  }
];

export const questions: Question[] = [
  // Kom igång (Category 1)
  {
    id: 1,
    question: 'Hur registrerar jag mig för en kurs?',
    answer: `
      <p>Det är enkelt att komma igång med Kurshub:</p>
      <ol>
        <li><strong>Skapa ett konto:</strong> Registrera dig med din e-postadress</li>
        <li><strong>Välj din kurs:</strong> Bläddra bland våra kurser och välj den som passar dig</li>
        <li><strong>Slutför betalning:</strong> Använd våra säkra betalningsalternativ</li>
        <li><strong>Börja lära:</strong> Få omedelbar tillgång till ditt kursmaterial</li>
      </ol>
      <p>Du kan också börja med våra <strong>gratis provlektioner</strong> för att testa plattformen först!</p>
    `,
    categoryId: 1,
    order: 1,
    isPopular: true,
    tags: ['registrering', 'kom-igång', 'konto']
  },
  {
    id: 2,
    question: 'Vilka typer av kurser erbjuder ni?',
    answer: `
      <p>Vi erbjuder över <strong>500+ kurser</strong> inom flera kategorier:</p>
      <ul>
        <li><strong>Teknik & Programmering:</strong> JavaScript, Python, React, Angular 19</li>
        <li><strong>Design:</strong> UI/UX, Grafisk design, Figma, Adobe Creative Suite</li>
        <li><strong>Business:</strong> Entreprenörskap, Marknadsföring, Projektledning</li>
        <li><strong>Data & AI:</strong> Machine Learning, Data Science, SQL</li>
        <li><strong>Språk:</strong> Engelska, Tyska, Franska, Spanska</li>
        <li><strong>Personlig utveckling:</strong> Ledarskap, Kommunikation, Produktivitet</li>
      </ul>
      <p>Alla kurser är skapade av branschexperter och uppdateras regelbundet.</p>
    `,
    categoryId: 1,
    order: 2,
    isPopular: true,
    tags: ['kurser', 'kategorier', 'innehåll']
  },
  {
    id: 3,
    question: 'Finns det gratis kurser tillgängliga?',
    answer: `
      <p>Ja! Vi erbjuder flera sätt att lära dig gratis:</p>
      <ul>
        <li><strong>Gratis provlektioner:</strong> Testa valfri kurs med de första 3 lektionerna gratis</li>
        <li><strong>Veckans gratis kurs:</strong> En komplett kurs blir gratis varje vecka</li>
        <li><strong>Community-kurser:</strong> Kurser skapade av våra community-medlemmar</li>
        <li><strong>Introduktionskurser:</strong> Grundläggande kurser för att komma igång</li>
      </ul>
      <p>Skapa ett gratis konto för att få tillgång till allt gratisinnehåll!</p>
    `,
    categoryId: 1,
    order: 3,
    tags: ['gratis', 'provlektioner', 'introduktion']
  },

  // Betalning & Prenumerationer (Category 2)
  {
    id: 4,
    question: 'Vilka betalningsmetoder accepterar ni?',
    answer: `
      <p>Vi accepterar flera säkra betalningsalternativ:</p>
      <ul>
        <li><strong>Kreditkort:</strong> Visa, MasterCard, American Express</li>
        <li><strong>Digitala plånböcker:</strong> PayPal, Apple Pay, Google Pay</li>
        <li><strong>Banköverföring:</strong> Direktbetalning från svensk bank</li>
        <li><strong>Swish:</strong> För snabba betalningar (endast Sverige)</li>
        <li><strong>Klarna:</strong> Köp nu, betala senare alternativ</li>
      </ul>
      <p>Alla betalningar är säkrade med SSL-kryptering och PCI DSS-compliance.</p>
    `,
    categoryId: 2,
    order: 1,
    isPopular: true,
    tags: ['betalning', 'kreditkort', 'säkerhet']
  },
  {
    id: 5,
    question: 'Vad kostar en Premium-prenumeration?',
    answer: `
      <p>Vi erbjuder flexibla prisalternativ:</p>
      <ul>
        <li><strong>Månatlig:</strong> 199 kr/månad - full flexibilitet</li>
        <li><strong>Årlig:</strong> 1 990 kr/år - spara 17% (motsvarar 166 kr/månad)</li>
        <li><strong>Student:</strong> 99 kr/månad - 50% rabatt med giltig studentlegitimation</li>
        <li><strong>Företag:</strong> Från 149 kr/månad per användare (minst 10 användare)</li>
      </ul>
      <p><strong>Premium inkluderar:</strong> Tillgång till alla kurser, offline-nedladdning, prioriterad support och ekslusiva webbinarier.</p>
      <p>🎁 <strong>Första månaden gratis</strong> för nya användare!</p>
    `,
    categoryId: 2,
    order: 2,
    isPopular: true,
    tags: ['premium', 'pris', 'prenumeration', 'rabatt']
  },
  {
    id: 6,
    question: 'Kan jag få pengarna tillbaka om jag inte är nöjd?',
    answer: `
      <p>Absolut! Vi erbjuder en generös återbetalningspolicy:</p>
      <ul>
        <li><strong>30-dagars garanti:</strong> Full återbetalning inom 30 dagar, inga frågor ställda</li>
        <li><strong>Snabb process:</strong> Återbetalning inom 3-5 arbetsdagar</li>
        <li><strong>Enkel ansökan:</strong> Kontakta bara vår support eller använd självbetjäning</li>
      </ul>
      <p><strong>Observera:</strong> För att vara berättigad till återbetalning får du inte ha slutfört mer än 50% av kursen.</p>
      <p>Vi är så säkra på att du kommer älska våra kurser att vi gör det riskfritt att prova!</p>
    `,
    categoryId: 2,
    order: 3,
    tags: ['återbetalning', 'garanti', 'nöjd-kund-garanti']
  },

  // Kurser & Certifiering (Category 3)
  {
    id: 7,
    question: 'Får jag ett certifikat efter avslutad kurs?',
    answer: `
      <p>Ja! Vi erbjuder flera typer av certifiering:</p>
      <ul>
        <li><strong>Slutförandecertifikat:</strong> Digitalt certifikat för alla kurser du slutför</li>
        <li><strong>Branschcertifiering:</strong> Certifikat erkända av branschorganisationer</li>
        <li><strong>LinkedIn-integrering:</strong> Lägg automatiskt till certifikat på din LinkedIn-profil</li>
        <li><strong>Blockchain-verifierade:</strong> Äkta certifikat som inte kan förfalskas</li>
      </ul>
      <p>Alla certifikat inkluderar ditt namn, kursinformation, slutförandedatum och en unik verifieringskod.</p>
    `,
    categoryId: 3,
    order: 1,
    isPopular: true,
    tags: ['certifikat', 'slutförande', 'linkedin', 'verifiering']
  },
  {
    id: 8,
    question: 'Hur länge har jag tillgång till kursmaterialet?',
    answer: `
      <p>Din tillgång beror på ditt medlemskap:</p>
      <ul>
        <li><strong>Gratis kurser:</strong> Livstidstillgång (ingen tidsbegränsning)</li>
        <li><strong>Enskilda kurser:</strong> Livstidstillgång efter köp</li>
        <li><strong>Premium-prenumeration:</strong> Tillgång så länge prenumerationen är aktiv</li>
        <li><strong>Nedladdade kurser:</strong> Behåll offline tills du avinstallerar appen</li>
      </ul>
      <p><strong>Bonus:</strong> Alla kursuppdateringar och nytt material läggs till automatiskt utan extra kostnad!</p>
    `,
    categoryId: 3,
    order: 2,
    tags: ['tillgång', 'livstid', 'premium', 'material']
  },
  {
    id: 9,
    question: 'Kan jag ladda ner kurser för offline-visning?',
    answer: `
      <p>Ja, med Premium-medlemskap kan du:</p>
      <ul>
        <li><strong>Ladda ner hela kurser:</strong> Titta när du vill, var du vill</li>
        <li><strong>HD-kvalitet:</strong> Samma kvalitet som online-streaming</li>
        <li><strong>Flera enheter:</strong> Synkronisera mellan telefon, surfplatta och dator</li>
        <li><strong>Smart nedladdning:</strong> Automatisk nedladdning av nya lektioner</li>
      </ul>
      <p>Perfekt för pendling, resor eller när du har dålig internetanslutning!</p>
    `,
    categoryId: 3,
    order: 3,
    tags: ['offline', 'nedladdning', 'premium', 'mobil']
  },

  // Teknisk Support (Category 4)
  {
    id: 10,
    question: 'Finns det en mobilapp för Kurshub?',
    answer: `
      <p>Ja! Vi har dedikerade appar för alla plattformar:</p>
      <ul>
        <li><strong>iOS App:</strong> Ladda ner från App Store (kompatibel med iPhone och iPad)</li>
        <li><strong>Android App:</strong> Tillgänglig på Google Play Store</li>
        <li><strong>Responsiv webbplats:</strong> Fungerar perfekt i alla webbläsare</li>
        <li><strong>Progressive Web App:</strong> Installera direkt från webben</li>
      </ul>
      <p><strong>App-funktioner:</strong> Offline-visning, push-notiser, mörkt läge, variabel uppspelningshastighet och anteckningar.</p>
    `,
    categoryId: 4,
    order: 1,
    isPopular: true,
    tags: ['mobilapp', 'ios', 'android', 'nedladdning']
  },
  {
    id: 11,
    question: 'Vilka systemkrav har Kurshub?',
    answer: `
      <p>Kurshub fungerar på nästan alla moderna enheter:</p>
      <h4>Webbläsare:</h4>
      <ul>
        <li>Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</li>
      </ul>
      <h4>Mobila enheter:</h4>
      <ul>
        <li><strong>iOS:</strong> iPhone/iPad med iOS 13.0 eller senare</li>
        <li><strong>Android:</strong> Android 7.0 eller senare</li>
      </ul>
      <h4>Internet:</h4>
      <ul>
        <li>Minst 2 Mbps för SD-kvalitet</li>
        <li>5 Mbps rekommenderas för HD-kvalitet</li>
      </ul>
    `,
    categoryId: 4,
    order: 2,
    tags: ['systemkrav', 'kompatibilitet', 'webbläsare', 'internet']
  },

  // Account & Profile (Category 5)
  {
    id: 12,
    question: 'Hur ändrar jag mitt lösenord?',
    answer: `
      <p>Det är enkelt att ändra ditt lösenord:</p>
      <ol>
        <li>Logga in på ditt konto</li>
        <li>Gå till <strong>Kontoinställningar</strong> → <strong>Säkerhet</strong></li>
        <li>Klicka på <strong>"Ändra lösenord"</strong></li>
        <li>Ange ditt nuvarande lösenord och ditt nya lösenord</li>
        <li>Klicka <strong>"Spara ändringar"</strong></li>
      </ol>
      <p><strong>Glömt lösenord?</strong> Använd "Glömt lösenord"-länken på inloggningssidan för att återställa det via e-post.</p>
    `,
    categoryId: 5,
    order: 1,
    tags: ['lösenord', 'säkerhet', 'konto', 'inställningar']
  },
  {
    id: 13,
    question: 'Kan jag dela mitt konto med familjemedlemmar?',
    answer: `
      <p>Vi erbjuder olika alternativ för familjer:</p>
      <ul>
        <li><strong>Individuellt konto:</strong> Ett konto per person (standard)</li>
        <li><strong>Familjeplan:</strong> Upp till 6 familjemedlemmar för 399 kr/månad</li>
        <li><strong>Separata profiler:</strong> Varje person får sin egen kurshistorik</li>
        <li><strong>Barnkonton:</strong> Särskilda konton för barn under 13 år</li>
      </ul>
      <p><strong>Obs:</strong> Delning av individuella konton mot våra användarvillkor och kan leda till avstängning.</p>
    `,
    categoryId: 5,
    order: 2,
    tags: ['familj', 'delning', 'profiler', 'barnkonto']
  },

  // Community & Support (Category 6)
  {
    id: 14,
    question: 'Vem skapar kursinnehållet?',
    answer: `
      <p>Vårt kursinnehåll skapas av en imponerande grupp av experter:</p>
      <ul>
        <li><strong>Branschexperter:</strong> Ledande professionella från Google, Microsoft, Adobe, etc.</li>
        <li><strong>Universitetspartners:</strong> Professorer från KTH, Chalmers och andra toppuniversitet</li>
        <li><strong>Entreprenörer:</strong> Framgångsrika företagsledare och innovatörer</li>
        <li><strong>Certifierade instruktörer:</strong> Professionella lärare med pedagogisk utbildning</li>
      </ul>
      <p>Alla instruktörer genomgår en rigorös urvalsprocess och få regelbunden feedback från studenter.</p>
    `,
    categoryId: 6,
    order: 1,
    isPopular: true,
    tags: ['instruktörer', 'experter', 'kvalitet', 'utbildning']
  },
  {
    id: 15,
    question: 'Hur kan jag kontakta kundtjänst?',
    answer: `
      <p>Vi är här för att hjälpa dig på flera sätt:</p>
      <ul>
        <li><strong>Live Chat:</strong> 24/7 support direkt på webbplatsen</li>
        <li><strong>E-post:</strong> support@kurshub.se (svar inom 2 timmar)</li>
        <li><strong>Telefon:</strong> 08-123 45 67 (vardagar 09:00-17:00)</li>
        <li><strong>Hjälpcenter:</strong> Sök svar i vår omfattande kunskapsdatabas</li>
        <li><strong>Community-forum:</strong> Få hjälp från andra studenter</li>
      </ul>
      <p><strong>Premium-medlemmar</strong> får prioriterad support med genomsnittlig svarstid på 30 minuter!</p>
    `,
    categoryId: 6,
    order: 2,
    isPopular: true,
    tags: ['support', 'kontakt', 'hjälp', 'kundtjänst']
  },
  {
    id: 16,
    question: 'Finns det en community för studenter?',
    answer: `
      <p>Ja! Vår community är hjärtat av Kurshub:</p>
      <ul>
        <li><strong>Discord-server:</strong> Real-time chat med över 50,000 medlemmar</li>
        <li><strong>Studiegrupper:</strong> Lokala träffar i Stockholm, Göteborg och Malmö</li>
        <li><strong>Forum:</strong> Ställ frågor och dela projekt med andra studenter</li>
        <li><strong>Mentorskap:</strong> Bli matchad med erfarna yrkesverksamma</li>
        <li><strong>Karriärnätverk:</strong> Få jobbmöjligheter genom våra partners</li>
      </ul>
      <p>Gå med i vår community idag och upptäck kraften i att lära tillsammans!</p>
    `,
    categoryId: 6,
    order: 3,
    tags: ['community', 'studiegrupper', 'nätverk', 'mentorskap']
  },

  // More popular questions
  {
    id: 17,
    question: 'Kan jag pausa min prenumeration?',
    answer: `
      <p>Ja, vi förstår att livet kan vara opredictbart:</p>
      <ul>
        <li><strong>Paus i upp till 3 månader:</strong> Behåll ditt konto utan att betala</li>
        <li><strong>Studentrabatt:</strong> Automatisk rabatt under sommarsemester</li>
        <li><strong>Värnpliktsrabatt:</strong> Gratis premium under militärtjänst</li>
        <li><strong>Flexibel återaktivering:</strong> Kom tillbaka när det passar dig</li>
      </ul>
      <p>Hantera din prenumeration själv via kontoinställningar eller kontakta oss för hjälp.</p>
    `,
    categoryId: 2,
    order: 4,
    tags: ['paus', 'prenumeration', 'flexibilitet', 'student']
  },
  {
    id: 18,
    question: 'Erbjuder ni företagslösningar?',
    answer: `
      <p>Ja! Vi hjälper företag att utveckla sina medarbetare:</p>
      <ul>
        <li><strong>Team-licenser:</strong> Från 10 till 10,000+ användare</li>
        <li><strong>Admin-dashboard:</strong> Spåra framsteg och engagemang</li>
        <li><strong>Anpassade lärvägar:</strong> Kurser skräddarsydda för din bransch</li>
        <li><strong>Reporting:</strong> Detaljerade rapporter och analytics</li>
        <li><strong>SSO-integration:</strong> Enkelt login med era befintliga system</li>
      </ul>
      <p>Kontakta vårt företagsteam för en skräddarsydd demonstration: business@kurshub.se</p>
    `,
    categoryId: 6,
    order: 4,
    tags: ['företag', 'team', 'admin', 'integration', 'b2b']
  }
];

// Helper function for getting popular questions
export const getPopularQuestions = (): Question[] => {
  return questions.filter(q => q.isPopular);
};

// Helper function for getting questions by category
export const getQuestionsByCategory = (categoryId: number): Question[] => {
  return questions.filter(q => q.categoryId === categoryId).sort((a, b) => (a.order || 0) - (b.order || 0));
};
