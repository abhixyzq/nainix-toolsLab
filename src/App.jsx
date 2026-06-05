import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sun, Moon, ShieldCheck, ArrowRight, Lock, Zap, FileText } from 'lucide-react';

// --- NEW COMPONENT IMPORT ---
import ScrollToTop from './components/ScrollToTop'; // ✅ Step 1: Import kiya

// --- NEW PAGES IMPORT ---
// Ensure ye files src/pages folder mein hon
import About from './pages/About';
import ToolsHub from './pages/ToolsHub';
import IpTracker from './pages/IpTracker';
import TempMail from './pages/TempMail';
import PasswordGen from './pages/PasswordGen';
import QrGenerator from './pages/QrGenerator';
import DeviceIntel from './pages/DeviceIntel';
import Keylogger from './pages/Keylogger';
import JwtTool from './pages/JwtTool';
import ShaTool from './pages/ShaTool';
import PassStrength from './pages/PassStrength';
import Base64Tool from './pages/Base64Tool';
import BinaryTool from './pages/BinaryTool';
import MorseTool from './pages/MorseTool';

// --- COMPONENT 1: NAVBAR (Updated with Light Mode) ---
const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  return (
    <nav className="fixed w-full z-50 top-0 glass border-t-0 border-l-0 border-r-0 rounded-none">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Nainix" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">nainix.</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link to="/" className={`hover:text-blue-600 dark:hover:text-white transition-colors ${location.pathname === "/" ? "text-blue-600 dark:text-white font-bold" : ""}`}>Home</Link>
          <Link to="/tools" className={`hover:text-blue-600 dark:hover:text-white transition-colors ${location.pathname.includes("/tools") ? "text-blue-600 dark:text-white font-bold" : ""}`}>Tools Lab</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-300 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
          </button>

          <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- COMPONENT 2: HOME PAGE (Updated SEO & UI) ---
const Home = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "77e66cc6-ad95-497b-910f-06f9ba3a12b2");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      setResult(data.success ? "Message sent successfully." : "Error sending message.");
      if (data.success) event.target.reset();
    } catch (error) { setResult("Connection Error."); }
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Nainix Security | Cyber Security Agency & Tools</title>
        <meta name="description" content="Elite penetration testing, secure development, and free hacker tools." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 px-6 text-center relative z-10 overflow-hidden">
        {/* Background Blobs (Dynamic Colors) */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/10 rounded-full border border-blue-200 dark:border-blue-500/30">
            <ShieldCheck size={14} className="text-blue-500 animate-pulse" />
            <span>Next-Gen Cyber Defense</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
            Secure Your Code. <br /> <span className="text-gray-500 dark:text-gray-400">Protect Your Future.</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Nainix provides elite penetration testing and security architecture. Don't wait for a breach—prevent it.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-all shadow-lg hover:scale-105">
              Start Audit
            </button>
            <Link to="/tools" className="glass px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-white flex items-center justify-center gap-2">
              Launch Tools Lab <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAKE TERMINAL */}
          <div className="max-w-3xl mx-auto glass rounded-xl overflow-hidden text-left shadow-2xl dark:border-white/10 border-gray-200">
            <div className="bg-gray-200 dark:bg-black/40 px-4 py-2 flex gap-2 border-b border-gray-300 dark:border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500 ml-2 font-mono">root@nainix-server:~</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2 bg-gray-50 dark:bg-black/80">
              <div className="text-green-600 dark:text-green-400">$ nainix --scan target --all</div>
              <div className="text-gray-500 dark:text-gray-400">[+] Initializing reconnaissance module...</div>
              <div className="text-gray-500 dark:text-gray-400">[+] Target acquired: 192.168.x.x</div>
              <div className="text-blue-600 dark:text-blue-400">[!] Vulnerability detected: SQL Injection (Patched)</div>
              <div className="text-purple-600 dark:text-purple-400">[✓] System Hardening Complete. 100% Secure.</div>
              <div className="text-green-600 dark:text-green-400 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-10 border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "50+", label: "Projects Secured" },
            { val: "10k+", label: "Lines Audited" },
            { val: "100%", label: "Client Privacy" },
            { val: "24/7", label: "Active Monitoring" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.val}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Trust Nainix?</h2>
            <p className="text-gray-600 dark:text-gray-400">We don't just run tools; we understand the hacker mindset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Lock className="text-blue-500" size={24} />, title: "Zero-Log Policy", desc: "We value secrecy. Your data and vulnerabilities are never stored on our servers." },
              { icon: <Zap className="text-yellow-500" size={24} />, title: "Manual Testing", desc: "Automated tools miss things. Our human experts verify every potential threat manually." },
              { icon: <FileText className="text-purple-500" size={24} />, title: "Detailed Reports", desc: "You get a full PDF report explaining exactly how to fix the security holes we find." }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col items-start">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Penetration Testing", desc: "Advanced network analysis using industry-standard tools to find loopholes." },
              { title: "Secure Development", desc: "Building React & Next.js applications with security-first architecture." },
              { title: "Threat Intelligence", desc: "Monitoring potential threats and data leaks to keep your corporate data secure." }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center glass p-8 md:p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let's Secure Your Assets.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Reach out for a confidential audit or consulting.</p>
          <form onSubmit={onSubmit} className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" required className="w-full glass-input p-4 rounded-xl" />
              <input type="email" name="email" placeholder="Email" required className="w-full glass-input p-4 rounded-xl" />
            </div>
            <textarea name="message" rows="4" placeholder="Describe your project..." required className="w-full glass-input p-4 rounded-xl"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
              Send Message
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">{result}</p>
          </form>
        </div>
      </section>
    </div>
  );
};

