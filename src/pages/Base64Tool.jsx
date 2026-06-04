import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Binary } from 'lucide-react';

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const process = (mode) => {
    if (!input) return;
    try {
      if (mode === 'encode') setOutput(btoa(input));
      else setOutput(atob(input));
    } catch (err) { setOutput("Error: Invalid Base64 String"); }
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Base64 Encode & Decode Online | Nainix Tools</title>
        <meta name="description" content="Convert text to Base64 or decode Base64 strings back to text. Essential tool for developers." />
        <link rel="canonical" href="https://nainix.xyz/tools/base64-converter" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-teal-500 hover:text-teal-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-teal-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-500 mb-4">
                    <Binary size={32} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Base64 Converter</h1>
                <p className="text-gray-600 dark:text-gray-400">Encode and decode data formats.</p>
            </div>

            <textarea placeholder="Type or paste content here..." onChange={(e) => setInput(e.target.value)} className="w-full h-32 glass-input p-4 rounded-xl mb-4 resize-none"></textarea>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
               <button onClick={() => process('encode')} className="bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">ENCODE 🔒</button>
               <button onClick={() => process('decode')} className="bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700">DECODE 🔓</button>
            </div>

            <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10 min-h-[100px] break-all">
               <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Result</div>
               <span className="font-mono text-gray-800 dark:text-teal-300">{output || "Waiting..."}</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Base64Tool;