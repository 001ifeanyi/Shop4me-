/// <reference types="vite/client" />
export const config = {
  whatsappNumber: "2349134209957", // Updated directly per user request
  businessHours: import.meta.env.VITE_SHOP4ME_BUSINESS_HOURS || "Mon-Sat: 8AM - 6PM",
  messageTemplate: import.meta.env.VITE_SHOP4ME_WHATSAPP_MESSAGE_TEMPLATE || "SHOP4ME REQUEST\n\nRequest: [REQUEST]\nPickup/location: [LOCATION]\nDestination: [DESTINATION]\n\nPlease assist me with this request."
};
