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
    'arts.description': 'Ghurye School is a comprehensive educational institution offering programs in humanities, sciences, and arts that foster critical thinking and creative expression in students.',
    'arts.explore': 'Explore Ghurye School →',

    // Smruthi Gandha
    'smruthi.founded': 'Launched in 2011',
    'smruthi.title': 'Smruti Gandha',
    'smruthi.description': 'It is a comprehensive handcraft magazine that showcases the rich history of Topiwala.',
    'smruthi.explore': 'Explore Smruti Gandha →',

     // Gyan Jyoti
   // 'gyan.founded': 'Launched in 2011',
    'gyan.title': 'Dnyan Jyoti',
    'gyan.description': 'It is a comprehensive handcraft articles/stories or literature by our students..',
    'gyan.explore': 'Explore Dnyan Jyoti →',

    // Jeevan Manthan Series
    'jeevanManthan.newspaper': 'Article Series',
    'jeevanManthan.title': 'Jeevan Manthan',
    'jeevanManthan.description': 'An insightful article series exploring Social and Emotional Intelligence, published in Tarun Bharat newspaper. Learn practical skills for building deeper connections, managing stress effectively, and living a more fulfilling life.',
    'jeevanManthan.explore': 'Read Jeevan Manthan',
    'jeevanManthan.authorName': 'Rajiv Kubal',
    'jeevanManthan.authorTitle': 'Author & Emotional Intelligence Expert',
    'jeevanManthan.card1Title': 'Skill Development',
    'jeevanManthan.card1Description': 'Emotional Intelligence is not an inherent gift—it\'s a learnable skill that anyone can develop and master through practice.',
    'jeevanManthan.card2Title': 'Social Impact',
    'jeevanManthan.card2Description': 'A comprehensive resource for students, parents, teachers, and professionals seeking to enhance their emotional capabilities.',

    // Jeevan Manthan Page
    'jeevanManthanPage.seoTitle': 'Jeevan Manthan - Social & Emotional Intelligence Articles | Malvan Education Society',
    'jeevanManthanPage.seoDescription': 'Explore the Jeevan Manthan article series on Social and Emotional Intelligence. Comprehensive articles on self-awareness, empathy, and emotional growth published in Tarun Bharat.',
    'jeevanManthanPage.backHome': 'Back to Home',
    'jeevanManthanPage.subtitle': 'Articles on Social and Emotional Intelligence',
    'jeevanManthanPage.intro1': 'The "Jeevan Manthan" (Churning of Life) is a comprehensive article series published in the Tarun Bharat newspaper, focusing entirely on Social and Emotional Intelligence.',
    'jeevanManthanPage.intro2': 'The core message of the series is that Emotional Intelligence is not an inherent gift one is born with, but rather a skill that anyone can learn, practice, and develop.',
    'jeevanManthanPage.intro3': 'In today\'s era, where technical skills are highly valued, these articles emphasize that emotional mastery is the true key to success and is often a neglected aspect of learning. The series serves as a permanent resource for everyone—students, parents, teachers, and professionals—who is interested in building deep human connections, managing stress effectively, and living a more effective and fulfilling life.',
    'jeevanManthanPage.articlesTitle': 'Featured Articles',
    'jeevanManthanPage.ctaTitle': 'Want to Read More Articles?',
    'jeevanManthanPage.ctaDescription': 'Explore more insightful articles and resources from Malvan Education Society to continue your learning journey.',
    'jeevanManthanPage.readMoreArticles': 'Explore More Articles',
    'jeevanManthanPage.article1.title': 'Introduction to Social & Emotional Intelligence',
    'jeevanManthanPage.article1.description': 'Understanding the fundamentals of emotional intelligence and why it matters more than technical skills in today\'s world.',
    'jeevanManthanPage.article1.date': 'Article 1',
    'jeevanManthanPage.article2.title': 'Self-Awareness: The Foundation',
    'jeevanManthanPage.article2.description': 'Exploring the first pillar of emotional intelligence - understanding yourself, your emotions, and your impact on others.',
    'jeevanManthanPage.article2.date': 'Article 2',
    'jeevanManthanPage.article3.title': 'Self-Regulation: Mastering Control',
    'jeevanManthanPage.article3.description': 'Learning to manage your emotions, impulses, and reactions in challenging situations for better outcomes.',
    'jeevanManthanPage.article3.date': 'Article 3',
    'jeevanManthanPage.article4.title': 'Empathy: Understanding Others',
    'jeevanManthanPage.article4.description': 'Developing the ability to understand and share the feelings of others, building stronger relationships.',
    'jeevanManthanPage.article4.date': 'Article 4',
    'jeevanManthanPage.article5.title': 'Social Skills: Building Connections',
    'jeevanManthanPage.article5.description': 'Mastering the art of communication, collaboration, and building meaningful relationships with others.',
    'jeevanManthanPage.article5.date': 'Article 5',
    'jeevanManthanPage.article6.title': 'Motivation: The Inner Drive',
    'jeevanManthanPage.article6.description': 'Understanding intrinsic motivation and how to maintain passion and commitment toward your goals.',
    'jeevanManthanPage.article6.date': 'Article 6',
    'jeevanManthanPage.article7.title': 'Stress Management Techniques',
    'jeevanManthanPage.article7.description': 'Practical strategies for managing stress, anxiety, and pressure in personal and professional life.',
    'jeevanManthanPage.article7.date': 'Article 7',
    'jeevanManthanPage.article8.title': 'Conflict Resolution Skills',
    'jeevanManthanPage.article8.description': 'Learning effective techniques to resolve conflicts peacefully and maintain healthy relationships.',
    'jeevanManthanPage.article8.date': 'Article 8',
    'jeevanManthanPage.article9.title': 'Leadership Through Emotional Intelligence',
    'jeevanManthanPage.article9.description': 'How emotional intelligence shapes effective leadership and inspires others to achieve their best.',
    'jeevanManthanPage.article9.date': 'Article 9',
    'jeevanManthanPage.article10.title': 'Practical Application in Daily Life',
    'jeevanManthanPage.article10.description': 'Bringing it all together - implementing emotional intelligence principles in everyday situations.',
    'jeevanManthanPage.article10.date': 'Article 10',

    // Committee Section
    'committee.title': 'Present Managing Committee 2025-2029',
    'committee.subtitle': 'Meet our dedicated committee members who guide our educational mission.',
    'committee.member1.name': 'Sudesh Mayekar',
