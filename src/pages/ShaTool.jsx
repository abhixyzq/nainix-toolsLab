import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const ShaTool = () => {
  const [hash, setHash] = useState("");

  const generateHash = async (e) => {
    const text = e.target.value;
    if (!text) { setHash(""); return; }
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>SHA-256 Hash Generator Online | Encrypt Text | Nainix</title>
        <meta name="description" content="Convert text to SHA-256 hash instantly. Secure, client-side encryption tool for developers and security testing." />
        <link rel="canonical" href="https://nainix.xyz/tools/sha256-generator" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-red-500 hover:text-red-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-red-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-500 mb-4">
                    <Lock size={32} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">SHA-256 Encryption</h1>
                <p className="text-gray-600 dark:text-gray-400">Secure one-way hashing algorithm.</p>
            </div>

            <input type="text" placeholder="Type text to hash..." onChange={generateHash} className="w-full glass-input p-4 rounded-xl mb-6" />
            
            <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10 min-h-[100px] break-all relative">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Output Hash</div>
                {hash ? (
                    <span className="text-lg font-mono font-bold text-green-600 dark:text-green-400">{hash}</span>
                ) : (
                    <span className="text-gray-400">Waiting for input...</span>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
export default ShaTool;