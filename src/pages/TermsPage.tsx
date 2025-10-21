// app/terms/page.tsx
import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsPage() {
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
<div className="flex items-center gap-3 mb-6">
<FileText className="h-8 w-8 text-green-400" />
<h1 className="text-4xl font-bold">Terms & Conditions</h1>
</div>
<p className="text-gray-400 mb-8">Last Updated: October 21, 2025</p>

<div className="prose prose-invert max-w-none">
<p className="text-gray-300 mb-6">
These Terms & Conditions ("Terms") govern your access to and use of services provided by <strong>CashMoves LTD</strong> ("CashMoves," "we," "us," or "our"), including our website, Discord community, and membership services.
</p>
<p className="text-gray-300 mb-6">
By accessing or using our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
</p>

<Section title="1. Acceptance of Terms">
<p>By creating an account, purchasing a membership, or accessing our services, you:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
<li>Agree to these Terms and our Disclaimer</li>
<li>Represent that you are at least 18 years old</li>
<li>Acknowledge that trading involves substantial risk</li>
<li>Agree to comply with all applicable laws and regulations</li>
</ul>
</Section>

<Section title="2. Services Provided">
<p className="mb-4">CashMoves provides educational services including:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Trading education and market analysis</li>
<li>Trade ideas and signals for educational purposes</li>
<li>Access to private Discord community</li>
<li>Educational resources and tools</li>
<li>Market commentary and insights</li>
</ul>
<p className="font-bold text-green-400 mt-4">Our services are for educational purposes only and do not constitute financial advice.</p>
</Section>

<Section title="3. Membership & Subscriptions">
<SubSection title="3.1 Membership Types">
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li><strong>Free Community:</strong> Access to basic Discord channels and limited content</li>
<li><strong>Premium Community:</strong> Full access to all channels, daily alerts, and premium content</li>
</ul>
</SubSection>

<SubSection title="3.2 Pricing">
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Premium membership: $99/month (subject to change)</li>
<li>Prices are in USD and exclude applicable taxes</li>
<li>Early adopter or promotional pricing may be offered at our discretion</li>
</ul>
</SubSection>

<SubSection title="3.3 Billing">
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Subscriptions are billed monthly on a recurring basis</li>
<li>Payment is processed through Whop or our designated payment processor</li>
<li>You authorize us to charge your payment method automatically each billing cycle</li>
<li>Failed payments may result in immediate suspension or termination of access</li>
</ul>
</SubSection>

<SubSection title="3.4 Free Trials">
<p>If offered, free trials:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
<li>Are limited to new members only</li>
<li>Automatically convert to paid subscription unless cancelled</li>
<li>Require valid payment method on file</li>
</ul>
</SubSection>
</Section>

<Section title="4. Refund Policy">
<div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-4">
<p className="font-bold text-red-400 text-lg">NO REFUNDS unless approved by CashMoves LTD at our sole discretion.</p>
</div>

<p className="mb-2 font-semibold">Refund requests may be considered for:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
<li>Service outages exceeding 48 hours</li>
<li>Duplicate charges or billing errors</li>
<li>Cases of proven fraud or unauthorized charges</li>
</ul>

<p className="mb-2 font-semibold">Refunds will NOT be issued for:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
<li>Trading losses or poor performance</li>
<li>Changed mind or buyer's remorse</li>
<li>Failure to use the service</li>
<li>Dissatisfaction with educational content</li>
<li>Incomplete billing cycles</li>
</ul>

<p className="text-sm text-gray-400">To request a refund review, contact support@cashmoves.io within 7 days of the charge.</p>
</Section>

<Section title="5. Cancellation">
<SubSection title="5.1 Member Cancellation">
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>You may cancel your subscription at any time through your Whop account</li>
<li>Cancellation takes effect at the end of your current billing period</li>
<li>You will retain access until the end of the paid period</li>
<li>No refunds for partial months</li>
</ul>
</SubSection>

<SubSection title="5.2 CashMoves Cancellation">
<p className="mb-2">We reserve the right to suspend or terminate your access immediately for:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Violation of these Terms</li>
<li>Fraudulent or illegal activity</li>
<li>Harassment or abusive behavior toward staff or members</li>
<li>Sharing or reselling our content without permission</li>
<li>Chargebacks or payment disputes</li>
<li>Any conduct we deem harmful to our community</li>
</ul>
</SubSection>
</Section>

<Section title="6. Content & Intellectual Property">
<SubSection title="6.1 Our Content">
<p className="mb-2">All content provided by CashMoves is the intellectual property of CashMoves LTD, including:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Trade alerts and signals</li>
<li>Educational materials and courses</li>
<li>Market analysis and commentary</li>
<li>Tools, indicators, and resources</li>
<li>Discord messages and discussions</li>
</ul>
</SubSection>

<SubSection title="6.2 License">
<p>We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial purposes only.</p>
</SubSection>

<SubSection title="6.3 Restrictions">
<p className="mb-2">You may NOT:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Copy, distribute, or share our content publicly</li>
<li>Resell or commercialize our content or services</li>
<li>Record, screenshot, or redistribute our trade alerts</li>
<li>Use our content to create competing services</li>
<li>Share your account access with others</li>
<li>Automate access to our services (bots, scrapers, etc.)</li>
</ul>
<p className="text-red-400 font-semibold mt-4">Violations may result in immediate termination and legal action.</p>
</SubSection>
</Section>

<Section title="7. User Conduct">
<p className="mb-2">You agree to:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Provide accurate registration information</li>
<li>Maintain the confidentiality of your account</li>
<li>Be respectful to other members and staff</li>
<li>Not engage in illegal activities</li>
<li>Not manipulate markets or engage in securities fraud</li>
<li>Comply with all applicable laws and regulations</li>
</ul>
<p className="mt-4">We reserve the right to remove any content or ban any user who violates these rules.</p>
</Section>

<Section title="8. Third-Party Services">
<p className="mb-4">Our services may integrate with or link to third-party platforms (Discord, Whop, brokers, etc.). We are not responsible for:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>The availability or performance of third-party services</li>
<li>Third-party privacy policies or terms</li>
<li>Losses resulting from third-party service issues</li>
</ul>
</Section>

<Section title="9. Educational Purpose">
<div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
<p className="font-bold text-yellow-400 mb-2">IMPORTANT: All information provided by CashMoves is for educational purposes only.</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>We are not financial advisors</li>
<li>We do not manage client funds</li>
<li>We do not provide personalized financial advice</li>
<li>You are solely responsible for your trading decisions</li>
</ul>
<p className="mt-4 text-gray-300">See our full Disclaimer for complete risk disclosures.</p>
</div>
</Section>

<Section title="10. Disclaimers & Limitations of Liability">
<SubSection title="10.1 No Warranties">
<p className="mb-2">Our services are provided "AS IS" without warranties of any kind, including:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Accuracy or reliability of information</li>
<li>Uninterrupted or error-free service</li>
<li>Fitness for a particular purpose</li>
<li>Non-infringement</li>
</ul>
</SubSection>

<SubSection title="10.2 Limitation of Liability">
<p className="font-bold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
<p className="mb-2">CashMoves shall not be liable for any:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>Trading losses or missed opportunities</li>
<li>Direct, indirect, incidental, or consequential damages</li>
<li>Lost profits or revenue</li>
<li>Service interruptions or technical issues</li>
<li>Errors or omissions in content</li>
</ul>
</SubSection>

<SubSection title="10.3 Maximum Liability">
<p>Our total liability to you shall not exceed the amount you paid to us in the 3 months preceding any claim.</p>
</SubSection>
</Section>

<Section title="11. Dispute Resolution">
<SubSection title="11.1 Governing Law">
<p>These Terms are governed by the laws of the State of Georgia, United States.</p>
</SubSection>

<SubSection title="11.2 Arbitration">
<p>Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Georgia.</p>
<p className="mt-2 font-semibold">You waive your right to participate in class action lawsuits.</p>
</SubSection>
</Section>

<Section title="12. Changes to Terms">
<p>We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
</Section>

<Section title="13. Contact Information">
<p className="font-semibold">CashMoves LTD</p>
<p>Georgia, United States</p>
<p>Email: support@cashmoves.io</p>
<p>Website: https://cashmoves.io</p>
</Section>

<div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-8">
<p className="font-bold text-green-400 text-lg mb-2">BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT:</p>
<ul className="list-disc list-inside space-y-2 text-gray-300">
<li>You have read and understood these Terms</li>
<li>You agree to be bound by these Terms</li>
<li>You understand that trading involves substantial risk</li>
<li>You are solely responsible for your trading decisions</li>
<li>You accept all risks associated with using our services</li>
</ul>
</div>
</div>
</div>

{/* Footer */}
<footer className="bg-black/50 border-t border-green-500/20 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<span className="text-lg font-bold text-white mb-4 md:mb-0">Cash<span className="text-green-400">Moves</span></span>
<div className="flex gap-6 text-sm">
<a href="/disclaimer" className="text-gray-400 hover:text-green-400">Disclaimer</a>
<a href="/terms" className="text-green-400">Terms & Conditions</a>
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
