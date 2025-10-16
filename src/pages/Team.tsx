import { Users, Award, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Team = () => {
  const founders = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "15+ years in automotive industry. Previously worked with leading car manufacturers and dealerships.",
      achievements: ["IIT Delhi Graduate", "Ex-Maruti Suzuki", "Automotive Industry Expert"]
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      image: "/placeholder.svg",
      bio: "Technology leader with expertise in building scalable platforms. Former tech executive at major e-commerce companies.",
      achievements: ["IIT Bombay Graduate", "Ex-Flipkart Tech Lead", "Platform Architecture Expert"]
    },
    {
      name: "Amit Patel",
      role: "Head of Operations",
      image: "/placeholder.svg",
      bio: "Operations specialist focused on building efficient inspection and logistics networks across India.",
      achievements: ["MBA from ISB", "Ex-Amazon Operations", "Logistics & Supply Chain Expert"]
    }
  ];

  const teamMembers = [
    {
      name: "Suresh Reddy",
      role: "Head of Inspections",
      image: "/placeholder.svg",
      specialization: "Automotive Engineering"
    },
    {
      name: "Kavya Menon",
      role: "Customer Success Manager",
      image: "/placeholder.svg",
      specialization: "Customer Relations"
    },
    {
      name: "Vikram Singh",
      role: "Regional Manager - North",
      image: "/placeholder.svg",
      specialization: "Regional Operations"
    },
    {
      name: "Anita Joshi",
      role: "Quality Assurance Lead",
      image: "/placeholder.svg",
      specialization: "Quality Control"
    },
    {
      name: "Rohit Gupta",
      role: "Technology Lead",
      image: "/placeholder.svg",
      specialization: "Platform Development"
    },
    {
      name: "Sneha Iyer",
      role: "Marketing Head",
      image: "/placeholder.svg",
      specialization: "Digital Marketing"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "50K+",
      title: "Happy Customers",
      description: "Successfully served customers across India"
    },
    {
      icon: Award,
      number: "98%",
      title: "Satisfaction Rate",
      description: "Customer satisfaction in our services"
    },
    {
      icon: Target,
      number: "15+",
      title: "Cities Covered",
      description: "Present in major Indian cities"
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
        <title>Our Team - Trusted Vehicles Leadership | Expert Automotive Professionals</title>
        <meta 
          name="description" 
          content="Meet the expert team at Trusted Vehicles. Our leadership and automotive professionals with 15+ years experience are revolutionizing India's car inspection and marketplace industry."
        />
        <meta name="keywords" content="trusted vehicles team, car experts india, automotive professionals, vehicle inspection experts, leadership team" />
        <meta property="og:title" content="Our Team - Trusted Vehicles Leadership" />
        <meta property="og:description" content="Meet the expert automotive professionals at Trusted Vehicles with 15+ years industry experience" />
        <meta property="og:url" content="https://trustedvehicles.com/team" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/team" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Meet Our Team
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

          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-automotive-100">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-automotive-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-trust-600 font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-automotive-600 mb-6">
                    {founder.bio}
                  </p>
                  <div className="space-y-2">
                    {founder.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="bg-trust-50 text-trust-700 px-3 py-1 rounded-full text-sm">
                        {achievement}
                      </div>
                    ))}
                  </div>
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
                  TrustedVehicles was born from a simple frustration - the lack of transparency in India's used car market. 
                  Our founders, having experienced the challenges firsthand, decided to create a solution.
                </p>
                <p>
                  Starting in 2018 with a small team of automotive experts and tech enthusiasts, we set out to build 
                  India's most trusted vehicle platform. Our mission was clear: bring transparency to every vehicle transaction.
                </p>
                <p>
                  Today, we're proud to have inspected over 50,000 vehicles and helped thousands of customers make 
                  informed decisions. Our network spans 15+ cities and continues to grow every day.
                </p>
                <p>
                  But we're just getting started. Our vision is to become the most trusted name in automotive services 
                  across India, setting new standards for transparency and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
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

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-900 mb-6">Our Team</h2>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
              Dedicated professionals working together to deliver exceptional automotive services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-automotive-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-automotive-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-trust-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-automotive-600">
                    {member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
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
