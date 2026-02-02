import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations here
const resources = {
  en: {
    translation: {
      "university_name": "SRI KARTHIKEYA JYOTISH NIVAS",
      "subtitle": "All Astro remedies and solutions",
      "header": {
        "title": "SRI KARTHIKEYA JYOTHISYA NIVAS",
        "subtitle": "All Astro remedies and solutions"
      },
      "nav": {
        "about": "About",
        "services": "Services",
        "vastu": "Vastu",
        "dosha": "Dosha Remedies",
        "gems": "Gem Stones",
        "rudraksha": "Rudraksha",
        "contact": "Contact Us",
        "yantra" : "Yantra"
      },
      "hero": {
        "brand_name": "Sri Karthikeya Jyothisya Nivas",
        "title_prefix": "Align Your Life with",
        "title_highlight": "Natural Law",
        "description": "Eliminate problems in management and life by establishing automation in administration supported by the total intelligence of Natural Law.",
        "cta_button": "Consult an Astrologer",
        "astrologer_name": "Venkata ramana sharma",
        "astrologer_role": "Vedic Expert • 20 Yrs Exp",
        "badge_status": "Available Now",
        "badge_action": "Live Chat"
      },
      "services_section": {
        "sub_header": "What We Solve",
        "header_prefix": "Our Major",
        "header_highlight": "Services",
        "items": {
          "relationship": {
            "title": "Relationship Issues",
            "desc": "Resolve conflicts and misunderstandings with your partner."
          },
          "marriage": {
            "title": "Marriage Solutions",
            "desc": "Overcome delays or obstacles in your marital journey."
          },
          "business": {
            "title": "Business Growth",
            "desc": "Astrological guidance for financial stability and success."
          },
          "divorce": {
            "title": "Divorce Issues",
            "desc": "Legal disputes and emotional healing from separation."
          },
         "vastu": {
            "title": "Vastu Shastra",
            "desc": "Optimize your home and office for positive energy flow, peace, and prosperity."
          },
          "family": {
            "title": "Family Disputes",
            "desc": "Restore peace and harmony within your family."
          },
          "palm": {
            "title": "Palm Reading",
            "desc": "Discover your destiny written in the lines of your hand."
          },
          "healing": {
            "title": "Spiritual Healing",
            "desc": "Cleansing your aura and removing negative energies."
          }
        }
      },
      "stats": {
        "items": [
          { "number": "28+", "label": "Years of service" },
          { "number": "5K+", "label": "Individual Consultations" },
          { "number": "98%", "label": "Client Success Rate" },
          { "number": "35+", "label": "Countries Served" }
        ]
      },
      "contact": {
        "title": "Get in Touch",
        "subtitle": "Unlock the secrets of your destiny. Provide your birth details for an accurate Vedic reading.",
        "info": {
          "call": "Call Us",
          "email": "Email",
          "location_label": "Location",
          "location_val": "Vedic Center, Rishikesh, India"
        },
        "testimonial": "\"The reading was life changing. Highly recommended!\"",
        "form_title": "Consultation Form",
        "fields": {
          "name": "Full Name",
          "name_ph": "e.g. Rahul Sharma",
          "dob": "Date of Birth",
          "time": "Time of Birth",
          "place": "Place of Birth",
          "place_ph": "City, State, Country",
          "message": "Specific Problem / Question",
          "message_ph": "Describe your concern (Health, Career, Marriage...)",
          "alert_error": "Please fill in your Name and Date of Birth."
        },
        "buttons": {
          "whatsapp": "Send via WhatsApp",
          "email": "Send via Email"
        },
        "privacy": "Your details are kept 100% confidential.",
        // Message template for WhatsApp
        "msg": {
          "intro": "Namaste Astrologer, I would like a consultation.",
          "name": "Name",
          "dob": "DOB",
          "time": "Time",
          "place": "Place",
          "query": "Query"
        }
      },
      "footer": {
        "brand_name": "Karthikeya",
        "tagline": "Peace & Happiness",
        "about_desc": "Astrology is an ancient science. We believe in the power of planetary alignments to guide humanity toward a better future.",
        "titles": {
          "contact": "Contact Info",
          "follow": "Follow Us"
        },
        "contact": {
          "address": "Pratapnagar,kakinada",
          "email": "contact@vedicastro.com", // Usually emails stay in English
          "phone": "+91 9848508383"
        },
        "social_desc": "Stay connected with us on social media for daily horoscopes and updates.",
        "copyright": "Vedic Astro Center. All rights reserved.",
        "links": {
          "privacy": "Privacy Policy",
          "terms": "Terms of Service"
        }
      },
      "common": {
        "read_more": "Read More",
        "home": "Home"
      }
    }
  },
  te: {
    translation: {
      "university_name": "మహర్షి మహేష్ యోగి వేద విశ్వవిద్యాలయం",
      "subtitle": "మధ్యప్రదేశ్ చట్టం నం. 37 (1995) ద్వారా స్థాపించబడింది.",
      "header": {
        "title": "శ్రీ కార్తికేయ జ్యోతిష్య నివాస్",
        "subtitle": "అన్ని జ్యోతిష్య పరిహారాలు మరియు పరిష్కారాలు"
      },
      "nav": {
        "about": "మా గురించి",
        "services": "సేవలు",
        "vastu": "వాస్తు",
        "dosha": "దోష నివారణలు",
        "gems": "రత్నాలు",
        "rudraksha": "రుద్రాక్ష",
        "yantra" : "యంత్రం",
        "contact": "మమ్మల్ని సంప్రదించండి"
      },
      "hero": {
        "brand_name": "శ్రీ కార్తికేయ జ్యోతిష్య నివాస్",
        "title_prefix": "మీ జీవితాన్ని",
        "title_highlight": "ప్రకృతి ధర్మానికి అనుగుణంగా మార్చుకోండి",
        "description": "ప్రకృతి ధర్మం యొక్క సంపూర్ణ మేధస్సు మద్దతుతో మీ జీవితంలో మరియు నిర్వహణలో సమస్యలను తొలగించుకోండి.",
        "cta_button": "జ్యోతిష్యుడిని సంప్రదించండి",
        "astrologer_name": "వెంకట రమణ శర్మ",
        "astrologer_role": "వేద నిపుణుడు • 20 ఏళ్ల అనుభవం",
        "badge_status": "అందుబాటులో ఉన్నారు",
        "badge_action": "లైవ్ చాట్"
      },
      "services_section": {
        "sub_header": "మేము పరిష్కరించే సమస్యలు",
        "header_prefix": "మా ప్రధాన",
        "header_highlight": "సేవలు",
        "items": {
          "relationship": {
            "title": "సంబంధ సమస్యలు",
            "desc": "మీ భాగస్వామితో విభేదాలు మరియు అపార్థాలను పరిష్కరించుకోండి."
          },
          "marriage": {
            "title": "వివాహ పరిష్కారాలు",
            "desc": "మీ వివాహ ప్రయాణంలో జాప్యం లేదా అడ్డంకులను అధిగమించండి."
          },
          "business": {
            "title": "వ్యాపార వృద్ధి",
            "desc": "ఆర్థిక స్థిరత్వం మరియు విజయం కోసం జ్యోతిషశాస్త్ర మార్గదర్శకత్వం."
          },
          "divorce": {
            "title": "విడాకుల సమస్యలు",
            "desc": "చట్టపరమైన వివాదాలు మరియు విడిపోవడం వల్ల కలిగే మానసిక బాధ నివారణ."
          },
          "vastu": {
             "title": "వాస్తు శాస్త్రం",
             "desc": "మీ ఇల్లు మరియు కార్యాలయంలో సానుకూల శక్తి, శాంతి మరియు శ్రేయస్సు కోసం వాస్తు పరిష్కారాలు."
           },
          "family": {
            "title": "కుటుంబ వివాదాలు",
            "desc": "మీ కుటుంబంలో శాంతి మరియు సామరస్యాన్ని పునరుద్ధరించండి."
          },
          "palm": {
            "title": "హస్త సాముద్రికం",
            "desc": "మీ చేతి గీతలలో వ్రాసిన మీ విధిని తెలుసుకోండి."
          },
          "healing": {
            "title": "ఆధ్యాత్మిక చికిత్స",
            "desc": "మీ ప్రకాశాన్ని (Aura) శుభ్రపరచడం మరియు ప్రతికూల శక్తులను తొలగించడం."
          }
        }
      },
      "stats": {
        "items": [
          { "number": "28+", "label": "సంవత్సరాల అనుభవం" },
          { "number": "5 వేల+", "label": "వ్యక్తిగత సలహాలు" },
          { "number": "98%", "label": "విజయవంతమైన ఫలితాలు" },
          { "number": "35+", "label": "దేశాలలో సేవలు" }
        ]
      },
      "contact": {
        "title": "మమ్మల్ని సంప్రదించండి",
        "subtitle": "మీ భవిష్యత్తు రహస్యాలను తెలుసుకోండి. కచ్చితమైన వేద పఠనం కోసం మీ జనన వివరాలను అందించండి.",
        "info": {
          "call": "మాకు కాల్ చేయండి",
          "email": "ఇమెయిల్",
          "location_label": "చిరునామా",
          "location_val": "వేదిక్ సెంటర్, రిషికేశ్, ఇండియా"
        },
        "testimonial": "\"ఈ జ్యోతిష్యం నా జీవితాన్ని మార్చివేసింది. కచ్చితంగా ప్రయత్నించండి!\"",
        "form_title": "సంప్రదింపు ఫారం",
        "fields": {
          "name": "పూర్తి పేరు",
          "name_ph": "ఉదా. రాహుల్ శర్మ",
          "dob": "పుట్టిన తేదీ",
          "time": "పుట్టిన సమయం",
          "place": "పుట్టిన ప్రదేశం",
          "place_ph": "నగరం, రాష్ట్రం",
          "message": "నిర్దిష్ట సమస్య / ప్రశ్న",
          "message_ph": "మీ సమస్యను వివరించండి (ఆరోగ్యం, వృత్తి, వివాహం...)",
          "alert_error": "దయచేసి మీ పేరు మరియు పుట్టిన తేదీని పూరించండి."
        },
        "buttons": {
          "whatsapp": "వాట్సాప్ ద్వారా పంపండి",
          "email": "ఇమెయిల్ ద్వారా పంపండి"
        },
        "privacy": "మీ వివరాలు 100% గోప్యంగా ఉంచబడతాయి.",
        // Message template for WhatsApp (Translated labels)
        "msg": {
          "intro": "నమస్తే గురువుగారు, నేను జ్యోతిష్యం అడగాలనుకుంటున్నాను.",
          "name": "పేరు",
          "dob": "పుట్టిన తేది",
          "time": "సమయం",
          "place": "ప్రదేశం",
          "query": "ప్రశ్న"
        }
      },
      "footer": {
        "brand_name": "కార్తికేయ",
        "tagline": "శాంతి & ఆనందం",
        "about_desc": "జ్యోతిషశాస్త్రం ఒక ప్రాచీన విజ్ఞానం. మానవాళిని మంచి భవిష్యత్తు వైపు నడిపించడానికి గ్రహాల సమలేఖన శక్తిని మేము విశ్వసిస్తాము.",
        "titles": {
          "contact": "సంప్రదించండి",
          "follow": "మమ్మల్ని అనుసరించండి"
        },
        "contact": {
          "address": "ప్రతాప్ నగర్, కాకినాడ",
          "email": "contact@vedicastro.com",
          "phone": "+91 9848508383"
        },
        "social_desc": "రోజువారీ రాశిఫలాలు మరియు నవీకరణల కోసం సోషల్ మీడియాలో మాతో కనెక్ట్ అయి ఉండండి.",
        "copyright": "వేద ఆస్ట్రో సెంటర్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
        "links": {
          "privacy": "గోప్యతా విధానం",
          "terms": "సేవా నిబంధనలు"
        }
      },
      "common": {
        "read_more": "మరింత చదవండి",
        "home": "హోమ్"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;