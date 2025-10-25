import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead = ({
  title = "Malvan Education Society | Best Schools & Colleges in Malvan, Sindhudurg",
  description = "Premier educational institution since 1912. A.S.D. Topiwala High School, N.A.D. Junior College, Jay Ganesh School, Parulekar School in Malvan, Maharashtra. Quality CBSE, SSC, HSC education.",
  keywords = "Malvan Education Society, Topiwala School, Junior College Malvan, schools in Sindhudurg",
  canonical,
  ogImage = "https://ik.imagekit.io/73ht4flyu/logo.png?updatedAt=1759781037810"
}: SEOHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute('content', canonical);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const canonicalUrl = canonical || `https://topiwala-mes.org${location.pathname}`;
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, canonical, ogImage, location.pathname]);

  return null;
};
