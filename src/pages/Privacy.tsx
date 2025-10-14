
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const dataTypes = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "Name, phone number, email address, and contact details you provide when using our services."
    },
    {
      icon: Database,
      title: "Vehicle Information",
      description: "Details about vehicles you inspect, buy, or sell including registration, specifications, and condition."
    },
    {
      icon: Eye,
      title: "Usage Data",
      description: "Information about how you use our platform, including pages visited and features accessed."
    },
    {
      icon: Lock,
      title: "Technical Data",
      description: "IP address, browser type, device information, and cookies for platform optimization."
    }
  ];

  const privacySections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as:
      • Personal details when you register or book services
      • Vehicle information for inspections and listings
      • Communication records when you contact us
      • Payment information for transactions
      • Photos and documents related to vehicle inspections

      We also automatically collect:
      • Usage data and analytics
      • Device and browser information
      • Location data (with your permission)
      • Cookies and similar tracking technologies`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your information to:
      • Provide and improve our inspection and marketplace services
      • Process transactions and payments
      • Communicate with you about services and updates
      • Verify your identity and prevent fraud
      • Analyze platform usage to enhance user experience
      • Comply with legal obligations
      • Market relevant services (with your consent)`
    },
    {
      title: "3. Information Sharing",
      content: `We may share your information with:
      • Service providers who assist in delivering our services
      • Verified dealers and buyers/sellers in transactions
      • Payment processors for secure transactions
      • Legal authorities when required by law
      • Professional service providers (mechanics, logistics)
      
      We never sell your personal information to third parties for marketing purposes.`
    },
    {
      title: "4. Data Security",
      content: `We protect your information through:
      • Industry-standard encryption for data transmission
      • Secure storage with access controls
      • Regular security audits and updates
      • Employee training on data protection
      • Incident response procedures
      • Compliance with applicable data protection laws`
    },
    {
      title: "5. Your Rights and Choices",
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate or incomplete data
      • Delete your account and associated data
      • Restrict processing of your information
      • Data portability for certain information
      • Opt out of marketing communications
      • Lodge complaints with data protection authorities`
    },
    {
      title: "6. Cookies and Tracking",
      content: `We use cookies and similar technologies to:
      • Remember your preferences and settings
      • Analyze platform performance and usage
      • Provide personalized experiences
      • Enable security features
      • Support advertising and marketing efforts
      
      You can control cookie settings through your browser preferences.`
    },
    {
      title: "7. Data Retention",
      content: `We retain your information for as long as:
      • Your account remains active
      • Required to provide services
      • Necessary for legal or regulatory compliance
      • Needed for fraud prevention and security
      
      We securely delete information when no longer needed.`
    },
    {
      title: "8. Children's Privacy",
      content: `Our services are not intended for children under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information promptly.`
    },
    {
      title: "9. International Transfers",
      content: `Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place to protect your information during such transfers.`
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy periodically. We will notify you of significant changes via:
      • Email notifications
      • Platform announcements
      • Updated posting date on this page
      
      Your continued use indicates acceptance of the updated policy.`
    },
    {
      title: "11. Contact Information",
      content: `For privacy-related questions or requests, contact us:
      
      Email: privacy@trustedvehicles.in
      Phone: +91 98765 43210
      Address: Data Protection Officer
      TrustedVehicles Private Limited
      Sector 44, Golf Course Road
      Gurgaon, Haryana 122003, India`
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Privacy Policy - Trusted Vehicles</title>
        <meta name="description" content="Trusted Vehicles privacy policy. Learn how we collect, use and protect your personal data. Your privacy is our priority." />
        <link rel="canonical" href="https://trustedvehicles.com/privacy" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your personal information when you use TrustedVehicles services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="bg-trust-50 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-trust-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-trust-900 mb-2">Privacy Notice</h3>
                <p className="text-trust-700 mb-2">
                  <strong>Last Updated:</strong> December 1, 2023
                </p>
                <p className="text-trust-700">
                  This Privacy Policy applies to all TrustedVehicles services and describes our practices 
                  regarding the collection, use, and disclosure of your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-automotive-900 mb-6">Types of Information We Collect</h2>
            <p className="text-automotive-600 max-w-2xl mx-auto">
              We collect different types of information to provide and improve our services while protecting your privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {dataTypes.map((type, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-6">
                  <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-automotive-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-sm text-automotive-600">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {privacySections.map((section, index) => (
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

      {/* Privacy Commitments */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-automotive-900 mb-6">Our Privacy Commitments</h2>
            <p className="text-automotive-600 max-w-2xl mx-auto">
              We are committed to maintaining the highest standards of privacy protection and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-emerald-500 p-3 rounded-xl inline-flex mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Data Protection</h3>
                <p className="text-automotive-600">
                  We use industry-leading security measures to protect your personal information 
                  from unauthorized access, disclosure, or misuse.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Transparency</h3>
                <p className="text-automotive-600">
                  We clearly explain what information we collect, how we use it, and with whom 
                  we share it, giving you full visibility into our practices.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-violet-500 p-3 rounded-xl inline-flex mb-4">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Your Control</h3>
                <p className="text-automotive-600">
                  You have complete control over your personal information with rights to access, 
                  correct, delete, or restrict its use at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our privacy team is here to help with any questions about how we handle your information.
          </p>
          <button 
            className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Privacy Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
