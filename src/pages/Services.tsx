import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, Printer, Package, MapPin, Search, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function Services() {
  const services = [
    { icon: ShoppingBag, title: "SHOP FOR ME", desc: "Need something bought? Tell us what you need." },
    { icon: MapPin, title: "MARKET RUN", desc: "Need something from the Eastern market? We'll help you get it." },
    { icon: Package, title: "PICK UP FOR ME", desc: "Bought something but can't collect it? We'll help pick it up." },
    { icon: Printer, title: "PRINT & PHOTOCOPY", desc: "Need a document printed or photocopied? Send it to us." },
    { icon: Truck, title: "SEND IT FOR ME", desc: "Need something sent to another location? We'll help coordinate it." },
    { icon: ShoppingBag, title: "BUY & SEND", desc: "Want to buy something for your family or someone else? Tell us." },
    { icon: MapPin, title: "CONSTRUCTION ERRAND", desc: "Need legitimate building materials or construction items sourced? Ask us." },
    { icon: Search, title: "OTHER ERRANDS", desc: "Have another legitimate everyday errand? JUST ASK." },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-primary leading-none">SERVICES</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">WHAT WE CAN DO</h2>
        <p className="mb-8 text-text-secondary">
          The errand boy may go to the market, locate a seller, connect you to them, help inspect items, collect goods, print documents, package items, and coordinate delivery.
        </p>

        <div className="space-y-4 mb-12">
          {services.map((service, i) => (
            <Link to="/request" key={i} className="block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-indigo-200 hover:bg-primary/10">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-base font-bold text-text-primary">{service.title}</h3>
                  <p className="text-sm text-text-secondary">{service.desc}</p>
                </div>
                <div className="flex h-12 items-center">
                  <ArrowRight className="h-5 w-5 text-text-muted" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl bg-primary/10 p-6 mb-12">
          <h3 className="mb-4 text-lg font-bold text-text-primary">IMPORTANT INFO</h3>
          <ul className="space-y-3">
            {[
              "Service charges are agreed with you before we proceed.",
              "Waybill and delivery transport costs are separate from the Shop4Me service charge.",
              "International customers are welcome for legitimate requests involving Nigeria.",
              "Shop4Me only handles legitimate errands."
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-3 text-sm text-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
