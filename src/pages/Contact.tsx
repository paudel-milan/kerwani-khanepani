import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Assuming a 'useToast' hook is available
  const toast = (message) => { console.log(message); };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank for your message. We will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              सम्पर्क / Contact Us
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Get in touch with us for any water supply related queries, 
              complaints, or assistance. We're here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We are here to assist you with your water supply needs. Please feel free 
                  to reach out to us using the contact details below or by filling out the inquiry form.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <MapPin className="w-5 h-5 text-teal-700" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Devdaha-1, Rupandehi<br />
                      Lumbini Province, Nepal
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <Phone className="w-5 h-5 text-teal-700" />
                      Phone Number
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <a href="tel:+97771577590" className="text-gray-600 hover:text-teal-700 transition-colors">
                        +977 9857058505
                      </a>
                    </div>
                    
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <Mail className="w-5 h-5 text-teal-700" />
                      Email Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:devdaha.dwssa@gmail.com" 
                      className="text-gray-600 hover:text-teal-700 transition-colors"
                    >
                      kerwanikhanepani@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-800">
                      <Clock className="w-5 h-5 text-teal-700" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-gray-600">
                      <p>Sunday - Friday: 10:00 AM - 5:00 PM</p>
                      <p>Saturday: Closed</p>
                      <p className="text-sm text-red-600 font-medium mt-2">
                        Emergency services available 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100054009788120&mibextid=wwXIfr&rdid=NeDLZRigVvphnNY9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F7G9fHRLT%2F%3Fmibextid%3DwwXIfr#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/@DevdahaKhanepani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter message subject"
                        className="focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={6}
                        className="focus:border-teal-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white shadow-lg" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
              Find Us on Map
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office in Devdaha-7, Rupandehi for any in-person assistance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.3390168750284!2d83.56357957533542!3d27.588813330709815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968333dc3d669b%3A0xe5cd890d38ad5816!2sKerwani%20khanepani!5e1!3m2!1sen!2snp!4v1754224628682!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
