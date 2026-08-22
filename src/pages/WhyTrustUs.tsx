import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Eye, MessageCircle, Clock, CheckCircle2, HeartHandshake } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function WhyTrustUs() {
  const navigate = useNavigate();

  const principles = [
    { icon: Eye, title: "Transparency", desc: "No hidden fees. Service charges are agreed upon before any errand begins." },
    { icon: MessageCircle, title: "Clear Communication", desc: "We keep you updated throughout the process. No guessing where we are or what's happening." },
    { icon: CheckCircle2, title: "Reliable Handling", desc: "Your items and documents are handled with the utmost care, ensuring they reach their destination safely." },
    { icon: ShieldCheck, title: "Respect for Resources", desc: "We value your money and specific instructions. We don't make unauthorized substitutions or cut corners." },
    { icon: Clock, title: "Timely Updates", desc: "You receive status updates as the errand is being executed, from pickup to final delivery." },
    { icon: HeartHandshake, title: "Professionalism", desc: "Every legitimate request is treated with the seriousness and respect it deserves." },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase line-clamp-1">Why Trust Us</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-10 pb-32">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary uppercase">Why You Should Trust Us</h1>
              <p className="text-text-secondary font-medium mt-1">Our core commitments to you.</p>
            </div>
          </div>

          <div className="prose prose-slate prose-indigo max-w-none font-medium text-text-secondary leading-relaxed mb-10">
            <p>
              At Shop4Me, trust is the foundation of everything we do. We understand that asking someone else to handle your errands, pick up your packages, or navigate the market requires a high level of confidence. We are committed to earning and keeping that trust through every interaction.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((p, i) => (
              <div key={i} className="flex p-5 rounded-2xl border border-border bg-surface items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-primary shadow-sm mt-1">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary">{p.title}</h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
