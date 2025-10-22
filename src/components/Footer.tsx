import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Vidhatha Life Sciences" className="h-10 w-auto" />

            </div>
            <p className="text-sm text-black/70">
              Leading manufacturer of high-quality API Intermediates with state-of-the-art
              facilities and ISO certifications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>
                <a href="#about" className="hover:text-green-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-green-600 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-600 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-green-600 transition-colors">
                  Quality
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">+91-9290236044</p>
                  <p className="text-slate-900">+91-9701883335</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">vidhathalifesciences@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Manufacturing Unit</h4>
            <div className="flex items-start gap-2 text-sm text-black/70">
              <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Plot No. 541, APIIC Industrial Growth Centre, Gundlapalli Village, Maddipadu
                Mandal, Prakasam District, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-100 pt-8 text-center text-sm text-black/60">
          <p>&copy; {new Date().getFullYear()} Vidhatha Life Sciences Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
