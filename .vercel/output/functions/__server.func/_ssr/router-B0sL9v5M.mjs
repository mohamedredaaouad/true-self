import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BAdvd5HP.mjs";
import { X, i as Sparkles, a as Check, h as ShoppingBag, d as Minus, e as Plus, T as Trash2, c as Clock, M as MessageSquare } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
const appCss = "/assets/styles-BbDBvOEx.css";
const translations = {
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
    "collection.all": "Tous",
    "collection.featured": "Sélection",
    "collection.new_arrivals": "Nouveautés",
    "collection.best_sellers": "Meilleures Ventes",
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
    // New UX/UI elements
    "philosophy.authenticity": "Authenticité",
    "philosophy.freedom": "Liberté",
    "philosophy.peace": "Paix",
    "philosophy.confidence": "Confiance",
    "wishlist.title": "Mes Favoris",
    "wishlist.empty": "Votre liste est vide.",
    "recent.title": "Récemment consultés",
    "cart.emotion.banner": "Un pas de plus vers votre TRUE SELF.",
    "cart.added.journey": "Ajouté à votre voyage.",
    "review.q1.text": "Coupe et tissu d'une qualité incroyable. Très agréable.",
    "review.q2.text": "Coton épais de qualité supérieure, finitions impeccables.",
    "review.e1.text": "Cette citation a résonné en moi comme si elle avait été écrite pour moi.",
    "review.e2.text": "Porter ce vêtement me rappelle chaque jour de vivre pour moi-même.",
    "footer.newsletter.title": "Rejoindre le mouvement.",
    "footer.newsletter.desc": "Entrez votre email pour rejoindre notre rébellion silencieuse.",
    "footer.support.faq": "FAQ",
    "footer.support.shipping": "Livraison",
    "footer.support.returns": "Retours",
    "footer.support.contact": "Contact",
    "symbol.title": "Le Symbole",
    "symbol.desc1": "Le cercle représente la société, les attentes et le besoin d'approbation.",
    "symbol.desc2": "Le symbole à l'extérieur du cercle représente l'individu qui choisit l'authenticité, la liberté et la confiance en soi.",
    "symbol.desc3": "TRUE SELF est un rappel que votre vie vous appartient. Vivez pour vous-même."
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
    "collection.all": "All",
    "collection.featured": "Featured",
    "collection.new_arrivals": "New Arrivals",
    "collection.best_sellers": "Best Sellers",
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
    "story.quote": '"TRUE SELF is not a clothing store. It is a movement and a mindset that encourages people to stop living for the approval of others and reconnect with who they truly are."',
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
    // New UX/UI elements
    "philosophy.authenticity": "Authenticity",
    "philosophy.freedom": "Freedom",
    "philosophy.peace": "Peace",
    "philosophy.confidence": "Confidence",
    "wishlist.title": "My Wishlist",
    "wishlist.empty": "Your wishlist is empty.",
    "recent.title": "Recently Viewed",
    "cart.emotion.banner": "One step closer to your TRUE SELF.",
    "cart.added.journey": "Added To Your Journey.",
    "review.q1.text": "Excellent quality, fit and fabric weight. Very comfortable.",
    "review.q2.text": "Premium heavy cotton, outstanding details.",
    "review.e1.text": "This quote felt like it was written for me.",
    "review.e2.text": "Wearing this reminds me to live for myself every day.",
    "footer.newsletter.title": "Join The Movement.",
    "footer.newsletter.desc": "Enter your email to join our silent rebellion.",
    "footer.support.faq": "FAQ",
    "footer.support.shipping": "Shipping",
    "footer.support.returns": "Returns",
    "footer.support.contact": "Contact",
    "symbol.title": "The Symbol",
    "symbol.desc1": "The circle represents society, expectations and the need for approval.",
    "symbol.desc2": "The symbol outside the circle represents the individual who chooses authenticity, freedom and self-trust.",
    "symbol.desc3": "TRUE SELF is a reminder that your life belongs to you. Live For Yourself."
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
    "collection.all": "الكل",
    "collection.featured": "المميزة",
    "collection.new_arrivals": "أحدث المنتجات",
    "collection.best_sellers": "الأكثر مبيعاً",
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
    // New UX/UI elements
    "philosophy.authenticity": "الأصالة",
    "philosophy.freedom": "الحرية",
    "philosophy.peace": "السلام",
    "philosophy.confidence": "الثقة",
    "wishlist.title": "المفضلة",
    "wishlist.empty": "قائمتك المفضلة فارغة.",
    "recent.title": "شوهد مؤخراً",
    "cart.emotion.banner": "خطوة أقرب إلى ذاتك الحقيقية.",
    "cart.added.journey": "تمت إضافتها لرحلتك.",
    "review.q1.text": "جودة ممتازة وقصة مريحة جداً.",
    "review.q2.text": "قطن ثقيل ومميز بتفاصيل ممتازة.",
    "review.e1.text": "شعرت أن هذه العبارة كتبت خصيصاً لي.",
    "review.e2.text": "ارتداء هذا يذكرني بالعيش لنفسي كل يوم.",
    "footer.newsletter.title": "انضم إلى الحركة.",
    "footer.newsletter.desc": "أدخل بريدك الإلكتروني للانضمام لحركتنا الصامتة.",
    "footer.support.faq": "الأسئلة الشائعة",
    "footer.support.shipping": "الشحن والتوصيل",
    "footer.support.returns": "الاستبدال والاسترجاع",
    "footer.support.contact": "اتصل بنا",
    "symbol.title": "الرمز",
    "symbol.desc1": "تمثل الدائرة المجتمع، والتوقعات، والحاجة إلى القبول.",
    "symbol.desc2": "يمثل الرمز الموجود خارج الدائرة الفرد الذي يختار الأصالة، والحرية، والثقة بالنفس.",
    "symbol.desc3": "ذاتك الحقيقية تذكير بأن حياتك ملك لك. عِش لنفسك."
  }
};
const LanguageContext = reactExports.createContext(void 0);
function LanguageProvider({ children }) {
  const [language, setLanguageState] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ts_language");
      if (saved === "fr" || saved === "en" || saved === "ar") {
        return saved;
      }
    }
    return "fr";
  });
  const setLanguage = (lang) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("ts_language", lang);
    }
  };
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const dir2 = language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir2;
      document.documentElement.lang = language;
    }
  }, [language]);
  const t = (key, replacements) => {
    const langDict = translations[language] || translations["fr"];
    let translation = langDict[key] || translations["fr"][key] || translations["en"][key] || key;
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        translation = translation.replace(`{${k}}`, v);
      });
    }
    return translation;
  };
  const dir = language === "ar" ? "rtl" : "ltr";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageContext.Provider, { value: { language, setLanguage, t, dir }, children });
}
function useLanguage() {
  const context = reactExports.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
const CartContext = reactExports.createContext(void 0);
function CartProvider({ children }) {
  const [cartItems, setCartItems] = reactExports.useState([]);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const [requestedStep, setRequestedStep] = reactExports.useState("cart");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("ts_cart");
        if (saved) {
          setCartItems(JSON.parse(saved));
        }
      } catch (err) {
        console.error("Error loading cart from localStorage:", err);
      }
      setIsLoaded(true);
    }
  }, []);
  reactExports.useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      try {
        localStorage.setItem("ts_cart", JSON.stringify(cartItems));
      } catch (err) {
        console.error("Error saving cart to localStorage:", err);
      }
    }
  }, [cartItems, isLoaded]);
  const addToCart = (newItem) => {
    const itemId = `${newItem.productId}-${newItem.size}-${newItem.color}`;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId);
      if (existingItem) {
        return prevItems.map(
          (item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...newItem, id: itemId, quantity: 1 }];
    });
    setRequestedStep("cart");
    setCartOpen(true);
  };
  const buyNow = (newItem) => {
    const itemId = `${newItem.productId}-${newItem.size}-${newItem.color}`;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, { ...newItem, id: itemId, quantity: 1 }];
    });
    setRequestedStep("checkout");
    setCartOpen(true);
  };
  const updateQuantity = (id, delta) => {
    setCartItems(
      (prevItems) => prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item) => item !== null)
    );
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CartContext.Provider,
    {
      value: {
        cartItems,
        addToCart,
        buyNow,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        cartOpen,
        setCartOpen,
        requestedStep,
        setRequestedStep
      },
      children
    }
  );
}
function useCart() {
  const context = reactExports.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const adminLoginFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("0b5d8222b5c5a5ff0f3803ede304ca52c9c10930a4565e2a4f72a783bdc1e4b6"));
