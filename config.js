/* BluTalk settings — fill in ONE of the two options below, then save.
   Option A (recommended if you use Firebase): Firebase AI Logic — no server needed.
   Option B: your own Cloudflare Worker link (see blutalk-worker/worker.js). */
window.BLUTALK_CONFIG = {
  /* ---- Option A: Firebase ----
     Paste the firebaseConfig object from Firebase console → Project settings → Your apps → Web app.
     (These values are safe to be public. Never paste your Gemini API key here.) */
  firebase: null,
  // firebase: { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." },
  recaptchaSiteKey: "",          // reCAPTCHA v3 site key for App Check (required by Firebase from 2 Nov 2026)
  model: "gemini-flash-latest",  // change if Firebase says the model isn't found

  /* ---- Option B: Cloudflare Worker ---- */
  aiEndpoint: "",   // e.g. "https://blutalk-ai.yourname.workers.dev"
  appKey: ""        // the same APP_KEY you set in Cloudflare
};
