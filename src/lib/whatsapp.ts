import { config } from "../config";

// Ensure RFC 3986 compliance for the WhatsApp intent string
function strictEncodeURIComponent(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

export function generateWhatsAppLink(message?: string) {
  const number = config.whatsappNumber;
  if (!message) {
    return `https://wa.me/${number}`;
  }
  return `https://wa.me/${number}?text=${strictEncodeURIComponent(message)}`;
}
