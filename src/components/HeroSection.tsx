import HeroHeader from "./HeroHeader";
import HarvardLogo from "./HarvardLogo";

import heroImage from "@/assets/hero1.jpeg";

const HeroSection = () => {

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden" itemScope itemType="https://schema.org/WPHeader">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Malvan Education Society - Best Schools and Colleges in Malvan, Sindhudurg, Maharashtra since 1912"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* reduced overlay darkness */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <HeroHeader />

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-center h-full pt-20 pb-12">
        <HarvardLogo />
      </div>


    </section>
  );
};

export default HeroSection;