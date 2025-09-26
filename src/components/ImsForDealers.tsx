import { Shield, LayoutDashboard, Globe, Users, DollarSign, CheckCircle, ArrowRight, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ImsForDealers = () => {
  const navigate = useNavigate();

  const keyOfferings = [
    {
      icon: LayoutDashboard,
      title: "All-in-One IMS Software",
      description: "The heart of your operation. A powerful, intuitive dashboard to manage your entire dealership—from inventory and finances to employees and customer leads.",
    },
    {
      icon: Globe,
      title: "Your Personal Dealership Website",
      description: "Establish your brand online with a stunning, SEO-optimized website that automatically syncs with your inventory, capturing leads directly for you.",
    },
    {
      icon: Users,
      title: "Indian Legal Dealer Marketplace",
      description: "The future of car sales. A commission-free marketplace connecting you exclusively with genuine, verified buyers. No fraud, just business.",
    },
  ];

  const productivityBoosts = [
    {
      title: "For the Dealer: Your Command Center",
      description: "The Dealer Portal gives you a bird's-eye view of your entire business, empowering you to make smarter, data-driven decisions.",
      points: [
        "Powerful Dashboard: Instantly see your total stock value, vehicles sold, profit margins, and active leads. Track aging inventory to move stock faster.",
        "Effortless Inventory Management: Add, edit, and track every vehicle with detailed information, images, and financial data. Know the status of your stock (For Sale, Sold, Refurbishment) at a glance.",
        "Complete Employee Management: Onboard new staff, manage their profiles, set login credentials for their personal portal, and handle salary slips, all in one place.",
        "Centralized Lead & Salary Hub: Monitor all incoming leads from your entire team and manage monthly payroll with our simple salary slip generator.",
      ],
      image: "/ims-dashboard.png", // Updated image path
    },
    {
      title: "For Your Employees: A Tool for Success",
      description: "Empower your sales team with their own dedicated portal, designed to make their job easier and more efficient.",
      points: [
        "Secure Personal Login: Every employee gets their own login, giving them access to the tools they need without overwhelming them with unnecessary information.",
        "Streamlined Lead Capture: Your team can quickly add new customer leads. They can link a lead to a car in your inventory or add details for a vehicle a customer wants you to source.",
        "Focused Lead Management: The 'My Leads' tab shows each employee only the leads they are responsible for, helping them stay organized and follow up effectively.",
        "Easy Access to Information: Employees can view their own profile, track their recent leads, and see their monthly salary slips.",
      ],
      image: "/ims-employee-portal.png", // Updated image path to the new employee portal image
    },
  ];

  const websiteFeatures = [
    { icon: Zap, title: "Automatic Inventory Sync", description: "Your website is always up-to-date. Any vehicle you add to your IMS is automatically listed on your site." },
    { icon: Shield, title: "Customizable Themes", description: "Choose a design that matches your brand identity. Present a professional image that stands out from the competition." },
    { icon: CheckCircle, title: "Free SEO", description: "We optimize your website to rank higher on search engines like Google, bringing you more organic customers for free." },
  ];

  const marketplaceFeatures = [
    { icon: Users, title: "Genuine Customers Only", description: "We verify every buyer to ensure you only deal with serious, legitimate customers who are ready to purchase." },
    { icon: DollarSign, title: "Zero Commission on Sales", description: "You keep 100% of your profit. We charge a small, flat listing fee, not a percentage of your hard-earned sale." },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100 dark:from-automotive-900 dark:to-automotive-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-trust-500 text-white border-trust-600 mb-4 text-lg px-4 py-2">
            New Service
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-900 dark:text-white mb-4">
            Trusted Vehicles IMS - Inventory Management System for Dealers
          </h2>
          <p className="text-xl md:text-2xl text-automotive-700 dark:text-automotive-100 max-w-3xl mx-auto">
            The Ultimate Dealership Management System
          </p>
          <p className="text-lg text-automotive-600 dark:text-automotive-200 max-w-4xl mx-auto mt-4">
            An all-in-one platform for Indian car dealers. Manage your inventory, staff, and leads with unparalleled efficiency, 
            and sell more cars through your own website and our exclusive marketplace.
          </p>
        </div>

        {/* One Platform, Complete Control, More Growth */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-automotive-900 dark:text-white mb-8">
            One Platform, Complete Control, More Growth
          </h3>
          <p className="text-lg text-automotive-600 dark:text-automotive-200 text-center max-w-3xl mx-auto mb-12">
            Stop juggling multiple tools. IMS by Trusted Vehicles provides three powerful, integrated solutions to supercharge your dealership.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {keyOfferings.map((offering, index) => (
              <Card key={index} className="trust-card bg-white dark:bg-card p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-trust-100 dark:bg-trust-900/30 p-4 rounded-full inline-flex mb-4">
                    <offering.icon className="h-8 w-8 text-trust-600 dark:text-trust-400" />
                  </div>
                  <h4 className="text-xl font-bold text-automotive-900 dark:text-white mb-3">
                    {offering.title}
                  </h4>
                  <p className="text-automotive-600 dark:text-automotive-200">
                    {offering.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Boost Your Productivity */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-automotive-900 dark:text-white mb-8">
            How We Boost Your Productivity
          </h3>
          <p className="text-lg text-automotive-600 dark:text-automotive-200 text-center max-w-3xl mx-auto mb-12">
            Our Inventory Management System is designed to simplify your daily operations and give you back your most valuable asset: time. Here’s how.
          </p>

          {productivityBoosts.map((section, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div>
                <h4 className="text-2xl font-bold text-automotive-900 dark:text-white mb-4">
                  {section.title}
                </h4>
                <p className="text-automotive-600 dark:text-automotive-200 mb-6">
                  {section.description}
                </p>
                <ul className="space-y-4">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-trust-500 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-automotive-700 dark:text-automotive-100">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={section.image} alt={section.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Personal Website for Dealer */}
        <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <Badge className="bg-trust-500 text-white mb-4 text-sm px-3 py-1">
            EXCLUSIVE OFFER
          </Badge>
          <h3 className="text-3xl font-bold text-automotive-900 dark:text-white mb-4">
            Get Your Own Professional Dealership Website
          </h3>
          <p className="text-lg text-automotive-600 dark:text-automotive-200 max-w-3xl mb-6">
            Stop relying only on social media and third-party platforms. Build your own brand and credibility with a personal website that's fully integrated with your inventory. All for just <span className="font-bold text-trust-600">₹999 + GST annually.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {websiteFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-trust-100 dark:bg-trust-900/30 p-3 rounded-full flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-trust-600 dark:text-trust-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-automotive-600 dark:text-automotive-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indian Legal Dealer Marketplace */}
        <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <Badge className="bg-emerald-500 text-white mb-4 text-sm px-3 py-1">
            INDUSTRY FIRST
          </Badge>
          <h3 className="text-3xl font-bold text-automotive-900 dark:text-white mb-4">
            Join the Indian Legal Dealer Marketplace
          </h3>
          <p className="text-lg text-automotive-600 dark:text-automotive-200 max-w-3xl mb-6">
            Say goodbye to fraudulent buyers, high commissions, and endless negotiations. Our marketplace connects you with genuine, verified customers at an unbeatable price: <span className="font-bold text-emerald-600">₹59 per listing.</span>
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {marketplaceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-automotive-600 dark:text-automotive-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Data, Safe and Secure */}
        <Card className="trust-card bg-white dark:bg-card p-8 md:p-12 text-center shadow-xl">
          <CardContent className="p-0">
            <div className="bg-automotive-100 dark:bg-automotive-900/30 p-4 rounded-full inline-flex mb-6">
              <Lock className="h-10 w-10 text-automotive-700 dark:text-automotive-300" />
            </div>
            <h3 className="text-2xl font-bold text-automotive-900 dark:text-white mb-4">
              Your Data, Safe and Secure
            </h3>
            <p className="text-lg text-automotive-600 dark:text-automotive-200 max-w-4xl mx-auto">
              We understand that your business data is your most valuable asset. We use industry-standard security protocols and robust database management to ensure your dealership's data, employee information, and customer leads are always protected. Your privacy and security are our top priority. You own your data, always.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => navigate('/contact')} 
          >
            <Shield className="h-5 w-5 mr-2" />
            Partner with TrustedVehicles IMS
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImsForDealers;