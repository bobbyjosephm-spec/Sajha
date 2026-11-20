# Sajha Zameen Realty – Luxury AI Website

> **Residences Above the City • Ludhiana, Punjab, India**  
> Luxury demo website for high-altitude penthouses, sky villas, duplexes, triplexes, and apex residences.

---

## 🏛️ Project Overview

**Sajha Zameen Realty (SZR)** is a cinematic noir luxury real estate platform designed for Ludhiana’s most prestigious micro-markets:
- **Sarabha Nagar** (Generational prestige & tree-lined avenues)
- **South City & Sidhwan Canal Road** (Waterfront tranquility & modern glass architecture)
- **Rajguru Nagar** (Discreet contemporary boutique sanctuaries)
- **Civil Lines** (Colonial diplomatic heritage & old cantonment serenity)
- **Pakhowal Road Corridor** (Ascending high-altitude luxury towers)
- **Ferozepur Road Skyline** (Cosmopolitan high-street summits reaching 36 storeys)

---

## ✨ Signature Features

### 1. Day-to-Night Hero Experience
- Interactive skyline ambiance slider (from **Golden Dusk 6:45 PM** to **Midnight Noir 11:30 PM**).
- Dual-layer architectural cross-fade with ambient glow and light-filtering.
- Headline: *"Live Above the Noise."*
- Glassmorphic multi-filter property search bar.
- *"View from the Top"* instant immersion trigger.

### 2. Vertical Floor-Level Indicator
- Custom elevator-style vertical gauge illustrating the property's exact floor relative to total tower storeys (e.g., Level 28 of 30).
- Features elevator shaft rails, illuminated elevator car positioning, and apex penthouse crown marker.

### 3. Proprietary Sky Index™
Objective 5-tier spatial evaluation framework:
1. **Vertical Elevation**: Tower floor and altitude above ground
2. **Cubic Volume**: 14.0 to 18.0 ft clear ceiling heights and double-height atriums
3. **Terrace Deck**: 1,200 to 3,400 sq.ft private open-air outdoor living
4. **Horizon Aspect**: 270° to 360° unobstructed skyline panorama
5. **Private Elevator**: 100% dedicated biometric keycard direct-to-vestibule access

### 4. Twelve Ludhiana Luxury Property Dossiers
1. **The Sovereign Crown** (Sky Villa | Sarabha Nagar | ₹14.50 Cr | 8,000 sq.ft | Floor 28/30)
2. **The Luminary Triplex** (Triplex | South City Canal | ₹18.80 Cr | 10,000 sq.ft | Floor 24-26/26)
3. **Aura Grand Apex** (Apex Residence | Rajguru Nagar | ₹11.25 Cr | 6,800 sq.ft | Floor 21/22)
4. **Elysium Glass Duplex** (Duplex | Civil Lines | ₹9.75 Cr | 5,500 sq.ft | Floor 18/20)
5. **The Celestial Vista** (Sky Villa | Pakhowal Road | ₹16.20 Cr | 9,000 sq.ft | Floor 32/34)
6. **The Meridian Solarium** (Penthouse | Ferozepur Road | ₹13.40 Cr | 7,200 sq.ft | Floor 27/28)
7. **Zenith Oasis** (Sky Villa | Sarabha Nagar Ext | ₹10.50 Cr | 6,500 sq.ft | Floor 22/24)
8. **Belvedere Horizon** (Duplex | South City Canal | ₹8.90 Cr | 5,400 sq.ft | Floor 19/21)
9. **The Grand Palladio** (Triplex | Civil Lines Heritage | ₹15.75 Cr | 8,500 sq.ft | Floor 15-17/17)
10. **Spectra Glass Tower** (Penthouse | Pakhowal Road | ₹12.00 Cr | 7,000 sq.ft | Floor 29/30)
11. **The Viceroy Spire** (Apex Residence | Ferozepur Road | ₹21.50 Cr | 11,000 sq.ft | Floor 35/36)
12. **Aethelgard Manor In The Clouds** (Sky Villa | Rajguru Nagar | ₹9.20 Cr | 5,700 sq.ft | Floor 20/22)

