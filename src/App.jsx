import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Users, Lock, BarChart3, Zap, Shield, ArrowRight, Check } from 'lucide-react';

export default function TradingCompanyApp() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

// Replace these with your actual links
const WHOP_LINK = "https://whop.com/your-product-link";
const DISCORD_LINK = "https://discord.gg/your-invite";

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 20);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
<div className="min-h-screen bg-black relative overflow-hidden">
{/* Animated Background */}
<div className="fixed inset-0 opacity-30">
<div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
</div>

{/* Navigation */}
<nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-green-500/5' : 'bg-transparent'}`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<span className="text-2xl font-bold text-white tracking-tight">Cash<span className="text-green-400">Moves</span></span>
</div>

{/* Desktop Navigation */}
<div className="hidden md:flex space-x-8">
<a href="#features" className="text-gray-400 hover:text-green-400 transition-colors font-medium">Features</a>
<a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors font-medium">Pricing</a>
<a href="#community" className="text-gray-400 hover:text-green-400 transition-colors font-medium">Community</a>
</div>

{/* Desktop CTA */}
<div className="hidden md:flex space-x-4">
<a
href={DISCORD_LINK}
target="_blank"
rel="noopener noreferrer"
className="px-5 py-2.5 text-green-400 border border-green-400/50 rounded-lg hover:bg-green-400/10 hover:border-green-400 transition-all font-medium"
>
Join Discord
</a>
<a
href={WHOP_LINK}
target="_blank"
rel="noopener noreferrer"
className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105"
>
Get Access
</a>
</div>

{/* Mobile menu button */}
<button
className="md:hidden text-white hover:text-green-400 transition-colors"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
</div>
</div>

{/* Mobile Menu */}
{mobileMenuOpen && (
<div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-500/20">
<div className="px-4 pt-2 pb-3 space-y-1">
<a href="#features" className="block px-3 py-2 text-gray-400 hover:text-green-400 transition-colors">Features</a>
<a href="#pricing" className="block px-3 py-2 text-gray-400 hover:text-green-400 transition-colors">Pricing</a>
<a href="#community" className="block px-3 py-2 text-gray-400 hover:text-green-400 transition-colors">Community</a>
<div className="pt-4 space-y-2">
<a
href={DISCORD_LINK}
target="_blank"
rel="noopener noreferrer"
className="block px-3 py-2 text-center text-green-400 border border-green-400 rounded-lg hover:bg-green-400/10 transition-colors"
>
Join Discord
</a>
<a
href={WHOP_LINK}
target="_blank"
rel="noopener noreferrer"
className="block px-3 py-2 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold rounded-lg"
>
Get Access
</a>
</div>
</div>
</div>
)}
</nav>

{/* Hero Section */}
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
<div className="text-center">
<div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm animate-pulse">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-green-400 text-sm font-semibold">12 MEMBERS MAKING MOVES</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
Stop Guessing.
<br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Start Winning.</span>
</h1>
<p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
Get the exact plays from traders who actually win. Real-time alerts, daily breakdowns, and a community that makes money moves together.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a
href={WHOP_LINK}
target="_blank"
rel="noopener noreferrer"
className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
>
Start Making Moves
<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
</a>
<a
href={DISCORD_LINK}
target="_blank"
rel="noopener noreferrer"
className="px-8 py-4 bg-white/5 backdrop-blur text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-all border border-green-500/30 hover:border-green-500/50"
>
Join Free Discord
</a>
</div>
</div>
</div>

{/* Stats Bar */}
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
<StatCard number="73%" label="Win Rate" />
<StatCard number="$2.4M" label="Member Profits" bordered />
<StatCard number="Daily" label="New Picks" />
</div>
</div>

