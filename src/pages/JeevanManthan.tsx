import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ArrowLeft, BookOpen, Calendar, X } from "lucide-react";
import { Link } from "react-router-dom";
import jeevanManthanHero from "@/assets/jeevan-manthan-hero.jpg";
import { SEOHead } from "@/components/SEOHead";

const JeevanManthan = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<{
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
  } | null>(null);

  const articles = [
    {
      id: 1,
      image: "https://ik.imagekit.io/73ht4flyu/Article%201.webp?updatedAt=1761937828262",
      title: "भावनिक बुद्धिमत्ता यशाची गुरूकिल्ली",
      description: t('jeevanManthanPage.article1.description'),
      date: "रविवार, १५ जून २०२५",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/73ht4flyu/Article%20%202.webp?updatedAt=1761937827976",
      title: "आत्म-जागरूकता: स्वतःच्या मनाचा आरसा",
      description: t('jeevanManthanPage.article2.description'),
      date: "रविवार, २९ जून २०२५",
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/73ht4flyu/Article%209.webp?updatedAt=1761937828540",
      title: "मातीचा वारसा आणि नेतृत्वाची नवी पहाट!",
      description: t('jeevanManthanPage.article3.description'),
      date: "रविवार, ५ ऑक्टोबर २०२५",
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/73ht4flyu/Article%204.webp?updatedAt=1761937828608",
      title: "आत्म-नियंत्रण: संघर्षाच्या वादळात शांततेचा दीपस्तंभ",
      description: t('jeevanManthanPage.article4.description'),
      date: "रविवार, १३ जुलै २०२५",
    },
    {
      id: 5,
      image: "https://ik.imagekit.io/73ht4flyu/Article%2010.webp?updatedAt=1761937828624",
      title: "सामाजिक कौशल्ये | माणूस जोडण्याची कला!",
      description: t('jeevanManthanPage.article5.description'),
      date: "(Date Not Visible)",
    },
    {
      id: 6,
      image: "https://ik.imagekit.io/73ht4flyu/Article%204.webp?updatedAt=1761937828608",
      title: "सहानुभूती | दुसऱ्यांच्या डोळ्यांतून जग पाहण्याची दिव्य नजर!",
      description: t('jeevanManthanPage.article6.description'),
      date: "रविवार, २७ जुलै २०२५",
    },
    {
      id: 7,
      image: "https://ik.imagekit.io/73ht4flyu/Article%208.webp?updatedAt=1761937828539",
      title: "प्रत्येक पिढीत लपलेला नेता जागृत करणे",
      description: t('jeevanManthanPage.article7.description'),
      date: "रविवार, १४ सप्टेंबर २०२५",
    },
    {
      id: 8,
      image: "https://ik.imagekit.io/73ht4flyu/Article%205.webp?updatedAt=1761937828159",
      title: "सामाजिक कौशल्याची किमया | संवाद, सहकार्य आणि नेतृत्वाने इतिहास घडवा!",
      description: t('jeevanManthanPage.article8.description'),
      date: "रविवार, १० ऑगस्ट २०२५",
    },
    {
      id: 9,
      image: "https://ik.imagekit.io/73ht4flyu/Article%206.webp?updatedAt=1761937828326",
      title: "तणाव व्यवस्थापन | शांत मनाचे विज्ञान!",
      description: t('jeevanManthanPage.article9.description'),
      date: "रविवार, २४ ऑगस्ट २०२५",
    },
    {
      id: 10,
      image: "https://ik.imagekit.io/73ht4flyu/Article%207.webp?updatedAt=1761937828508",
      title: "भावनेच्या निखाऱ्याला ऊर्जेत बदलण्याचे गुपित!",
      description: t('jeevanManthanPage.article10.description'),
      date: "४ सप्टेंबर २०२५",
    },
  ];

  return (
    <>
      <SEOHead
        title={t('jeevanManthanPage.seoTitle')}
        description={t('jeevanManthanPage.seoDescription')}
        keywords="jeevan manthan, emotional intelligence, social intelligence, self awareness, empathy, tarun bharat"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section with Image */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          {/* Hero Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={jeevanManthanHero} 
              alt="Jeevan Manthan Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>

          {/* Back Button */}
          <div className="absolute top-8 left-4 sm:left-8 z-20">
            <Link to="/">
              <Button variant="ghost" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t('jeevanManthanPage.backHome')}
              </Button>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                <BookOpen className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-semibold uppercase tracking-widest">
                  {t('jeevanManthan.newspaper')}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                {t('jeevanManthan.title')}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
                {t('jeevanManthanPage.subtitle')}
              </p>
              
              <div className="w-32 h-1.5 bg-white mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <ScrollAnimationWrapper animation="fade-up">
            <Card className="border-border/50 shadow-xl bg-card">
              <CardContent className="p-10 md:p-16">
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-lg text-foreground leading-relaxed mb-6 font-light">
                    {t('jeevanManthanPage.intro1')}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-6 font-light">
                    {t('jeevanManthanPage.intro2')}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-light">
                    {t('jeevanManthanPage.intro3')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="text-center mb-16 pt-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              {t('jeevanManthanPage.articlesTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, index) => (
              <ScrollAnimationWrapper
                key={article.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card 
                  className="group h-full border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden bg-card cursor-pointer flex flex-col"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative w-full overflow-hidden aspect-[4/3]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                      #{article.id}
                    </div>
                  </div>
                  
                  <CardHeader className="space-y-3 md:space-y-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground pt-3 border-t border-border/50 mt-auto">
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="whitespace-nowrap">{article.date}</span>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <ScrollAnimationWrapper animation="scale">
            <Card className="border-border/50 bg-gradient-to-br from-primary via-primary to-primary/90 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6 leading-tight">
                  {t('jeevanManthanPage.ctaTitle')}
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t('jeevanManthanPage.ctaDescription')}
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open('https://ths.topiwala-mes.org/articles', '_blank')}
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto group shadow-xl"
                >
                  {t('jeevanManthanPage.readMoreArticles')}
                  <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </section>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[95vh] p-0 overflow-hidden bg-background border-border/50">
          {selectedArticle && (
            <div className="relative">
              {/* Close Button - Mobile Optimized */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-black/80 hover:bg-black text-white rounded-full p-2 md:p-3 transition-all shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image Container */}
              <div className="relative w-full bg-black">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-8 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    #{selectedArticle.id}
                  </div>
                </div>

                <DialogHeader>
                  <DialogTitle className="text-xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                    {selectedArticle.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span>{selectedArticle.date}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JeevanManthan;
