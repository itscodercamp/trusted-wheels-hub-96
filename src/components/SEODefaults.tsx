import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const social = {
  instagram: "https://instagram.com/trustedvehicles", // TODO: replace with exact handle
  linkedin: "https://www.linkedin.com/company/trustedvehicles", // TODO
  facebook: "https://facebook.com/trustedvehicles", // TODO
};

const subProducts = [
  "https://ims.trustedvehicles.com",
  "https://marketplace.trustedvehicles.com",
  "https://blog.trustedvehicles.com",
];

function useCanonicalUrl() {
  const { pathname, search } = useLocation();
  // Build canonical using current origin at runtime
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}${pathname}${search}`.replace(/\/?$/, "");
}

const organizationJsonLd = (canonicalUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trusted Vehicles",
  url: canonicalUrl,
  sameAs: [social.instagram, social.linkedin, social.facebook].filter(Boolean),
  brand: {
    "@type": "Brand",
    name: "Trusted Vehicles",
  },
  hasPart: subProducts.map((url) => ({
    "@type": "WebSite",
    url,
  })),
});

const websiteJsonLd = (canonicalUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trusted Vehicles",
  url: canonicalUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={query}`,
    "query-input": "required name=query",
  },
});

const DEFAULT_DESCRIPTION =
  "Trusted Vehicles offers certified car inspections, verified used cars marketplace, valuations, and auto services. Book inspections, explore vehicles, and buy with confidence.";

const SEODefaults: React.FC = () => {
  const canonicalUrl = useCanonicalUrl();
  const jsonLdOrg = JSON.stringify(organizationJsonLd(canonicalUrl));
  const jsonLdSite = JSON.stringify(websiteJsonLd(canonicalUrl));

  return (
    <Helmet defaultTitle="Trusted Vehicles — Certified Inspections & Marketplace" titleTemplate="%s | Trusted Vehicles">
      {/* Canonical & basic meta */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Trusted Vehicles" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content="Trusted Vehicles — Certified Inspections & Marketplace" />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Trusted Vehicles — Certified Inspections & Marketplace" />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />

      {/* Preconnect to sub-products for performance */}
      {subProducts.map((url) => (
        <link key={url} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}

      {/* Social identity links */}
      <link rel="me" href={social.instagram} />
      <link rel="me" href={social.linkedin} />
      <link rel="me" href={social.facebook} />

      {/* Structured data */}
      <script type="application/ld+json">{jsonLdOrg}</script>
      <script type="application/ld+json">{jsonLdSite}</script>
    </Helmet>
  );
};

export default SEODefaults;
