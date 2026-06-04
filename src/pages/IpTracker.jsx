import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const IpTracker = () => {
  // --- LOGIC ---
  const [ipData, setIpData] = useState(null);
  const fetchIp = async () => {
    setIpData("Fetching...");
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setIpData(data);
    } catch (error) { setIpData({ error: "Unavailable" }); }
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      {/* 1. SEO MAGIC (Google ko batana hai ye page kiske baare mein hai) */}
      <Helmet>
        <title>Free IP Address Tracker & Location Finder | Nainix Security</title>
        <meta name="description" content="Trace any IP address location instantly. Get details like City, Region, ISP, and Coordinates freely. Best tool for network reconnaissance." />
        <meta name="keywords" content="IP Tracker, IP Lookup, Find my IP, Geo Location, ISP Finder, Nainix Tools" />
        <link rel="canonical" href="https://nainix.xyz/tools/ip-lookup" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/tools" className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600 mb-6 transition-colors">
          ← Back to Tools Lab
        </Link>

        {/* 2. THE MAIN TOOL UI */}
        <div className="glass p-8 rounded-3xl mb-16 border border-blue-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
                <div className="inline-block p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 mb-4">
                    <Globe size={32} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Advanced IP Lookup</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Reveal geolocation, ISP, and network details of your connection.</p>

                <div className="glass-input p-6 rounded-2xl mb-6 text-center min-h-[120px] flex flex-col justify-center items-center shadow-inner">
                {ipData ? (
                    ipData === "Fetching..." ? (
                      <span className="flex items-center gap-2 animate-pulse text-blue-600 dark:text-blue-400 font-medium">
                        <Globe size={18} className="animate-spin" /> Scanning satellites...
                      </span>
                    ) :
                    ipData.error ? <span className="text-red-500 font-medium">Connection Failed</span> : 
                    <div className="text-left w-full max-w-md space-y-2">
                        <div className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400 text-center mb-4">{ipData.ip}</div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-50 dark:bg-black/20 p-2 rounded">📍 City: <b>{ipData.city}</b></div>
                            <div className="bg-gray-50 dark:bg-black/20 p-2 rounded">🌍 Region: <b>{ipData.region}</b></div>
                            <div className="bg-gray-50 dark:bg-black/20 p-2 rounded">🏢 ISP: <b>{ipData.org}</b></div>
                            <div className="bg-gray-50 dark:bg-black/20 p-2 rounded">📮 Zip: <b>{ipData.postal}</b></div>
                        </div>
                    </div>
                ) : <span className="text-gray-500">Click below to reveal your digital footprint.</span>}
                </div>

                <button onClick={fetchIp} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95">
                    Scan My IP Address
                </button>
            </div>
        </div>

        {/* 3. SEO CONTENT (Ye text Google padhega) */}
        <article className="prose dark:prose-invert max-w-none glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What does your IP Address reveal?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Every device connected to the internet is assigned a unique label known as an Internet Protocol (IP) address. 
                Think of it as your digital home address. While it doesn't reveal your exact street number, it provides 
                significant data about your online presence.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Why use an IP Tracker?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li><strong>Security Verification:</strong> Check if your VPN is actually working or if your real location is leaking.</li>
                <li><strong>Network Debugging:</strong> Developers use it to understand how their traffic is being routed.</li>
                <li><strong>Blacklist Check:</strong> See if your IP has been flagged for suspicious activity.</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> This tool runs completely in your browser. Nainix Security does not log or store your IP address history.
                </p>
            </div>
        </article>

      </div>
    </div>
  );
};

export default IpTracker;