const adminLogoutFn = createServerFn({
  method: "POST"
}).handler(createSsrRpc("ad2d1adea7cacd7aadc7949f303d1d45d753a0b6af4dfbc011b658dbfec24060"));
const checkAdminAuthFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("04ab80446e4cad863179eef6336b29a74d685340ba866db7e3333a7019b456bc"));
const createOrderFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("0b1d791ec81a3d0a4252766c5f213de9e95dc8deb15e746e4a8369e5de20e062"));
const getOrdersFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4da6ed92fc94ebf6c0a8932f19c99ab60a000695af9dbcc44b5ac25671f83b7a"));
const updateOrderStatusFn = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("ff7cbb0d15363131f77420f707143b0cf9e674ee544c429c38510ff1cf368a3f"));
function Symbol$1({ size = 24, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 100 100",
      width: size,
      height: size,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `inline-block align-middle transition-transform duration-700 group/symbol ${className}`,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "50",
            cy: "55",
            r: "22",
            stroke: "currentColor",
            strokeWidth: "2.5",
            className: "transition-opacity duration-700 group-hover/symbol:opacity-80"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "72",
            cy: "33",
            r: "5.5",
            fill: "currentColor",
            className: "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-[72px_33px] group-hover/symbol:scale-130 group-hover/symbol:translate-x-1 group-hover/symbol:-translate-y-1"
          }
        )
      ]
    }
  );
}
function Logo({
  layout = "horizontal",
  symbolSize,
  symbolClassName,
  textSize,
  taglineSize,
  className = "",
  showTagline = true
}) {
  if (layout === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-3 select-none group/symbol cursor-pointer ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Symbol$1,
        {
          size: symbolSize,
          className: `${symbolClassName || ""}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.15em] text-foreground uppercase transition-colors duration-700 group-hover/symbol:opacity-80 ${textSize || "text-sm sm:text-base"}`, children: "TRUE SELF" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-center text-center gap-4 select-none group/symbol cursor-pointer ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Symbol$1,
      {
        size: symbolSize || 64,
        className: `${symbolClassName || ""}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display tracking-[0.25em] text-foreground uppercase block font-medium transition-colors duration-700 group-hover/symbol:opacity-80 ${textSize || "text-2xl md:text-3xl"}`, children: "TRUE SELF" }),
      showTagline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono tracking-[0.3em] text-muted-foreground uppercase block leading-none transition-colors duration-700 group-hover/symbol:opacity-80 ${taglineSize || "text-[9px] md:text-[10px]"}`, children: "LIVE FOR YOURSELF." })
    ] })
  ] });
}
const MOROCCAN_CITIES = [
  { nameFr: "Casablanca", nameAr: "الدار البيضاء", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Rabat", nameAr: "الرباط", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Marrakech", nameAr: "مراكش", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Tanger", nameAr: "طنجة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Fès", nameAr: "فاس", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Agadir", nameAr: "أكادير", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Salé", nameAr: "سلا", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Meknès", nameAr: "مكناس", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Kénitra", nameAr: "القنيطرة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Tétouan", nameAr: "تطوان", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Oujda", nameAr: "وجدة", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" },
  { nameFr: "Mohammédia", nameAr: "المحمدية", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "El Jadida", nameAr: "الجديدة", delayFr: "Livraison 24h - 48h", delayAr: "توصيل 24 إلى 48 ساعة" },
  { nameFr: "Safi", nameAr: "آسفي", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Nador", nameAr: "الناظور", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" },
  { nameFr: "Beni Mellal", nameAr: "بني ملال", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Témara", nameAr: "تمارة", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Khémisset", nameAr: "الخميسات", delayFr: "Livraison 48h", delayAr: "توصيل خلال 48 ساعة" },
  { nameFr: "Berrechid", nameAr: "برشيد", delayFr: "Livraison 24h", delayAr: "توصيل خلال 24 ساعة" },
  { nameFr: "Dakhla", nameAr: "الداخلة", delayFr: "Livraison 3 - 5 jours", delayAr: "توصيل 3 إلى 5 أيام" },
  { nameFr: "Laâyoune", nameAr: "العيون", delayFr: "Livraison 3 - 5 jours", delayAr: "توصيل 3 إلى 5 أيام" },
  { nameFr: "Autre ville", nameAr: "مدينة أخرى", delayFr: "Livraison 48h - 72h", delayAr: "توصيل 48 إلى 72 ساعة" }
];
function isValidMoroccanPhone(phone) {
  const clean = phone.replace(/[^0-9]/g, "");
  if (clean.length === 10 && (clean.startsWith("06") || clean.startsWith("07") || clean.startsWith("05"))) {
    return true;
  }
  if (clean.length === 12 && clean.startsWith("212") && (clean.startsWith("2126") || clean.startsWith("2127"))) {
    return true;
  }
  return clean.length >= 9;
}
function buildWhatsAppOrderMessage(order, language) {
  const isAr = language === "ar";
  const itemsText = order.items.map((item, idx) => {
    const quoteStr = item.quote ? ` « ${item.quote} »` : "";
    return `${idx + 1}. *${item.name}*${quoteStr}
   • ${isAr ? "المقاس" : "Taille"} : ${item.size} | ${isAr ? "اللون" : "Couleur"} : ${item.color}
   • ${isAr ? "الكمية" : "Qté"} : ${item.quantity} × ${item.price} MAD = *${item.quantity * item.price} MAD*`;
  }).join("\n\n");
  if (isAr) {
    return `✨ *طلب جديد من متجر TRUE SELF®* ✨
━━━━━━━━━━━━━━━━━━━━
📦 *رقم الطلب :* #${order.id}
👤 *الاسم :* ${order.customerName}
📞 *الهاتف :* ${order.customerPhone}
📍 *المدينة :* ${order.customerCity}
🏠 *العنوان :* ${order.customerAddress}
` + (order.customerNotes ? `📝 *ملاحظات :* ${order.customerNotes}
` : "") + `━━━━━━━━━━━━━━━━━━━━
🛍️ *تفاصيل الطلب :*

${itemsText}

━━━━━━━━━━━━━━━━━━━━
💰 *المجموع الإجمالي :* *${order.totalPrice} MAD*
🚚 *التوصيل :* بالمجان (الدفع عند الاستلام)

السلام عليكم، أود تأكيد طلبي وشكراً !`;
  }
  return `✨ *NOUVELLE COMMANDE TRUE SELF®* ✨
━━━━━━━━━━━━━━━━━━━━
📦 *Commande N° :* #${order.id}
👤 *Client :* ${order.customerName}
📞 *Téléphone :* ${order.customerPhone}
📍 *Ville :* ${order.customerCity}
🏠 *Adresse :* ${order.customerAddress}
` + (order.customerNotes ? `📝 *Note client :* ${order.customerNotes}
` : "") + `━━━━━━━━━━━━━━━━━━━━
🛍️ *ARTICLES COMMANDÉS :*

${itemsText}

━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL À PAYER :* *${order.totalPrice} MAD*
🚚 *Livraison :* Gratuite (Paiement à la livraison)

Bonjour ! Je confirme ma commande ci-dessus. Merci de me tenir informé de l'expédition.`;
}
function CartDrawer() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount,
    cartOpen,
    setCartOpen,
    requestedStep
  } = useCart();
  const [checkoutStep, setCheckoutStep] = reactExports.useState("cart");
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("Casablanca");
  const [address, setAddress] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [isSubmittingOrder, setIsSubmittingOrder] = reactExports.useState(false);
  const [orderError, setOrderError] = reactExports.useState("");
  const [completedOrder, setCompletedOrder] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (cartOpen && requestedStep) {
      setCheckoutStep(requestedStep);
    }
  }, [cartOpen, requestedStep]);
  reactExports.useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && cartOpen && checkoutStep !== "success") {
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cartOpen, checkoutStep, setCartOpen]);
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !city || !address) {
      setOrderError(isAr ? "يرجى ملء جميع الحقول المطلوبة." : "Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!isValidMoroccanPhone(phone)) {
      setOrderError(
        isAr ? "يرجى إدخال رقم هاتف مغربي صالح (مثال: 06 XX XX XX XX أو 07 XX XX XX XX)." : "Veuillez saisir un numéro de téléphone marocain valide (ex: 06 XX XX XX XX ou 07 XX XX XX XX)."
      );
      return;
    }
    setIsSubmittingOrder(true);
    setOrderError("");
    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.productId,
        name: item.name,
        quote: item.quote,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.price
      }));
      const result = await createOrderFn({
        data: {
          customerName: fullName.trim(),
          customerPhone: phone.trim(),
          customerCity: city.trim(),
          customerAddress: address.trim(),
          customerNotes: notes.trim() || void 0,
          items: orderItems,
          totalPrice: cartSubtotal
        }
      });
      const orderId = result?.order?.id || `TS-${Date.now().toString().slice(-6)}`;
      setCompletedOrder({
        id: orderId,
        customerName: fullName.trim(),
        customerPhone: phone.trim(),
        customerCity: city.trim(),
        customerAddress: address.trim(),
        customerNotes: notes.trim() || void 0,
        items: orderItems,
        totalPrice: cartSubtotal
      });
      clearCart();
      setFullName("");
      setPhone("");
      setCity("");
      setAddress("");
      setNotes("");
      setCheckoutStep("success");
    } catch (err) {
      console.error("Error submitting order:", err);
      setOrderError(
        isAr ? "حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى." : "Une erreur est survenue lors de l'enregistrement de votre commande. Veuillez réessayer."
      );
    } finally {
      setIsSubmittingOrder(false);
    }
  };
  const closeDrawer = () => {
    if (checkoutStep === "success") {
      setCheckoutStep("cart");
      setCompletedOrder(null);
    }
    setCartOpen(false);
  };
  const whatsAppTargetNumber = "212652617044".replace(/[^0-9]/g, "");
  const selectedCityData = MOROCCAN_CITIES.find(
    (c) => c.nameFr.toLowerCase() === city.toLowerCase() || c.nameAr === city
  ) || MOROCCAN_CITIES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed inset-0 z-[120] bg-black/50 transition-opacity duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: closeDrawer,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed top-0 bottom-0 ${isAr ? "left-0" : "right-0"} w-full sm:w-[480px] z-[121] bg-background border-border/60 ${isAr ? "border-r" : "border-l"} shadow-2xl flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-out ${cartOpen ? "translate-x-0" : isAr ? "-translate-x-full" : "translate-x-full"}`,
        dir: isAr ? "rtl" : "ltr",
        "aria-label": "Shopping Bag",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border/40 flex items-center justify-between bg-background/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "text-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-semibold tracking-brand uppercase", children: [
                isAr ? "حقيبتك" : "Votre Panier",
                " (",
                cartCount,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: closeDrawer,
                className: "p-1.5 hover:opacity-70 transition-opacity border border-border/40 rounded-full bg-secondary/20 cursor-pointer",
                "aria-label": "Fermer le panier",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
              }
            )
          ] }),
          cartItems.length > 0 && checkoutStep !== "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 px-6 py-2.5 border-b border-border/30 text-center text-[10px] sm:text-xs font-mono text-foreground flex items-center justify-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "text-amber-500 flex-shrink-0" }),
            cartCount === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "أضف قطعة ثانية لطلبك للحصول على شحن أولوية وملصق TRUE SELF® الحصري !" : "Ajoutez un 2ème article pour débloquer le sticker collector TRUE SELF® offert !" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#25D366] font-semibold", children: isAr ? "✓ مبروك ! تم تفعيل الشحن المجاني الأولوية والملصق الحصري." : "✓ Offre débloquée : Livraison Express & Sticker Collector Offerts !" })
          ] }),
          checkoutStep === "success" && completedOrder ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 bg-[#25D366]/15 text-[#25D366] flex items-center justify-center rounded-full border border-[#25D366]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl leading-tight", children: isAr ? "شكراً لاختيارك ذاتك" : "Commande Enregistrée !" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-secondary/40 border border-border/60 px-4 py-2 rounded-xs font-mono text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: isAr ? "رقم الطلب:" : "N° de Commande:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold tracking-wider text-foreground", children: [
                "#",
                completedOrder.id
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground font-light leading-relaxed max-w-sm", children: isAr ? "تم تسجيل طلبك بنجاح. لتأكيد التوصيل فوراً وبسرعة، اضغط على الزر أدناه لإرسال تفاصيل طلبك كاملة عبر واتساب :" : "Votre commande est bien enregistrée. Pour une expédition express, cliquez sur le bouton ci-dessous pour nous envoyer votre commande détaillée sur WhatsApp :" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/${whatsAppTargetNumber}?text=${encodeURIComponent(
                  buildWhatsAppOrderMessage(completedOrder, language)
                )}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-full max-w-xs flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xs font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-soft cursor-pointer font-mono",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 fill-current flex-shrink-0", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "تأكيد فوري عبر واتساب" : "Envoyer la commande sur WhatsApp" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: closeDrawer,
                className: "border border-border/80 hover:border-foreground bg-transparent text-foreground px-8 py-3 text-[10px] tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer",
                children: isAr ? "العودة للمجموعة" : "Retour à la boutique"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center space-y-3 py-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-muted-foreground", children: isAr ? "حقيبتك فارغة" : "Votre panier est vide." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70 font-mono", children: isAr ? "اختر القطع التي تعبر عن ذاتك." : "Découvrez notre collection." })
            ] }) : checkoutStep === "cart" ? (
              /* Cart list */
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/30", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 flex items-center justify-between gap-4 first:pt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg leading-tight text-foreground/95", children: item.quote }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[9px] text-muted-foreground uppercase mt-0.5", children: [
                      item.name.split(" ")[item.name.split(" ").length - 1],
                      " //",
                      " ",
                      isAr ? "المقاس" : "Taille",
                      ": ",
                      item.size,
                      " // ",
                      isAr ? "اللون" : "Couleur",
                      ": ",
                      item.color
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 font-mono", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => updateQuantity(item.id, -1),
                          className: "border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer",
                          "aria-label": "Diminuer la quantité",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 10 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-1 font-semibold", children: item.quantity }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => updateQuantity(item.id, 1),
                          className: "border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer",
                          "aria-label": "Augmenter la quantité",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 10 })
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", children: [
                    item.price * item.quantity,
                    " MAD"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => removeFromCart(item.id),
                      className: "text-muted-foreground/60 hover:text-red-500 transition-colors p-1 cursor-pointer",
                      "aria-label": "Supprimer cet article",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                    }
                  )
                ] })
              ] }, item.id)) })
            ) : (
              /* Checkout Form */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "checkout-form", onSubmit: handleCheckoutSubmit, className: "space-y-4 text-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl italic font-light", children: isAr ? "معلومات التوصيل" : "Informations de livraison" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-muted-foreground mt-1", children: isAr ? "الدفع عند الاستلام في جميع مدن المغرب" : "Paiement en espèces à la livraison partout au Maroc" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                    isAr ? "الاسم الكامل" : "Nom & Prénom",
                    " *"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      value: fullName,
                      onChange: (e) => setFullName(e.target.value),
                      className: "w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground font-mono",
                      placeholder: isAr ? "أدخل اسمك الكامل" : "ex: Mohamed Bennani"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                    isAr ? "رقم الهاتف" : "Numéro de téléphone",
                    " *"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "tel",
                      required: true,
                      value: phone,
                      onChange: (e) => setPhone(e.target.value),
                      className: "w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground text-start font-mono",
                      placeholder: isAr ? "06 XX XX XX XX" : "06 XX XX XX XX"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                      isAr ? "المدينة" : "Ville",
                      " *"
                    ] }),
                    selectedCityData && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-[#25D366] font-semibold flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                      isAr ? selectedCityData.delayAr : selectedCityData.delayFr
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: city,
                      onChange: (e) => setCity(e.target.value),
                      required: true,
                      className: "w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground font-mono cursor-pointer",
                      children: MOROCCAN_CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.nameFr, className: "bg-background text-foreground", children: [
                        isAr ? c.nameAr : c.nameFr,
                        " — (",
                        isAr ? c.delayAr : c.delayFr,
                        ")"
                      ] }, c.nameFr))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: [
                    isAr ? "العنوان بالتفصيل" : "Adresse complète",
                    " *"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      required: true,
                      rows: 2,
                      value: address,
                      onChange: (e) => setAddress(e.target.value),
                      className: "w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2 text-xs focus:outline-none focus:border-foreground resize-none font-mono",
                      placeholder: isAr ? "الحي، الشارع، رقم المنزل..." : "Quartier, Rue, N° d'appartement..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase block", children: isAr ? "ملاحظات للتوصيل (اختياري)" : "Instructions de livraison (Optionnel)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 1,
                      value: notes,
                      onChange: (e) => setNotes(e.target.value),
                      className: "w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2 text-xs focus:outline-none focus:border-foreground resize-none font-mono",
                      placeholder: isAr ? "أي تعليمات خاصة بالتوصيل..." : "ex: Appeler avant d'arriver..."
                    }
                  )
                ] }),
                orderError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-500 font-mono", children: orderError })
              ] })
            ) }),
            cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-border/40 bg-secondary/15 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: isAr ? "المجموع الفرعي" : "Sous-total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold", children: [
                  cartSubtotal,
                  " MAD"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center font-mono text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "التوصيل" : "Livraison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#25D366] font-semibold", children: isAr ? "بالمجان" : "Gratuite" })
              ] }),
              checkoutStep === "cart" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCheckoutStep("checkout"),
                  className: "w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-soft cursor-pointer font-mono",
                  children: isAr ? "متابعة الطلب" : "Commander (Paiement à la livraison)"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setCheckoutStep("cart"),
                    className: "flex-1 border border-border/60 bg-background text-foreground py-3.5 text-xs tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer",
                    children: isAr ? "عودة" : "Retour"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    form: "checkout-form",
                    disabled: isSubmittingOrder,
                    className: "flex-2 border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 font-mono cursor-pointer disabled:opacity-50",
                    children: isSubmittingOrder ? /* @__PURE__ */ jsxRuntimeExports.jsx(Symbol$1, { size: 16, className: "animate-spin text-background" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAr ? "تأكيد الطلب" : "Confirmer la commande" })
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function FloatingWhatsApp() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [closed, setClosed] = reactExports.useState(false);
  if (closed) return null;
  const phone = "212652617044".replace(/[^0-9]/g, "");
  const defaultMsg = isAr ? "السلام عليكم TRUE SELF، أحتاج مساعدة أو استفسار حول المجموعة." : "Bonjour TRUE SELF ! J'aimerais un conseil concernant la collection ou les tailles.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed bottom-6 ${isAr ? "left-6" : "right-6"} z-[90] flex items-center gap-2 group animate-fade`,
      dir: isAr ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2.5 bg-background/95 hover:bg-background text-foreground border border-border/80 hover:border-[#25D366] px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-xs cursor-pointer group/wa",
            title: "Discuter sur WhatsApp",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-tight group-hover/wa:text-[#25D366] transition-colors", children: isAr ? "تواصل معنا" : "Conseil WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12, className: "fill-current" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setClosed(true),
            className: "text-muted-foreground/60 hover:text-foreground p-1 transition-colors rounded-full text-[10px]",
            "aria-label": "Fermer",
            title: "Fermer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
          }
        )
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm tracking-brand uppercase text-muted-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors",
        children: "Return home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Something stirred the calm." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Try again — peacefully." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "border border-foreground px-6 py-3 text-xs tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "border border-border px-6 py-3 text-xs tracking-brand uppercase hover:bg-muted transition-colors",
          children: "Home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TRUE SELF — Streetwear for the authentic" },
      {
        name: "description",
        content: "Minimalist premium streetwear for those who choose authenticity over noise. Embroidered phrases. Soft fabrics. True energy."
      },
      { property: "og:title", content: "TRUE SELF — Streetwear for the authentic" },
      {
        property: "og:description",
        content: "Minimalist premium streetwear for those who choose authenticity over noise."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='55' r='22' stroke='black' stroke-width='3.5' fill='none'/%3E%3Ccircle cx='72' cy='33' r='5.5' fill='black'/%3E%3C/svg%3E"
      },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Caveat:wght@400;600&family=Space+Grotesk:wght@400;500;600&family=Cairo:wght@300;400;500;600;700&family=Amiri:ital@0;1&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LanguageProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] }) }) });
}
const $$splitComponentImporter$3 = () => import("./admin-D9FMOEjb.mjs");
const Route$3 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "TRUE SELF® — Admin Dashboard"
    }, {
      name: "description",
      content: "TRUE SELF internal order management system."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BLQYdgWf.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "TRUE SELF® — Our Story & Philosophy"
    }, {
      name: "description",
      content: "Discover the philosophy, conflict, and symbol behind TRUE SELF. Minimalist streetwear designed in North Africa as a silent rebellion."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CzEN5LFE.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "TRUE SELF® — Live For Yourself"
    }, {
      name: "description",
      content: "A Moroccan cultural movement and lifestyle brand reminding you to live for yourself, not for the approval of others. Authenticity, freedom, and inner peace."
    }, {
      property: "og:title",
      content: "TRUE SELF® — Live For Yourself"
    }, {
      property: "og:description",
      content: "Live for yourself, not for the approval of others."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_productId-BSrNI4af.mjs");
const Route = createFileRoute("/product/$productId")({
  head: ({
    params
  }) => {
    const id = parseInt(params.productId);
    const names = {
      1: "Sweat Capuche Real > Perfect",
      2: "T-shirt Khalli Nass Thder",
      3: "Sweat Machi Kifma Bghaw",
      4: "T-shirt Live Free",
      5: "Sweat Capuche Not Here To Fit In",
      6: "Sweat Capuche Their Opinion",
      7: "Sweat Less Drama",
      8: "T-shirt Enough As You Are"
    };
    const name = names[id] || "Garment Philosophy";
    return {
      meta: [{
        title: `TRUE SELF® — ${name}`
      }, {
        name: "description",
        content: "Curated premium streetwear made slowly. Designed to act as a physical reminder to live for yourself."
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const AdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const ProductProductIdRoute = Route.update({
  id: "/product/$productId",
  path: "/product/$productId",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ProductProductIdRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Logo as L,
  Route as R,
  Symbol$1 as S,
  adminLoginFn as a,
  adminLogoutFn as b,
  checkAdminAuthFn as c,
  useCart as d,
  useLanguage as e,
  getOrdersFn as g,
  router as r,
  updateOrderStatusFn as u
};
