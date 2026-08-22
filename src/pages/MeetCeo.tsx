import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, ShieldCheck, Scale, Map, Navigation, Phone, ChevronRight, Settings } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

const CEO_PHOTO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHQXQke1kFNYDirNrrX6_bOujy9ZODwt_2u7Hcnk7VpkozfQUS5CvqfKrPOWXYrR74sJarO7yHG1wWygJRywOshMxg-1_TByTshFz56fe4KZKrhp1KyoEZaY5imvTsPvq4UrCiAqLGsyTH9eRydNGYXzb9zfA0B-N2jo1Eu3jRiWhhZ20PqkUyxpYCEP8/s320/122217.jpg";

export default function MeetCeo() {
  const navigate = useNavigate();

  const links = [
    { title: "Why You Should Trust Us", icon: ShieldCheck, path: "/why-trust-us", desc: "Our commitment to reliability and transparency." },
    { title: "Our Responsibility", icon: Scale, path: "/our-responsibility", desc: "How we handle your requests and resolve issues." },
    { title: "How Shop4Me Works", icon: Settings, path: "/how-it-works", desc: "Step-by-step guide to our errand service." },
    { title: "Our Service Areas", icon: Map, path: "/service-areas", desc: "Where we operate and handle requests." },
    { title: "Contact the CEO", icon: Phone, path: "/contact-ceo", desc: "Get in touch directly with leadership." },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase">Meet the CEO</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-8 bg-background pb-32">
        <div className="mx-auto max-w-4xl space-y-12">
          
          {/* CEO Profile Area */}
          <div className="flex flex-col items-center gap-6 bg-surface p-6 sm:p-10 rounded-3xl border border-border">
            <div className="w-[160px] sm:w-[180px] h-[200px] sm:h-[220px] shrink-0 rounded-2xl overflow-hidden border-2 border-border shadow-md mx-auto relative bg-background">
              <img 
                src={CEO_PHOTO_URL} 
                alt="Ifeanyi Jeremiah Ozoigbo" 
                className="w-full h-full object-cover object-top" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center space-y-3 w-full">
              <h2 className="text-2xl font-black tracking-tight text-text-primary uppercase">Ifeanyi Jeremiah Ozoigbo</h2>
              <p className="text-base font-bold text-primary">Founder & CEO, Shop4Me</p>
              <div className="space-y-4 text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto text-left sm:text-center pt-2">
                <p>
                  "I started Shop4Me because I saw how much time people lose to everyday errands. Whether it's picking up a package, navigating the busy market, or just handling a quick print job, distance and tight schedules always get in the way."
                </p>
                <p>
                  "Our mission is to be that reliable person on the ground for you—handling your legitimate requests with speed, trust, and absolute professionalism. You focus on what matters; we'll run the errands."
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-tight text-text-primary uppercase ml-2 mb-6">Learn More</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {links.map((link, i) => (
                <Link to={link.path} key={i} className="flex items-center p-4 sm:p-5 rounded-2xl border border-border bg-background shadow-sm transition-all hover:border-indigo-300 hover:shadow-md hover:bg-indigo-50/50 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-indigo-100">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-base font-bold text-text-primary group-hover:text-indigo-700">{link.title}</h4>
                    <p className="text-xs text-text-secondary font-medium mt-1 leading-snug">{link.desc}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
