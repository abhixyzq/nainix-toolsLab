import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ToolsHub = () => {
  const tools = [
    { 
      id: 'ip-lookup', 
      name: 'IP Lookup', 
      icon: '📡', 
      desc: 'Trace location & ISP details.', 
      color: 'text-green-500', 
      bg: 'bg-green-500/20',
      path: '/tools/ip-lookup' // ✅ Linked
    },
    { 
      id: 'temp-mail', 
      name: 'Temp Mail', 
      icon: '📧', 
      desc: 'Disposable inbox for OTPs.', 
      color: 'text-blue-500', 
      bg: 'bg-blue-500/20',
      path: '/tools/temp-mail' // ✅ Linked
    },
    { 
      id: 'password', 
      name: 'Key Generator', 
      icon: '🔑', 
      desc: 'Create unbreakable passwords.', 
      color: 'text-purple-500', 
      bg: 'bg-purple-500/20', 
      path: '/tools/password-generator' // ✅ Linked
    },
    { 
      id: 'qr', 
      name: 'QR Maker', 
      icon: '📱', 
      desc: 'Branded QR codes.', 
      color: 'text-cyan-500', 
      bg: 'bg-cyan-500/20', 
      path: '/tools/qr-maker' // ✅ Linked
    },
    { 
      id: 'device', 
      name: 'Device Info', 
      icon: '🕵️‍♂️', 
      desc: 'Browser fingerprinting.', 
      color: 'text-purple-500', 
      bg: 'bg-purple-500/20', 
      path: '/tools/device-info' 
    },
    { 
      id: 'keylogger', name: 'Keylogger', icon: '🎹', desc: 'Spyware simulator.', 
      color: 'text-orange-500', bg: 'bg-orange-500/20', path: '/tools/keylogger' 
    },
    { 
      id: 'jwt', name: 'JWT Decoder', icon: '🔓', desc: 'Debug security tokens.', 
      color: 'text-yellow-500', bg: 'bg-yellow-500/20', path: '/tools/jwt-decoder' 
    },
    {
      id: 'sha', name: 'SHA-256', icon: '🔒', desc: 'Secure hash generator.', color: 'text-red-500', bg: 'bg-red-500/20', path: '/tools/sha256-generator' 
    },
    {
      id: 'pass-strength', name: 'Pass Auditor', icon: '💪', desc: 'Check password strength.', color: 'text-pink-500', bg: 'bg-pink-500/20', path: '/tools/password-strength' 
    },
    {
      id: 'base64', name: 'Base64', icon: '🕶️', desc: 'Encode/Decode text.', color: 'text-teal-500', bg: 'bg-teal-500/20', path: '/tools/base64-converter' 
    },
    {
      id: 'binary', name: 'Binary', icon: '🤖', desc: 'Text to Binary.', color: 'text-lime-500', bg: 'bg-lime-500/20', path: '/tools/binary-translator' 
    },
    {
      id: 'morse', name: 'Morse Code', icon: '📡', desc: 'Secret messaging.', color: 'text-gray-500', bg: 'bg-gray-500/20', path: '/tools/morse-code' 
    },
  ];

  return (
    <div className="pt-36 pb-20 px-6 animate-fade-in">
      <Helmet>
        <title>Hacker's Tools Lab | Nainix Security</title>
        <meta name="description" content="Access free cybersecurity tools: IP Tracker, Temp Mail, Password Generator and more." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Tools Lab</h1>
           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Professional grade utilities for reconnaissance and security testing.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link to={tool.path} key={tool.id} className="group">
                <div className="glass p-8 rounded-3xl h-full hover:border-blue-500/50 transition-all hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-4xl">{tool.icon}</span>
                        <span className={`text-xs ${tool.bg} px-2 py-1 rounded-full ${tool.color} font-bold`}>FREE</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                        {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                        {tool.desc}
                    </p>
                    <div className="flex items-center text-sm font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Launch Tool →
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsHub;