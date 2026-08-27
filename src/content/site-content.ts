export type Lang = "en" | "pl";

export const content = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    bookConsultation: ["Book", "Consultation"],
    heroTitle: "Polish Architect (.co.uk)",
    heroTagline: ["Construction made simple", "from concept to completion"],
    heroBody:
      "Complete architectural design, planning and other statutory approvals, technical compliance, and complete site project management for your development. We guide you through the entire construction process handling every legal, technical, and safety detail — explained and run seamlessly in Polish and English.",
    ctaStart: "Start Your Project",
    ctaServices: "Explore Services",
    aboutTitle: "An architect who speaks your language",
    aboutBody:
      "Based in Oxford and working across the whole of the UK, the practice specialises in all aspects of construction and property-related services. From the first sketch to the final certificate, every legal, technical, and safety requirement is handled and explained clearly — in Polish or English. We pride ourselves on deep industry knowledge and 20+ years of UK experience designing award-winning residential and commercial projects, delivering complete architectural vision, technical precision, and total peace of mind for every client.",
    servicesTitle: "Architectural Services",
    servicesSub:
      "SURVEYING I DESIGN I ARCHITECTURE I PROJECT MANAGEMENT I PROPERTY CONSULTANCY",
    services: [
      {
        title: "Regulatory Compliance",
        body: "Navigating the complexities of UK Building Regulations, Building Safety Act, Party Wall, CDM and H&S compliance.",
        points: [
          "Principal Designer Duties",
          "Building Control Applications",
          "Party Wall Coordination",
        ],
      },
      {
        title: "Initial Design",
        body: "Initial site appraisals and conceptual designs to maximise the potential of your property while respecting local context and constraints.",
        points: ["Site Appraisals", "Capacity Studies", "Initial Concept Layouts"],
      },
      {
        title: "Planning Applications",
        body: "Preparation and submission of full planning applications, navigating local authority requirements to secure permission for your project.",
        points: [
          "Pre-application Advice",
          "Full Planning Submissions",
          "Listed Building Consent",
        ],
      },
      {
        title: "Technical Design & Tender",
        body: "Detailed technical drawings and specifications for construction, enabling accurate pricing and seamless execution on site.",
        points: [
          "Detailed Construction Drawings",
          "Schedule of Works",
          "Tender Documentation & Coordination",
        ],
      },
    ],
    processTitle: "The UK Property Development Framework",
    processSub:
      "A structured 7-stage approach aligned with RIBA Plan of Work, ensuring clarity and control at every step.",
    stages: [
      {
        title: "Preparation and Brief",
        body: "Defining project objectives, spatial requirements, budget parameters, and initial feasibility assessments.",
      },
      {
        title: "Concept Design",
        body: "Developing initial architectural proposals, exploring layout options, and establishing the design vision.",
      },
      {
        title: "Spatial Coordination (Planning)",
        body: "Refining the design and preparing documentation for statutory planning applications to the local authority.",
      },
      {
        title: "Technical Design",
        body: "Producing detailed architectural and engineering information for Building Control approval and construction.",
      },
      {
        title: "Manufacturing and Construction",
        body: "Administering the building contract, resolving site queries, and monitoring progress against the design intent.",
      },
      {
        title: "Handover",
        body: "Concluding the building contract, inspecting the final works, and issuing certificates to facilitate occupation.",
      },
      {
        title: "Use",
        body: "Post-occupancy evaluation to ensure the building performs as designed and meets the original brief.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSub: "Common queries regarding the architectural process and regulations in the UK.",
    faqs: [
      {
        q: "What is the difference between Planning Permission and Building Regulations?",
        a: "Planning permission concerns how a building looks, its volume, its impact on neighbours, and how the land is used. Building Regulations set the minimum legal standards for technical construction, structural integrity, fire safety, drainage, ventilation, and energy efficiency. Most extensions require compliance with both systems independently.",
      },
      {
        q: "How long does the Planning Permission process take?",
        a: "Once submitted and validated by your local planning authority, a standard householder planning application takes approximately 8 weeks to reach a statutory decision. Complex schemes, major developments, or applications requiring committee reviews may take up to 13 weeks or longer.",
      },
      {
        q: "What types of house extensions are there?",
        a: "Common extensions include single-storey rear extensions (expanding living/kitchen space into the garden), side infill/return extensions (utilising dead alley space), wraparound extensions (combining side and rear for maximum ground-floor space), two-storey extensions (adding space across both levels), and loft conversions (converting empty roof space into habitable rooms).",
      },
      {
        q: "Flat roof vs pitched roof: what are the advantages and disadvantages?",
        a: "Flat roofs are more cost-effective to construct and accommodate modern features like large roof lanterns, but typically have a 20–30 year lifespan and require regular maintenance. Pitched roofs offer superior durability (50+ years), blend with traditional aesthetics, and allow vaulted ceilings, but involve higher initial construction costs and may trigger planning ridge-height limits.",
      },
      {
        q: "What is the difference between a cold flat roof and a warm flat roof?",
        a: "A cold flat roof places insulation between timber joists with a ventilated void above to stop condensation. A warm flat roof places continuous rigid insulation directly on top of the structural timber deck, keeping the entire roof structure warm and eliminating condensation and thermal bridging risks. Warm roof construction is the modern standard under UK Building Regulations.",
      },
      {
        q: "What are the problems with asbestos, and where might it be found?",
        a: "Asbestos fibres cause severe lung disease if disturbed and inhaled. In pre-2000 UK properties, asbestos is commonly present in textured ceiling coatings (Artex), corrugated garage roof sheets, soffit boards, vinyl floor tiles, rainwater pipes, and old flue insulation. Any suspect material must be tested before structural demolition or alteration.",
      },
      {
        q: "How do I calculate the construction cost of my extension?",
        a: "Costs are calculated by multiplying the proposed gross internal area (m²) by regional construction rates (typically £2,000 to £3,000+ per m² outside London). You must also budget for professional fees (architect, structural engineer, party wall surveyor), statutory application fees, Thames Water agreements, a 10–15% contingency, and 20% VAT.",
      },
      {
        q: "Which is cheaper: a loft conversion or a rear extension?",
        a: "A standard Velux or rear dormer loft conversion is generally cheaper than a ground-floor rear extension of equivalent floor area because it utilises the existing building envelope and foundations, avoiding extensive ground excavation, new foundations, and drainage diversions.",
      },
      {
        q: "What are the regulations for outbuildings and garden sheds?",
        a: "Under Permitted Development, outbuildings must be single-storey with maximum eaves height of 2.5m and maximum overall height of 4m (dual-pitched) or 2.5m within 2m of a boundary. They must sit behind the principal front wall, cannot cover over 50% of the garden, and cannot be used as self-contained residential living accommodation without planning permission.",
      },
      {
        q: "Do I need planning permission to build a garden office?",
        a: "Not always. A garden office can usually be built under Permitted Development if it meets standard outbuilding size and height limits and its use remains incidental to the main home. If used as a primary commercial business premise with visiting clients or fitted out with sleeping accommodation, full planning permission is required.",
      },
      {
        q: "Can I convert my garage into habitable accommodation?",
        a: "Yes. Internal garage conversions without extending the envelope often fall under Permitted Development (a Lawful Development Certificate is recommended). However, full Building Regulations approval is mandatory to ensure proper damp-proofing, wall/floor insulation, structural infill of the garage door, ventilation, and fire escape windows.",
      },
      {
        q: "Why is it always worth employing a registered Polish Architect in the UK?",
        a: "An architect delivers far more than council drawings. We optimise spatial flow and natural light, navigate complex UK planning laws, ensure statutory Building Safety Act and CDM compliance, prevent expensive site mistakes through precise technical detailing, and manage builder tenders to protect your budget — while explaining the entire process clearly in your native language.",
      },
    ],
    contactTitle: "Start Your Project",
    contactSub:
      "Whether you need full architectural services, regulatory compliance advice, or just want to discuss your ideas, please get in touch.",
    officeLabel: "Office",
    officeCity: "Oxford, United Kingdom",
    officeNote: "Serving all of the UK",
    contactLabel: "Contact",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      postcode: "Project Postcode",
      type: "Project Type",
      typePlaceholder: "Select project type",
      typeOptions: [
        "Residential Extension / Remodel",
        "New Build Home",
        "Commercial Space",
        "Planning / Regulatory Advice",
        "Other",
      ],
      desc: "Project Description",
      submit: "Submit Enquiry",
    },
    footerRight: "ARB Registered • Oxford, UK",
    heroAlt: "Dark minimalist concrete stairwell in a contemporary building",
  },
  pl: {
    nav: [
      { label: "O nas", href: "#about" },
      { label: "Usługi", href: "#services" },
      { label: "Proces", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Kontakt", href: "#contact" },
    ],
    bookConsultation: ["Umów", "Konsultację"],
    heroTitle: "Polski Architekt (.co.uk)",
    heroTagline: ["Budowa w prosty sposób", "od koncepcji do realizacji"],
    heroBody:
      "Kompleksowe projektowanie architektoniczne, pozwolenia na budowę i inne zgody urzędowe, zgodność techniczna oraz pełne zarządzanie projektem na budowie. Prowadzimy Państwa przez cały proces budowlany, zajmując się każdym aspektem prawnym, technicznym i bezpieczeństwa — wszystko wyjaśnione i realizowane po polsku i po angielsku.",
    ctaStart: "Rozpocznij projekt",
    ctaServices: "Zobacz usługi",
    aboutTitle: "Architekt, który mówi Twoim językiem",
    aboutBody:
      "Z siedzibą w Oxfordzie i działalnością na terenie całej Wielkiej Brytanii, pracownia specjalizuje się we wszystkich aspektach budownictwa i usług związanych z nieruchomościami. Od pierwszego szkicu po końcowy certyfikat — każdy wymóg prawny, techniczny i bezpieczeństwa jest dopełniony i jasno wyjaśniony, po polsku lub po angielsku. Szczycimy się dogłębną wiedzą branżową i ponad 20-letnim doświadczeniem w Wielkiej Brytanii przy projektowaniu nagradzanych obiektów mieszkaniowych i komercyjnych, zapewniając pełną wizję architektoniczną, precyzję techniczną i pełen spokój ducha każdemu klientowi.",
    servicesTitle: "Usługi architektoniczne",
    servicesSub:
      "INWENTARYZACJE I PROJEKTOWANIE I ARCHITEKTURA I ZARZĄDZANIE PROJEKTEM I DORADZTWO NIERUCHOMOŚCIOWE",
    services: [
      {
        title: "Zgodność z przepisami",
        body: "Prowadzenie przez zawiłości brytyjskich przepisów budowlanych (Building Regulations), Building Safety Act, Party Wall, CDM oraz BHP.",
        points: [
          "Obowiązki Principal Designer",
          "Wnioski do Building Control",
          "Koordynacja Party Wall",
        ],
      },
      {
        title: "Projekt wstępny",
        body: "Wstępne analizy działki i projekty koncepcyjne maksymalizujące potencjał nieruchomości z poszanowaniem lokalnego kontekstu i ograniczeń.",
        points: ["Analizy działki", "Studia chłonności", "Wstępne układy koncepcyjne"],
      },
      {
        title: "Wnioski o pozwolenie na budowę",
        body: "Przygotowanie i złożenie pełnych wniosków planistycznych oraz spełnienie wymagań lokalnych władz w celu uzyskania pozwolenia.",
        points: [
          "Konsultacje przedwnioskowe",
          "Pełne wnioski planistyczne",
          "Zgody na budynki zabytkowe",
        ],
      },
      {
        title: "Projekt techniczny i przetarg",
        body: "Szczegółowe rysunki techniczne i specyfikacje wykonawcze umożliwiające dokładną wycenę i sprawną realizację na budowie.",
        points: [
          "Szczegółowe rysunki wykonawcze",
          "Zakres i harmonogram robót",
          "Dokumentacja przetargowa i koordynacja",
        ],
      },
    ],
    processTitle: "Brytyjski proces realizacji inwestycji",
    processSub:
      "Uporządkowane podejście w 7 etapach zgodne z RIBA Plan of Work, zapewniające przejrzystość i kontrolę na każdym kroku.",
    stages: [
      {
        title: "Przygotowanie i założenia",
        body: "Określenie celów projektu, wymagań przestrzennych, budżetu oraz wstępnej wykonalności inwestycji.",
      },
      {
        title: "Projekt koncepcyjny",
        body: "Opracowanie wstępnych propozycji architektonicznych, analiza układów i ustalenie wizji projektowej.",
      },
      {
        title: "Koordynacja przestrzenna (planning)",
        body: "Dopracowanie projektu i przygotowanie dokumentacji do urzędowego wniosku o pozwolenie na budowę.",
      },
      {
        title: "Projekt techniczny",
        body: "Opracowanie szczegółowych informacji architektonicznych i inżynieryjnych do zatwierdzenia przez Building Control i do realizacji.",
      },
      {
        title: "Produkcja i budowa",
        body: "Administrowanie kontraktem budowlanym, rozwiązywanie kwestii na budowie i nadzór nad zgodnością z projektem.",
      },
      {
        title: "Przekazanie",
        body: "Zamknięcie kontraktu budowlanego, odbiór końcowy robót i wydanie certyfikatów umożliwiających użytkowanie.",
      },
      {
        title: "Użytkowanie",
        body: "Ocena poużytkowa potwierdzająca, że budynek działa zgodnie z projektem i spełnia pierwotne założenia.",
      },
    ],
    faqTitle: "Najczęściej zadawane pytania",
    faqSub: "Najczęstsze pytania dotyczące procesu architektonicznego i przepisów w Wielkiej Brytanii.",
    faqs: [
      {
        q: "Jaka jest różnica między Planning Permission a Building Regulations?",
        a: "Planning permission dotyczy wyglądu budynku, jego kubatury, wpływu na sąsiadów i sposobu użytkowania terenu. Building Regulations określają minimalne wymogi prawne dotyczące konstrukcji, bezpieczeństwa pożarowego, odwodnienia, wentylacji i efektywności energetycznej. Większość rozbudów wymaga spełnienia obu tych systemów niezależnie.",
      },
      {
        q: "Jak długo trwa procedura uzyskania Planning Permission?",
        a: "Po złożeniu i zatwierdzeniu wniosku przez lokalny urząd planistyczny standardowy wniosek dla domu jednorodzinnego trwa około 8 tygodni do wydania decyzji. Bardziej złożone inwestycje lub wnioski wymagające posiedzenia komisji mogą trwać 13 tygodni lub dłużej.",
      },
      {
        q: "Jakie są rodzaje rozbudów domu?",
        a: "Najczęstsze to rozbudowy parterowe od tyłu (powiększenie salonu/kuchni w stronę ogrodu), rozbudowy boczne (wykorzystanie wąskiego pasa przy domu), rozbudowy narożne (połączenie boku i tyłu), rozbudowy dwukondygnacyjne oraz adaptacje poddasza na cele mieszkalne.",
      },
      {
        q: "Dach płaski czy spadzisty — wady i zalety?",
        a: "Dachy płaskie są tańsze w wykonaniu i pozwalają na duże świetliki, ale ich żywotność to zwykle 20–30 lat i wymagają regularnej konserwacji. Dachy spadziste są trwalsze (50+ lat), lepiej wpisują się w tradycyjną architekturę i umożliwiają sufity skośne, ale są droższe i mogą przekraczać dopuszczalną wysokość kalenicy.",
      },
      {
        q: "Czym różni się dach zimny od dachu ciepłego?",
        a: "W dachu zimnym izolacja umieszczona jest między belkami stropowymi, z wentylowaną pustką powyżej zapobiegającą kondensacji. W dachu ciepłym ciągła izolacja twarda leży bezpośrednio na konstrukcyjnym deskowaniu, utrzymując całą konstrukcję w cieple i eliminując ryzyko kondensacji oraz mostków termicznych. Dach ciepły to obecny standard w przepisach brytyjskich.",
      },
      {
        q: "Jakie są zagrożenia związane z azbestem i gdzie może występować?",
        a: "Włókna azbestu naruszone i wdychane powodują ciężkie choroby płuc. W brytyjskich budynkach sprzed 2000 roku azbest występuje często w fakturowanych powłokach sufitowych (Artex), falistych płytach dachowych garaży, podbitkach, płytkach winylowych, rurach spustowych i izolacjach przewodów kominowych. Każdy podejrzany materiał należy przebadać przed rozbiórką lub przebudową.",
      },
      {
        q: "Jak obliczyć koszt budowy mojej rozbudowy?",
        a: "Koszt szacuje się mnożąc planowaną powierzchnię wewnętrzną (m²) przez regionalne stawki budowlane (zwykle 2 000–3 000+ GBP za m² poza Londynem). Należy też doliczyć honoraria (architekt, konstruktor, party wall surveyor), opłaty urzędowe, umowy z Thames Water, 10–15% rezerwy oraz 20% VAT.",
      },
      {
        q: "Co jest tańsze: adaptacja poddasza czy rozbudowa od tyłu?",
        a: "Standardowa adaptacja poddasza (okna Velux lub lukarna) jest zwykle tańsza niż parterowa rozbudowa o tej samej powierzchni, ponieważ wykorzystuje istniejącą bryłę i fundamenty, unikając wykopów, nowych fundamentów i przekładania kanalizacji.",
      },
      {
        q: "Jakie przepisy dotyczą budynków gospodarczych i altan ogrodowych?",
        a: "W ramach Permitted Development budynki gospodarcze muszą być parterowe, o maksymalnej wysokości okapu 2,5 m i całkowitej 4 m (dach dwuspadowy) lub 2,5 m w odległości do 2 m od granicy. Muszą stać za główną ścianą frontową, nie mogą zajmować ponad 50% ogrodu ani służyć jako samodzielne mieszkanie bez pozwolenia.",
      },
      {
        q: "Czy potrzebuję pozwolenia na budowę biura w ogrodzie?",
        a: "Nie zawsze. Biuro ogrodowe zwykle mieści się w Permitted Development, jeśli spełnia limity wielkości i wysokości, a jego użytkowanie pozostaje pomocnicze wobec domu. Jeśli ma być główną siedzibą firmy z obsługą klientów lub zawierać część sypialną, wymagane jest pełne pozwolenie.",
      },
      {
        q: "Czy mogę zaadaptować garaż na cele mieszkalne?",
        a: "Tak. Wewnętrzna adaptacja garażu bez powiększania bryły często mieści się w Permitted Development (zalecany jest Lawful Development Certificate). Konieczne jest jednak pełne zatwierdzenie Building Regulations w zakresie izolacji przeciwwilgociowej, ocieplenia ścian i podłogi, zamurowania bramy, wentylacji oraz okien ewakuacyjnych.",
      },
      {
        q: "Dlaczego warto zatrudnić zarejestrowanego polskiego architekta w UK?",
        a: "Architekt to znacznie więcej niż rysunki do urzędu. Optymalizujemy układ przestrzeni i światło dzienne, prowadzimy przez złożone brytyjskie prawo planistyczne, zapewniamy zgodność z Building Safety Act i CDM, zapobiegamy kosztownym błędom na budowie dzięki precyzyjnym detalom technicznym oraz prowadzimy przetargi wykonawców, chroniąc Państwa budżet — wyjaśniając cały proces w Państwa ojczystym języku.",
      },
    ],
    contactTitle: "Rozpocznij swój projekt",
    contactSub:
      "Niezależnie od tego, czy potrzebują Państwo pełnych usług architektonicznych, doradztwa w zakresie przepisów, czy po prostu chcą omówić swoje pomysły — zapraszamy do kontaktu.",
    officeLabel: "Biuro",
    officeCity: "Oxford, Wielka Brytania",
    officeNote: "Obsługujemy całą Wielką Brytanię",
    contactLabel: "Kontakt",
    fields: {
      name: "Imię i nazwisko",
      email: "E-mail",
      phone: "Telefon",
      postcode: "Kod pocztowy inwestycji",
      type: "Rodzaj projektu",
      typePlaceholder: "Wybierz rodzaj projektu",
      typeOptions: [
        "Rozbudowa / przebudowa domu",
        "Nowy dom",
        "Obiekt komercyjny",
        "Doradztwo planistyczne / prawne",
        "Inne",
      ],
      desc: "Opis projektu",
      submit: "Wyślij zapytanie",
    },
    footerRight: "Zarejestrowany w ARB • Oxford, UK",
    heroAlt: "Ciemna minimalistyczna betonowa klatka schodowa we współczesnym budynku",
  },
} as const;
