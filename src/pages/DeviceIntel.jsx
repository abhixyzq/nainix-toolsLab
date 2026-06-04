import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DeviceIntel = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    setDeviceInfo({
      browser: navigator.userAgent,
      os: navigator.platform,
      screen: `${window.screen.width}x${window.screen.height}`,
      cores: navigator.hardwareConcurrency + " Logical Cores",
      memory: navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : "Unknown",
      language: navigator.language,
      cookies: navigator.cookieEnabled ? "Enabled" : "Disabled",
      online: navigator.onLine ? "Yes" : "No"
    });
  }, []);

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Device Fingerprint & Browser Info | Nainix Recon</title>
        <meta name="description" content="Check what your browser reveals about your device. View User-Agent, Screen Resolution, CPU Cores, and System details instantly." />
        <link rel="canonical" href="https://nainix.xyz/tools/device-info" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-purple-500 hover:text-purple-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-purple-500/20 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-10">
                <div className="inline-block p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-4xl mb-4">🕵️‍♂️</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Device Intelligence</h1>
                <p className="text-gray-600 dark:text-gray-400">Analysis of your digital fingerprint.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Visual Cards */}
                <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-colors">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Operating System</div>
                    <div className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">{deviceInfo.os || "Analyzing..."}</div>
                </div>

                <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-colors">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Screen Resolution</div>
                    <div className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">{deviceInfo.screen || "Analyzing..."}</div>
                </div>

                <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-colors">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">CPU Architecture</div>
                    <div className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">{deviceInfo.cores || "Analyzing..."}</div>
                </div>

                <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-colors">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">System Language</div>
                    <div className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">{deviceInfo.language || "Analyzing..."}</div>
                </div>
            </div>

            {/* User Agent Raw */}
            <div className="mt-6 glass-input p-4 rounded-xl">
                <div className="text-xs text-gray-500 mb-2">RAW USER AGENT STRING</div>
                <div className="font-mono text-sm text-gray-700 dark:text-gray-300 break-all">
                    {deviceInfo.browser}
                </div>
            </div>
        </div>

        {/* SEO Article */}
        <article className="prose dark:prose-invert max-w-none glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is Browser Fingerprinting?</h2>
            <p className="text-gray-600 dark:text-gray-300">
                Websites can identify you not just by cookies, but by the unique combination of your screen size, fonts, and hardware. This tool shows exactly what data your browser broadcasts to every website you visit.
            </p>
        </article>
      </div>
    </div>
  );
};
export default DeviceIntel;