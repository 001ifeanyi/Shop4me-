import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, MapPin, Mail, User } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function ContactCeo() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase line-clamp-1">Contact CEO</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-10 pb-32">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
              <Phone className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary uppercase">Contact the CEO</h1>
              <p className="text-text-secondary font-medium mt-1">Direct channel to Shop4Me leadership.</p>
            </div>
          </div>

          <div className="bg-surface rounded-3xl border border-border p-8 space-y-8">
            
            <div className="flex items-center space-x-4 border-b border-border pb-6">
              <div className="h-14 w-14 rounded-full bg-indigo-200 flex items-center justify-center shrink-0">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-1">Founder & CEO</p>
                <h2 className="text-xl font-black text-text-primary">Ifeanyi Jeremiah Ozoigbo</h2>
              </div>
            </div>

            <div className="space-y-6">
              <a href="tel:+2349134209957" className="flex items-start space-x-4 group cursor-pointer">
                <Phone className="h-6 w-6 text-text-muted mt-1 shrink-0 group-hover:text-indigo-600 transition-colors" />
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 group-hover:text-indigo-500 transition-colors">Business Phone</p>
                  <p className="text-lg font-medium text-text-primary group-hover:text-indigo-700 transition-colors">+234 9134209957</p>
                </div>
              </a>

              <a href="https://wa.me/2349134209957" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group cursor-pointer">
                <MessageCircle className="h-6 w-6 text-text-muted mt-1 shrink-0 group-hover:text-indigo-600 transition-colors" />
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 group-hover:text-indigo-500 transition-colors">Business WhatsApp</p>
                  <p className="text-lg font-medium text-text-primary group-hover:text-indigo-700 transition-colors">+234 9134209957</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-text-muted mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Business Address</p>
                  <p className="text-lg font-medium text-text-primary">Onitsha, Anambra State, Nigeria</p>
                </div>
              </div>
              
              <a href="mailto:shopp44me@gmail.com" className="flex items-start space-x-4 group cursor-pointer">
                <Mail className="h-6 w-6 text-text-muted mt-1 shrink-0 group-hover:text-indigo-600 transition-colors" />
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 group-hover:text-indigo-500 transition-colors">Direct Email</p>
                  <p className="text-lg font-medium text-text-primary group-hover:text-indigo-700 transition-colors">shopp44me@gmail.com</p>
                </div>
              </a>
            </div>
            
          </div>
          
          <p className="text-sm text-text-secondary font-medium text-center italic">
            Note: For standard errand requests and general customer support, please use the main Shop4Me channels and WhatsApp number.
          </p>

        </div>
      </div>
    </div>
  );
}
