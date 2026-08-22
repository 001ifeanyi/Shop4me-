import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Map, MapPin, Navigation } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function ServiceAreas() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase line-clamp-1">Service Areas</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-10 pb-32">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
              <Map className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary uppercase">Our Service Areas</h1>
              <p className="text-text-secondary font-medium mt-1">Where our errand boys operate.</p>
            </div>
          </div>

          <div className="space-y-6 text-text-secondary font-medium leading-relaxed">
            <p>
              Shop4Me operates primarily around <strong className="text-text-primary">Onitsha</strong> and its major markets. We have boots on the ground ready to navigate these areas to fulfill your requests.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-text-primary">Main Market, Onitsha</h3>
              </div>
              
              <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-text-primary">Relief Market</h3>
              </div>
            </div>

            <div className="rounded-2xl bg-primary/10 p-6 border border-indigo-100 mt-8 text-indigo-900 space-y-3">
              <div className="flex items-center space-x-2 font-bold mb-2">
                <Navigation className="h-5 w-5" />
                <h3 className="uppercase tracking-wide text-sm">Extended Locations</h3>
              </div>
              <p>
                Services may extend to other locations depending on the specific request. For example, requests involving locations such as <strong className="font-bold">Aba</strong> or neighboring cities may require separate arrangements and prior confirmation.
              </p>
              <p>
                If you have an errand outside of Onitsha, please <strong className="font-bold">Just Ask</strong>. We will review it and let you know if we can comfortably accommodate it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
