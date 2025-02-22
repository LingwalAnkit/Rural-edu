import React from "react";
import { BackgroundBeams } from "../component/ui/background-beams";
import FlipWords from "../component/acertinity/FlipWords";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function BackgroundBeamsDemo() {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const translations: Record<
    string,
    {
      title: string;
      subtitle: string[];
      description: string;
      title2: string;
      title3: string;
    }
  > = {
    en: {
      title: "Edu Sparsh",
      title2: "Rral Roots",
      title3: "Education For Everyone",
      subtitle: [
        "United Goals",
        "Inspire Hope",
        "Stronger Ties",
        "Dreams Aglow",
      ],
      description:
        "Welcome to Edu Sparsh, A better way of connecting rural education with interactive websites, training for teachers, and parents also.",
    },
    hi: {
      title: "एडु स्पर्श",
      title2: "ग्रामीण जड़ें",
      title3: "सबके लिए शिक्षा",
      subtitle: [
        "साझा लक्ष्य",
        "प्रेरणादायक आशा",
        "मजबूत संबंध",
        "सपने जगमगाते हैं",
      ],
      description:
        "एडु स्पर्श में आपका स्वागत है, ग्रामीण शिक्षा को इंटरैक्टिव वेबसाइटों, शिक्षकों के लिए प्रशिक्षण, और माता-पिता के साथ जोड़ने का एक बेहतर तरीका।",
    },
    pa: {
      title: "ਏਡੂ ਸਪਰਸ਼",
      title2: "ਪਿੰਡਾਂ ਦੀ ਜੜ੍ਹ",
      title3: "ਹਰੇਕ ਲਈ ਸਿੱਖਿਆ",
      subtitle: [
        "ਸਾਂਝਾ ਲਕਸ਼",
        "ਪ੍ਰੇਰਣਾਦਾਇਕ ਆਸ",
        "ਮਜ਼ਬੂਤ ਰਿਸ਼ਤੇ",
        "ਸੁਪਨੇ ਚਮਕਦੇ ਹਨ",
      ],
      description:
        "ਏਡੂ ਸਪਰਸ਼ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਪਿੰਡਾਂ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਇੰਟਰਐਕਟਿਵ ਵੈਬਸਾਈਟਾਂ, ਅਧਿਆਪਕ ਪ੍ਰਸ਼ਿਕਸ਼ਣ, ਅਤੇ ਮਾਪਿਆਂ ਨਾਲ ਜੁੜਨ ਦਾ ਇੱਕ ਵਧੀਆ ਤਰੀਕਾ।",
    },
    mr: {
      title: "एडु स्पर्श",
      title2: "ग्रामीण मुळे",
      title3: "सर्वांसाठी शिक्षण",
      subtitle: [
        "सामायिक उद्दीष्ट",
        "प्रेरणादायी आशा",
        "मजबूत नाती",
        "स्वप्ने उजळून निघतात",
      ],
      description:
        "एडु स्पर्श मध्ये आपले स्वागत आहे, ग्रामीण शिक्षणासाठी संवादात्मक वेबसाईट्स, शिक्षक प्रशिक्षण आणि पालकांना जोडण्याचा एक प्रभावी मार्ग.",
    },
    ta: {
      title: "எட்யு ஸ்பர்ஷ்",
      title2: "கிராமிய வேர்",
      title3: "எல்லோருக்கும் கல்வி",
      subtitle: [
        "பகிர்ந்து கொள்ளும் இலக்கு",
        "மீண்டும் நம்பிக்கை",
        "உறுதியான உறவுகள்",
        "கனவுகள் ஒளிருகின்றன",
      ],
      description:
        "எட்யு ஸ்பர்ஷில் உங்களை வரவேற்கிறோம், கிராமப்புற கல்வியை தொடர்புடைய இணையதளங்கள், ஆசிரியர் பயிற்சி மற்றும் பெற்றோர்களுடன் இணைப்பதற்கான சிறந்த வழியாக மாற்றும்.",
    },
    tl: {
      title: "ఎడ్యు స్పర్శ",
      title2: "గ్రామీణ మూలాలు",
      title3: "అందరికీ విద్య",
      subtitle: [
        "పంచుకున్న లక్ష్యం",
        "ప్రేరణతో నిండిన ఆశ",
        "దృఢమైన బంధాలు",
        "కలలు ప్రకాశిస్తాయి",
      ],
      description:
        "ఎడ్యు స్పర్శలో స్వాగతం, గ్రామీణ విద్యను ఇంటరాక్టివ్ వెబ్‌సైట్‌లు, ఉపాధ్యాయుల శిక్షణ, మరియు తల్లిదండ్రులతో అనుసంధానించే ఉత్తమ మార్గంగా మార్చడం.",
    },
    be: {
      title: "এডু স্পর্শ",
      title2: "গ্রামীণ শিকড়",
      title3: "সবার জন্য শিক্ষা",
      subtitle: [
        "অংশীদারিত্বের লক্ষ্য",
        "প্রেরণাদায়ক আশা",
        "শক্তিশালী সম্পর্ক",
        "স্বপ্ন উজ্জ্বল হয়",
      ],
      description:
        "এডু স্পর্শে আপনাকে স্বাগতম, গ্রামীণ শিক্ষাকে ইন্টারেক্টিভ ওয়েবসাইট, শিক্ষক প্রশিক্ষণ এবং অভিভাবকদের সাথে সংযুক্ত করার একটি উন্নত উপায়।",
    },
    gu: {
      title: "એડુ સ્પર્શ",
      title2: "ગ્રામ્ય મૂળ",
      title3: "બધા માટે શિક્ષણ",
      subtitle: [
        "સાંઝા લક્ષ્ય",
        "પ્રેરણાદાયી આશા",
        "મજબૂત સંબંધો",
        "સપનાઓ પ્રકાશે છે",
      ],
      description:
        "એડુ સ્પર્શમાં આપનું સ્વાગત છે, ગ્રામ્ય શિક્ષણને ઈન્ટરએક્ટિવ વેબસાઈટ્સ, શિક્ષકો માટે તાલીમ અને માતા-પિતાને જોડવાનો શ્રેષ્ઠ રસ્તો બનાવતા.",
    },
  };

  const { title, subtitle, description, title2, title3 } =
    translations[currentLanguage] || translations.en;

  return (
    <div className="relative h-screen w-screen bg-white dark:bg-black">
      <div className="flex flex-col items-center pt-2 antialiased">
        <div className="max-w-7xl max-h-7xl">
          <div className="flex flex-col gap-4 justify-center items-center px-4 mt-32">
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd] mt-12">
              {title}
            </div>
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd]">
              {title2},{" "}
              <FlipWords
                className="!text-[#3296c2] font-extrabold"
                words={subtitle}
              />
            </div>
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd]">
              {title3}
            </div>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
              {description}
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
