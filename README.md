# Mischtisch Sachsen - Frontend Application

A React + Vite frontend application for the Mischtisch Sachsen reservation platform, matching the reference website design exactly.

## 🚀 Quick Start

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🎨 Design System (from Reference Website)

### Colors
```css
--kobalt: #1f3c8f;          /* Primary blue */
--kobalt-dunkel: #16295f;   /* Dark blue */
--tinte: #131c33;           /* Near black text */
--porzellan: #f5f3ec;       /* Cream background */
--papier: #ffffff;          /* White */
--eiche: #7c5230;           /* Oak brown */
--eiche-hell: #9a6c42;      /* Light oak */
--honig: #d9a441;           /* Honey gold */
--linie: #dad4c6;           /* Border lines */
--moos: #4c7a4f;            /* Moss green */
```

### Typography
```css
--sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--serif: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif;
```

### Container Widths (Responsive)
| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Default (Header) | 1440px | clamp(12px, 2vw, 32px) |
| 1920px+ (Header) | 1600px | 40px |
| 2560px+ (Header) | 1700px | 48px |
| **Content Pages (Home, Host, VenueDetail)** | **960px** | **20px** |
| ≤768px (Content Pages) | 100% | 16-20px |
| 1920px+ (Content Pages) | 960px | 20px |
| 2560px+ (Content Pages) | 960px | 20px |

## 🧭 Navigation Structure

### Header Navigation (Desktop & Mobile)
```
Tables → Hosts → About → EN/DE Toggle
```

- **Tables** → `/` (Home)
- **Hosts** → `/gastgeber`
- **About** → `/ueber`
- **EN/DE Toggle** → Language switcher (persists in localStorage)

### Footer Navigation
```
Shared Tables | For Hosts | About | Legal | Privacy | Imprint
```

- **Legal** → `/rechtliches` (Legal Page)
- **Privacy** → `/privacy` (placeholder)
- **Imprint** → `/impressum` (placeholder)

## 📄 Pages Implemented

### 1. Home Page (`/`)
- Hero section with "Ein Tisch, der mischt" headline
- Region filter chips and search input
- Venue cards grid (LocCard components)
- **Layout**: 960px max-width, responsive (100% ≤768px)

### 2. About Page (`/ueber`)
- **Hero**: "One table that mixes" with lead paragraph
- **3 Feature Cards**: One table per house | Seats not tables | One account all Saxony
- **Campaign Claims**: "Share tables. Mix people." & "Eating together is better."
- **4 Steps to Join**: Agreement → Finder listing → Starter package → Go live
- **Good to Know**: Trademark, fees, non-discrimination, termination terms
- **Disclaimer**: Prototype/concept draft notice
- **Layout**: 820px/900px max-width, responsive (100% ≤768px)

### 3. Legal Page (`/rechtliches`)
- **AI Usage Disclosure**: Built with AI assistance, no AI in production
- **Privacy**: Data controllers, collected data, storage (Firebase), user rights
- **Trademarks**: DEHOGA Bayern marks, photo rights, logo usage
- **Further Notices**: Imprint, accessibility (BFSG), no payment function
- **Version Status**: Prototype, test data, legal review required
- **Impressum**: DEHOGA Sachsen e.V. address, contact, representation, register, image credits

### 4. Venue Detail (`/betrieb/:id`)
- Venue header with image gallery
- Date/time selection and table plan (TableSvg)
- Booking form with validation
- Confirmation view with receipt (Beleg)
- **Layout**: 960px max-width, responsive (100% ≤768px)

### 5. Host Page (`/gastgeber`)
- Authentication (Login/Register forms)
- Host dashboard (HostArea) for logged-in venues
- Table configuration (TischformPage)
- **Layout**: 960px max-width, responsive (100% ≤768px)

## 🌐 Internationalization (i18n)

### Language Toggle (EN/DE)
- Located in Header after "About" navigation
- Uses `src/utils/i18n.js` module
- State persisted via `document.documentElement.lang`
- Default: English
- Toggle updates: language state + html lang attribute + i18n module

### Translation System
```javascript
// src/utils/i18n.js
import { getLanguage, setLanguage, v } from './utils/i18n';

// Get current language
getLanguage(); // 'en' | 'de'

// Set language
setLanguage('de');

// Translate (returns EN if language=en, otherwise DE)
v('Deutscher Text', 'English Text');
```

## 🔧 Integrations

### Firebase (Configured)
- Authentication (Email/Password)
- Firestore Database
- Cloud Storage
- Configuration in `.env` via `VITE_FIREBASE_*` variables

### EmailJS (Configured)
- Contact form emails
- Configuration in `.env` via `VITE_EMAILJS_*` variables

### Routing
- React Router v6
- Routes defined in `App.jsx`
- All navigation uses `NavLink` for active states



## 🛠 Development Commands

```bash
# Development
npm run dev          # Start Vite dev server (HMR)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Oxlint (fast linting)



## 📋 Environment Variables

Create `.env` from `.env.example`:

```env
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# EmailJS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```




