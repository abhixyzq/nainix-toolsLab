import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PassStrength = () => {
  const [crackTime, setCrackTime] = useState("Enter Password");

  const checkStrength = (e) => {
    const pwd = e.target.value;
    if(!pwd) { setCrackTime("Waiting..."); return; }
    const length = pwd.length;
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    
    if (length < 6) setCrackTime("Instantly ❌");
    else if (length < 10 && !hasSpecial) setCrackTime("2 Hours ⚠️");
    else if (length < 12 && hasUpper && hasNumber) setCrackTime("3 Months 🛡️");
    else if (length >= 12 && hasSpecial && hasUpper && hasNumber) setCrackTime("400 Years ✅");
    else setCrackTime("2 Days ⚠️");
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Password Strength Checker | How Secure is My Password?</title>
        <meta name="description" content="Test your password security against brute-force attacks. Get instant feedback on crack time and strength." />
        <link rel="canonical" href="https://nainix.xyz/tools/password-strength" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-pink-500 hover:text-pink-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-pink-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-pink-100 dark:bg-pink-900/30 text-4xl mb-4">💪</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Password Auditor</h1>
                <p className="text-gray-600 dark:text-gray-400">Estimate how long it takes to crack your password.</p>
            </div>

            <input type="text" placeholder="Test a password..." onChange={checkStrength} className="w-full glass-input p-4 rounded-xl mb-6" />

            <div className="flex items-center justify-between bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
               <span className="text-gray-500 font-bold uppercase text-xs">Estimated Crack Time</span>
               <span className={`text-xl font-bold font-mono ${crackTime.includes("Years") ? "text-green-500" : crackTime.includes("Instantly") ? "text-red-500" : "text-yellow-500"}`}>
                 {crackTime}
               </span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default PassStrength;