import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { QrCode } from 'lucide-react';

const QrGenerator = () => {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generate = () => {
    if(!text) return;
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${text}&ecc=H&margin=2`);
  };

  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>Free Custom QR Code Maker | Nainix Tools</title>
        <meta name="description" content="Generate high-quality QR codes for links, text, and wifi. Free online QR code generator with no sign-up required." />
        <link rel="canonical" href="https://nainix.xyz/tools/qr-maker" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/tools" className="inline-flex items-center text-sm text-cyan-500 hover:text-cyan-600 mb-6">← Back to Tools Lab</Link>

        <div className="glass p-8 rounded-3xl mb-16 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="inline-block p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 mb-4">
                        <QrCode size={32} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Pro QR Maker</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Create permanent QR codes for your business, wifi, or website links instantly.</p>
                    
                    <input type="text" placeholder="Enter link (e.g., https://nainix.xyz)" onChange={(e) => setText(e.target.value)} className="w-full glass-input p-4 rounded-xl mb-4" />
                    <button onClick={generate} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all">Create QR Code</button>
                </div>

                <div className="flex justify-center items-center bg-gray-50 dark:bg-black/20 rounded-3xl p-6 min-h-[300px] border border-gray-200 dark:border-white/5">
                    {qrUrl ? (
                        <div className="bg-white p-4 rounded-xl shadow-xl animate-fade-in">
                            <img src={qrUrl} alt="Generated QR" className="w-48 h-48 mix-blend-multiply" />
                        </div>
                    ) : (
                        <div className="text-gray-400 text-center text-sm">QR Preview will appear here</div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default QrGenerator;