// --- COMPONENT 3: LEGAL PAGES (Professional & Detailed) ---
const Legal = ({ type }) => {
  useEffect(() => { window.scrollTo(0, 0); }, [type]);

  const content = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 18, 2026",
      body: (
        <>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1. Introduction</h3>
          <p className="mb-4">At <strong>Nainix Security</strong> ("we", "our", or "us"), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit <strong>nainix.xyz</strong>.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">2. Zero-Log Policy</h3>
          <p className="mb-4">We operate with a strict <strong>Zero-Log Policy</strong> for our tools. When you use tools like the <em>IP Tracker</em>, <em>Password Generator</em>, or <em>Keylogger Simulator</em>, the data is processed <strong>Client-Side</strong> (in your browser). We do not store, record, or share your inputs or generated outputs.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">3. Information We Collect</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Voluntary Info:</strong> Name and Email address only if you voluntarily submit our "Contact Form".</li>
            <li><strong>Automatic Info:</strong> We may use Google Analytics to collect anonymous usage data (e.g., pages visited, browser type) to improve user experience.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">4. Cookies</h3>
          <p className="mb-4">We use cookies to enhance site navigation and analyze site usage. You can choose to disable cookies through your browser settings.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last Updated: January 18, 2026",
      body: (
        <>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1. Acceptance of Terms</h3>
          <p className="mb-4">By accessing <strong>nainix.xyz</strong>, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not access the service.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">2. Educational Purpose Only</h3>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
            <p className="text-red-700 dark:text-red-200 font-bold">CRITICAL WARNING:</p>
            <p className="text-red-600 dark:text-red-300 text-sm">
              The tools provided on this website (Keylogger Simulator, IP Tracker, etc.) are strictly for <strong>EDUCATIONAL and SECURITY TESTING purposes only</strong>. Using these tools to access systems without authorization is a crime.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">3. User Conduct</h3>
          <p className="mb-4">You agree NOT to use this website to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Harass, abuse, or harm another person.</li>
            <li>Perform any illegal cyber activity or cyber-attack.</li>
            <li>Reverse engineer or attempt to steal the source code of Nainix Tools.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">4. Intellectual Property</h3>
          <p className="mb-4">The content, code, and design of Nainix Security are owned by us and are protected by copyright laws.</p>
        </>
      )
    },
    disclaimer: {
      title: "Legal Disclaimer",
      lastUpdated: "Last Updated: January 18, 2026",
      body: (
        <>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1. No Warranties</h3>
          <p className="mb-4">The information and tools on <strong>nainix.xyz</strong> are provided on an "as is" basis. Nainix Security makes no warranties, expressed or implied, regarding the accuracy or reliability of these tools.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">2. Liability Limitation</h3>
          <p className="mb-4"><strong>Nainix Security</strong> and its founder (Abhishek Kumar) shall NOT be held liable for any damages or legal consequences arising from the use or misuse of the tools provided on this site. You assume full responsibility for your actions.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">3. Third-Party Links</h3>
          <p className="mb-4">Our website may contain links to third-party web sites (e.g., 1secmail API) that are not owned or controlled by Nainix Security. We have no control over, and assume no responsibility for, the content or practices of any third-party sites.</p>

          <p className="mt-8 text-sm text-gray-500 italic">If you have legal concerns, please contact: <strong>nainixdev@gmail.com</strong></p>
        </>
      )
    }
  };

  const data = content[type];

  return (
    <div className="pt-36 pb-20 px-6 animate-fade-in min-h-screen">
      <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-mono">{data.lastUpdated}</p>

        {/* Content Body */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t border-gray-200 dark:border-white/10 pt-8">
          {data.body}
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
          <Link to="/" className="text-blue-500 hover:text-blue-700 dark:hover:text-white transition-colors text-sm font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT 4: FOOTER (Updated) ---
const Footer = () => (
  <footer className="py-12 glass border-l-0 border-r-0 border-b-0 rounded-none relative z-10 mt-auto">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="Nainix" className="w-6 h-6" />
          <span className="text-lg font-bold text-gray-900 dark:text-white">nainix.</span>
        </div>
        <p className="text-gray-500 mb-4 max-w-xs">Securing the digital frontier.</p>
        <p className="text-gray-400 text-xs">© 2026 Nainix Security.</p>
      </div>
      <div>
        <h4 className="text-gray-900 dark:text-white font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools Lab</Link></li>
          <li><a href="mailto:nainixdev@gmail.com">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-gray-900 dark:text-white font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Use</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

// --- MAIN APP (With Multi-Page Routing) ---
function App() {
  // Theme State
  const [darkMode, setDarkMode] = useState(true);

  // Soft Animation Effect
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <Router>
      {/* 2. Yahan lagayein (Router ke andar, sabse upar) */}
      <ScrollToTop />
      <div className="min-h-screen w-full transition-colors duration-700 ease-in-out bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* NEW ROUTING STRUCTURE */}
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Main Tools Menu (The Grid) */}
          <Route path="/tools" element={<ToolsHub />} />

          {/* Separate Pages for Tools (SEO Boost) */}
          <Route path="/tools/ip-lookup" element={<IpTracker />} />
          <Route path="/tools/temp-mail" element={<TempMail />} />
          <Route path="/tools/password-generator" element={<PasswordGen />} />
          <Route path="/tools/qr-maker" element={<QrGenerator />} />
          <Route path="/tools/device-info" element={<DeviceIntel />} />
          <Route path="/tools/keylogger" element={<Keylogger />} />
          <Route path="/tools/jwt-decoder" element={<JwtTool />} />
          <Route path="/tools/sha256-generator" element={<ShaTool />} />
          <Route path="/tools/password-strength" element={<PassStrength />} />
          <Route path="/tools/base64-converter" element={<Base64Tool />} />
          <Route path="/tools/binary-translator" element={<BinaryTool />} />
          <Route path="/tools/morse-code" element={<MorseTool />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="/disclaimer" element={<Legal type="disclaimer" />} />

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;