import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Changed from isLoading to isSubmitting

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Updated API URL (removed trailing slash as per provided code)
      const response = await fetch('https://apis.trustedvehicles.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        // Throw an error for non-OK responses
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@trustedvehicles.in", "support@trustedvehicles.in"],
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["TrustedVehicles HQ", "Sector 44, Gurgaon", "Haryana 122003, India"],
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "We're here to help"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto">
            Have questions about our services? Need assistance with your vehicle inspection or transaction? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-6">
                  <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-automotive-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-automotive-600 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-automotive-500">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-6 w-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What is this about?"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      required
                      className="mt-1"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Find Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-automotive-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-automotive-400 mx-auto mb-2" />
                    <p className="text-automotive-600">Interactive Map</p>
                    <p className="text-sm text-automotive-500">Coming Soon</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-automotive-900 mb-2">Headquarters</h4>
                    <p className="text-automotive-600">
                      TrustedVehicles Private Limited<br />
                      Sector 44, Golf Course Road<br />
                      Gurgaon, Haryana 122003<br />
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-automotive-900 mb-2">Regional Offices</h4>
                    <p className="text-automotive-600 text-sm">
                      Mumbai • Delhi • Bangalore • Chennai • Pune • Hyderabad • Kolkata
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-automotive-900 mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-automotive-600 mb-8">
            Check our frequently asked questions for instant help with common queries.
          </p>
          <Button className="btn-primary" onClick={() => window.location.href = '/faqs'}>
            View FAQs
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;