---

## 🎙️ ElevenLabs AI Voice Concierge Integration

- **Agent Name:** Sajha Zameen Realty AI Concierge
- **Capabilities:**
  - Welcomes visitors with Punjabi and English high-altitude greetings
  - Answers questions regarding all 12 properties (prices, sizes, amenities, floors)
  - Explains the Sky Index framework and micro-market characteristics
  - Provides guidance on private acquisitions, couture interior design, and reserve sales
  - Helps schedule confidential private viewings
  - Speaks with natural voice synthesis or connects to the official ElevenLabs Conversational Web Widget
- **Configuration:**
  - Set via `.env` file (`VITE_ELEVENLABS_AGENT_ID=your_agent_id`)
  - Or configure live inside the app via the in-modal **Settings (⚙️)** drawer (saved in `localStorage`).
  - No private API keys are ever exposed to the client.
  - Direct telephone concierge fallback: `+91 (0161) 500-SKYY`.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript + Vite 5
- **Styling:** Tailwind CSS with custom noir luxury color system (`#0B0B0C`, `#161514`, `#2A2826`, brass `#C5A880`, gold `#D4AF37`)
- **Typography:** Cormorant Garamond (headings) & Inter (body text)
- **Icons:** Lucide React
- **Animations:** Custom CSS animations, glassmorphic filters, and interactive sliders
- **Persistence:** LocalStorage for bookmarks, comparison trays (up to 3 residences), theme, and custom Agent ID
- **Deployment:** Cloudflare Pages ready with `public/_redirects`

---

## 🚀 Running Locally in Antigravity IDE

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ☁️ Step-by-Step Cloudflare Pages Deployment

### Option A: Via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub / GitLab:**
   ```bash
   git init
   git add .
   git commit -m "feat: Sajha Zameen Realty Luxury AI Platform"
   git remote add origin https://github.com/your-username/sajha-zameen-realty.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select your `sajha-zameen-realty` repository.

3. **Configure Build Settings:**
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`

4. **Add Environment Variables (Optional):**
   - Variable name: `VITE_ELEVENLABS_AGENT_ID`
   - Value: `your_elevenlabs_agent_id`

5. **Deploy:**
   - Click **Save and Deploy**.
   - Cloudflare Pages will automatically build the site and deploy it globally to Cloudflare's edge network within 1-2 minutes.
   - The included `public/_redirects` ensures seamless SPA client-side routing.

### Option B: Via Wrangler CLI

```bash
# Install Wrangler globally or use npx
npx wrangler pages deploy dist --project-name=sajha-zameen-realty
```

---

## 📋 Production Replacement Checklist

Before transitioning from demonstration mode to live production, complete this checklist:

- [ ] **Branding & Monogram:** Replace or register the SZR monogram and wordmark with your official registered trademark.
- [ ] **Property Listings:** Update `src/data/properties.ts` with authentic verified property listings, architectural drawings, and CAD floor plans.
- [ ] **Photography & Visuals:** Replace demonstration Unsplash images with commissioned high-resolution architectural photography and drone twilight footage of Ludhiana towers.
- [ ] **RERA Registrations:** Replace fictional demo RERA IDs with valid Punjab Real Estate Regulatory Authority (PBRERA) registration certificates.
- [ ] **Contact Information:** Update office address, phone numbers (`+91 (0161) 500-SKYY`), and email (`privateoffice@sajhazameen.com`) in `src/components/layout/Footer.tsx`, `src/components/pages/ContactPage.tsx`, and `src/data/company.ts`.
- [ ] **ElevenLabs Agent ID:** Create a production Conversational AI Agent in the ElevenLabs dashboard trained on your final property knowledge base, and set `VITE_ELEVENLABS_AGENT_ID`.
- [ ] **Backend Integration:** Connect `BookingModal.tsx` and `ContactPage.tsx` form submissions to your CRM (e.g., Salesforce, HubSpot, or Cloudflare Workers API) instead of the demo state.
- [ ] **Legal Disclosures:** Remove the demo disclaimer badges in `DemoBadge.tsx` and update terms of service and privacy policy to comply with local real estate laws.
