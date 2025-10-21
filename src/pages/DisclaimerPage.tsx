// app/disclaimer/page.tsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
return (
<div className="min-h-screen bg-black text-white">
{/* Header */}
<nav className="bg-black/80 backdrop-blur-lg border-b border-green-500/20 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<a href="/" className="flex items-center">
<span className="text-2xl font-bold text-white">Cash<span className="text-green-400">Moves</span></span>
</a>
<a href="/" className="text-gray-400 hover:text-green-400 transition">
Back to Home
</a>
</div>
</div>
</nav>

{/* Content */}
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8 flex items-start gap-4">
<AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
<div>
<h2 className="text-xl font-bold text-red-400 mb-2">Important Risk Warning</h2>
<p className="text-gray-300">Trading involves substantial risk. You may lose some or all of your invested capital. Only trade with money you can afford to lose.</p>
</div>
</div>

<h1 className="text-4xl font-bold mb-4">Disclaimer & Risk Warning</h1>
<p className="text-gray-400 mb-8">Last Updated: October 21, 2025</p>

<div className="prose prose-invert max-w-none">
<p className="text-gray-300 mb-6">
<strong>CashMoves LTD</strong> ("CashMoves," "we," "us," or "our") provides trading education, market analysis, and community services. By accessing our services, you acknowledge and agree to the following disclaimers.
</p>

<Section title="Investment & Trading Risk Disclosure">
<SubSection title="NO FINANCIAL ADVICE">
<p>The information provided by CashMoves is for <strong>educational and informational purposes only</strong> and should not be construed as financial, investment, or trading advice. We are not registered investment advisors, brokers, or financial planners.</p>
</SubSection>

<SubSection title="PAST PERFORMANCE NOT INDICATIVE OF FUTURE RESULTS">
<p>Any references to past performance, win rates, or historical returns are not guarantees of future results. Trading involves substantial risk of loss, and you may lose some or all of your invested capital.</p>
</SubSection>

<SubSection title="HIGH RISK WARNING">
<p>Trading stocks, options, and cryptocurrencies carries a high level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before trading.</p>
<p className="font-bold text-red-400 mt-2">You may lose more than your initial investment when trading options or using leverage.</p>
</SubSection>
</Section>

<Section title="Our Services">
<p className="mb-4">CashMoves provides:</p>
<ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
<li>Educational content about trading strategies</li>
<li>Market analysis and commentary</li>
<li>Trade ideas and signals for educational purposes</li>
<li>Community discussion and networking</li>
</ul>
<p className="mb-4 font-semibold">We do NOT:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Provide personalized financial advice</li>
<li>Manage client funds or accounts</li>
<li>Guarantee profits or returns</li>
<li>Accept responsibility for your trading decisions</li>
</ul>
</Section>

<Section title="Your Responsibility">
<p className="mb-4">You are solely responsible for:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Your own trading decisions</li>
<li>Conducting your own research and due diligence</li>
<li>Understanding the risks involved in trading</li>
<li>Complying with applicable laws and regulations</li>
<li>Any losses incurred from your trading activities</li>
</ul>
</Section>

<Section title="No Guarantees">
<p className="mb-4">We make no representations or warranties regarding:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>The accuracy, completeness, or timeliness of information provided</li>
<li>Future performance of any securities or trading strategies</li>
<li>Your ability to profit from our educational content</li>
<li>Uninterrupted or error-free service</li>
</ul>
</Section>

<Section title="Securities Regulations">
<p>CashMoves does not offer securities, commodities, or investment advisory services that require registration with the SEC, CFTC, or any state securities regulators. Our services are purely educational.</p>
<p className="mt-2">Members are responsible for complying with all applicable securities laws and regulations in their jurisdiction.</p>
</Section>

<Section title="Cryptocurrency Disclaimer">
<p className="mb-4">Cryptocurrencies are highly volatile and speculative. The cryptocurrency market is largely unregulated and subject to significant risks including:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Extreme price volatility</li>
<li>Regulatory uncertainty</li>
<li>Security risks and hacking</li>
<li>Liquidity risks</li>
<li>Potential total loss of investment</li>
</ul>
</Section>

<Section title="Affiliate Relationships">
<p>CashMoves may receive compensation for recommending certain products, services, or brokers. We only recommend products we believe may benefit our members, but these recommendations should not be considered endorsements or guarantees.</p>
</Section>

<Section title="Results Disclaimer">
<p className="font-bold mb-2">Individual results will vary.</p>
<p className="mb-4">Testimonials, case studies, and examples shown are not typical and are not guarantees of what you will achieve. Most traders lose money, especially when starting out.</p>
<p className="mb-2">Statistics and performance data shared by CashMoves:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Represent our own trading results or aggregated member data</li>
<li>May not reflect typical member experience</li>
<li>Should not be relied upon as predictions of your results</li>
<li>Are provided for educational purposes only</li>
</ul>
</Section>

<Section title="International Users">
<p>Our services are provided from the United States. If you access our services from outside the U.S., you are responsible for compliance with local laws and regulations regarding trading and financial services.</p>
</Section>

<Section title="Limitation of Liability">
<p className="font-bold mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
<p className="mb-4">CashMoves, its officers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Your use of our services</li>
<li>Trading losses or missed opportunities</li>
<li>Errors or omissions in our content</li>
<li>Service interruptions or technical issues</li>
<li>Reliance on any information provided</li>
</ul>
</Section>

<Section title="Professional Advice Recommended">
<p className="mb-4">Before making any investment decisions, we strongly recommend consulting with:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>A licensed financial advisor</li>
<li>A qualified tax professional</li>
<li>A legal advisor familiar with securities regulations</li>
</ul>
</Section>

<Section title="Changes to Disclaimer">
<p>We reserve the right to modify this disclaimer at any time. Continued use of our services after changes constitutes acceptance of the updated disclaimer.</p>
</Section>

<Section title="Contact Information">
<p className="font-semibold">CashMoves LTD</p>
<p>Georgia, United States</p>
<p>Email: support@cashmoves.io</p>
</Section>

<div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
<p className="font-bold text-yellow-400 text-lg mb-2">BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT:</p>
<p className="text-gray-300">You have read, understood, and agreed to this disclaimer and accept all risks associated with trading.</p>
<p className="font-bold text-red-400 mt-4">TRADING IS RISKY. ONLY TRADE WITH MONEY YOU CAN AFFORD TO LOSE.</p>
</div>
</div>
</div>

{/* Footer */}
<footer className="bg-black/50 border-t border-green-500/20 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<span className="text-lg font-bold text-white mb-4 md:mb-0">Cash<span className="text-green-400">Moves</span></span>
<div className="flex gap-6 text-sm">
<a href="/disclaimer" className="text-green-400">Disclaimer</a>
<a href="/terms" className="text-gray-400 hover:text-green-400">Terms & Conditions</a>
</div>
</div>
</div>
</footer>
</div>
);
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
return (
<div className="mb-8">
<h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
<div className="text-gray-300 space-y-4">{children}</div>
</div>
);
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
return (
<div className="mb-4">
<h3 className="text-lg font-semibold text-green-400 mb-2">{title}</h3>
<div className="text-gray-300">{children}</div>
</div>
);
}
