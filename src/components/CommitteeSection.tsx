import { useLanguage } from "@/contexts/LanguageContext";
// 1. Sudesh Mayekar (President)
import committeeMember1 from "@/assets/president.jpeg";

// 2. Vijay Kamat (Secretary)
import committeeMember2 from "@/assets/vijay kamat.png";

// 3. Vikas Desai (Trustee) - Used icon as no specific image was provided for Vikas Desai in the original import comments.
import committeeMember3 from "@/assets/vikas.jpeg";

// 4. Janhavi Desai (Trustee) - Used icon as no specific image was provided for Janhavi Desai in the original import comments.
import committeeMember4 from "@/assets/janhvi.jpeg";

// 5. Akshay Samant (Member) - Used icon (original list's committeeMember8 was the icon).
import committeeMember5 from "@/assets/akshay.jpeg";

// 6. Shailesh Khandalekar (Member) - Used icon (original list's committeeMember9 was the icon).
import committeeMember6 from "@/assets/shailesh.jpeg";

// 7. G.V. Samant (Member) - Used icon (original list's committeeMember6 was the icon).
import committeeMember7 from "@/assets/gv.jpeg";

// 8. Chandrakant Samant (Member)
import committeeMember8 from "@/assets/chandrakant.jpeg";

// 9. Rajiv Kubal (Member)
import committeeMember9 from "@/assets/rajiv.png";

// 10. Digambar Samant (Presidents Nominee)
import committeeMember10 from "@/assets/committee member2.png";

// 11. Laxman Valanju (Head Master)
import committeeMember11 from "@/assets/valanju.png";

// 12. Veena Gosawi (Head Master)
import committeeMember12 from "@/assets/VEENA GOSAVI.png";

// 13. Tejal Vengurlekar (Head Master)
import committeeMember13 from "@/assets/TEJAL VENGURLEKAR.png";

// 14. Anand Chavan (Advisor)
import committeeMember14 from "@/assets/anand.jpeg";

// 15. Sharad Parulekar (Advisor)
import committeeMember15 from "@/assets/sharad.jpeg";

// 16. Avinash Ajgaonkar (Advisor)
import committeeMember16 from "@/assets/sir avinash.png";

// 17. L.R. Khobarekar (Advisor) - Added new placeholder to match the 17th member.
import committeeMember17 from "@/assets/khobarekar.jpeg";



const CommitteeSection = () => {
  const { t } = useLanguage();
  
  const committeeMembers = [
    
    {
      id: 1,
      image: committeeMember1,
      name: t('committee.member1.name'),
      position: t('committee.member1.position'),
    },
    {
      id: 2,
      image: committeeMember2,
      name: t('committee.member2.name'),
      position: t('committee.member2.position'),
    },
    {
      id: 3,
      image: committeeMember3,
      name: t('committee.member3.name'),
      position: t('committee.member3.position'),
    },
    {
      id: 4,
      image: committeeMember4,
      name: t('committee.member4.name'),
      position: t('committee.member4.position'),
    },
    {
      id: 5,
      image: committeeMember5,
      name: t('committee.member5.name'),
      position: t('committee.member5.position'),
    },
    {
      id: 6,
      image: committeeMember6,
      name: t('committee.member6.name'),
      position: t('committee.member6.position'),
    },
    {
      id: 7,
      image: committeeMember7,
      name: t('committee.member7.name'),
      position: t('committee.member7.position'),
    },
    {
      id: 8,
      image: committeeMember8,
      name: t('committee.member8.name'),
      position: t('committee.member8.position'),
    },
    {
      id: 9,
      image: committeeMember9,
      name: t('committee.member9.name'),
      position: t('committee.member9.position'),
    },
    {
      id: 10,
      image: committeeMember10,
      name: t('committee.member10.name'),
      position: t('committee.member10.position'),
    },
    {
      id: 11,
      image: committeeMember11,
      name: t('committee.member11.name'),
      position: t('committee.member11.position'),
    },
    {
      id: 12,
      image: committeeMember12,
      name: t('committee.member12.name'),
      position: t('committee.member12.position'),
    },
    {
      id: 13,
      image: committeeMember13,
      name: t('committee.member13.name'),
      position: t('committee.member13.position'),
    },
    {
      id: 14,
      image: committeeMember14,
      name: t('committee.member14.name'),
      position: t('committee.member14.position'),
    },
    {
      id: 15,
      image: committeeMember15,
      name: t('committee.member15.name'),
      position: t('committee.member15.position'),
    },
    {
      id: 16,
      image: committeeMember16,
      name: t('committee.member16.name'),
      position: t('committee.member16.position'),
    },
    {
      id: 17,
      image: committeeMember17,
      name: t('committee.member17.name'),
      position: t('committee.member17.position'),
    },
  ];

  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
            {t('committee.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('committee.subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4 mx-auto w-40 h-40 sm:w-48 sm:h-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                  decoding="async"
                  width="192"
                  height="192"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;