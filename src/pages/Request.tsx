import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle, Paperclip, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { generateWhatsAppLink } from "../lib/whatsapp";
import { config } from "../config";
import { trackEvent } from "../lib/utils";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function Request() {
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [request, setRequest] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [hasFile, setHasFile] = useState(false);
  const [fallbackMode, setFallbackMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSaving(true);
      
      let message = config.messageTemplate
        .replace("[REQUEST]", request)
        .replace("[LOCATION]", location)
        .replace("[DESTINATION]", destination);
      
      if (hasFile) {
        message += "\n\n(I have a file/photo to share with you)";
      }

      const link = generateWhatsAppLink(message);
      trackEvent("submit_request_click", { hasFile });
      
      // Open in a new tab to prevent iframe 'refused to connect' errors
      const newWindow = window.open(link, "_blank");
      
      // Advance to success step
      setStep(4);
    } catch (err) {
      console.error("Failed to process request", err);
      setStep(4);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen pb-safe">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md shrink-0">
        <button onClick={handleBack} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-1 flex-col items-center justify-center px-2">
          <span className="text-lg sm:text-xl font-black tracking-tighter text-primary leading-none uppercase text-center">
            {step === 1 && "What do you need?"}
            {step === 2 && "Where to?"}
            {step === 3 && "Review"}
            {step === 4 && "Sent"}
            {fallbackMode && "WhatsApp"}
          </span>
          {step <= 3 && !fallbackMode && (
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mt-1">
              Step {step} of 3
            </span>
          )}
        </div>
        <HeaderProfileIcon />
      </header>

      <main className="flex-1 px-6 py-8 mx-auto w-full max-w-lg">
        {!fallbackMode && step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <p className="text-lg text-text-secondary font-medium">Tell us what you want Shop4Me to help you with.</p>

            <div className="space-y-2">
              <label htmlFor="request" className="block text-sm font-bold text-text-primary">
                WHAT DO YOU NEED?
              </label>
              <textarea
                id="request"
                required
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="E.g. I need someone to buy something from Onitsha Market..."
                className="w-full rounded-2xl border border-border bg-surface p-4 text-base focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary">
                OPTIONAL PHOTO/DOCUMENT
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center space-y-2 rounded-2xl border-2 border-dashed border-border bg-surface p-6 transition-colors hover:border-indigo-300 hover:bg-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm">
                  <Paperclip className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-text-secondary">
                  {hasFile ? "File selected" : "Attach Image, PDF, or Document"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setHasFile(e.target.files !== null && e.target.files.length > 0)}
                />
              </label>
              <p className="text-xs text-text-secondary mt-1">
                You will send the actual file to us directly in the WhatsApp chat later.
              </p>
            </div>

            <Button type="submit" size="lg" fullWidth className="mt-8 text-lg">
              NEXT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        )}

        {!fallbackMode && step === 2 && (
          <form onSubmit={handleNext} className="space-y-6">
            <p className="text-lg text-text-secondary font-medium">Tell us where to handle the errand.</p>

            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-bold text-text-primary">
                LOCATION
              </label>
              <input
                id="location"
                required
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you currently located?"
                className="w-full rounded-2xl border border-border bg-surface p-4 text-base focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="destination" className="block text-sm font-bold text-text-primary">
                DESTINATION
              </label>
              <input
                id="destination"
                required
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where should the item/document be taken?"
                className="w-full rounded-2xl border border-border bg-surface p-4 text-base focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>

            <Button type="submit" size="lg" fullWidth className="mt-8 text-lg">
              REVIEW REQUEST
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        )}

        {!fallbackMode && step === 3 && (
          <div className="space-y-6">
            <p className="text-lg text-text-secondary font-medium">Review your request before we head to WhatsApp.</p>

            <div className="rounded-2xl border border-border bg-surface p-5 space-y-4">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">What you need</h4>
                <p className="text-sm font-medium text-text-primary whitespace-pre-wrap">{request}</p>
                {hasFile && (
                  <div className="mt-2 flex items-center text-xs font-bold text-primary bg-primary/10 p-2 rounded-lg inline-flex">
                    <Paperclip className="h-3 w-3 mr-1" />
                    Includes file/photo attachment
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">Location</h4>
                <p className="text-sm font-medium text-text-primary">{location}</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">Destination</h4>
                <p className="text-sm font-medium text-text-primary">{destination}</p>
              </div>
            </div>

            <Button onClick={handleSubmit} size="lg" fullWidth className="mt-8 text-lg" disabled={isSaving}>
              <MessageCircle className="mr-2 h-5 w-5" />
              {isSaving ? "SAVING..." : "CONTINUE TO WHATSAPP"}
            </Button>

            <p className="text-center text-xs text-text-muted font-medium">
              You'll be redirected to WhatsApp to confirm your errand.
            </p>
          </div>
        )}
        
        {!fallbackMode && step === 4 && (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-text-primary mb-2">REQUEST READY</h2>
              <p className="text-text-secondary font-medium">
                Your request has been passed to WhatsApp.
              </p>
            </div>
            
            <Link to="/" className="w-full">
              <Button size="lg" fullWidth variant="outline" className="mt-4">
                RETURN TO HOME
              </Button>
            </Link>
          </div>
        )}

        {fallbackMode && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface-hover">
              <MessageCircle className="h-10 w-10 text-text-secondary" />
            </div>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-text-primary">
              WHATSAPP IS NOT AVAILABLE
            </h2>
            <p className="mb-8 text-text-secondary font-medium">
              We couldn't automatically open WhatsApp on your device. You can reach out manually.
            </p>
            <div className="w-full space-y-4">
              <a href={`tel:+${config.whatsappNumber}`}>
                <Button size="lg" fullWidth variant="outline" className="mb-4 text-text-primary border-border">
                  CALL SHOP4ME
                </Button>
              </a>
              <Button 
                size="lg" 
                fullWidth 
                variant="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(`+${config.whatsappNumber}`);
                  alert("WhatsApp number copied to clipboard!");
                }}
              >
                COPY WHATSAPP NUMBER
              </Button>
              <a href="mailto:hello@shop4me.com" className="block mt-4">
                <Button size="lg" fullWidth variant="ghost" className="text-text-secondary">
                  EMAIL SHOP4ME
                </Button>
              </a>
              
              <Button size="md" variant="ghost" className="mt-8 text-sm" onClick={() => setFallbackMode(false)}>
                Go Back
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
