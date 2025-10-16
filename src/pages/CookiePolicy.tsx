import { Cookie, Info, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  const sections = [
    {
      title: "1. What are Cookies?",
      content: `Cookies are small text files that are stored on your device (computer, tablet, mobile) when you visit certain websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies enable a website to recognize your device and remember information about your preferences or past actions.`
    },
    {
      title: "2. How We Use Cookies",
      content: `TrustedVehicles uses cookies for various purposes:
      •   **Essential Cookies:** These are necessary for the website to function properly, enabling core functionalities like security, network management, and accessibility.
      •   **Performance and Analytics Cookies:** These help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.
      •   **Functionality Cookies:** These allow our website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.
      •   **Advertising and Targeting Cookies:** These are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.`
    },
    {
      title: "3. Types of Cookies We Use",
      content: `We use both session cookies and persistent cookies:
      •   **Session Cookies:** These are temporary and are deleted from your device when you close your web browser.
      •   **Persistent Cookies:** These remain on your device for a longer period or until you manually delete them. They are used to remember your preferences and actions across multiple visits.`
    },
    {
      title: "4. Third-Party Cookies",
      content: `In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third-party cookies are governed by the privacy policies of the third parties.`
    },
    {
      title: "5. Your Choices Regarding Cookies",
      content: `You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
      •   **Browser Settings:** Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
      •   **Opt-out Tools:** Some third-party advertisers offer tools to opt-out of their cookies.
      
      Please note that if you choose to disable cookies, some parts of our website may not function properly or may not be accessible.`
    },
    {
      title: "6. Changes to This Cookie Policy",
      content: `We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.`
    },
    {
      title: "7. Contact Us",
      content: `If you have any questions about this Cookie Policy, please contact us:
      
      Email: privacy@trustedvehicles.in
      Phone: +91 98765 43210`
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Cookie Policy - How We Use Cookies | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Learn about how Trusted Vehicles uses cookies to improve your experience. Cookie policy, types of cookies, and how to manage your preferences."
        />
        <meta name="keywords" content="cookie policy, cookies, privacy, data tracking, website cookies, manage cookies" />
        <meta property="og:title" content="Cookie Policy - How We Use Cookies" />
        <meta property="og:description" content="Information about how Trusted Vehicles uses cookies and how to manage your preferences" />
        <meta property="og:url" content="https://trustedvehicles.com/cookie-policy" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/cookie-policy" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            This policy explains how TrustedVehicles uses cookies and similar technologies on our website.
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
                <h3 className="font-semibold text-trust-900 mb-2">Important Information</h3>
                <p className="text-trust-700 mb-2">
                  <strong>Last Updated:</strong> August 1, 2024
                </p>
                <p className="text-trust-700">
                  By continuing to use our website, you are agreeing to our use of cookies in accordance with this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
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
            Manage Your Cookie Preferences
          </h2>
          <p className="text-xl text-white/90 mb-8">
            You can adjust your browser settings to control how cookies are used on your device.
          </p>
          <button 
            className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;