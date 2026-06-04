import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MorseTool = () => {
  const [out, setOut] = useState("");
  const toMorse = (e) => {
      const text = e.target.value.toUpperCase();
      const morseCode = { 'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': ' / ' };
      setOut(text.split('').map(char => morseCode[char] || char).join(' '));
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Morse Code Translator | Text to Morse | Nainix</title>
        <meta name="description" content="Translate text to Morse Code dots and dashes. Send secret messages like a pro." />
        <link rel="canonical" href="https://nainix.xyz/tools/morse-code" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-gray-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-gray-200 dark:bg-white/10 text-4xl mb-4">📡</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Morse Code</h1>
                <p className="text-gray-600 dark:text-gray-400">Encode secret messages.</p>
            </div>

            <input type="text" placeholder="Type secret message..." onChange={toMorse} className="w-full glass-input p-4 rounded-xl mb-6" />
            
            <div className="bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-200 dark:border-white/10 min-h-[100px] flex items-center justify-center">
                <span className="text-2xl font-mono text-yellow-600 dark:text-yellow-400 tracking-widest leading-loose animate-pulse">
                    {out || "... --- ..."}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default MorseTool;