'committee.member1.position': 'President',
'committee.member2.name': 'Vijay Kamat',
'committee.member2.position': 'Secretary',
'committee.member3.name': 'Vikas Desai',
'committee.member3.position': 'Trustee',
'committee.member4.name': 'Janhavi Desai',
'committee.member4.position': 'Trustee',
'committee.member5.name': 'Akshay Samant',
'committee.member5.position': 'Member',
'committee.member6.name': 'Shailesh Khandalekar',
'committee.member6.position': 'Member',
'committee.member7.name': 'G.V. Samant',
'committee.member7.position': 'Member',
'committee.member8.name': 'Chandrakant Samant',
'committee.member8.position': 'Member',
'committee.member9.name': 'Rajiv Kubal',
'committee.member9.position': 'Member',
'committee.member10.name': 'Digambar Samant',
'committee.member10.position': 'Presidents Nominee',
'committee.member11.name': 'Laxman Valanju',
'committee.member11.position': 'Head Master',
'committee.member12.name': 'Veena Gosawi',
'committee.member12.position': 'Head Master',
'committee.member13.name': 'Tejal Vengurlekar',
'committee.member13.position': 'Head Master',
'committee.member14.name': 'Anand Chavan',
'committee.member14.position': 'Advisor',
'committee.member15.name': 'Sharad Parulekar',
'committee.member15.position': 'Advisor',
'committee.member16.name': 'Avinash Ajgaonkar',
'committee.member16.position': 'Advisor',
'committee.member17.name': 'L.R. Khobarekar',
'committee.member17.position': 'Advisor',


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
    // Video Section
    'video.badge': 'Our Achievements',
    'video.title': 'A Century of Educational Excellence',
    'video.subtitle': 'Witness the transformation and achievements of Malvan Education Society - shaping futures since 1911',
    'video.watch': 'Watch Our Story',
    'video.caption': 'From pioneering institutions to modern educational excellence - experience the remarkable journey of Malvan Education Society',
    'video.achievement1.title': '114 Years',
    'video.achievement1.subtitle': 'Legacy of Excellence',
    'video.achievement1.description': 'Since 1911',
    'video.achievement2.title': '1500+',
    'video.achievement2.subtitle': 'Students Empowered',
    'video.achievement2.description': 'Annually',
    'video.achievement3.title': '5 Institutions',
    'video.achievement3.subtitle': 'Educational Wings',
    'video.achievement3.description': 'SSC & HSC',
    'video.achievement4.title': 'Award Winning',
    'video.achievement4.subtitle': 'Academic Excellence',
    'video.achievement4.description': 'Recognized Nationally',
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
    'college.title': 'रा.ब. अनंत शिवाजी देसाई टोपीवाला हायस्कुल',
    'college.description': 'रा.ब. अनंत शिवाजी देसाई टोपीवाला हायस्कुल हा समर्पित विद्यार्थी आणि शिक्षकांचा एक गतिशील, घट्ट समुदाय आहे जो भूतकाळातून शिकण्यासाठी आणि भविष्याचे मार्गदर्शन करण्यासाठी एकत्र येतो.',
    'college.explore': 'रा.ब. अनंत शिवाजी देसाई टोपीवाला हायस्कुल एक्सप्लोर करा →',
    
    // Topiwala Junior College
    'tech.founded': '१९७४ मध्ये स्थापना',
    'tech.title': 'ना.अ.दे. टोपीवाला ज्यु.कॉलेज',
    'tech.description': 'ना.अ.दे. टोपीवाला ज्यु.कॉलेज हा समर्पित शिकणाऱ्यांचा एक घनिष्ठ समुदाय आहे, जो शिक्षण आणि नाविन्यताद्वारे आपल्या काळातील सर्वात गंभीर समस्यांवर उपाय शोधण्यासाठी काम करत आहे.',
    'tech.explore': 'ना.अ.दे. टोपीवाला ज्यु.कॉलेज एक्सप्लोर करा →',
    
    // Jai Ganesh School
    'medical.founded': '२००४ मध्ये स्थापना',
    'medical.title': 'जय गणेश इंग्लीश मिडीयम स्कुल',
    'medical.description': 'जय गणेश इंग्लीश मिडीयम स्कुल सर्वोत्तम आणि तेजस्वी विद्यार्थी, शिक्षकांसह कर्मचारी आणि दर्जेदार शिक्षणाद्वारे इतरांची सेवा करण्याच्या सामायिक ध्येयासह विविधतेने भरलेला समुदाय तयार करण्यासाठी आणि त्याचे पालनपोषण करण्यासाठी वचनबद्ध आहे.',
    'medical.explore': 'जय गणेश इंग्लीश मिडीयम स्कुल एक्सप्लोर करा →',

    // Parulekar Primary School
    'business.founded': '१९५२ मध्ये स्थापना',
    'business.title': 'मोहनराव परुळेकर प्राथमिक शाळा',
    'business.description': 'मोहनराव पारुळेकर प्राथमिक शाळा जगात फरक करणारे तरुण शिकणारे तयार करते. आम्ही उद्याच्या आव्हानांसाठी नाविन्यपूर्ण शैक्षणिक पद्धती विकसित करतो आणि सर्जनशील विचारसरणी जोपासतो.',
    'business.explore': 'मोहनराव पारुळेकर प्राथमिक शाळा एक्सप्लोर करा →',
    
    // Ghuruye School
    'arts.founded': '२००४ मध्ये स्थापना',
    'arts.title': 'श्रीमती सीताबाई श्रीपाद घुर्ये इंग्रजी माध्यम बालवाडी',
    'arts.description': 'श्रीमती सीताबाई श्रीपाद घुर्ये इंग्रजी माध्यम बालवाडी ही एक व्यापक शैक्षणिक संस्था आहे जी मानविकी, विज्ञान आणि कलांमध्ये कार्यक्रम देते जे विद्यार्थ्यांमध्ये गंभीर चिंतन आणि सर्जनशील अभिव्यक्ती वाढवते.',
    'arts.explore': ' श्रीमती सीताबाई श्रीपाद घुर्ये इंग्रजी माध्यम बालवाडी एक्सप्लोर करा →',

    // Smrithi Gandha
    'smruthi.founded': '२०११ मध्ये स्थापना',
    'smruthi.title': 'स्मृती गंधा',
    'smruthi.description': 'टोपीवालाचा सखोल इतिहास दाखवणारी ही एक विस्तृत/अंगभूत हस्तकला पत्रिका आहे.',
    'smruthi.explore': 'स्मृती गंधा एक्सप्लोर करा →',

    // ज्ञान ज्योती (Gyan Jyoti)
