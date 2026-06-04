import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TempMail = () => {
  const [tempEmail, setTempEmail] = useState("Loading...");
  const [messages, setMessages] = useState([]);
  const [loadingMail, setLoadingMail] = useState(false);
  
  // Gmail Friendly Domains (Hardcoded Fallback)
  const [activeDomains, setActiveDomains] = useState([
    "wwjmp.com", 
    "esiix.com", 
    "xojxe.com", 
    "yoggm.com", 
    "1secmail.net"
  ]);

  // 1. Secret Domains Lana (Proxy ke through taaki Block na ho)
  useEffect(() => {
    const fetchDomains = async () => {
      try {
        // Proxy use kar rahe hain taaki CORS error na aaye
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent("https://www.1secmail.com/api/v1/?action=getDomainList")}`;
        const res = await fetch(proxyUrl);
        if(!res.ok) throw new Error("Proxy Failed");
        
        const data = await res.json();
        setActiveDomains(data); // Live list update karo
        generateNewMail(data);  // Turant naya mail banao
      } catch (e) {
        console.log("Using backup domains");
        generateNewMail(activeDomains); // Fail hua to backup use karo
      }
    };
    fetchDomains();
  }, []);

  // 2. Naya Mail Banana
  const generateNewMail = (domainList = activeDomains) => {
    setLoadingMail(true);
    const randomUser = Math.random().toString(36).substring(7);
    // Random domain choose karo list me se
    const randomDomain = domainList[Math.floor(Math.random() * domainList.length)];
    setTempEmail(`${randomUser}@${randomDomain}`);
    setMessages([]);
    setLoadingMail(false);
  };

  // 3. Inbox Check Karna
  const checkInbox = async () => {
    if (!tempEmail || tempEmail === "Loading...") return;
    setLoadingMail(true);
    try {
      const [user, domain] = tempEmail.split("@");
      const apiUrl = `https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`;
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
      
      const res = await fetch(proxyUrl);
      const data = await res.json();
      
      // Kabhi kabhi data array nahi hota, usko handle karna padega
      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (e) {
      console.error("Inbox Error", e);
    }
    setLoadingMail(false);
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Disposable Temp Mail | Working on Gmail | Nainix</title>
        <meta name="description" content="Get a free temporary email address that works with Gmail, Facebook, and OTP verification. Secure and anonymous inbox." />
        <link rel="canonical" href="https://nainix.xyz/tools/temp-mail" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600 mb-6 transition-colors">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-blue-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
                <div className="inline-block p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-4xl mb-4">📧</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pro Temp Mail</h1>
                <p className="text-gray-600 dark:text-gray-400">Optimized for OTPs & Verification.</p>
            </div>

            {/* Email Display */}
            <div className="glass-input p-4 rounded-xl mb-6 text-center flex flex-col md:flex-row justify-between items-center gap-4 border border-blue-500/30 shadow-inner bg-white/50 dark:bg-black/40">
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Your Active Address</span>
                  <span className="text-lg font-mono font-bold text-blue-700 dark:text-blue-300 break-all tracking-wide">
                    {tempEmail}
                  </span>
                </div>
                <button 
                  onClick={() => {navigator.clipboard.writeText(tempEmail); alert("Copied to clipboard! 📋")}} 
                  className="bg-blue-100 dark:bg-blue-600/20 hover:bg-blue-200 dark:hover:bg-blue-600/40 text-blue-800 dark:text-blue-100 px-6 py-2 rounded-lg text-sm font-bold transition-colors border border-blue-200 dark:border-blue-500/30 whitespace-nowrap"
                >
                  Copy
                </button>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                <button 
                  onClick={() => generateNewMail(activeDomains)} 
                  className="bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>🔄</span> Change Address
                </button>
                <button 
                  onClick={checkInbox} 
                  disabled={loadingMail} 
                  className={`glass text-gray-900 dark:text-white py-3 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 ${loadingMail ? "animate-pulse" : ""}`}
                >
                    <span>📩</span> {loadingMail ? "Refreshing..." : "Refresh Inbox"}
                </button>
            </div>

            {/* Inbox */}
            <div className="bg-gray-50 dark:bg-black/40 rounded-xl min-h-[200px] p-4 border border-gray-200 dark:border-white/10 relative z-10">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Received Emails</div>
                  <div className="flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span className="text-[10px] text-gray-400">Ready</span>
                  </div>
                </div>
                
                {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-12 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-xl">📭</div>
                      <p>Your inbox is empty.</p>
                      <p className="text-xs text-gray-500 max-w-xs">Send an email to the address above, wait 5 seconds, and click "Refresh Inbox".</p>
                    </div>
                ) : (
                    messages.map((msg, i) => (
                        <div key={i} className="bg-white dark:bg-white/5 p-4 rounded-lg mb-3 border border-gray-200 dark:border-white/5 hover:border-blue-500 transition-all cursor-pointer shadow-sm group">
                            <div className="flex justify-between text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500">
                                <span>{msg.from}</span>
                                <span className="text-gray-400 font-normal text-xs">{msg.date}</span>
                            </div>
                            <div className="text-blue-600 dark:text-blue-300 text-sm font-medium mb-1">{msg.subject}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-xs truncate">Click to read full message ID: {msg.id}</div>
                        </div>
                    ))
                )}
            </div>
        </div>

        {/* Info Section */}
        <article className="prose dark:prose-invert max-w-none glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Troubleshooting</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              If emails are not arriving:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>Try clicking <strong>"Change Address"</strong> to get a different domain (e.g., @esiix.com often works better than @1secmail.com).</li>
                <li>Wait at least <strong>10 seconds</strong> after sending the email.</li>
                <li>Click <strong>"Refresh Inbox"</strong> manually.</li>
            </ul>
        </article>
      </div>
    </div>
  );
};
export default TempMail;