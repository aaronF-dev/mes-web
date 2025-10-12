import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('malvan-language') as Language;
    if (savedLanguage && ['en', 'mr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('malvan-language', lang);
  };

  // Translation function - will be implemented with translations
  const t = (key: string): string => {
    // Import translations dynamically based on current language
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations = {
  en: {
    // Header
    'nav.about': 'About',
    
    // Hero Section
    'hero.malvan': 'MALVAN',
    'hero.education_society': 'EDUCATION SOCIETY',
    'hero.latin_motto': 'LEX ET IUSTITIA',
    
    // Educational Sections
    'schools.title': 'Schools Under MES',
    'schools.subtitle': 'Discover our prestigious institutions, each dedicated to excellence in education and fostering the next generation of leaders.',
    
    // Topiwala School
    'college.founded': 'Established in 1911',
    'college.title': 'A.S.D. Topiwala High School',
    'college.description': 'Topiwala School is a dynamic, close-knit community of dedicated students and faculty who come together as a means to learn from the past and navigate the future.',
    'college.explore': 'Explore Topiwala School →' ,
    
    // Topiwala Junior College
    'tech.founded': 'Established in 1974',
    'tech.title': ' N.A.D. Topiwala Junior College',
    'tech.description': 'Topiwala Junior College is an intimate community of dedicated learners, who are working to address the most pressing issues of our time through education and innovation.',
    'tech.explore': 'Explore Topiwala Junior College →',
    
    // Jai Ganesh School
    'medical.founded': 'Established in 2004',
    'medical.title': 'Jay Ganesh English Medium School',
    'medical.description': 'Jay Ganesh English Medium School is committed to creating and nurturing a diverse community of the best and brightest students, faculty, and staff, with a shared mission to serve others through quality education.',
    'medical.explore': 'Explore Jay Ganesh English Medium School →',
    
    // Parulekar Primary School
    'business.founded': 'Established in 1952',
    'business.title': 'Mohanrao Parulekar Primary School',
    'business.description': 'Mohanrao Parulekar Primary School prepares young learners who make a difference in the world. We develop innovative educational approaches and cultivate creative thinking for the challenges of tomorrow.',
    'business.explore': 'Explore Mohanrao Parulekar Primary School →',
    
    // Ghuruye School
    'arts.founded': 'Established in 2004',
    'arts.title': 'SMT. Sitabai Shripad Ghurye Pre-Primary School',
    'arts.description': 'Ghuruye School is a comprehensive educational institution offering programs in humanities, sciences, and arts that foster critical thinking and creative expression in students.',
    'arts.explore': 'Explore Ghuruye School →',

    // Smruthi Gandha
    'smruthi.founded': 'Launched in 2011',
    'smruthi.title': 'Smruthi Gandha',
    'smruthi.description': 'It is a comprehensive handcraft magazine that showcases the rich history of Topiwala.',
    'smruthi.explore': 'Explore Smruthi Gandha →',

    // Committee Section
    'committee.title': 'Present Managing Committee 2025-2029',
    'committee.subtitle': 'Meet our dedicated committee members who guide our educational mission.',
    'committee.member1.name': 'Mr. Sudesh Mayekar',
'committee.member1.position': 'President Of MES',
'committee.member2.name': 'Mr. Vijay Kamat',
'committee.member2.position': 'Secretary Of MES',
'committee.member3.name': 'Janhavi Desai',
'committee.member3.position': 'Trustee',
'committee.member4.name': 'Vikas Desai',
'committee.member4.position': 'Trustee',
'committee.member5.name': 'Commander Rajiv Kubal',
'committee.member5.position': 'Member Of MES',
'committee.member6.name': 'Mr. GV Samant',
'committee.member6.position': 'Member Of MES',
'committee.member7.name': 'Mr. Chandrakant Samant',
'committee.member7.position': 'Member Of MES',
'committee.member8.name': 'Mr. Akshay Samant',
'committee.member8.position': 'Member Of MES',
'committee.member9.name': 'Mr. Shailesh Khandalekar',
'committee.member9.position': 'Member Of MES',
'committee.member10.name': 'Mr. Digambar Samant',
'committee.member10.position': 'Presidents Nominee',
'committee.member11.name': 'Mr. Laxman Valanju',
'committee.member11.position': 'Head Master',
'committee.member12.name': 'Mrs. Veena Gosawi',
'committee.member12.position': 'Head Master',
'committee.member13.name': 'Mrs. Tejal Vengurlekar',
'committee.member13.position': 'Head Master',
'committee.member14.name': 'Mr. Anand Chavan',
'committee.member14.position': 'Advisor',
'committee.member15.name': 'Mr. Sharad Parulekar',
'committee.member15.position': 'Advisor',
'committee.member16.name': 'Mr. Avinash Ajgaonkar',
'committee.member16.position': 'Advisor',


    // Quote Section
    'quote.text': 'Education is the most powerful weapon which you can use to change the world.',
    'quote.author': 'Nelson Mandela',
    
    // About Section
    'about.title': '',
    'about.description': ' The Malvan Education Society provides strategic management for its schools. A diverse Governing Body includes elected members founders representatives headmasters and advisors. This structure ensures decisions are based on consensus and mission. Its work focuses on expanding access improving standards and investing in facilities. ',
    
    // Footer
    'footer.title': 'Malvan Education Society',
    'footer.description': 'Dedicated to providing quality education and fostering academic excellence in our community for a better tomorrow.',
    'footer.quick_links': 'Quick Links',
    'footer.home': 'Topiwala Highschool & Junior College',
    'footer.about_us': 'Jay Ganesh English Medium School',
    'footer.programs': 'Mohanrao Parulekar Primary School',
    'footer.admissions': 'Smt. Sitabai Shripad Ghurye Pre-Primary School',
    'footer.contact': 'Contact',
    'footer.location': 'Malvan, Sindhudurg, Maharashtra',
    'footer.phone': 'Phone: 02365 252058',
    'footer.email': 'Email: smesm@rediffmail.com ',
    'footer.copyright': '© 2025 Malvan Education Society. All rights reserved. Developed by Team Knowvate.',
    
    // Search
    'search.placeholder': 'Search...',
  },
  mr: {
    // Header
    'nav.about': 'आमच्याबद्दल',
    
    // Hero Section
    'hero.malvan': 'मालवण',
    'hero.education_society': 'शिक्षण संस्था',
    'hero.latin_motto': 'कायदा आणि न्याय',
    
    // Educational Sections
    'schools.title': 'MES अंतर्गत शाळा',
    'schools.subtitle': 'आमच्या प्रतिष्ठित संस्थांचा शोध घ्या, प्रत्येक शिक्षणातील उत्कृष्टतेसाठी आणि पुढील पिढीच्या नेत्यांचे पालनपोषण करण्यासाठी समर्पित आहे.',
    
    // Topiwala School
    'college.founded': '१९११ मध्ये स्थापना',
    'college.title': 'तोपीवाला शाळा',
    'college.description': 'तोपीवाला शाळा हा समर्पित विद्यार्थी आणि शिक्षकांचा एक गतिशील, घट्ट समुदाय आहे जो भूतकाळातून शिकण्यासाठी आणि भविष्याचे मार्गदर्शन करण्यासाठी एकत्र येतो.',
    'college.explore': 'तोपीवाला शाळा एक्सप्लोर करा →',
    
    // Topiwala Junior College
    'tech.founded': '१९७४ मध्ये स्थापना',
    'tech.title': 'तोपीवाला ज्युनियर कॉलेज',
    'tech.description': 'तोपीवाला ज्युनियर कॉलेज हा समर्पित शिकणाऱ्यांचा एक घनिष्ठ समुदाय आहे, जो शिक्षण आणि नाविन्यताद्वारे आपल्या काळातील सर्वात गंभीर समस्यांवर उपाय शोधण्यासाठी काम करत आहे.',
    'tech.explore': 'तोपीवाला ज्युनियर कॉलेज एक्सप्लोर करा →',
    
    // Jai Ganesh School
    'medical.founded': '२००४ मध्ये स्थापना',
    'medical.title': 'जय गणेश शाळा',
    'medical.description': 'जय गणेश शाळा सर्वोत्तम आणि तेजस्वी विद्यार्थी, शिक्षकांसह कर्मचारी आणि दर्जेदार शिक्षणाद्वारे इतरांची सेवा करण्याच्या सामायिक ध्येयासह विविधतेने भरलेला समुदाय तयार करण्यासाठी आणि त्याचे पालनपोषण करण्यासाठी वचनबद्ध आहे.',
    'medical.explore': 'जय गणेश शाळा एक्सप्लोर करा →',
    
    // Parulekar Primary School
    'business.founded': '१९५२ मध्ये स्थापना',
    'business.title': 'मोहनराव परुळेकर प्राथमिक शाळा',
    'business.description': 'पारुळेकर प्राथमिक शाळा जगात फरक करणारे तरुण शिकणारे तयार करते. आम्ही उद्याच्या आव्हानांसाठी नाविन्यपूर्ण शैक्षणिक पद्धती विकसित करतो आणि सर्जनशील विचारसरणी जोपासतो.',
    'business.explore': 'पारुळेकर प्राथमिक शाळा एक्सप्लोर करा →',
    
    // Ghuruye School
    'arts.founded': '२००४ मध्ये स्थापना',
    'arts.title': 'घुरये शाळा',
    'arts.description': 'घुरये शाळा ही एक व्यापक शैक्षणिक संस्था आहे जी मानविकी, विज्ञान आणि कलांमध्ये कार्यक्रम देते जे विद्यार्थ्यांमध्ये गंभीर चिंतन आणि सर्जनशील अभिव्यक्ती वाढवते.',
    'arts.explore': 'घुरये शाळा एक्सप्लोर करा →',

    // Smrithi Gandha
    'smruthi.founded': '२०११ मध्ये स्थापना',
    'smruthi.title': 'स्मृती गंधा',
    'smruthi.description': 'टोपीवालाचा सखोल इतिहास दाखवणारी ही एक विस्तृत/अंगभूत हस्तकला पत्रिका आहे.',
    'smruthi.explore': 'स्मृती गंधा एक्सप्लोर करा →',

    // Committee Section
    'committee.title': 'समिती सदस्य',
    'committee.subtitle': 'आमच्या शैक्षणिक ध्येयाचे मार्गदर्शन करणारे आमचे समर्पित समिती सदस्य भेटा.',
    'committee.member1.name': 'श्री. सुदेश मायेकर',
'committee.member1.position': 'अध्यक्ष',
'committee.member2.name': 'श्री. विजय कामत',
'committee.member2.position': 'सेक्रटेरी',
'committee.member3.name': 'जान्हवी देसाई',
'committee.member3.position': 'विश्वस्त',
'committee.member4.name': 'विकास देसाई',
'committee.member4.position': 'विश्वस्त',
'committee.member5.name': 'कमांडर राजीव कुबल',
'committee.member5.position': 'सदस्य',
'committee.member6.name': 'श्री. जी.व्ही. सामंत',
'committee.member6.position': 'सदस्य',
'committee.member7.name': 'श्री. चंद्रकांत सामंत',
'committee.member7.position': 'सदस्य',
'committee.member8.name': 'श्री. अक्षय सामंत',
'committee.member8.position': 'सदस्य',
'committee.member9.name': 'श्री. शैलेश खांडलेकर',
'committee.member9.position': 'सदस्य',
'committee.member10.name': 'श्री. दिगंबर सामंत',
'committee.member10.position': 'अध्यक्षांचे नामनिर्देशित सदस्य',
'committee.member11.name': 'श्री. लक्ष्मण वळंजू',
'committee.member11.position': 'मुख्याध्यापक',
'committee.member12.name': 'श्रीमती वीणा गोसावी',
'committee.member12.position': 'मुख्याध्यापिका',
'committee.member13.name': 'श्रीमती तेजल वेंगुर्लेकर',
'committee.member13.position': 'मुख्याध्यापिका',
'committee.member14.name': 'श्री. आनंद चव्हाण',
'committee.member14.position': 'सल्लागार',
'committee.member15.name': 'श्री. शरद पारुलेकर',
'committee.member15.position': 'सल्लागार',
'committee.member16.name': 'श्री. अविनाश आजगावकर',
'committee.member16.position': 'सल्लागार',

    // Quote Section
    'quote.text': 'शिक्षण हे सर्वात शक्तिशाली शस्त्र आहे जे तुम्ही जग बदलण्यासाठी वापरू शकता.',
    'quote.author': 'नेल्सन मंडेला',
    
    // About Section
    'about.title': 'आमच्याबद्दल',
    'about.description': 'मालवण शिक्षण संस्था त्यांच्या शाळांसाठी रणनीतिक व्यवस्थापन पुरवते. या संस्थेमध्ये निवडलेले सदस्य, संस्थापकांचे प्रतिनिधी, मुख्याध्यापक आणि सल्लागार यांचा समावेश असलेली एक विविध प्रशासकीय समिती आहे. या रचनेमुळे सर्व निर्णय सहमती आणि संस्थेच्या उद्देशांवर आधारित असतात याची सुनिश्चिती केली जाते. संस्थेचे काम प्रवेशाचा विस्तार करणे, दर्जा सुधारणे आणि सुविधांमध्ये गुंतवणूक करणे यावर लक्ष केंद्रित करते.',
    
    // Footer
    'footer.title': 'मालवण शिक्षण संस्था',
    'footer.description': 'उद्याच्या चांगल्या भविष्यासाठी आमच्या समुदायामध्ये दर्जेदार शिक्षण प्रदान करण्यासाठी आणि शैक्षणिक उत्कृष्टता वाढवण्यासाठी समर्पित.',
    'footer.quick_links': 'त्वरित दुवे',
    'footer.home': 'टोपीवाला हायस्कूल & ज्युनियर कॉलेज',
    'footer.about_us': 'आमच्याबद्दल',
    'footer.programs': 'जय गणेश इंग्रजी माध्यम शाळा',
    'footer.admissions': 'मोहनराव पारुळेकर प्राथमिक शाळा',
    'footer.contact': 'श्रीमती. सीताबाई श्रीपाद घुर्ये पूर्व-प्राथमिक शाळा',
    'footer.location': 'मालवण, महाराष्ट्र',
    'footer.phone': 'फोन: +९१ ९८७६५ ४३२१०',
    'footer.email': 'ईमेल: smesm@rediffmail.com',
    'footer.copyright': '© २०२५ मालवण शिक्षण संस्था. सर्व हक्क राखीव. टीम नोव्हेट द्वारे विकसित.',
    
    // Search
    'search.placeholder': 'शोधा...',
  },
};

const getTranslations = (language: Language) => {
  return translations[language] || translations.en;
};