// 'gyan.founded': '२०११ मध्ये सुरू',
'gyan.title': 'ज्ञान ज्योती',
'gyan.description': 'हा आमच्या विद्यार्थ्यांद्वारे तयार केलेल्या हस्तकला वस्तू/कथा किंवा साहित्याचा एक सर्वसमावेशक संग्रह आहे.',
'gyan.explore': 'ज्ञान ज्योती एक्सप्लोर करा →',

    // जीवन मंथन मालिका (Jeevan Manthan Series)
    'jeevanManthan.newspaper': 'लेख मालिका',
    'jeevanManthan.title': 'जीवन मंथन',
    'jeevanManthan.description': 'तरुण भारत वृत्तपत्रात प्रकाशित सामाजिक आणि भावनिक बुद्धिमत्तेवर आधारित अंतर्दृष्टीपूर्ण लेख मालिका. सखोल संबंध निर्माण करणे, तणाव प्रभावीपणे व्यवस्थापित करणे आणि अधिक समृद्ध जीवन जगण्यासाठी व्यावहारिक कौशल्ये शिका.',
    'jeevanManthan.explore': 'जीवन मंथन वाचा',
    'jeevanManthan.authorName': 'राजीव कुबळ',
    'jeevanManthan.authorTitle': 'लेखक आणि भावनिक बुद्धिमत्ता तज्ञ',
    'jeevanManthan.card1Title': 'कौशल्य विकास',
    'jeevanManthan.card1Description': 'भावनिक बुद्धिमत्ता ही जन्मजात देणगी नाही—हे एक शिकण्यायोग्य कौशल्य आहे जे कोणीही सरावाद्वारे विकसित आणि प्रभुत्व मिळवू शकते.',
    'jeevanManthan.card2Title': 'सामाजिक प्रभाव',
    'jeevanManthan.card2Description': 'विद्यार्थी, पालक, शिक्षक आणि व्यावसायिकांसाठी त्यांच्या भावनिक क्षमता वाढवण्यासाठी व्यापक संसाधन.',

    // जीवन मंथन पृष्ठ (Jeevan Manthan Page)
    'jeevanManthanPage.seoTitle': 'जीवन मंथन - सामाजिक आणि भावनिक बुद्धिमत्ता लेख | मालवण शिक्षण सोसायटी',
    'jeevanManthanPage.seoDescription': 'सामाजिक आणि भावनिक बुद्धिमत्तेवरील जीवन मंथन लेख मालिका एक्सप्लोर करा. तरुण भारतात प्रकाशित आत्म-जागरूकता, सहानुभूती आणि भावनिक विकासावरील व्यापक लेख.',
    'jeevanManthanPage.backHome': 'मुख्यपृष्ठावर परत',
    'jeevanManthanPage.subtitle': 'सामाजिक आणि भावनिक बुद्धिमत्तेवरील लेख',
    'jeevanManthanPage.intro1': '"जीवन मंथन" ही तरुण भारत वृत्तपत्रात प्रकाशित सामाजिक आणि भावनिक बुद्धिमत्तेवर पूर्णपणे केंद्रित व्यापक लेख मालिका आहे.',
    'jeevanManthanPage.intro2': 'मालिकेचा मुख्य संदेश असा आहे की भावनिक बुद्धिमत्ता ही जन्मजात देणगी नाही, तर ते एक कौशल्य आहे जे कोणीही शिकू, सराव करू आणि विकसित करू शकते.',
    'jeevanManthanPage.intro3': 'आजच्या युगात, जिथे तांत्रिक कौशल्यांना खूप महत्त्व दिले जाते, हे लेख भावनिक प्रभुत्व ही यशाची खरी चावी आहे आणि ही शिकण्याची अनेकदा दुर्लक्षित केली जाणारी बाजू आहे यावर भर देतात. ही मालिका विद्यार्थी, पालक, शिक्षक आणि व्यावसायिक—सखोल मानवी संबंध निर्माण करण्यात, तणाव प्रभावीपणे व्यवस्थापित करण्यात आणि अधिक प्रभावी आणि समृद्ध जीवन जगण्यात स्वारस्य असलेल्या प्रत्येकासाठी कायम संसाधन म्हणून काम करते.',
    'jeevanManthanPage.articlesTitle': 'वैशिष्ट्यीकृत लेख',
    'jeevanManthanPage.ctaTitle': 'अधिक लेख वाचायचे आहेत?',
    'jeevanManthanPage.ctaDescription': 'तुमचा शिकण्याचा प्रवास सुरू ठेवण्यासाठी मालवण शिक्षण सोसायटीकडील अधिक अंतर्दृष्टीपूर्ण लेख आणि संसाधने एक्सप्लोर करा.',
    'jeevanManthanPage.readMoreArticles': 'अधिक लेख एक्सप्लोर करा',
    'jeevanManthanPage.article1.title': 'सामाजिक आणि भावनिक बुद्धिमत्तेचा परिचय',
    'jeevanManthanPage.article1.description': 'भावनिक बुद्धिमत्तेची मूलभूत तत्त्वे समजून घेणे आणि आजच्या जगात ती तांत्रिक कौशल्यांपेक्षा अधिक महत्त्वाची का आहे.',
    'jeevanManthanPage.article1.date': 'लेख १',
    'jeevanManthanPage.article2.title': 'आत्म-जागरूकता: पाया',
    'jeevanManthanPage.article2.description': 'भावनिक बुद्धिमत्तेचा पहिला स्तंभ एक्सप्लोर करणे - स्वतःला, आपल्या भावनांना आणि इतरांवर आपला प्रभाव समजून घेणे.',
    'jeevanManthanPage.article2.date': 'लेख २',
    'jeevanManthanPage.article3.title': 'आत्म-नियंत्रण: नियंत्रणावर प्रभुत्व',
    'jeevanManthanPage.article3.description': 'चांगल्या परिणामांसाठी आव्हानात्मक परिस्थितींमध्ये आपल्या भावना, आवेग आणि प्रतिक्रिया व्यवस्थापित करण्यास शिकणे.',
    'jeevanManthanPage.article3.date': 'लेख ३',
    'jeevanManthanPage.article4.title': 'सहानुभूती: इतरांना समजून घेणे',
    'jeevanManthanPage.article4.description': 'इतरांच्या भावना समजून घेण्याची आणि सामायिक करण्याची क्षमता विकसित करणे, मजबूत संबंध निर्माण करणे.',
    'jeevanManthanPage.article4.date': 'लेख ४',
    'jeevanManthanPage.article5.title': 'सामाजिक कौशल्ये: संबंध निर्माण करणे',
    'jeevanManthanPage.article5.description': 'संवाद, सहकार्य आणि इतरांसह अर्थपूर्ण संबंध निर्माण करण्याच्या कलेवर प्रभुत्व मिळवणे.',
    'jeevanManthanPage.article5.date': 'लेख ५',
    'jeevanManthanPage.article6.title': 'प्रेरणा: आंतरिक प्रेरक शक्ती',
    'jeevanManthanPage.article6.description': 'आंतरिक प्रेरणा समजून घेणे आणि आपल्या ध्येयांच्या दिशेने आवड आणि वचनबद्धता कशी टिकवायची.',
    'jeevanManthanPage.article6.date': 'लेख ६',
    'jeevanManthanPage.article7.title': 'तणाव व्यवस्थापन तंत्रे',
    'jeevanManthanPage.article7.description': 'वैयक्तिक आणि व्यावसायिक जीवनात तणाव, चिंता आणि दबाव व्यवस्थापित करण्यासाठी व्यावहारिक धोरणे.',
    'jeevanManthanPage.article7.date': 'लेख ७',
    'jeevanManthanPage.article8.title': 'संघर्ष निराकरण कौशल्ये',
    'jeevanManthanPage.article8.description': 'संघर्ष शांततेने सोडवण्यासाठी आणि निरोगी संबंध टिकवून ठेवण्यासाठी प्रभावी तंत्रे शिकणे.',
    'jeevanManthanPage.article8.date': 'लेख ८',
    'jeevanManthanPage.article9.title': 'भावनिक बुद्धिमत्तेद्वारे नेतृत्व',
    'jeevanManthanPage.article9.description': 'भावनिक बुद्धिमत्ता प्रभावी नेतृत्व कशी आकार देते आणि इतरांना त्यांचे सर्वोत्तम साध्य करण्यासाठी प्रेरित करते.',
    'jeevanManthanPage.article9.date': 'लेख ९',
    'jeevanManthanPage.article10.title': 'दैनंदिन जीवनात व्यावहारिक उपयोग',
    'jeevanManthanPage.article10.description': 'हे सर्व एकत्र आणणे - दैनंदिन परिस्थितींमध्ये भावनिक बुद्धिमत्ता तत्त्वे लागू करणे.',
    'jeevanManthanPage.article10.date': 'लेख १०',

    // Committee Section
    'committee.title': 'समिती सदस्य',
    'committee.subtitle': 'आमच्या शैक्षणिक ध्येयाचे मार्गदर्शन करणारे आमचे समर्पित समिती सदस्य भेटा.',
    'committee.member1.name': 'सुदेश मायेकर',
