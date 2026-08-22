function strictEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
console.log("https://wa.me/2349134209957?text=" + strictEncodeURIComponent("SHOP4ME REQUEST\n\nRequest: Need 3 iPhone 15s!\nPickup/location: Computer Village, Ikeja\nDestination: Lekki Phase 1\n\nPlease assist me with this request."));
