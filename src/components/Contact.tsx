import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Building2, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // changed: white background so orange/green accents pop
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* heading: orange -> green gradient */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Contact us for inquiries, partnerships, or to learn more about our products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          {/* changed: subtle bordered card with green accent */}
          <Card className="bg-white/95 border border-green-50 hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-md"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* changed: card accents and icon colors to match logo (green) */}
            <Card className="bg-white/95 border border-green-50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Administration Office</h4>
                    <p className="text-black/70">
                      Plot No:16, Block CFZ, Beside Varun Motors,
                      <br />
                      Auto Nagar, Hyderabad – 500070.
                      <br />
                      Telangana State, India.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Phone className="w-4 h-4 text-green-600" />
                      <a href="tel:+919701883335" className="text-green-700 hover:underline">
                        +91-9701883335
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border border-green-50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Manufacturing Unit</h4>
                    <p className="text-black/70">
                      Plot No. 541, APIIC Industrial Growth Centre,
                      <br />
                      Gundlapalli Village, Maddipadu Mandal,
                      <br />
                      Prakasam District,
                      <br />
                      Andhra Pradesh State, India
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Phone className="w-4 h-4 text-green-600" />
                      <a href="tel:+917569753546" className="text-green-700 hover:underline">
                        +91-7569753546
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border border-green-50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Contacts</h4>
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">K. Murali Mohan</p>
                      <p className="text-sm text-black/70">Managing Director</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-green-600" />
                        <a
                          href="mailto:vidhathalifesciences@gmail.com"
                          className="text-sm text-green-700 hover:underline"
                        >
                          vidhathalifesciences@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Dr.D.V. Venkatarao</p>
                      <p className="text-sm text-black/70">Technical Director</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-green-600" />
                        <a
                          href="mailto:vidhathalife@gmail.com"
                          className="text-sm text-green-700 hover:underline"
                        >
                          vidhathalife@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
