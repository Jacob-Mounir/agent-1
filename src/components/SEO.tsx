import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string; // e.g. "/"
  structuredData?: Record<string, any> | Record<string, any>[];
};

const SEO = ({ title, description, image = '/og-image.svg', canonicalPath, structuredData }: SEOProps) => {
  const { canonicalUrl, origin } = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const href = typeof window !== 'undefined' ? window.location.href : '';
    return { canonicalUrl: canonicalPath ? origin + canonicalPath : href, origin };
  }, [canonicalPath]);

  const jsonLd = useMemo(() => {
    const base: Record<string, any>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Agents & Scouts',
        url: origin || 'https://agentsandscouts.com',
        logo: image,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Agents & Scouts',
        url: origin || 'https://agentsandscouts.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${origin || 'https://agentsandscouts.com'}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ];

    if (structuredData) {
      return Array.isArray(structuredData) ? [...base, ...structuredData] : [...base, structuredData];
    }
    return base;
  }, [structuredData, image, origin]);

  return (
    <Helmet>
      <html lang="sv" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Agents & Scouts" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      
      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
