import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Keyboard } from 'lucide-react';

const Keylogger = () => {
  const [keyLogs, setKeyLogs] = useState([]);

  const handleKeyLogging = (e) => {
    const timestamp = new Date().toLocaleTimeString();
    // Keep last 8 logs
    setKeyLogs(prev => [`[${timestamp}] Key Captured: "${e.key}"`, ...prev].slice(0, 8));
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Online Keylogger Simulator | Hacking Demo | Nainix</title>
        <meta name="description" content="Educational Keylogger demonstration tool. See how spyware captures keystrokes in real-time. Learn to protect yourself from keylogging attacks." />
        <link rel="canonical" href="https://nainix.xyz/tools/keylogger" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-orange-500/20 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-10">
                <div className="inline-block p-3 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 mb-4">
                    <Keyboard size={32} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Keylogger Demo</h1>
                <p className="text-gray-600 dark:text-gray-400">Spyware simulation for educational purposes.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Area */}
                <div>
                    <label className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">Test Zone (Type here)</label>
                    <textarea 
                        onKeyDown={handleKeyLogging}
                        placeholder="Type passwords, messages, or anything..." 
                        className="w-full h-48 glass-input p-4 rounded-xl resize-none focus:ring-orange-500/50"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-2">*Nothing you type is stored or sent to any server.</p>
                </div>

                {/* Hacker Terminal Logs */}
                <div className="bg-black rounded-xl p-4 font-mono text-sm h-48 overflow-hidden border border-gray-800 shadow-inner relative">
                    <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] text-red-500">REC</span>
                    </div>
                    <div className="text-green-500 mb-2 border-b border-gray-800 pb-1">{'>>'} ATTACKER_CONSOLE_V1</div>
                    <div className="space-y-1">
                        {keyLogs.length === 0 ? (
                            <span className="text-gray-600 animate-pulse">Waiting for keystrokes...</span>
                        ) : (
                            keyLogs.map((log, i) => (
                                <div key={i} className="text-orange-400 typewriter">{log}</div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>

        <article className="prose dark:prose-invert max-w-none glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Keyloggers Work</h2>
            <p className="text-gray-600 dark:text-gray-300">
                A keylogger is a type of surveillance software (spyware) that has the capability to record every keystroke you make to a log file. This demo shows how easily input can be intercepted if a script is running on a compromised website.
            </p>
        </article>
      </div>
    </div>
  );
};
export default Keylogger;