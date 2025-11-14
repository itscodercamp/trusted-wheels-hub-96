import { Award, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Team = () => {
  const leaders = [
    {
      name: "Tanveer Khan",
      role: "Founder",
      image: "/placeholder.svg",
      bio: "Visionary leader with passion for transforming the automotive industry in India.",
    },
    {
      name: "Sumayla Ali",
      role: "Co-Founder",
      image: "/placeholder.svg",
      bio: "Strategic thinker focused on building scalable operations and market expansion.",
    },
    {
      name: "MD Shakib",
      role: "Co-Founder",
      image: "/placeholder.svg",
      bio: "Automotive expert with deep industry knowledge and dealer network expertise.",
    },
    {
      name: "Shoeb Sheikh",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Technology innovator driving digital transformation and platform development.",
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "98%",
      title: "Satisfaction Rate",
      description: "Customer satisfaction in our services"
    },
    {
      icon: Target,
      number: "Regional",
      title: "Nagpur Office",
      description: "Regional headquarters in Nagpur"
    },
    {
      icon: Heart,
      number: "500+",
      title: "Dealer Partners",
      description: "Trusted dealer network nationwide"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Our Leadership - Trusted Vehicles Team | Expert Automotive Professionals</title>
        <meta 
          name="description" 
          content="Meet the leadership team at Trusted Vehicles. Founded in February 2025, our expert automotive professionals are revolutionizing India's car inspection and marketplace industry from Nagpur."
        />
        <meta name="keywords" content="trusted vehicles team, car experts india, automotive professionals, vehicle inspection experts, leadership team nagpur" />
        <meta property="og:title" content="Our Leadership - Trusted Vehicles Team" />
        <meta property="og:description" content="Meet the expert automotive professionals at Trusted Vehicles" />
        <meta property="og:url" content="https://trustedvehicles.com/team" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/team" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Meet Our Leaders
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to revolutionizing the automotive industry with transparency, trust, and technology.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
              Experienced leaders with a shared vision of transforming the automotive marketplace in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-automotive-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-automotive-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-trust-600 font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-automotive-600">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-automotive-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-automotive-600">
                <p>
                  TrustedVehicles was founded in <strong>February 2025</strong> with a simple mission - to bring complete transparency to India's used car market. 
                  Our founders recognized the challenges facing both buyers and sellers, and decided to create a comprehensive solution.
                </p>
                <p>
                  Starting from our regional office in <strong>Nagpur, Maharashtra</strong>, we've built a platform that combines technology with automotive expertise. 
                  Our team of professionals is dedicated to ensuring every vehicle transaction is smooth, transparent, and trustworthy.
                </p>
                <p>
                  With our Inspection Management System (IMS) and marketplace platform, we're setting new standards in the automotive industry. 
                  Our commitment to quality and customer satisfaction drives everything we do.
                </p>
                <p>
                  We're just getting started. Our vision is to become India's most trusted name in automotive services, 
                  expanding our reach while maintaining the personal touch that sets us apart.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-automotive-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-medium text-automotive-900 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-automotive-600">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for passionate individuals who share our vision of transforming the automotive industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-trust-600 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
