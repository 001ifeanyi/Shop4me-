import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, UserPlus, FileEdit, ClipboardCheck, ShoppingBag, Truck } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    { icon: UserPlus, title: "Create an Account", desc: "Customer creates or logs into their Shop4Me account." },
    { icon: FileEdit, title: "Submit a Request", desc: "Customer submits a 'Shop for Me' request outlining the details of the errand." },
    { icon: ClipboardCheck, title: "Review & Communicate", desc: "Shop4Me reviews the request, agrees on the service charge, and communicates with the customer via WhatsApp." },
    { icon: ShoppingBag, title: "Errand Execution", desc: "The request is handled, items are purchased, or documents are printed according to the agreed instructions." },
    { icon: Truck, title: "Updates & Delivery", desc: "Customer receives updates and the completed item, package, or service." },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase line-clamp-1">How It Works</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-10 pb-32">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
              <Settings className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary uppercase">How Shop4Me Works</h1>
              <p className="text-text-secondary font-medium mt-1">Simple, transparent, and efficient.</p>
            </div>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-primary/20 ml-[-1px]"></div>
            
            <div className="space-y-8 relative">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start space-x-6 relative">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md z-10 ring-4 ring-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 block">Step {i + 1}</span>
                    <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                    <p className="text-text-secondary font-medium mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
