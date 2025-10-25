import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-footer-bg border-t border-border" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Malvan Education Society" />
        <meta itemProp="url" content="https://topiwala-mes.org" />
        <meta itemProp="logo" content="https://ik.imagekit.io/73ht4flyu/logo.png?updatedAt=1759781037810" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-serif text-white mb-2 sm:mb-3 md:mb-4">
              {t('footer.title')}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed px-2 sm:px-0" itemProp="description">
              {t('footer.description')}
            </p>
          </div>
          
          
          {/* Quick Links */}
          <nav className="text-center md:text-left" itemScope itemType="https://schema.org/SiteNavigationElement">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 md:mb-4">{t('footer.quick_links')}</h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="https://ths.topiwala-mes.org//"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm md:text-base text-white/70 hover:text-white transition-colors"
                itemProp="url"
              >
                <span itemProp="name">{t('footer.home')}</span>
              </a>
              <a
                href="https://jayganesh.topiwala-mes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm md:text-base text-white/70 hover:text-white transition-colors"
                itemProp="url"
              >
                <span itemProp="name">{t('footer.about_us')}</span>
              </a>
              <a
                href="https://mohanraoparulekar.topiwala-mes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm md:text-base text-white/70 hover:text-white transition-colors"
                itemProp="url"
              >
                <span itemProp="name">{t('footer.programs')}</span>
              </a>
              <a
                href="https://smtghurye.topiwala-mes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm md:text-base text-white/70 hover:text-white transition-colors"
                itemProp="url"
              >
                <span itemProp="name">{t('footer.admissions')}</span>
              </a>
            </div>
          </nav>
          
          {/* Contact Info */}
          <div className="text-center md:text-left" itemScope itemType="https://schema.org/ContactPoint">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 md:mb-4">{t('footer.contact')}</h4>
            <div className="space-y-1 text-xs sm:text-sm md:text-base text-white/70">
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">{t('footer.location')}</span>
              </p>
              <p itemProp="telephone">{t('footer.phone')}</p>
              <p itemProp="email">{t('footer.email')}</p>
            </div>
            <meta itemProp="contactType" content="Customer Service" />
            <meta itemProp="areaServed" content="Malvan, Sindhudurg, Maharashtra" />
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8">
          <div className="text-center mb-4">
            <Link 
              to="/development-team"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors text-xs sm:text-sm md:text-base"
            >
              Meet Our Development Team
            </Link>
          </div>
          <div className="text-center text-xs sm:text-sm md:text-base text-white/70">
            <p itemProp="copyrightNotice">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;