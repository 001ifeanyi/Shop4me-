import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShoppingBag, Truck, Printer, Package, MapPin, Search, Navigation, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { generateWhatsAppLink } from "../lib/whatsapp";
import { trackEvent } from "../lib/utils";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

import { Shop4MeBrand } from "../components/Brand";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 sm:px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <Link to="/" className="flex items-center shrink-0 mr-4">
          <Shop4MeBrand layout="row" size="sm" withTagline={true} className="hidden sm:flex" />
          <Shop4MeBrand layout="row" size="sm" withTagline={false} className="flex sm:hidden" />
        </Link>
        <HeaderProfileIcon />
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 sm:py-20 text-center bg-surface flex flex-col items-center">
        <div className="mb-12 w-full flex justify-center">
          <Shop4MeBrand layout="column" size="xl" withTagline={true} withSubTagline={true} />
        </div>
        <div className="mb-6 inline-flex justify-center">
          <span className="px-3 py-1 bg-primary/10 text-primary-hover text-[11px] font-bold uppercase tracking-wider rounded-md">Premium Errand Assistance</span>
        </div>
        <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.9] tracking-tight text-text-primary">
          NEED SOMETHING DONE?
        </h2>
        <h3 className="mb-6 text-2xl sm:text-3xl font-bold text-primary">
          DON'T STRESS.<br />WE'LL DO IT FOR YOU.
        </h3>
        <p className="mx-auto mb-8 max-w-md text-lg text-text-secondary leading-relaxed">
          Too busy? Too far? Don't have time? Don't want the stress?
          <br className="mb-2" />
          Tell Shop4Me what you need and we'll help get it done.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link to="/request" className="w-full sm:w-auto" onClick={() => trackEvent("shop_for_me_click", { location: "hero" })}>
            <Button size="lg" fullWidth className="text-lg shadow-lg shadow-indigo-600/20">
              <ShoppingBag className="mr-2 h-5 w-5" />
              SHOP FOR ME
            </Button>
          </Link>
          <a href={generateWhatsAppLink("Hello Shop4Me 👋")} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" onClick={() => trackEvent("chat_with_us_click", { location: "hero" })}>
            <Button variant="secondary" size="lg" fullWidth className="text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              CHAT WITH US
            </Button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-text-primary">
            WHAT CAN WE DO FOR YOU?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShoppingBag, title: "SHOP FOR ME", desc: "Need something bought? Tell us what you need." },
              { icon: MapPin, title: "MARKET RUN", desc: "Need something from the Eastern market? We'll help you get it." },
              { icon: Package, title: "PICK UP FOR ME", desc: "Bought something but can't collect it? We'll help pick it up." },
              { icon: Printer, title: "PRINT & PHOTOCOPY", desc: "Need a document printed or photocopied? Send it to us." },
              { icon: Truck, title: "SEND IT FOR ME", desc: "Need something sent to another location? We'll help coordinate it." },
              { icon: Search, title: "OTHER ERRANDS", desc: "Have another legitimate everyday errand? JUST ASK." },
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border shadow-sm transition-colors hover:border-indigo-200 hover:shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-text-primary">{service.title}</h3>
                  <p className="text-xs text-text-secondary mt-0.5">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Just Shopping */}
      <section className="px-6 py-16 bg-primary text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight">NOT JUST SHOPPING.</h2>
          <p className="mb-8 text-lg font-medium text-primary-light leading-relaxed">
            Shop4Me is for the things you don't want to stress over.
          </p>
          <div className="mb-10 grid grid-cols-2 gap-4 text-left sm:grid-cols-3">
            {[
              "A document photocopied.",
              "Something printed.",
              "Something bought.",
              "Something picked up.",
              "Something delivered.",
              "Something found.",
              "Something collected.",
              "Something sent to your mother.",
              "Something sourced from the market.",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mb-8 text-xl font-bold tracking-tight">
            You don't have to do everything yourself.<br />JUST ASK SHOP4ME.
          </p>
          <Link to="/request" onClick={() => trackEvent("shop_for_me_click", { location: "services" })}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold text-primary-hover">
              SHOP FOR ME
            </Button>
          </Link>
        </div>
      </section>

      {/* Eastern Market Hub & Buyer Connection */}
      <section className="px-6 py-16 bg-surface">
        <div className="mx-auto max-w-3xl space-y-16">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
              <Navigation className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary">NEED SOMETHING FROM THE EAST?</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Shop4Me can put someone on the ground to help you with legitimate market-related requests. A customer in Abuja, Lagos or even London can contact Shop4Me when they need something from the Eastern market.
            </p>
            <p className="mt-4 font-semibold text-primary">Tell us what you need and we'll see how we can help.</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary">TALK TO THE SELLER YOURSELF.</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              When necessary, our errand boy can connect you directly with the seller. Ask questions, confirm the product, and negotiate the price directly. Shop4Me's role is to make the physical process easier.
            </p>
            <p className="mt-4 font-semibold text-primary">The errand boy is your person on the ground.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-background">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-text-primary">
            HOW IT WORKS
          </h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "TELL US", desc: "Tell Shop4Me what you need on WhatsApp." },
              { num: "02", title: "WE GO ON GROUND", desc: "Our errand boy handles the physical part of the request." },
              { num: "03", title: "WE CONNECT YOU", desc: "When necessary, we connect you directly with the seller or relevant person." },
              { num: "04", title: "WE GET IT DONE", desc: "We collect, print, package, send or complete the agreed errand." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs mt-0.5">
                  {step.num}
                </div>
                <div className="pb-6">
                  <h3 className="text-sm font-bold text-text-primary">{step.title}</h3>
                  <p className="text-xs text-text-secondary mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center">
            <p className="text-sm font-bold italic tracking-tight text-text-secondary">You relax. We run the errand.</p>
          </div>
        </div>
      </section>

      {/* People use Shop4Me for... */}
      <section className="px-6 py-16 bg-indigo-50/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-text-primary">
            PEOPLE USE SHOP4ME FOR THINGS LIKE...
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "I need something from Onitsha Market.",
              "I want this document printed.",
              "Please photocopy these documents.",
              "I bought something but can't go and collect it.",
              "I need this item sent to my mother.",
              "I need someone to find this product.",
              "I need building materials sourced.",
              "I don't want to enter traffic to do this.",
              "Can someone handle this errand for me?"
            ].map((quote, i) => (
              <div key={i} className="rounded-full bg-background px-5 py-3 text-sm font-medium text-text-secondary shadow-sm border border-border">
                "{quote}"
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-2xl font-extrabold tracking-tight text-primary">JUST ASK.</h3>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center bg-background">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text-primary">
          DON'T STRESS YOURSELF.
        </h2>
        <p className="mb-10 text-xl font-medium text-text-secondary">
          IF YOU DON'T WANT TO DO IT YOURSELF,<br className="sm:hidden" /> LET SHOP4ME DO IT FOR YOU.
        </p>
        <div className="mx-auto flex max-w-xs flex-col space-y-4">
          <Link to="/request" onClick={() => trackEvent("shop_for_me_click", { location: "final_cta" })}>
            <Button size="lg" fullWidth className="text-lg shadow-lg shadow-indigo-600/20">
              <ShoppingBag className="mr-2 h-5 w-5" />
              SHOP FOR ME
            </Button>
          </Link>
          <a href={generateWhatsAppLink("Hello Shop4Me 👋")} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("chat_with_us_click", { location: "final_cta" })}>
            <Button variant="outline" size="lg" fullWidth className="text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              CHAT WITH US
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
