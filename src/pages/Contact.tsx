import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { config } from "../config";
import { generateWhatsAppLink } from "../lib/whatsapp";
import { trackEvent } from "../lib/utils";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

import { Shop4MeBrand } from "../components/Brand";

export default function Contact() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-primary leading-none">CONTACT US</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-12 flex flex-col items-center text-center">
        <div className="mb-10 flex flex-col items-center justify-center">
          <Shop4MeBrand layout="column" size="lg" withTagline={true} />
        </div>

        <div className="w-full max-w-sm space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6 text-left">
            <h3 className="mb-4 text-sm font-bold text-text-muted uppercase tracking-wider">Contact Details</h3>
            
            <div className="space-y-4">
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text-secondary hover:text-primary">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp: +{config.whatsappNumber}</span>
              </a>
              <a href={`tel:+${config.whatsappNumber}`} className="flex items-center space-x-3 text-text-secondary hover:text-primary">
                <Phone className="h-5 w-5" />
                <span className="font-medium">Phone: +{config.whatsappNumber}</span>
              </a>
              <a href="mailto:shopp44me@gmail.com" className="flex items-center space-x-3 text-text-secondary hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email: shopp44me@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-left">
            <h3 className="mb-2 text-sm font-bold text-text-muted uppercase tracking-wider">Business Hours</h3>
            <p className="font-medium text-text-primary">{config.businessHours}</p>
            <p className="mt-2 text-sm text-text-secondary">We typically respond during our business hours. Feel free to leave a message anytime.</p>
          </div>

          <a href={generateWhatsAppLink("Hello Shop4Me 👋")} target="_blank" rel="noopener noreferrer" className="block mt-6" onClick={() => trackEvent("chat_with_us_click", { location: "contact" })}>
            <Button size="lg" fullWidth className="text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              CHAT WITH SHOP4ME
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
