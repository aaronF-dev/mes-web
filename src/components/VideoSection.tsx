import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Users, BookOpen, Trophy } from "lucide-react";

const VideoSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: t('video.achievement1.title'),
      subtitle: t('video.achievement1.subtitle'),
      description: t('video.achievement1.description')
    },
    {
      icon: Users,
      title: t('video.achievement2.title'),
      subtitle: t('video.achievement2.subtitle'),
      description: t('video.achievement2.description')
    },
    {
      icon: BookOpen,
      title: t('video.achievement3.title'),
      subtitle: t('video.achievement3.subtitle'),
      description: t('video.achievement3.description')
    },
    {
      icon: Trophy,
      title: t('video.achievement4.title'),
      subtitle: t('video.achievement4.subtitle'),
      description: t('video.achievement4.description')
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/VideoObject"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">{t('video.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4" itemProp="name">
            {t('video.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" itemProp="description">
            {t('video.subtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid - Video + Achievements */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Side - Achievement Stats (Hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-6">
            {achievements.slice(0, 2).map((achievement, index) => (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-1000 hover:shadow-lg hover:border-primary/30 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-1">{achievement.subtitle}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Video */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative group mx-auto max-w-sm">
              {/* Decorative glow */}
              <div className="absolute -inset-6 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
              
              {/* Video wrapper */}
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                <AspectRatio ratio={9 / 16}>
                  <iframe
                    src="https://www.youtube.com/embed/5ZLBkALlKg8"
                    title="Malvan Education Society - Our Journey of Excellence"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                    itemProp="embedUrl"
                  ></iframe>
                </AspectRatio>
                
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary/40 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary/40 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary/40 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary/40 rounded-bl-xl"></div>
              </div>

              {/* Video badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-primary-foreground whitespace-nowrap">
                  {t('video.watch')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Achievement Stats (Hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-6">
            {achievements.slice(2, 4).map((achievement, index) => (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-1000 hover:shadow-lg hover:border-primary/30 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-1">{achievement.subtitle}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Achievement Grid */}
        <div 
          className={`lg:hidden grid grid-cols-2 gap-4 mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-3">
                <achievement.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
              <p className="text-xs font-semibold text-primary mb-1">{achievement.subtitle}</p>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Caption */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t('video.caption')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;