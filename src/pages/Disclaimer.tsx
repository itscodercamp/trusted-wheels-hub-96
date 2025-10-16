import { AlertTriangle, Info, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  const sections = [
    {
      title: "1. General Information",
      content: `The information provided by TrustedVehicles on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.`
    },
    {
      title: "2. External Links Disclaimer",
      content: `Our website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising.`
    },
    {
      title: "3. Professional Advice Disclaimer",
      content: `The information on this website is not intended as, and shall not be understood or construed as, financial, legal, tax, or any other professional advice. While the employees and/or owners of TrustedVehicles are professionals, the information provided on this website is not a substitute for advice from a professional who is aware of the facts and circumstances of your individual situation.`
    },
    {
      title: "4. Vehicle Information Disclaimer",
      content: `TrustedVehicles provides vehicle inspection services and reports based on visual and functional assessments at the time of inspection. While we strive for accuracy and thoroughness, our reports are not guarantees of future performance or the absence of latent defects. Buyers and sellers are encouraged to conduct their own due diligence and seek independent advice before making any transaction decisions. TrustedVehicles is not liable for any discrepancies or issues discovered after the inspection.`
    },
    {
      title: "5. Limitation of Liability",
      content: `Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.`
    },
    {
      title: "6. Consent",
      content: `By using our website, you hereby consent to our disclaimer and agree to its terms.`
    },
    {
      title: "7. Update",
      content: `Should we update, amend or make any changes to this document, those changes will be prominently posted here.`
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Disclaimer - Important Legal Information | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Read Trusted Vehicles disclaimer and legal information regarding vehicle inspections, services, and website usage. Important information for buyers and sellers."
        />
        <meta name="keywords" content="disclaimer, legal information, terms of use, vehicle inspection disclaimer, trusted vehicles legal" />
        <meta property="og:title" content="Disclaimer - Legal Information" />
        <meta property="og:description" content="Important legal information and disclaimer for Trusted Vehicles services" />
        <meta property="og:url" content="https://trustedvehicles.com/disclaimer" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/disclaimer" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Please read this disclaimer carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="bg-trust-50 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-trust-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-trust-900 mb-2">Important Notice</h3>
                <p className="text-trust-700 mb-2">
                  <strong>Last Updated:</strong> August 1, 2024
                </p>
                <p className="text-trust-700">
                  The information on this site is for general guidance only and does not constitute professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="trust-card">
                <CardHeader>
                  <CardTitle className="text-xl text-automotive-900">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-automotive-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About This Disclaimer?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Feel free to contact us for any clarifications regarding our disclaimer.
          </p>
          <button 
            className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;