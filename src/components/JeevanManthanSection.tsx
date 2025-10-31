import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Newspaper, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jeevanManthanImage from "@/assets/jeevan-manthan-section.png";

const JeevanManthanSection = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as any}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold uppercase tracking-wide">
              {t('jeevanManthan.newspaper')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            {t('jeevanManthan.title')}
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <img
                src={jeevanManthanImage}
                alt="Jeevan Manthan - Weekly Column Series"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <Newspaper className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-xl">{t('jeevanManthan.newspaper')}</p>
                    <p className="text-sm text-white/90">Weekly Column Series</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('jeevanManthan.description')}
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t('jeevanManthan.card1Title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('jeevanManthan.card1Description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t('jeevanManthan.card2Title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('jeevanManthan.card2Description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/jeevan-manthan">
                <Button
                  size="lg"
                  className="group"
                >
                  {t('jeevanManthan.explore')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JeevanManthanSection;
