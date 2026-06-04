# <p align="center">🛡️ NAINIX_ </p>

<p align="center">
  <strong>Securing the Digital Frontier | Next-Gen Cyber Security Agency & Hacker Tools Hub</strong>
</p>

<p align="center">
  <img src="public/logo.svg" alt="Nainix Logo" width="120" height="120" />
</p>

<p align="center">
  <a href="https://vite.dev">
    <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://github.com/abhixyzq/nainix-toolsLab">
    <img src="https://img.shields.io/badge/Repo-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
</p>

---

## 🌐 Overview

**Nainix_** is a high-performance web platform designed to bridge the gap between secure web application development and ethical offensive security. Operating under a strict client-side privacy model, Nainix functions as a premium cybersecurity agency portal combined with a fully interactive **Tools Lab** featuring utility applications optimized for security researchers, system auditors, and developers.

### 🛡️ Privacy First (Zero-Log Policy)
Our security tools process data locally in your browser. Sensitive payloads, custom keys, IP details, and simulation inputs are never sent to external servers or logged.

---

## 🚀 The Tools Lab

Nainix hosts **12 core utilities** catering to reconnaissance, cryptography, and network diagnostics:

| Icon | Tool Name | Description | Key Security Layer |
| :---: | :--- | :--- | :--- |
| 🌐 | **IP Lookup** | Traces network geolocation, ISP, postal codes, and satellite coordinates. | Client-side fetching |
| ✉️ | **Temp Mail** | Generates disposable inboxes for testing OTPs and registration flows securely. | CORS proxy API |
| 🔑 | **Key Generator** | Creates customizable, military-grade high-entropy passwords. | Local Math.random |
| 📱 | **QR Maker** | Generates static vector QR codes for quick link sharing. | Canvas rendering |
| 🧬 | **Device Info** | Audits client browser fingerprinting parameters (cores, memory, user-agent). | Navigator scanning |
| 🎹 | **Keylogger Sim** | Simulates active keystroke interception scripts to demo spyware behavior. | On-screen logger |
| 🔓 | **JWT Decoder** | Parses and inspects JSON Web Tokens local header & payload structures. | Base64 decode |
| ⚙️ | **SHA-256 Hasher** | Generates secure, one-way cryptographic SHA-256 hashes of text. | Crypto API |
| 🛡️ | **Pass Auditor** | Measures brute-force resilience by predicting estimated crack times. | Pattern parsing |
| 🔢 | **Base64 Converter** | Encodes and decodes standard Base64 data formats. | native `atob`/`btoa` |
| 💻 | **Binary Translator** | Converts ASCII text into binary strings (0s and 1s) and vice versa. | Char-code mapping |
| 📻 | **Morse Code** | Translates standard alphabetical characters to Morse audio-equivalent dots and dashes. | Audio/visual maps |

---

## 🛠️ Technology Stack

Nainix is built using a modern, reactive tech stack optimized for performance and design aesthetics:

- **Frontend Core:** [React 19](https://react.dev) & [React Router v7](https://reactrouter.com)
- **Bundler & Server:** [Vite 7](https://vite.dev)
- **Styling System:** [Tailwind CSS v3](https://tailwindcss.com) (Dual-mode glassmorphic layouts, smooth micro-animations, neon glows)
- **Iconography:** [Lucide React](https://lucide.dev) (Responsive vector icons)
- **SEO & Metadata:** [React Helmet Async](https://github.com/staylor/react-helmet-async) (Semantic page-level indexing tags)

---

## 📁 Project Structure

```bash
nainix-web/
├── public/                 # Static assets
│   ├── logo.svg            # Custom neon vector logo
│   ├── logo.png            # High-res raster fallback logo
│   ├── robots.txt          # Search engine crawlers config
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── assets/             # Raw SVG/Image resources
│   ├── components/         # Reusable widgets (Navbar, Footer, ScrollToTop)
│   ├── pages/              # Individual tool pages & landing pages
│   │   ├── About.jsx       # Founder story and company values
│   │   ├── ToolsHub.jsx    # Complete interactive grid directory
│   │   └── [ToolPages].jsx # Tool implementation scripts
│   ├── App.css             # Main styling rules
│   ├── App.jsx             # Core router and page layout assembly
│   ├── index.css           # Global custom classes (glassmorphism details)
│   └── main.jsx            # Entry point mount
├── eslint.config.js        # Lint settings
├── postcss.config.js       # CSS preprocessor settings
├── tailwind.config.js      # Tailwind theme tokens & configurations
└── vite.config.js          # Vite server/compiler parameters
```

---

## ⚙️ Local Setup & Development

Follow these steps to run the project locally on your system:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18 or higher) and `npm` installed.

### 2. Install Dependencies
Clone the repository and run the install script inside the folder:
```bash
npm install
```

### 3. Launch Development Server
Start the local server with hot module replacement (HMR) enabled:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

### 4. Build for Production
Bundle and optimize all assets into a highly-compressed `dist` folder:
```bash
npm run build
```

---

## ⚠️ Legal Disclaimer

> [!WARNING]
> **CRITICAL WARNING:** The utility scripts hosted within the Nainix Tools Lab (such as the Keylogger Simulator, IP Geolocation tracker, and Device Intelligence auditor) are strictly built for **educational demonstrations, security research, and authorized auditing purposes**. Under no circumstances should these tools be used for unauthorized tracking, hacking, or malicious exploitation.
>
> The author, Abhishek Kumar, and all associated contributors assume **zero liability** for damages or legal disputes arising from the misuse of these scripts. Ensure you have explicit written consent before performing security tests on external networks.

---

## 📬 Contact & Contributions

- **Founder & Lead Developer:** Abhishek Kumar (Nainix_)
- **Email:** [nainixdev@gmail.com](mailto:nainixdev@gmail.com)
- **GitHub Profile:** [@AbhiXYZQ](https://github.com/AbhiXYZQ)
- **Repository Link:** [nainix-toolsLab](https://github.com/abhixyzq/nainix-toolsLab)

Feel free to open issues or pull requests to suggest new security features, optimize layouts, or add extra utility tools!
