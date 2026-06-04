import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Unlock } from 'lucide-react';

const JwtTool = () => {
  const [jwtOutput, setJwtOutput] = useState(null);

  const decodeJwt = (e) => {
    const token = e.target.value;
    if (!token) { setJwtOutput(null); return; }
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      setJwtOutput(JSON.parse(jsonPayload));
    } catch (error) { setJwtOutput("Invalid Token"); }
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>JWT Decoder Online | JSON Web Token Debugger | Nainix</title>
        <meta name="description" content="Decode and debug JWT tokens instantly. View header, payload, and signature details. Client-side processing for 100% security." />
        <link rel="canonical" href="https://nainix.xyz/tools/jwt-decoder" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-yellow-500 hover:text-yellow-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-yellow-500/20 shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 mb-4">
                    <Unlock size={32} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JWT Debugger</h1>
                <p className="text-gray-600 dark:text-gray-400">Decode JSON Web Tokens without sending them to a server.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 dark:text-white">Encoded Token</label>
                    <textarea 
                        onChange={decodeJwt}
                        placeholder="Paste eyJhbGciOi..." 
                        className="w-full h-64 glass-input p-4 rounded-xl font-mono text-xs focus:ring-yellow-500/50 resize-none text-gray-600 dark:text-gray-300"
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 dark:text-white">Decoded Payload</label>
                    <div className="w-full h-64 bg-gray-50 dark:bg-black/40 rounded-xl p-4 border border-gray-200 dark:border-white/10 overflow-auto">
                        <pre className="text-xs font-mono text-gray-800 dark:text-green-400">
                            {jwtOutput ? JSON.stringify(jwtOutput, null, 2) : "// Decoded data will appear here..."}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default JwtTool;