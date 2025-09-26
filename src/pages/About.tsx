
import { Shield, Users, Car, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to bring transparency to the used car market"
    },
    {
      year: "2019",
      title: "First 1,000 Inspections",
      description: "Reached our first major milestone with comprehensive car inspections"
    },
    {
      year: "2020",
      title: "Regional Expansion",
      description: "Expanded operations to 5 major cities across India"
    },
    {
      year: "2021",
      title: "Dealer Network Launch",
      description: "Launched our trusted dealer partnership program"
    },
    {
      year: "2022",
      title: "50,000 Cars Inspected",
      description: "Celebrated our 50,000th car inspection milestone"
    },
    {
      year: "2023",
      title: "Technology Platform",
      description: "Launched comprehensive digital platform for inspections and sales"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-automotive-900 mb-6">
                About TrustedVehicles
              </h1>
              <p className="text-xl text-automotive-600 mb-8 leading-relaxed">
                We're revolutionizing the used car market in India by bringing unprecedented 
                transparency, trust, and reliability to every vehicle transaction. Our mission 
                is to create a platform where buyers and sellers can transact with complete confidence.
              </p>
              <Button className="btn-primary" onClick={() => window.location.href = '/book-inspection'}>
                <CheckCircle className="h-5 w-5 mr-2" />
                Book an Inspection
              </Button>
            </div>
            
            <div className="relative animate-slide-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-trust-600 mb-2">50K+</div>
                    <div className="text-automotive-600">Cars Inspected</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-trust-600 mb-2">15+</div>
                    <div className="text-automotive-600">Cities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-trust-600 mb-2">500+</div>
                    <div className="text-automotive-600">Dealers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-trust-600 mb-2">98%</div>
                    <div className="text-automotive-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-900 mb-6">Our Mission</h2>
            <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
              To build India's most trusted automotive platform where transparency meets technology, 
              creating seamless experiences for car buyers, sellers, and dealers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="trust-card p-8 text-center">
              <div className="bg-trust-500 p-4 rounded-2xl inline-flex mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-automotive-900 mb-4">Trust First</h3>
              <p className="text-automotive-600">
                Every interaction on our platform is built on a foundation of transparency and trust.
              </p>
            </div>

            <div className="trust-card p-8 text-center">
              <div className="bg-emerald-500 p-4 rounded-2xl inline-flex mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-automotive-900 mb-4">Customer Centric</h3>
              <p className="text-automotive-600">
                We put our customers at the heart of everything we do, ensuring exceptional experiences.
              </p>
            </div>

            <div className="trust-card p-8 text-center">
              <div className="bg-violet-500 p-4 rounded-2xl inline-flex mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-automotive-900 mb-4">Quality Assured</h3>
              <p className="text-automotive-600">
                Our comprehensive inspection process ensures every vehicle meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-900 mb-6">Our Journey</h2>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
              From a small startup to India's leading trusted vehicle platform - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-trust-300 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="trust-card p-8">
                      <div className="text-2xl font-bold text-trust-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-automotive-900 mb-3">{milestone.title}</h3>
                      <p className="text-automotive-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-trust-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-900 mb-6">How We Work</h2>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
              Our streamlined process ensures every vehicle transaction is smooth, transparent, and trustworthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inspection Request",
                description: "Book a comprehensive vehicle inspection through our platform"
              },
              {
                step: "02", 
                title: "Professional Assessment",
                description: "Our certified experts conduct a detailed 200-point inspection"
              },
              {
                step: "03",
                title: "Detailed Report",
                description: "Receive a comprehensive report with findings and recommendations"
              },
              {
                step: "04",
                title: "Marketplace Access",
                description: "Access our trusted network for buying, selling, or auctions"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-trust-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-8 h-6 w-6 text-trust-300" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-3">{step.title}</h3>
                <p className="text-automotive-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary" onClick={() => window.location.href = '/book-inspection'}>
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
