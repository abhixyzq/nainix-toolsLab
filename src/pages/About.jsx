import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-20 px-6 animate-fade-in min-h-screen">
      <Helmet>
        <title>About Nainix Security | Our Mission & Team</title>
        <meta name="description" content="Learn about Nainix Security, founded by Abhishek Kumar. We provide elite ethical hacking tools and secure web development services." />
        <link rel="canonical" href="https://nainix.xyz/about" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* 1. HERO SECTION */}
        <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Bridging the gap between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Development & Security.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Nainix is not just a tool repository; it's a philosophy. We believe that security shouldn't be an afterthought—it should be the foundation of the modern web.
            </p>
        </div>

        {/* 2. THE FOUNDER STORY (Personal Branding) */}
        <div className="glass p-8 md:p-12 rounded-3xl mb-16 border border-gray-200 dark:border-white/10 shadow-xl flex flex-col md:flex-row gap-10 items-center">
            {/* Avatar / Image Placeholder */}
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden flex items-center justify-center">
                        {/* Yahan aap apni photo laga sakte hain baad mein */}
                        <span className="text-4xl">👨‍💻</span>
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white dark:border-black">
                    FOUNDER
                </div>
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Abhishek Kumar</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Lead Developer & Security Researcher</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    "I started Nainix with a simple goal: to make cybersecurity accessible. As a B.Tech student specializing in AI & ML, I realized that many developers write code without understanding the security implications. Nainix is my answer to that problem—a place where tools are free, privacy is respected, and security is paramount."
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a href="https://github.com/AbhiXYZQ" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-lg text-sm font-bold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">GitHub</a>
                    <a href="mailto:nainixdev@gmail.com" className="px-4 py-2 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-bold hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors">Email Me</a>
                </div>
            </div>
        </div>

        {/* 3. OUR VALUES (Grid) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-8 rounded-2xl border-t-4 border-blue-500">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Privacy First</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We don't sell data. Our tools run client-side whenever possible, ensuring your sensitive information never leaves your device.
                </p>
            </div>
            <div className="glass p-8 rounded-2xl border-t-4 border-purple-500">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Modern Tech</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Built on the bleeding edge using React, Vite, and Tailwind CSS. We optimize for speed, SEO, and user experience.
                </p>
            </div>
            <div className="glass p-8 rounded-2xl border-t-4 border-green-500">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tools without knowledge are dangerous. We provide context, warnings, and guides to promote ethical hacking.
                </p>
            </div>
        </div>

        {/* 4. TECH STACK STRIP */}
        <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Powered By</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold text-gray-400 hover:text-[#61DAFB]">React</span>
                <span className="text-xl font-bold text-gray-400 hover:text-[#38B2AC]">Tailwind</span>
                <span className="text-xl font-bold text-gray-400 hover:text-[#F7DF1E]">JavaScript</span>
                <span className="text-xl font-bold text-gray-400 hover:text-white">Vercel</span>
                <span className="text-xl font-bold text-gray-400 hover:text-[#DD0031]">Vite</span>
            </div>
        </div>

        {/* Back Home */}
        <div className="mt-16 text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">← Back to Home</Link>
        </div>

      </div>
    </div>
  );
};

export default About;