
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Car Inspection",
      faqs: [
        {
          question: "How long does a car inspection take?",
          answer: "A comprehensive 200-point inspection typically takes 2-3 hours. Our certified technicians thoroughly examine the engine, transmission, electrical systems, body, interior, and all safety features to provide you with a detailed report."
        },
        {
          question: "What is included in the 200-point inspection?",
          answer: "Our inspection covers engine performance, transmission, brakes, electrical systems, air conditioning, body condition, paint quality, interior features, safety equipment, and documentation verification. You'll receive a detailed report with photographs and recommendations."
        },
        {
          question: "Can I be present during the inspection?",
          answer: "Absolutely! We encourage customers to be present during the inspection. Our technicians will explain their findings and answer any questions you may have about the vehicle's condition."
        },
        {
          question: "How much does an inspection cost?",
          answer: "Inspection costs vary based on vehicle type and location. Contact us for detailed pricing. We offer competitive rates and often have promotional offers for first-time customers."
        }
      ]
    },
    {
      category: "Buying Cars",
      faqs: [
        {
          question: "Are all cars on your platform inspected?",
          answer: "Yes, every vehicle listed on our platform undergoes our comprehensive 200-point inspection. This ensures transparency and helps you make informed decisions with complete confidence."
        },
        {
          question: "Can I trust the pricing on your platform?",
          answer: "We use market analysis and vehicle condition assessment to ensure fair pricing. Our transparent pricing model considers market rates, vehicle condition, and regional factors to provide you with competitive and fair prices."
        },
        {
          question: "What if I find issues after purchase?",
          answer: "We provide post-purchase support and have partnerships with service centers. While we thoroughly inspect all vehicles, if any undisclosed issues arise, we'll work with you to find a fair resolution."
        },
        {
          question: "Do you offer financing options?",
          answer: "We partner with leading financial institutions to offer competitive financing options. Our team can help you explore loan options that best suit your financial situation."
        }
      ]
    },
    {
      category: "Selling Cars",
      faqs: [
        {
          question: "Is it free to list my car?",
          answer: "Yes, listing your car on our platform is free. We only charge a small commission when your vehicle is successfully sold, ensuring we're aligned with your success."
        },
        {
          question: "How do you determine my car's value?",
          answer: "We use a combination of market analysis, inspection results, vehicle history, and current demand to provide an accurate valuation. Our transparent process ensures you get a fair market price."
        },
        {
          question: "How long does it take to sell a car?",
          answer: "Depending on the vehicle condition, pricing, and market demand, most cars sell within 2-4 weeks. Well-maintained, competitively priced vehicles often sell faster."
        },
        {
          question: "Do you handle all the paperwork?",
          answer: "Yes, we provide complete assistance with all documentation including RC transfer, NOC clearance, insurance processing, and other legal formalities to ensure a smooth transaction."
        }
      ]
    },
    {
      category: "Trust & Security",
      faqs: [
        {
          question: "How do you ensure trust between buyers and sellers?",
          answer: "We verify all users, conduct thorough inspections, provide transparent reports, secure payment processing, and offer dispute resolution services. Our platform is built on transparency and accountability."
        },
        {
          question: "Is my personal information safe?",
          answer: "We take data security seriously and follow industry best practices to protect your personal information. We never share your data with third parties without your consent."
        },
        {
          question: "What makes TrustedVehicles different from other platforms?",
          answer: "Our focus on transparency, mandatory inspections, verified users, regional expertise, and comprehensive support throughout the buying/selling process sets us apart from other platforms."
        }
      ]
    },
    {
      category: "Regional Services",
      faqs: [
        {
          question: "Which cities do you operate in?",
          answer: "We currently operate in 15+ major cities across India including Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad, Kolkata, and more. We're rapidly expanding to new cities."
        },
        {
          question: "Can I buy a car from a different city?",
          answer: "Yes, our platform allows inter-city transactions. We provide logistics support and can arrange transportation of the vehicle to your city with proper documentation."
        },
        {
          question: "Do you have local support in my city?",
          answer: "We have local teams in all our operational cities to provide on-ground support, conduct inspections, and assist with documentation and delivery."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, inspection process, and platform. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-automotive-400" />
            <Input
              placeholder="Search for questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-automotive-200 focus:border-trust-500"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-automotive-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-automotive-600 mb-2">No results found</h3>
              <p className="text-automotive-500">Try adjusting your search terms or browse our categories below.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-automotive-900 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex; // Unique index
                      const isOpen = openFAQ === globalIndex;
                      
                      return (
                        <Card key={faqIndex} className="trust-card">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-automotive-50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-automotive-900 pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-automotive-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-automotive-600 flex-shrink-0" />
                              )}
                            </button>
                            
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="border-t border-automotive-200 pt-4">
                                  <p className="text-automotive-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our support team is here to help you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trust-600 hover:bg-white/90" onClick={() => window.location.href = '/contact'}>
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trust-600" onClick={() => window.location.href = '/book-inspection'}>
              Book Inspection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
