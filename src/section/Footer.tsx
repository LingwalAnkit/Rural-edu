"use client";

import React from "react";
import { AnimatedTooltip } from "@/component/ui/animated-tooltip";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const Footer = () => {
  const currentLanguage = useSelector(
      (state: RootState) => state.language.currentLanguage
    );

  const translations: Record<string, {title: string; address: string , seriousEducation: string , email:string , queries: string; missionTitle: string; missionText: string; inspireText: string; transparencyTitle:string; transparencyText:string; learnMore:string; copyright: string , rights:string , meetTeam:string, joinUs:string  }> = {
    en: {
      title: "Edu Sparsh: Empowering Rural Education, Together",
      address: "Registered Office: Boys Hostel G-114, EDC, Delhi 110032",
      seriousEducation: "Yes, we take education seriously, and we're just getting started",
      email: "Email:",
      queries: "Your queries fuel our mission!",
      missionTitle: "Our Mission",
      missionText: "NavShiksha is dedicated to bridging the educational divide in rural communities. Because quality education shouldn't be limited by geography.",
      inspireText: "We're here to inspire, empower, and support every learner.",
      transparencyTitle: "Transparency and Accountability",
      transparencyText: "Our efforts are genuine, with every detail carefully managed. We're committed to building a future where education is accessible to all.",
      learnMore: "Want to learn more? Just ask!",
      copyright: `© ${new Date().getFullYear()} NavShiksha - Advancing Education for a Better Tomorrow`,
      rights: "All Rights Reserved.",
      meetTeam: "Meet the NavShiksha Team:",
      joinUs: "Join us as we reimagine and reshape education for rural India!",
    },
    hi: {
      title: "एडु स्पर्श: ग्रामीण शिक्षा को सशक्त बनाना, साथ में",
      address: "पंजीकृत कार्यालय: बॉयज़ हॉस्टल G-114, EDC, दिल्ली 110032",
      seriousEducation: "हाँ, हम शिक्षा को गंभीरता से लेते हैं, और हम अभी शुरुआत कर रहे हैं",
      email: "ईमेल:",
      queries: "आपके प्रश्न हमारे मिशन को प्रेरित करते हैं!",
      missionTitle: "हमारा मिशन",
      missionText: "नवशिक्षा ग्रामीण समुदायों में शिक्षा की खाई को पाटने के लिए समर्पित है। क्योंकि गुणवत्तापूर्ण शिक्षा भूगोल तक सीमित नहीं होनी चाहिए।",
      inspireText: "हम यहां प्रेरित करने, सशक्त बनाने और हर शिक्षार्थी का समर्थन करने के लिए हैं।",
      transparencyTitle: "पारदर्शिता और जवाबदेही",
      transparencyText: "हमारे प्रयास सच्चे हैं, हर विवरण को सावधानीपूर्वक प्रबंधित किया जाता है। हम एक ऐसे भविष्य के निर्माण के लिए प्रतिबद्ध हैं जहां शिक्षा सभी के लिए सुलभ हो।",
      learnMore: "अधिक जानना चाहते हैं? बस पूछें!",
      copyright: `© ${new Date().getFullYear()} नवशिक्षा - एक बेहतर कल के लिए शिक्षा को आगे बढ़ाना`,
      rights: "सभी अधिकार सुरक्षित।",
      meetTeam: "नवशिक्षा टीम से मिलें:",
      joinUs: "हमारे साथ जुड़ें क्योंकि हम ग्रामीण भारत के लिए शिक्षा को पुनर्कल्पना और पुन: आकार दे रहे हैं!",
    },
    mr:{
      "title": "एडू स्पर्श: ग्रामीण शिक्षण सशक्त करणे, एकत्र",
      "address": "नोंदणीकृत कार्यालय: बॉयज हॉस्टेल जी-११४, ईडीसी, दिल्ली ११००३२",
      "seriousEducation": "होय, आम्ही शिक्षणाला गंभीरपणे घेतो, आणि आम्ही नुकतेच सुरुवात केली आहे",
      "email": "ईमेल:",
      "queries": "तुमचे प्रश्न आमच्या मिशनला चालना देतात!",
      "missionTitle": "आमचे मिशन",
      "missionText": "नवशिक्षा ग्रामीण समुदायांमधील शैक्षणिक अंतर दूर करण्यासाठी समर्पित आहे. कारण गुणवत्तापूर्ण शिक्षण भूगोलाने मर्यादित नसावे.",
      "inspireText": "आम्ही प्रत्येक शिकणाऱ्याला प्रेरणा, सक्षमीकरण आणि समर्थन देण्यासाठी इथे आहोत.",
      "transparencyTitle": "पारदर्शकता आणि जबाबदारी",
      "transparencyText": "आमचे प्रयत्न खरे आहेत, प्रत्येक तपशील काळजीपूर्वक व्यवस्थापित केला जातो. आम्ही अशा भविष्याची निर्मिती करण्यासाठी वचनबद्ध आहोत जिथे शिक्षण सर्वांसाठी सुलभ असेल.",
      "learnMore": "अधिक जाणून घ्यायचे आहे? फक्त विचारा!",
      "copyright": `© ${new Date().getFullYear()} नवशिक्षा - एक चांगले उद्यासाठी शिक्षणाची प्रगती`,
      "rights": "सर्व हक्क राखीव.",
      "meetTeam": "नवशिक्षा संघाशी भेटा:",
      "joinUs": "ग्रामीण भारतासाठी शिक्षणाची पुनर्कल्पना आणि पुनर्निर्मिती करण्यासाठी आमच्यात सामील व्हा!"
    },
    ta:{
      "title": "எடு ஸ்பார்ஷ்: கிராமப்புற கல்வியை மேம்படுத்துதல், ஒன்றாக",
      "address": "பதிவு செய்யப்பட்ட அலுவலகம்: பாய்ஸ் ஹோஸ்டல் ஜி-114, ஈடிசி, டெல்லி 110032",
      "seriousEducation": "ஆம், நாங்கள் கல்வியை தீவிரமாக எடுத்துக்கொள்கிறோம், மேலும் நாங்கள் இப்போதுதான் தொடங்கியுள்ளோம்",
      "email": "மின்னஞ்சல்:",
      "queries": "உங்கள் கேள்விகள் எங்கள் பணியை முன்னேற்றுகின்றன!",
      "missionTitle": "எங்கள் பணி",
      "missionText": "கிராமப்புற சமூகங்களில் கல்வி இடைவெளியை நீக்க நவசிக்ஷா அர்ப்பணிக்கப்பட்டுள்ளது. ஏனெனில் தரமான கல்வி புவியியல் மூலம் மட்டுப்படுத்தப்படக்கூடாது.",
      "inspireText": "ஒவ்வொரு கற்றவரையும் ஊக்குவிக்க, சக்தியளிக்க மற்றும் ஆதரிக்க நாங்கள் இங்கு இருக்கிறோம்.",
      "transparencyTitle": "வெளிப்படைத்தன்மை மற்றும் பொறுப்புணர்வு",
      "transparencyText": "எங்கள் முயற்சிகள் உண்மையானவை, ஒவ்வொரு விவரமும் கவனமாக நிர்வகிக்கப்படுகிறது. கல்வி அனைவருக்கும் அணுகக்கூடியதாக இருக்கும் ஒரு எதிர்காலத்தை உருவாக்க நாங்கள் உறுதிபூண்டுள்ளோம்.",
      "learnMore": "மேலும் அறிய விரும்புகிறீர்களா? கேளுங்கள்!",
      "copyright": `© ${new Date().getFullYear()} நவசிக்ஷா - ஒரு சிறந்த நாளைக்கு கல்வியை முன்னேற்றுதல்`,
      "rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "meetTeam": "நவசிக்ஷா குழுவை சந்திக்கவும்:",
      "joinUs": "கிராமப்புற இந்தியாவுக்கான கல்வியை மறுவடிவமைத்து மறுகட்டமைப்பதில் எங்களுடன் இணைந்து கொள்ளுங்கள்!"
    },
    te:{
      "title": "ఎడూ స్పర్శ: గ్రామీణ విద్యను సశక్తీకరించడం, కలిసి",
      "address": "నమోదిత కార్యాలయం: బాయ్స్ హాస్టల్ జి-114, ఈడిసి, ఢిల్లీ 110032",
      "seriousEducation": "అవును, మేము విద్యను తీవ్రంగా తీసుకుంటున్నాము, మరియు మేము ఇప్పుడే ప్రారంభించాము",
      "email": "ఇమెయిల్:",
      "queries": "మీ ప్రశ్నలు మా మిషన్కు శక్తినిస్తాయి!",
      "missionTitle": "మా మిషన్",
      "missionText": "గ్రామీణ సమాజాలలో విద్యాపరమైన అంతరాన్ని తొలగించడానికి నవశిక్ష అంకితం చేయబడింది. ఎందుకంటే నాణ్యమైన విద్య భౌగోళికంగా పరిమితం కాకూడదు.",
      "inspireText": "ప్రతి అభ్యాసకుడిని ప్రేరేపించడానికి, సశక్తీకరించడానికి మరియు మద్దతు ఇవ్వడానికి మేము ఇక్కడ ఉన్నాము.",
      "transparencyTitle": "పారదర్శకత మరియు జవాబుదారీతనం",
      "transparencyText": "మా ప్రయత్నాలు నిజమైనవి, ప్రతి వివరాలు జాగ్రత్తగా నిర్వహించబడతాయి. విద్య అందరికీ అందుబాటులో ఉండే భవిష్యత్తును నిర్మించడానికి మేము ప్రతిజ్ఞాబద్ధులుగా ఉన్నాము.",
      "learnMore": "మరింత తెలుసుకోవాలనుకుంటున్నారా? అడగండి!",
      "copyright": `© ${new Date().getFullYear()} నవశిక్ష - మెరుగైన రేపటి కోసం విద్యను ముందుకు తీసుకురావడం`,
      "rights": "అన్ని హక్కులు ప్రత్యేకించబడినవి.",
      "meetTeam": "నవశిక్ష బృందాన్ని కలవండి:",
      "joinUs": "గ్రామీణ భారతదేశానికి విద్యను పునరాలోచించడం మరియు పునర్నిర్మించడంలో మాతో చేరండి!"
    },
    be:{
      "title": "এডু স্পর্শ: গ্রামীণ শিক্ষাকে ক্ষমতায়ন, একসাথে",
      "address": "নিবন্ধিত অফিস: বয়েজ হোস্টেল জি-১১৪, ইডিসি, দিল্লি ১১০০৩২",
      "seriousEducation": "হ্যাঁ, আমরা শিক্ষাকে গুরুত্ব সহকারে নিই, এবং আমরা সবেমাত্র শুরু করেছি",
      "email": "ইমেল:",
      "queries": "আপনার প্রশ্নগুলি আমাদের মিশনকে চালিত করে!",
      "missionTitle": "আমাদের মিশন",
      "missionText": "নবশিক্ষা গ্রামীণ সম্প্রদায়ের মধ্যে শিক্ষাগত বিভেদ দূর করতে নিবেদিত। কারণ গুণগত শিক্ষা ভূগোল দ্বারা সীমাবদ্ধ হওয়া উচিত নয়।",
      "inspireText": "আমরা এখানে প্রতিটি শিক্ষার্থীকে অনুপ্রাণিত, ক্ষমতায়িত এবং সমর্থন করতে এসেছি।",
      "transparencyTitle": "স্বচ্ছতা এবং জবাবদিহিতা",
      "transparencyText": "আমাদের প্রচেষ্টা সত্যিকারের, প্রতিটি বিবরণ সাবধানে পরিচালিত হয়। আমরা এমন একটি ভবিষ্যত গড়ে তুলতে প্রতিশ্রুতিবদ্ধ যেখানে শিক্ষা সবার জন্য সহজলভ্য হবে।",
      "learnMore": "আরও জানতে চান? শুধু জিজ্ঞাসা করুন!",
      "copyright": `© ${new Date().getFullYear()} নবশিক্ষা - একটি ভাল আগামীর জন্য শিক্ষার অগ্রগতি`,
      "rights": "সমস্ত অধিকার সংরক্ষিত।",
      "meetTeam": "নবশিক্ষা দলের সাথে দেখা করুন:",
      "joinUs": "গ্রামীণ ভারতের জন্য শিক্ষাকে পুনর্বিন্যাস এবং পুনর্গঠনে আমাদের সাথে যোগ দিন!"
    },
    gu:{
      "title": "એડૂ સ્પર્શ: ગ્રામીણ શિક્ષણને સશક્ત બનાવવું, એકસાથે",
      "address": "નોંધાયેલ કાર્યાલય: બોય્સ હોસ્ટેલ જી-114, ઇડીસી, દિલ્હી 110032",
      "seriousEducation": "હા, અમે શિક્ષણને ગંભીરતાથી લઈએ છીએ, અને અમે હમણાં જ શરૂઆત કરી છે",
      "email": "ઇમેઇલ:",
      "queries": "તમારા પ્રશ્નો અમારા મિશનને શક્તિ આપે છે!",
      "missionTitle": "અમારું મિશન",
      "missionText": "ગ્રામીણ સમુદાયોમાં શૈક્ષણિક અંતરને દૂર કરવા માટે નવશિક્ષા સમર્પિત છે. કારણ કે ગુણવત્તાપૂર્ણ શિક્ષણ ભૂગોળ દ્વારા મર્યાદિત ન હોવું જોઈએ.",
      "inspireText": "અમે અહીં દરેક શીખનારને પ્રેરિત કરવા, સશક્ત કરવા અને સમર્થન આપવા માટે છીએ.",
      "transparencyTitle": "પારદર્શિતા અને જવાબદારી",
      "transparencyText": "અમારા પ્રયત્નો સાચા છે, દરેક વિગત કાળજીપૂર્વક સંચાલિત છે. અમે એવું ભવિષ્ય બનાવવા માટે પ્રતિબદ્ધ છીએ જ્યાં શિક્ષણ બધા માટે સુલભ હશે.",
      "learnMore": "વધુ જાણવા માંગો છો? ફક્ત પૂછો!",
      "copyright": `© ${new Date().getFullYear()} નવશિક્ષા - એક સારા કાલ માટે શિક્ષણને આગળ ધપાવવું`,
      "rights": "બધા હક્કો અનામત.",
      "meetTeam": "નવશિક્ષા ટીમને મળો:",
      "joinUs": "ગ્રામીણ ભારત માટે શિક્ષણને પુનઃકલ્પના અને પુનઃરચના કરવામાં અમારી સાથે જોડાઓ!"
    }
  };


  const {title , address , seriousEducation , email , queries , missionTitle , missionText , inspireText , transparencyText ,transparencyTitle ,learnMore , copyright , rights , meetTeam , joinUs } = translations[currentLanguage] || translations.en;

  return (
    <footer className="p-4 bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <div className="bg-navy-800/20 backdrop-blur-sm p-4 rounded-lg"></div>
        <div className="mx-0 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-[#e3f3fb]">{title}</h1>
          <p className="mb-2">{address}</p>
          <p className="mb-2"><strong className="dark:text-[#719dbd]">{seriousEducation}</strong></p>
          <p className="mb-2">{email} <a href="mailto:contact@navshiksha.com" className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]">contact@navshiksha.com</a></p>
          <p className="mb-2"><strong className="dark:text-[#719dbd]">{queries}</strong></p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">{missionTitle}</h2>
          <p className="dark:text-[#71879f]">{missionText}</p>
          <p className="mb-2">{inspireText}</p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">{transparencyTitle}</h2>
          <p className="mb-2">{transparencyText}</p>
          <p className="mb-2">{learnMore}</p>
          <p className="mb-2">{copyright}</p>
          <p className="mb-2"><a href="https://navshiksha.com" className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]">navshiksha.com</a> {rights}</p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">{meetTeam}</h2>
          <AnimatedTooltip items={[
            { id: 1, name: "Akshat Saraswat", designation: "Artificial Intelligence", image: "/Team-Assets/priyanshu.png" },
            { id: 2, name: "Sanyam Pandey", designation:"Web-Dev ", image: "/Team-Assets/sanyam.png" },
            { id: 3, name: "Ankit Lingwal", designation: "Web-dev", image: "/Team-Assets/ankit.png" },
            { id: 4, name: "Abhishek Chaudhary", designation: "Artificial Intelligence", image: "/Team-Assets/tanya.png" }
          ]} />
          <p className="mt-4 mb-4"><strong>{joinUs}</strong></p>
        </div>
      </div>
    </footer>
  );
};