'committee.member1.position': 'अध्यक्ष',
'committee.member2.name': 'विजय कामत',
'committee.member2.position': 'सेक्रेटरी',
'committee.member3.name': 'विकास देसाई',
'committee.member3.position': 'ट्रस्टी',
'committee.member4.name': 'जानव्ही देसाई',
'committee.member4.position': 'ट्रस्टी',
'committee.member5.name': 'एड. अक्षय सामंत',
'committee.member5.position': 'सदस्य',
'committee.member6.name': 'शैलेश खांडाळेकर',
'committee.member6.position': 'सदस्य',
'committee.member7.name': 'जी. व्ही. सामंत',
'committee.member7.position': 'सदस्य',
'committee.member8.name': 'सी. एम. सामंत',
'committee.member8.position': 'सदस्य',
'committee.member9.name': 'राजीव कुबल',
'committee.member9.position': 'सदस्य',
'committee.member10.name': 'डी. एम. सामंत',
'committee.member10.position': 'अध्यक्ष नॉमिनी',
'committee.member11.name': 'लक्षमन वळंजु',
'committee.member11.position': 'टोपीवाला मुख्याध्यापक',
'committee.member12.name': 'वीणा गोसावी',
'committee.member12.position': 'मोहनराव म. परुळेकर मुख्याध्यापक',
'committee.member13.name': 'तेजल वेंगुर्लेकर',
'committee.member13.position': 'जय गणेश इंग्लिश मिडीयम स्कुल मुख्याध्यापक',
'committee.member14.name': 'ए. एस. चव्हाण',
'committee.member14.position': 'निमंत्रित',
'committee.member15.name': 'एस. एम. परुळेकर',
'committee.member15.position': 'निमंत्रित',
'committee.member16.name': 'ए. व्ही. आजगावकर',
'committee.member16.position': 'निमंत्रित',
'committee.member17.name': 'एल. आर. खोबरेकर',
'committee.member17.position': 'निमंत्रित',

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
    
    // Video Section
    'video.badge': 'आमची उपलब्धी',
    'video.title': 'शिक्षणातील शतकभर उत्कृष्टता',
    'video.subtitle': 'मालवण शिक्षण संस्थेची परिवर्तन आणि उपलब्धी पहा - १९११ पासून भविष्य घडवत आहोत',
    'video.watch': 'आमची गोष्ट पहा',
    'video.caption': 'अग्रणी संस्थांपासून आधुनिक शैक्षणिक उत्कृष्टतेपर्यंत - मालवण शिक्षण संस्थेचा उल्लेखनीय प्रवास अनुभवा',
    'video.achievement1.title': '११४ वर्षे',
    'video.achievement1.subtitle': 'उत्कृष्टतेचा वारसा',
    'video.achievement1.description': '१९११ पासून',
    'video.achievement2.title': '१५००+',
    'video.achievement2.subtitle': 'विद्यार्थी सशक्त',
    'video.achievement2.description': 'दरवर्षी',
    'video.achievement3.title': '५ संस्था',
    'video.achievement3.subtitle': 'शैक्षणिक शाखा',
    'video.achievement3.description': 'SSC आणि HSC',
    'video.achievement4.title': 'पुरस्कार विजेते',
    'video.achievement4.subtitle': 'शैक्षणिक उत्कृष्टता',
    'video.achievement4.description': 'राष्ट्रीय स्तरावर मान्यताप्राप्त',
  },
};

const getTranslations = (language: Language) => {
  return translations[language] || translations.en;
};