{/* Features Section */}
<div id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What You Get</h2>
<p className="text-gray-400 text-lg">Everything you need to start winning consistently</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<FeatureCard
icon={<Zap className="h-8 w-8" />}
title="Daily Picks"
description="Get the exact plays we're making. No guessing, just actionable moves sent directly to you."
delay="0"
/>
<FeatureCard
icon={<BarChart3 className="h-8 w-8" />}
title="Live Market Breakdowns"
description="Daily analysis and education so you understand WHY we're making each move."
delay="100"
/>
<FeatureCard
icon={<Users className="h-8 w-8" />}
title="Winner's Community"
description="Network with other members who are actually making money. Share wins, learn together."
delay="200"
/>
<FeatureCard
icon={<Lock className="h-8 w-8" />}
title="Members-Only Intel"
description="Premium strategies, tools, and plays that we don't share anywhere else."
delay="300"
/>
<FeatureCard
icon={<Shield className="h-8 w-8" />}
title="Smart Risk Management"
description="Learn how to protect your money and size positions like a pro."
delay="400"
/>
<FeatureCard
icon={<TrendingUp className="h-8 w-8" />}
title="Proven Track Record"
description="Transparent performance. We show our wins AND losses so you know exactly what to expect."
delay="500"
/>
</div>
</div>

{/* Pricing Section */}
<div id="pricing" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h2>
<p className="text-gray-400 text-lg">One plan. Full access. No hidden fees.</p>
</div>
<div className="max-w-md mx-auto">
<div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-2xl hover:shadow-green-500/20">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-black text-sm font-bold shadow-lg">
MOST POPULAR
</span>
</div>
<div className="text-center mb-6 mt-4">
<h3 className="text-2xl font-bold text-white mb-2">Premium Membership</h3>
<p className="text-gray-400">Full access to all features</p>
</div>
<div className="text-center mb-8">
<div className="text-6xl font-bold text-white mb-2">
$25<span className="text-2xl text-gray-400">/mo</span>
</div>
<p className="text-green-400 text-sm font-medium">Cancel anytime</p>
</div>
<ul className="space-y-4 mb-8">
<PricingFeature text="Daily trade alerts and picks" />
<PricingFeature text="Live market analysis & education" />
<PricingFeature text="Private Discord community" />
<PricingFeature text="Exclusive trading strategies" />
<PricingFeature text="Direct access to winning traders" />
<PricingFeature text="Premium tools & indicators" />
</ul>
<a
href={WHOP_LINK}
target="_blank"
rel="noopener noreferrer"
className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-center font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
>
Get Started Now
</a>
</div>
</div>
</div>

{/* Community Section */}
<div id="community" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-12 border border-green-500/30 text-center backdrop-blur-sm hover:border-green-500/50 transition-all">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join The Community</h2>
<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
Connect with winners, share your plays, and get free daily market insights in our Discord.
</p>
<a
href={DISCORD_LINK}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
>
Join Discord Free
<ArrowRight className="h-5 w-5" />
</a>
</div>
</div>

{/* Footer */}
<footer className="relative bg-black/50 border-t border-green-500/20 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center">
<span className="text-lg font-bold text-white">Cash<span className="text-green-400">Moves</span></span>
</div>
<p className="text-gray-500 text-sm">
© 2025 CashMoves. All rights reserved.
</p>
</div>
</div>
</footer>
</div>
);
}

function StatCard({ number, label, bordered }) {
return (
<div className={`text-center ${bordered ? 'md:border-x border-green-500/20 px-4' : ''}`}>
<div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
{number}
</div>
<div className="text-gray-400 font-medium">{label}</div>
</div>
);
}

function FeatureCard({ icon, title, description, delay }) {
return (
<div className="group bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-lg rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1">
<div className="text-green-400 mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
<h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
<p className="text-gray-400 leading-relaxed">{description}</p>
</div>
);
}

function PricingFeature({ text }) {
return (
<li className="flex items-center text-gray-300">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<Check className="h-4 w-4 text-green-400" strokeWidth={3} />
</div>
{text}
</li>
);
}