import { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";
import { ComponentLoadingFallback } from "../components/LoadingFallback";
import { SEOHead } from "../components/SEOHead";

// Lazy load heavy components
const EducationalSections = lazy(() => import("../components/EducationalSections"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const VideoSection = lazy(() => import("../components/VideoSection"));
const JeevanManthanSection = lazy(() => import("../components/JeevanManthanSection"));
const Footer = lazy(() => import("../components/Footer"));
const Chatbot = lazy(() => import("../components/Chatbot").then(module => ({ default: module.Chatbot })));

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Malvan Education Society | A.S.D. Topiwala High School | N.A.D. Junior College | Best Schools in Malvan, Sindhudurg"
        description="Malvan Education Society (MES) - Premier educational institution in Malvan, Sindhudurg since 1912. Home to A.S.D. Topiwala High School, N.A.D. Junior College, Jay Ganesh School, Mohanrao Parulekar Primary School. Quality SSC, HSC education in Malvan, Maharashtra."
        keywords="Malvan Education Society, Topiwala School Malvan, Junior College Sindhudurg, best schools Malvan, SSC, HSC school Maharashtra, SSC school Malvan, HSC college Malvan, Jay Ganesh School, Parulekar Primary School, Ghurye School, education Malvan, schools near me Malvan"
        canonical="https://topiwala-mes.org/"
      />
      <HeroSection />
      <Suspense fallback={<ComponentLoadingFallback />}>
        <div id="educational-sections">
          <EducationalSections />
        </div>
      </Suspense>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <div id="about">
          <AboutSection />
        </div>
      </Suspense>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <VideoSection />
      </Suspense>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <JeevanManthanSection />
      </Suspense>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <div id="contact">
          <Footer />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default Index;
