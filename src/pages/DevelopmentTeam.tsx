import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Users2, Code2, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { SEOHead } from "@/components/SEOHead";
import heroImage from "@/assets/mes-about.jpeg";
import rahulImage from "@/assets/rahul-prabhudesai.jpg";
import aronImage from "@/assets/aron-fernandes.png";
import sharadImage from "@/assets/sharad-parulekar.jpeg";
import rajivImage from "@/assets/rajiv-kubal.jpg";
import knowvationLogo from "@/assets/knowvation-logo.jpg";

const DevelopmentTeam = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Development Team | Malvan Education Society Website | Alumni Collaboration"
        description="Meet the talented development team behind Malvan Education Society website. Built by MES alumni - Rahul Prabhudesai and Aaron Fernandes, mentored by Sharad Parulekar and Rajiv Kubal."
        keywords="MES development team, Malvan Education Society website, alumni collaboration, Rahul Prabhudesai, Aaron Fernandes, web development Malvan, Knowvation"
        canonical="https://topiwala-mes.org/development-team"
      />
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Dark Background */}
      <section className="relative bg-harvard-dark py-20 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Malvan Education Society"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Bridging Generations
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed">
            The Team Behind Our Digital Hub
          </p>
          <div className="w-24 h-1 bg-white/60 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-card py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
                This website is more than a digital platform; it is a proof of the enduring spirit 
                of the Malvan Education Society a labor of love, built by our alumni, for our community.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                It represents a powerful bridge between generations, where the innovation of our young 
                graduates was guided by the profound wisdom of our most esteemed alumni.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Development Team */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
                Our Development Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The core development, design, and execution of this website were driven by the skill 
                and dedication of two bright young alumni from the N.A.D. Junior College 2021 (12th Std) Batch
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Developer 1 */}
            <ScrollAnimationWrapper animation="slide-left" delay={100}>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={rahulImage}
                      alt="Rahul Prabhudesai"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="160"
                      height="160"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    Rahul Prabhudesai
                  </h3>
                  <p className="text-muted-foreground mb-4">Designer</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">N.A.D. Junior College 2021</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Developer 2 */}
            <ScrollAnimationWrapper animation="slide-right" delay={100}>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={aronImage}
                      alt="Aaron Fernandes"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="160"
                      height="160"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    Aaron Fernandes
                  </h3>
                  <p className="text-muted-foreground mb-4">Developer</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">N.A.D. Junior College 2021</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="bg-card py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
                Our Esteemed Mentors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This project is a perfect example of alumni collaboration. The efforts of our young 
                developers were guided by the invaluable experience of our senior alumni from Topiwala Highschool
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mentor 1 */}
            <ScrollAnimationWrapper animation="slide-left" delay={100}>
              <div className="bg-muted rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <img
                      src={sharadImage}
                      alt="Shri Sharad Parulekar"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="96"
                      height="96"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                      Shri Sharad Parulekar
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">SSC 1965 Batch • Topiwala Highschool</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      For providing dedicated mentorship and strategic guidance throughout the project.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Mentor 2 */}
            <ScrollAnimationWrapper animation="slide-right" delay={100}>
              <div className="bg-muted rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <img
                      src={rajivImage}
                      alt="Rajiv Kubal"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="96"
                      height="96"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                      Rajiv Kubal
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">SSC 1973 Batch • Topiwala Highschool</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      For providing expert technical suggestions and guiding the website's architecture.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Developer Message */}
      <section className="relative bg-harvard-dark py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              A Message from the Developers
            </h2>
            <div className="w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-10">
            <div className="text-6xl text-white/40 mb-4 leading-none">"</div>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                We are incredibly honored to have built this platform for our alma mater. This project 
                was only possible because of the unwavering support and wisdom from our mentors, Shri 
                Sharad Parulekar sir and Shri Rajiv Kubal sir. They guided us at every step, sharing 
                their decades of experience to help us build a strong technical foundation.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                We are deeply grateful for their mentorship and hope this website serves our students, 
                teachers, and the entire MES family for years to come.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-right">
              <p className="text-white font-semibold text-lg">
                — Rahul & Aaron 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowvation CTA Section */}
      <section className="bg-gradient-to-b from-muted to-card py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollAnimationWrapper animation="scale">
            <div className="bg-card border border-border rounded-xl shadow-lg p-8 sm:p-10">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={knowvationLogo} 
                  alt="Knowvation Logo" 
                  className="h-16 sm:h-20 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-4">
                Want to Know More About Our Development Team?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Interested in working with the team behind this platform? Visit us to explore our services and expertise.
              </p>
              <a
                href="https://team-knowvation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Visit Knowvation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-card py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              The Malvan Education Society extends its deepest gratitude to this exceptional team 
              for their vision, dedication, and for so perfectly embodying our community's spirit 
              of lifelong connection and collaboration.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentTeam;
