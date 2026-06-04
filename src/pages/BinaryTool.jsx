import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BinaryTool = () => {
  const [out, setOut] = useState("");
  const toBinary = (e) => {
    const input = e.target.value;
    let res = "";
    for (let i = 0; i < input.length; i++) res += input[i].charCodeAt(0).toString(2) + " ";
    setOut(res);
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Text to Binary Converter | Translator | Nainix</title>
        <meta name="description" content="Translate text into binary code (0s and 1s) instantly. Learn how computers understand data." />
        <link rel="canonical" href="https://nainix.xyz/tools/binary-translator" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-lime-500 hover:text-lime-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-lime-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-lime-100 dark:bg-lime-900/30 text-4xl mb-4">🤖</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Text to Binary</h1>
                <p className="text-gray-600 dark:text-gray-400">Speak the language of computers.</p>
            </div>

            <input type="text" placeholder="Enter text..." onChange={toBinary} className="w-full glass-input p-4 rounded-xl mb-6" />
            
            <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10 min-h-[150px] overflow-auto">
               <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Binary Output</div>
               <span className="font-mono text-lime-600 dark:text-lime-400 leading-relaxed tracking-widest">{out || "010101..."}</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default BinaryTool;