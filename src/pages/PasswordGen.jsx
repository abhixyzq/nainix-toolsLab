import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Key, Zap, Copy, Check } from 'lucide-react';

const PasswordGen = () => {
  const [password, setPassword] = useState("Click Generate");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPass = "";
    for (let i = 0; i < 20; i++) newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    setPassword(newPass);
    setCopied(false);
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Strong Password Generator | Secure & Random | Nainix</title>
        <meta name="description" content="Create unhackable, strong passwords instantly. Protect your accounts with our military-grade random password generator." />
        <link rel="canonical" href="https://nainix.xyz/tools/password-generator" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-purple-500 hover:text-purple-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-purple-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="text-center mb-8 relative z-10">
                <div className="inline-block p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-500 mb-4">
                    <Key size={32} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Secure Key Generator</h1>
                <p className="text-gray-600 dark:text-gray-400">Generate 20-character military-grade passwords.</p>
            </div>

            <div className="relative z-10">
                <div className="glass-input p-6 rounded-2xl mb-6 text-center font-mono text-2xl font-bold text-purple-600 dark:text-purple-300 break-all border-purple-500/30">
                    {password}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={generatePassword} className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                      Generate New <Zap size={16} />
                    </button>
                    <button 
                      onClick={() => {navigator.clipboard.writeText(password); setCopied(true)}} 
                      className={`border ${copied ? 'bg-green-500 text-white border-green-500' : 'border-purple-500 text-purple-600 dark:text-purple-300'} py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2`}
                    >
                        {copied ? (
                          <>Copied! <Check size={16} /></>
                        ) : (
                          <>Copy Password <Copy size={16} /></>
                        )}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default PasswordGen;