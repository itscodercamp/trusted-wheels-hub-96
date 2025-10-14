
import { FileText, AlertCircle, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the TrustedVehicles platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: "2. Services Description",
      content: `TrustedVehicles provides:
      • Professional vehicle inspection services
      • Online marketplace for buying and selling vehicles
      • Vehicle history and documentation services
      • Regional dealer network access
      • Anonymous auction platform access
      • Door-to-door vehicle transfer services`
    },
    {
      title: "3. User Responsibilities",
      content: `Users must:
      • Provide accurate and truthful information
      • Maintain confidentiality of account credentials
      • Use the platform for lawful purposes only
      • Respect intellectual property rights
      • Not engage in fraudulent activities
      • Comply with all applicable laws and regulations`
    },
    {
      title: "4. Vehicle Inspection Services",
      content: `Our inspection services include:
      • Comprehensive 200-point vehicle assessment
      • Professional evaluation by certified technicians
      • Detailed reporting with photographs
      • Condition assessment and recommendations
      
      Please note that inspections are conducted to the best of our ability with industry-standard practices. While we strive for accuracy, we cannot guarantee the discovery of all potential issues.`
    },
    {
      title: "5. Marketplace Transactions",
      content: `For vehicle transactions:
      • All vehicles listed must undergo inspection
      • Pricing is based on market analysis and vehicle condition
      • TrustedVehicles facilitates transactions but is not a party to the sale
      • Buyers and sellers are responsible for completing legal formalities
      • Commission fees apply on successful transactions`
    },
    {
      title: "6. Payment Terms",
      content: `Payment policies:
      • Inspection fees are due upon service completion
      • Marketplace commission is charged on successful sales
      • Refunds are provided according to our refund policy
      • All payments are processed through secure payment gateways
      • Prices may vary by region and service type`
    },
    {
      title: "7. Limitation of Liability",
      content: `TrustedVehicles shall not be liable for:
      • Indirect, incidental, or consequential damages
      • Loss of profits or business opportunities
      • Vehicle defects not identified during inspection
      • Disputes between buyers and sellers
      • Third-party service provider actions
      
      Our total liability is limited to the amount paid for our services.`
    },
    {
      title: "8. Privacy and Data Protection",
      content: `We are committed to protecting your privacy:
      • Personal information is collected and used as per our Privacy Policy
      • Data is secured using industry-standard practices
      • Information may be shared with service providers as necessary
      • Users can request data deletion subject to legal requirements`
    },
    {
      title: "9. Intellectual Property",
      content: `All content on the TrustedVehicles platform including:
      • Website design and functionality
      • Logos, trademarks, and brand elements
      • Inspection reports and methodologies
      • Software and technology
      
      Are protected by intellectual property laws and remain the property of TrustedVehicles.`
    },
    {
      title: "10. Dispute Resolution",
      content: `For dispute resolution:
      • We encourage direct communication to resolve issues
      • Formal complaints can be submitted through our contact form
      • Mediation services are available for transaction disputes
      • Legal disputes shall be governed by Indian law
      • Courts in Gurgaon, Haryana shall have exclusive jurisdiction`
    },
    {
      title: "11. Modifications to Terms",
      content: `TrustedVehicles reserves the right to modify these terms at any time. Changes will be:
      • Posted on this page with the updated date
      • Communicated to users via email or platform notifications
      • Effective immediately upon posting unless otherwise stated
      
      Continued use of our services constitutes acceptance of modified terms.`
    },
    {
      title: "12. Contact Information",
      content: `For questions about these Terms and Conditions, please contact us:
      
      Email: legal@trustedvehicles.in
      Phone: +91 98765 43210
      Address: TrustedVehicles Private Limited
      Sector 44, Golf Course Road
      Gurgaon, Haryana 122003, India`
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - Trusted Vehicles</title>
        <meta name="description" content="Read Trusted Vehicles terms and conditions. Understand our service agreement, user responsibilities, inspection terms and marketplace policies." />
        <link rel="canonical" href="https://trustedvehicles.com/terms" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services. 
            These terms govern your use of the TrustedVehicles platform and services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="bg-trust-50 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-trust-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-trust-900 mb-2">Important Notice</h3>
                <p className="text-trust-700 mb-2">
                  <strong>Last Updated:</strong> December 1, 2023
                </p>
                <p className="text-trust-700">
                  These terms and conditions constitute a legally binding agreement between you and TrustedVehicles. 
                  By using our services, you agree to comply with these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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

      {/* Key Points Summary */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-automotive-900 mb-6">Key Points Summary</h2>
            <p className="text-automotive-600 max-w-2xl mx-auto">
              Here are the most important aspects of our terms and conditions for quick reference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Your Protection</h3>
                <p className="text-automotive-600">
                  We're committed to protecting your rights and providing transparent, reliable services 
                  with clear terms and fair dispute resolution.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-emerald-500 p-3 rounded-xl inline-flex mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Your Responsibilities</h3>
                <p className="text-automotive-600">
                  Use our platform responsibly, provide accurate information, and comply with 
                  applicable laws to ensure a safe experience for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardContent className="p-6">
                <div className="bg-violet-500 p-3 rounded-xl inline-flex mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">Service Limits</h3>
                <p className="text-automotive-600">
                  While we strive for excellence, please understand our service limitations 
                  and liability terms outlined in these conditions.
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our legal team is available to clarify any aspects of these terms and conditions.
          </p>
          <button 
            className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Legal Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Terms;
