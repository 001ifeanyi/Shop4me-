import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, AlertTriangle, MessageSquare, Headphones } from "lucide-react";
import { HeaderProfileIcon } from "../components/HeaderProfileIcon";

export default function OurResponsibility() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-xl font-black tracking-tighter text-primary leading-none uppercase line-clamp-1">Our Responsibility</span>
        </div>
        <HeaderProfileIcon />
      </header>

      <div className="px-6 py-10 pb-32">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
              <Scale className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary uppercase">Our Responsibility</h1>
              <p className="text-text-secondary font-medium mt-1">What happens when things don't go exactly as planned.</p>
            </div>
          </div>

          <div className="space-y-6 text-text-secondary font-medium leading-relaxed">
            <p className="text-lg font-bold text-text-primary">
              We stand by the quality of our service. However, we acknowledge that unforeseen issues can occasionally arise during errands.
            </p>
            
            <p>
              Our primary responsibility is to execute your accepted request according to your specific instructions. If Shop4Me fails to properly handle an accepted request due to our own error or negligence, we are committed to making it right.
            </p>

            <div className="rounded-2xl bg-amber-50 p-6 border border-amber-100 mt-8 space-y-4 text-amber-900">
              <div className="flex items-center space-x-3 text-amber-700 font-bold mb-2">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="uppercase tracking-wide text-sm">Issue Resolution Process</h3>
              </div>
              <ul className="space-y-3 list-disc pl-5">
                <li><strong className="font-bold">Raise a Complaint:</strong> Contact our support team immediately via our official channels if an errand was not executed as agreed.</li>
                <li><strong className="font-bold">Investigation:</strong> We will review the chat history, instructions provided, and the actions taken by our errand boy on the ground.</li>
                <li><strong className="font-bold">Clarification:</strong> We will provide a clear, honest explanation of what occurred.</li>
                <li><strong className="font-bold">Resolution:</strong> If the fault lies with Shop4Me, we will work with you to find an appropriate and fair resolution, which may include repeating the errand at no additional service cost or refunding the service fee.</li>
              </ul>
            </div>

            <p>
              Please note that Shop4Me is a service facilitator. While we take full responsibility for our execution of the errand, we cannot be held liable for inherent defects in products purchased on your behalf if they were bought exactly as instructed, or delays caused by third-party logistics and acts of nature.
            </p>

            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-surface border border-border mt-8">
              <Headphones className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-text-primary">Need to report an issue?</h4>
                <p className="text-sm">Reach out to us via our Contact page for prompt assistance.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
