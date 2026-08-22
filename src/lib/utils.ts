import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // In a real app, this would send data to Mixpanel/Google Analytics
  console.log(`[Analytics] ${eventName}`, properties || {});
}
