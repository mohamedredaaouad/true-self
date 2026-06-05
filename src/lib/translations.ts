export type Language = "fr" | "en" | "ar";

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Nav
    "nav.shop": "Collection",
    "nav.philosophy": "Philosophie",
    "nav.lookbook": "Lookbook",
    "nav.journal": "Journal",
    "nav.bereal": "Soyez Vrai",
    "nav.search": "Rechercher",
    "nav.bag": "Panier",

    // index.tsx Hero
    "hero.vol": "Vol. 01 — L'authenticité d'abord",
    "hero.title1": "TRUE SELF",
    "hero.title2": "Vivez pour vous-même.",
    "hero.title3": "Protégez votre paix.",
    "hero.desc": "Nous passons notre vie à devenir ce que les autres attendent de nous. TRUE SELF est un rappel silencieux de vivre pour soi-même.",
    "hero.shop": "Découvrir la collection",
    "hero.explore": "Explorer la philosophie",

    // The Problem Section
    "problem.title": "La plupart des gens passent leur vie à devenir ce que les autres attendent d'eux.",
    "problem.desc1": "Nous recherchons la validation sociale. Nous suivons les tendances imposées. Nous nous comparons sans cesse sur les réseaux sociaux.",
    "problem.desc2": "Dans cette course aux apparences, nous portons des masques pour plaire, finissant par oublier la voix silencieuse à l'intérieur de nous qui sait qui nous sommes vraiment.",
    "problem.tag": "Le Conflit",

    // The Solution Section
    "solution.title": "TRUE SELF n'est pas une marque de vêtements. C'est une rébellion silencieuse.",
    "solution.desc1": "Nos créations ne sont pas faites pour vous définir. Elles sont conçues pour vous rappeler votre propre liberté.",
    "solution.desc2": "Chaque pièce est une ancre physique, un manifeste sur votre poitrine pour cesser de jouer un rôle, laisser tomber les masques et choisir la paix face au bruit.",
    "solution.tag": "La Réponse",

    // Featured / Collection
    "featured.title": "Des pièces silencieuses pour porter vos vérités.",
    "featured.viewAll": "Tout afficher →",
    "collection.new": "Nouveau",
    "collection.bestsellers": "Essentiel",

    // Product Specifications
    "specs.tag": "L'Intention",
    "specs.title": "Philosophie de la Pièce.",
    "specs.desc": "Chaque vêtement de la collection est conçu pour servir de support physique à son message. Pas d'artifices, pas d'étiquettes de marque géantes. Juste vous et votre vérité.",
    "specs.weight": "Intention",
    "specs.fit": "Coupe",
    "specs.fitVal": "Ample pour votre liberté de mouvement",
    "specs.detail": "Message",
    "specs.detailVal": "Broderie ton sur ton subtile",
    "specs.origin": "Identité",
    "specs.originVal": "Conçu au Maroc",

    // Product 1
    "product.name.1": "Sweat Capuche Real > Perfect",
    "product.quote.1": "REAL > PERFECT.",
    "product.story.1": "La perfection est un masque. L'authenticité est la liberté.",
    // Product 2
    "product.name.2": "T-shirt Khalli Nass Thder",
    "product.quote.2": "BE REAL, KHALLI NASS THDER.",
    "product.story.2": "Les gens parleront toujours. Vivez votre vie malgré tout.",
    // Product 3
    "product.name.3": "Sweat Machi Kifma Bghaw",
    "product.quote.3": "BE YOURSELF, MACHI KIFMA BGHAW NASS.",
    "product.story.3": "Vous n'êtes pas né pour correspondre aux attentes. Vous êtes né pour être vous-même.",
    // Product 4
    "product.name.4": "T-shirt Live Free",
    "product.quote.4": "LIVE FREE, MACHI B7ALHOM.",
    "product.story.4": "La liberté commence là où s'arrête la comparaison.",
    // Product 5
    "product.name.5": "Sweat Capuche Not Here To Fit In",
    "product.quote.5": "NOT HERE TO FIT IN.",
    "product.story.5": "Le monde enseigne la conformité. TRUE SELF encourage l'individualité.",
    // Product 6
    "product.name.6": "Sweat Capuche Their Opinion",
    "product.quote.6": "THEIR OPINION, NOT YOUR REALITY.",
    "product.story.6": "Leur opinion leur appartient. Votre vie vous appartient.",
    // Product 7
    "product.name.7": "Sweat Less Drama",
    "product.quote.7": "LESS DRAMA, MORE PEACE.",
    "product.story.7": "Protégez votre paix. Chaque bataille ne mérite pas votre énergie.",
    // Product 8
    "product.name.8": "T-shirt Enough As You Are",
    "product.quote.8": "ENOUGH AS YOU ARE.",
    "product.story.8": "Vous n'avez pas besoin de devenir quelqu'un d'autre pour avoir de la valeur.",

    // Philosophy
    "philosophy.title": "Nous ne sommes pas là pour impressionner. Nous sommes là pour être nous-mêmes.",
    "philosophy.desc1": "TRUE SELF représente l'authenticité, la paix intérieure, l'expression de soi, la liberté face à la validation sociale, et le fait de vivre pour soi-même plutôt que pour l'approbation des autres.",
    "philosophy.desc2": "Chaque pièce est conçue comme une ancre physique. Une déclaration silencieuse de qui vous êtes vraiment.",
    "philosophy.val1": "Réel.",
    "philosophy.sub1": "sans filtres",
    "philosophy.val2": "Calme.",
    "philosophy.sub2": "la paix sur le bruit",
    "philosophy.val3": "Vrai.",
    "philosophy.sub3": "soi authentique",

    // Story
    "story.title": "Notre Histoire",
    "story.quote": "« TRUE SELF n'est pas un magasin de vêtements. C'est un mouvement et un état d'esprit qui vous encourage à cesser de vivre pour l'approbation des autres et à vous reconnecter avec qui vous êtes vraiment. »",
    "story.desc": "Né sur les côtes de la Méditerranée et au cœur de l'Afrique du Nord, notre voyage a commencé comme une rébellion silencieuse. Dans un monde obsédé par les apparences et le bruit constant de la validation sociale, nous avons choisi de concevoir des rappels physiques simples. Nos vêtements sont des ancres de calme, faites pour être portées lentement et ressenties sincèrement.",

    // Concept
    "concept.title": "Vous n'avez pas besoin d'être bruyant pour être entendu.",
    "concept.subtitle": "Vous n'avez pas besoin d'approbation pour exister.",
    "concept.footer": "true self, depuis 2024",

    // Manifesto Section
    "manifesto.title": "Notre manifeste pour le vrai soi",
    "manifesto.desc": "Nous croyons que la liberté commence là où s'arrête le besoin de plaire. Nos pièces sont des rappels physiques pour vous reconnecter avec votre essence.",
    "manifesto.p1.title": "Authenticité",
    "manifesto.p1.desc": "Le courage d'être soi-même, sans filtres et sans excuses dans un monde obsédé par la perfection.",
    "manifesto.p2.title": "Liberté",
    "manifesto.p2.desc": "Se libérer du poids de l'approbation sociale pour tracer son propre chemin avec fierté.",
    "manifesto.p3.title": "Confiance",
    "manifesto.p3.desc": "La certitude tranquille que vous êtes assez, exactement tel que vous êtes aujourd'hui, sans artifices.",
    "manifesto.p4.title": "Paix Intérieure",
    "manifesto.p4.desc": "Choisir la tranquillité de l'esprit face au chaos et au bruit extérieur constant.",

    // Peace & Love
    "peace.tag": "Paix & Amour",
    "peace.title": "Choisissez le calme. Choisissez l'amour. Choisissez-vous, avec douceur.",
    "peace.h1": "Vie douce",
    "peace.d1": "Moins d'écrans, plus de respiration. Nos collections sont limitées et conçues pour durer des saisons, pas des semaines.",
    "peace.h2": "Le vrai sur le parfait",
    "peace.d2": "Nous ne retouchons pas nos modèles. Les rites, le calme, les moments de transition — tout reste brut.",
    "peace.h3": "Le doux est fort",
    "peace.d3": "Choisir la paix dans un monde bruyant est la déclaration la plus forte que vous puissiez porter.",

    // Lookbook
    "lookbook.title": "Lookbook",
    "lookbook.desc": "Campagne visuelle — Casablanca & Tanger. Des moments bruts capturés sous la lumière naturelle de l'Afrique du Nord.",

    // Drops
    "drops.title": "Éditions Limitées",
    "drops.desc": "Séries numérotées, conçues lentement. Chaque drop est une série exclusive limitée à 100 exemplaires.",

    // Journal
    "journal.title": "Journal de l'Authenticité",
    "journal.entry1.title": "Le courage d'être silencieux",
    "journal.entry1.desc": "Trouver la paix dans un monde qui ne s'arrête jamais de parler. L'art de la confiance tranquille.",
    "journal.entry2.title": "Retour à l'Océan",
    "journal.entry2.desc": "Moments de méditation solitaire le long de la côte méditerranéenne, face à l'horizon.",

    // Community
    "community.title": "Communauté",
    "community.desc": "Un silence partagé. Rencontres et connexions réelles de ceux qui vivent selon leur propre vérité.",

    // Packaging
    "packaging.title": "Détails de Signature",
    "packaging.desc": "Nos vêtements comportent des étiquettes minimalistes en coton bio non blanchi. Chaque colis est emballé dans du papier kraft texturé imprimé avec nos coordonnées d'origine, symbolisant notre retour aux sources.",

    // Gallery
    "gallery.title": "Des moments, pas du contenu.",
    "gallery.insta": "Nous suivre sur Instagram →",

    // Newsletter
    "news.tag": "Des lettres, jamais du bruit",
    "news.title": "Notes douces d'un soi véritable.",
    "news.desc": "Un e-mail calme par mois. Réflexions, et ce pour quoi nous choisissons la paix.",
    "news.placeholder": "votre e-mail, tout en douceur",
    "news.btn": "S'inscrire discrètement",

    // Footer
    "footer.rights": "conçu lentement · porté sincèrement",
    "share.name": "TRUE SELF",
    "share.desc": "Explorez la philosophie de TRUE SELF.",
  },
  en: {
    // Nav
    "nav.shop": "Collection",
    "nav.philosophy": "Philosophy",
    "nav.lookbook": "Lookbook",
    "nav.journal": "Journal",
    "nav.bereal": "Be Real",
    "nav.search": "Search",
    "nav.bag": "Bag",

    // index.tsx Hero
    "hero.vol": "Vol. 01 — Authenticity First",
    "hero.title1": "TRUE SELF",
    "hero.title2": "Live For Yourself.",
    "hero.title3": "Protect Your Peace.",
    "hero.desc": "Most people spend their lives becoming who others expect them to be. TRUE SELF is a silent reminder to live for yourself.",
    "hero.shop": "Shop Collection",
    "hero.explore": "Explore Philosophy",

    // The Problem Section
    "problem.title": "Most people spend their lives becoming who others expect them to be.",
    "problem.desc1": "We chase external approval. We follow artificial trends. We compare our lives to filters on social networks.",
    "problem.desc2": "In this constant loop of validation, we hide behind roles to fit in, slowly forgetting the quiet voice inside that knows who we truly are.",
    "problem.tag": "The Conflict",

    // The Solution Section
    "solution.title": "TRUE SELF is not a clothing company. It is a quiet rebellion.",
    "solution.desc1": "Our pieces are not designed to define you. They are built to remind you of your own freedom.",
    "solution.desc2": "Each garment is a physical anchor—a daily reminder on your chest to stop performing, take off the masks, and choose authenticity over noise.",
    "solution.tag": "The Answer",

    // Featured / Collection
    "featured.title": "Quiet pieces to wear your truths.",
    "featured.viewAll": "View all →",
    "collection.new": "New",
    "collection.bestsellers": "Essential",

    // Product Specifications
    "specs.tag": "The Intent",
    "specs.title": "Garment Philosophy.",
    "specs.desc": "Each piece in the collection is designed to support its message. No gimmicks, no oversized brand tags. Just you and your truth.",
    "specs.weight": "Intent",
    "specs.fit": "Fit",
    "specs.fitVal": "Loose fit for your freedom of movement",
    "specs.detail": "Message",
    "specs.detailVal": "Subtle tonal embroidery",
    "specs.origin": "Identity",
    "specs.originVal": "Designed in Morocco",

    // Product 1
    "product.name.1": "Real > Perfect Hoodie",
    "product.quote.1": "REAL > PERFECT.",
    "product.story.1": "Perfection is a mask. Authenticity is freedom.",
    // Product 2
    "product.name.2": "Khalli Nass Thder Tee",
    "product.quote.2": "BE REAL, KHALLI NASS THDER.",
    "product.story.2": "People will always talk. Live your life anyway.",
    // Product 3
    "product.name.3": "Machi Kifma Bghaw Nass Sweatshirt",
    "product.quote.3": "BE YOURSELF, MACHI KIFMA BGHAW NASS.",
    "product.story.3": "You were not born to fit expectations. You were born to be yourself.",
    // Product 4
    "product.name.4": "Live Free Tee",
    "product.quote.4": "LIVE FREE, MACHI B7ALHOM.",
    "product.story.4": "Freedom begins when comparison ends.",
    // Product 5
    "product.name.5": "Not Here To Fit In Hoodie",
    "product.quote.5": "NOT HERE TO FIT IN.",
    "product.story.5": "The world teaches conformity. TRUE SELF encourages individuality.",
    // Product 6
    "product.name.6": "Their Opinion Hoodie",
    "product.quote.6": "THEIR OPINION, NOT YOUR REALITY.",
    "product.story.6": "Their opinion belongs to them. Your life belongs to you.",
    // Product 7
    "product.name.7": "Less Drama Crewneck",
    "product.quote.7": "LESS DRAMA, MORE PEACE.",
    "product.story.7": "Protect your peace. Not every battle deserves your energy.",
    // Product 8
    "product.name.8": "Enough As You Are Tee",
    "product.quote.8": "ENOUGH AS YOU ARE.",
    "product.story.8": "You do not need to become someone else to be worthy.",

    // Philosophy
    "philosophy.title": "We're not here to impress. We're here to be our true selves.",
    "philosophy.desc1": "TRUE SELF represents authenticity, inner peace, self-expression, freedom from social validation, and living for yourself rather than for the approval of others.",
    "philosophy.desc2": "Every piece is designed as a physical anchor. A quiet statement of who you truly are.",
    "philosophy.val1": "Real.",
    "philosophy.sub1": "no filters",
    "philosophy.val2": "Calme.",
    "philosophy.sub2": "peace over noise",
    "philosophy.val3": "True.",
    "philosophy.sub3": "authentic self",

    // Story
    "story.title": "Our Story",
    "story.quote": "\"TRUE SELF is not a clothing store. It is a movement and a mindset that encourages people to stop living for the approval of others and reconnect with who they truly are.\"",
    "story.desc": "Born on the shores of the Mediterranean and in the heart of North Africa, our journey started as a silent rebellion. In a world obsessed with appearances and the constant noise of validation, we chose to design simple physical anchors. Our garments are anchors of calm, made to be worn slowly and felt honestly.",

    // Concept
    "concept.title": "You don't need to be loud to be heard.",
    "concept.subtitle": "You don't need approval to exist.",
    "concept.footer": "true self, since 2024",

    // Manifesto Section
    "manifesto.title": "Our Manifesto for the True Self",
    "manifesto.desc": "We believe freedom begins when the need for approval ends. Our garments serve as physical anchors to reconnect with your essence.",
    "manifesto.p1.title": "Authenticity",
    "manifesto.p1.desc": "The courage to be yourself, filterless and unapologetic in a world obsessed with perfection.",
    "manifesto.p2.title": "Freedom",
    "manifesto.p2.desc": "Releasing the heavy weight of social validation to walk your own quiet path.",
    "manifesto.p3.title": "Confidence",
    "manifesto.p3.desc": "The quiet assurance that you are enough, exactly as you are, without performing.",
    "manifesto.p4.title": "Inner Peace",
    "manifesto.p4.desc": "Choosing tranquility of the mind over chaotic external expectations.",

    // Peace & Love
    "peace.tag": "Peace & Love",
    "peace.title": "Choose calm. Choose love. Choose yourself, softly.",
    "peace.h1": "Slow living",
    "peace.d1": "Less scrolling, more breathing. Our drops are small and made to last seasons, not weeks.",
    "peace.h2": "Real over perfect",
    "peace.d2": "We don't retouch our people. The wrinkles, the quiet, the in-between — it stays.",
    "peace.h3": "Soft is strong",
    "peace.d3": "Choosing peace in a loud world is the boldest thing you can wear.",

    // Lookbook
    "lookbook.title": "Lookbook",
    "lookbook.desc": "Visual campaign — Casablanca & Tangier. Raw moments captured under natural North African light.",

    // Drops
    "drops.title": "Limited Drops",
    "drops.desc": "Numbered series, crafted slowly. Each drop is a unique design limited to 100 pieces.",

    // Journal
    "journal.title": "Authenticity Journal",
    "journal.entry1.title": "The Courage to Be Quiet",
    "journal.entry1.desc": "Finding peace in a world that cannot stop talking. The art of quiet confidence.",
    "journal.entry2.title": "Return to the Ocean",
    "journal.entry2.desc": "Solitary meditation along the Mediterranean coast, facing the deep horizon.",

    // Community
    "community.title": "Community",
    "community.desc": "Shared silence. Real moments and stories from those who walk in their own light.",

    // Packaging
    "packaging.title": "Signature Details",
    "packaging.desc": "Our garments feature raw unbleached organic cotton labels. Each package is enclosed in custom coordinates-textured kraft paper, representing our physical return to the roots.",

    // Gallery
    "gallery.title": "Moments, not content.",
    "gallery.insta": "Follow on Instagram →",

    // Newsletter
    "news.tag": "Letters, never noise",
    "news.title": "Slow notes from a true self.",
    "news.desc": "One quiet email a month. New drops, reflections, and the things we're choosing peace over.",
    "news.placeholder": "your email, gently",
    "news.btn": "Join quietly",

    // Footer
    "footer.rights": "made slowly · worn honestly",
    "share.name": "TRUE SELF",
    "share.desc": "Explore the philosophy of TRUE SELF.",
  },
  ar: {
    // Nav
    "nav.shop": "المجموعة",
    "nav.philosophy": "الفلسفة",
    "nav.lookbook": "كتيب التصاميم",
    "nav.journal": "المجلة",
    "nav.bereal": "كن حقيقياً",
    "nav.search": "بحث",
    "nav.bag": "السلة",

    // index.tsx Hero
    "hero.vol": "الإصدار 01 — الأصالة أولاً",
    "hero.title1": "ذاتك الحقيقية",
    "hero.title2": "عِش لنفسك.",
    "hero.title3": "احمِ سلامك الداخلي.",
    "hero.desc": "يقضي معظم الناس حياتهم في أن يصبحوا ما يتوقعه الآخرون منهم. ذاتك الحقيقية هي تذكير صامت لتعيش لنفسك.",
    "hero.shop": "اكتشف المجموعة",
    "hero.explore": "اكتشف الفلسفة",

    // The Problem Section
    "problem.title": "يقضي معظم الناس حياتهم في أن يصبحوا ما يتوقعه الآخرون منهم.",
    "problem.desc1": "نحن نلهث وراء موافقة الآخرين. نتبع صيحات مصطنعة. نقارن أنفسنا باستمرار بشاشات شبكات التواصل الاجتماعي.",
    "problem.desc2": "في هذه الحلقة المستمرة من البحث عن القبول، نرتدي أقنعة لنلائم مجتمعنا، وننسى ببطء ذلك الصوت الهادئ بداخلنا الذي يعرف من نكون حقاً.",
    "problem.tag": "الصراع",

    // The Solution Section
    "solution.title": "ذاتك الحقيقية ليست مجرد علامة ملابس. إنها تمرد صامت.",
    "solution.desc1": "قطعنا لم تُصمم لتحدد هويتك. بل صُنعت لتذكرك بحريتك الخاصة.",
    "solution.desc2": "كل قطعة هي مرساة مادية — تذكير يومي على صدرك للتوقف عن التمثيل، وتجريد الأقنعة، واختيار الأصالة على الضجيج.",
    "solution.tag": "الإجابة",

    // Featured / Collection
    "featured.title": "قطع هادئة لتحمل حقائقك.",
    "featured.viewAll": "عرض الكل ←",
    "collection.new": "جديد",
    "collection.bestsellers": "أساسي",

    // Product Specifications
    "specs.tag": "الغاية",
    "specs.title": "فلسفة القطعة.",
    "specs.desc": "صممت كل قطعة في المجموعة لتكون دعماً مادياً لرسالتها. لا بهرجة، لا علامات تجارية ضخمة. فقط أنت وحقيقتك.",
    "specs.weight": "الغاية",
    "specs.fit": "القصة",
    "specs.fitVal": "قصة مريحة تمنحك حرية الحركة والروح",
    "specs.detail": "الرسالة",
    "specs.detailVal": "تطريز متناسق وهادئ",
    "specs.origin": "الهوية",
    "specs.originVal": "صمم في المغرب",

    // Product 1
    "product.name.1": "سترة ذو غطاء للرأس Real > Perfect",
    "product.quote.1": "REAL > PERFECT.",
    "product.story.1": "المثالية قناع. الأصالة حرية.",
    // Product 2
    "product.name.2": "قميص Khalli Nass Thder",
    "product.quote.2": "BE REAL, KHALLI NASS THDER.",
    "product.story.2": "سيتحدث الناس دائماً. عِش حياتك على أي حال.",
    // Product 3
    "product.name.3": "كنزة Machi Kifma Bghaw",
    "product.quote.3": "BE YOURSELF, MACHI KIFMA BGHAW NASS.",
    "product.story.3": "لم تولد لتلبي توقعاتهم. لقد ولدت لتكون نفسك.",
    // Product 4
    "product.name.4": "قميص Live Free",
    "product.quote.4": "LIVE FREE, MACHI B7ALHOM.",
    "product.story.4": "تبدأ الحرية عندما تنتهي المقارنة.",
    // Product 5
    "product.name.5": "سترة ذو غطاء للرأس Not Here To Fit In",
    "product.quote.5": "NOT HERE TO FIT IN.",
    "product.story.5": "العالم يعلمك الامتثال والتقليد. ذاتك الحقيقية تشجع الفردية.",
    // Product 6
    "product.name.6": "سترة ذو غطاء للرأس Their Opinion",
    "product.quote.6": "THEIR OPINION, NOT YOUR REALITY.",
    "product.story.6": "رأيهم يخصهم وحدهم. حياتك ملك لك أنت.",
    // Product 7
    "product.name.7": "كنزة Less Drama",
    "product.quote.7": "LESS DRAMA, MORE PEACE.",
    "product.story.7": "احمِ سلامك الداخلي. ليست كل معركة تستحق طاقتك.",
    // Product 8
    "product.name.8": "قميص Enough As You Are",
    "product.quote.8": "ENOUGH AS YOU ARE.",
    "product.story.8": "لا تحتاج أن تصبح شخصاً آخر لتكون جديراً وقيم المظهر.",

    // Philosophy
    "philosophy.title": "لسنا هنا لإبهار الآخرين. نحن هنا لنكون أنفسنا الحقيقية.",
    "philosophy.desc1": "تمثل TRUE SELF الأصالة، والسلام الداخلي، والتعبير عن الذات، والتحرر من التقييم الاجتماعي، والعيش لنفسك بدلاً من نيل موافقة الآخرين.",
    "philosophy.desc2": "كل قطعة مصممة كمرساة مادية. إعلان صامت عمن تكون حقاً.",
    "philosophy.val1": "حقيقي.",
    "philosophy.sub1": "بدون فلاتر",
    "philosophy.val2": "هادئ.",
    "philosophy.sub2": "السلام فوق الضجيج",
    "philosophy.val3": "صادق.",
    "philosophy.sub3": "الذات الحقيقية",

    // Story
    "story.title": "قصتنا",
    "story.quote": "« ذاتك الحقيقية ليست مجرد متجر ملابس. إنها حركة وعقلية تشجع الناس على التوقف عن العيش لنيل موافقة الآخرين وإعادة الاتصال بمن هم عليه حقاً. »",
    "story.desc": "ولدت على شواطئ البحر الأبيض المتوسط وفي قلب شمال إفريقيا، بدأت رحلتنا كتمرد صامت. في عالم مهووس بالمظاهر والضجيج المستمر للتقييم الاجتماعي، اخترنا تصميم تذكيرات مادية بسيطة. ملابسنا هي مراسي من الهدوء، صُنعت لترتدى ببطء وتُشعر بصدق.",

    // Concept
    "concept.title": "لا تحتاج أن تكون صاخباً ليُسمع صوتك.",
    "concept.subtitle": "لا تحتاج إلى موافقة الآخرين كي تكون موجوداً.",
    "concept.footer": "true self، منذ 2024",

    // Campaign
    "lookbook.title": "كتيب التصاميم",
    "lookbook.desc": "الحملة البصرية — الدار البيضاء وطنجة. لحظات خام التقطت تحت الضوء الطبيعي لشمال إفريقيا.",

    // Drops
    "drops.title": "إصدارات محدودة",
    "drops.desc": "سلاسل مرقمة، صُنعت ببطء. كل إصدار عبارة عن تصميم فريد يقتصر على 100 قطعة فقط.",

    // Journal
    "journal.title": "مجلة الأصالة",
    "journal.entry1.title": "شجاعة الصمت",
    "journal.entry1.desc": "إيجاد السلام في عالم لا يتوقف عن الكلام. فن الثقة الهادئة.",
    "journal.entry2.title": "العودة إلى المحيط",
    "journal.entry2.desc": "تأمل انفرادي على طول ساحل البحر الأبيض المتوسط، مواجهاً الأفق العميق.",

    // Community
    "community.title": "المجتمع",
    "community.desc": "صمت مشترك. لحظات وقصص حقيقية من أولئك الذين يسيرون في نورهم الخاص.",

    // Packaging
    "packaging.title": "تفاصيل مميزة",
    "packaging.desc": "تتميز ملابسنا بملصقات من القطن العضوي غير المبيض. يتم لف كل شحنة بورق كرافت مخصص ومطبوع عليه إحداثياتنا، مما يرمز إلى عودتنا المادية للجذور.",

    // Gallery
    "gallery.title": "لحظات، وليس محتوى.",
    "gallery.insta": "تابعنا على إنستغرام ←",

    // Newsletter
    "news.tag": "رسائل، ليس ضجيجاً",
    "news.title": "رسائل هادئة من ذات حقيقية.",
    "news.desc": "بريد إلكتروني هادئ واحد في الشهر. تأملات، والأشياء التي نختار السلام لأجلها.",
    "news.placeholder": "بريدك الإلكتروني، بلطف",
    "news.btn": "اشترك بهدوء",

    // Footer
    "footer.rights": "صنع ببطء · يرتدى بصدق",
    "share.name": "TRUE SELF",
    "share.desc": "اكتشف فلسفة ذاتك الحقيقية.",
  },
};
