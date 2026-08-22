# Shop4Me 🛍️📍

**Your Errand Boy. We'll do the shopping and errands for you.**

Shop4Me is a modern, mobile-first Progressive Web Application (PWA) designed to seamlessly connect customers with trusted errand runners. From market runs to package pickups and everyday errands, Shop4Me makes delegating tasks easy through a clean interface that hands off requests directly to the business via WhatsApp.

## 🚀 Features
* **Mobile-First Design**: Optimized for mobile screens, giving users a native app-like experience.
* **Direct WhatsApp Handoff**: Uses a robust URL-encoding engine to generate perfectly formatted WhatsApp deep links (`wa.me`). It automatically pre-fills customer orders and opens the WhatsApp app directly.
* **PWA Ready**: Fully configured with a `manifest.json` and a professional SVG icon, making it ready to be installed on home screens or wrapped into an Android APK.
* **Service Categories**: Clearly defined services including Market Runs, Document Printing, Package Pickup, and more.

## 🛠️ Tech Stack
* **Framework**: React 18 with TypeScript
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Build Tool**: Vite

## 💻 Local Development

To run this project locally on your machine, follow these steps:

1. **Install the dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open your browser and visit the local port provided in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

## 📱 Converting to an Android App (APK)

Because Shop4Me is a Progressive Web App, it can be easily converted into an Android app for the Google Play Store:

**Method 1: PWABuilder (Easiest / No-Code)**
1. Deploy the app to a live URL (e.g., using Vercel or Netlify).
2. Go to [PWABuilder.com](https://www.pwabuilder.com/).
3. Paste your live URL into the tool. It will automatically detect your `manifest.json` and `icon.svg` and generate an Android `.apk` / `.aab` for you to download.

**Method 2: Capacitor (Developer Method)**
1. Install Capacitor:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```
2. Initialize and add the Android platform:
   ```bash
   npx cap init
   npx cap add android
   ```
3. Build the web app and sync it to Capacitor:
   ```bash
   npm run build
   npx cap sync
   ```
4. Open the generated `android` folder in Android Studio and build your APK.

## 🌐 Hosting & Deployment
This project is a standard React SPA (Single Page Application). You can easily deploy it for free on platforms like:
* [Vercel](https://vercel.com)
* [Netlify](https://netlify.com)
* [Firebase Hosting](https://firebase.google.com/docs/hosting)

Simply export this code to GitHub, connect your repository to any of those services, and it will deploy instantly.
