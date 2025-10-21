// src/pages/PrivacyPage.jsx
import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  const LAST_UPDATED = 'October 21, 2025';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="bg-black/80 backdrop-blur-lg border-b border-emerald-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded">
              <span className="text-2xl font-bold text-white">
                Cash<span className="text-emerald-400">Moves</span>
              </span>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title row */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-8 w-8 text-emerald-400" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-gray-400 mb-8">Last Updated: {LAST_UPDATED}</p>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>CashMoves Ltd.</strong> (“CashMoves,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>

              <Section id="information-we-collect" title="1. Information We Collect">
                <SubSection title="1.1 Information You Provide">
                  <p className="mb-4">We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Account Information:</strong> Name, email address, username, password</li>
                    <li><strong>Payment Information:</strong> Processed securely through Whop (we do not store payment card details)</li>
                    <li><strong>Profile Information:</strong> Optional information you choose to add to your profile</li>
                    <li><strong>Communications:</strong> Messages you send to us or post in our community</li>
                  </ul>
                </SubSection>

                <SubSection title="1.2 Automatically Collected Information">
                  <p className="mb-4">When you access our services, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click data</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Cookies and Similar Technologies:</strong> Used for authentication, preferences, and analytics</li>
                    <li><strong>Discord Activity:</strong> When you join our Discord, your Discord username and activity in our server</li>
                  </ul>
                </SubSection>

                <SubSection title="1.3 Information from Third Parties">
                  <p className="mb-4">We may receive information from:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Whop:</strong> Subscription and payment information</li>
                    <li><strong>Discord:</strong> User information when you join our server</li>
                    <li><strong>Analytics Providers:</strong> Aggregated usage statistics</li>
                  </ul>
                </SubSection>
              </Section>

              <Section id="how-we-use-info" title="2. How We Use Your Information">
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><strong>Provide Services:</strong> Deliver trade alerts, market analysis, and community access</li>
                  <li><strong>Process Payments:</strong> Manage subscriptions and billing</li>
                  <li><strong>Communicate:</strong> Send service updates, alerts, and marketing (with your consent)</li>
                  <li><strong>Improve Services:</strong> Analyze usage patterns and enhance user experience</li>
                  <li><strong>Security:</strong> Detect fraud, abuse, and protect our community</li>
                  <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
                  <li><strong>Customer Support:</strong> Respond to your questions and requests</li>
                </ul>
              </Section>

              <Section id="how-we-share" title="3. How We Share Your Information">
                <SubSection title="3.1 We Share Information With:">
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li><strong>Service Providers:</strong> Third parties who help us operate our services (Whop, Discord, hosting providers, analytics)</li>
                    <li><strong>Other Members:</strong> Your username and activity may be visible to other community members</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                  </ul>
                </SubSection>

                <SubSection title="3.2 We Do NOT:">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Sell your personal information to third parties</li>
                    <li>Share your trading activity publicly without permission</li>
                    <li>Provide your email to marketers or spammers</li>
                  </ul>
                </SubSection>
              </Section>

              <Section id="retention" title="4. Data Retention">
                <p className="mb-4">We retain your information for as long as:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Your account is active</li>
                  <li>Needed to provide you services</li>
                  <li>Required for legal, tax, or accounting purposes</li>
                  <li>Necessary to resolve disputes or enforce agreements</li>
                </ul>
                <p className="mt-4">
                  After account termination, we may retain certain information in anonymized form for analytics and improvement purposes.
                </p>
              </Section>

              <Section id="your-rights" title="5. Your Rights and Choices">
                <SubSection title="5.1 Access and Control">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correct:</strong> Update inaccurate or incomplete information</li>
                    <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Export:</strong> Receive your data in a portable format</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails (service emails may still be sent)</li>
                  </ul>
                </SubSection>

                <SubSection title="5.2 Cookies">
                  <p>You can control cookies through your browser settings. Note that disabling cookies may limit functionality.</p>
                </SubSection>

                <SubSection title="5.3 Do Not Track">
                  <p>We do not currently respond to Do Not Track (DNT) browser signals.</p>
                </SubSection>

                <SubSection title="5.4 How to Exercise Your Rights">
                  <p>
                    To exercise any of these rights, contact us at:{' '}
                    <a href="mailto:privacy@cashmoves.io" className="text-emerald-400 hover:underline">privacy@cashmoves.io</a>
                  </p>
                </SubSection>
              </Section>

              <Section id="security" title="6. Security">
                <p className="mb-4">We implement reasonable security measures to protect your information, including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication and password protection</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                </ul>
                <p className="text-yellow-400 font-semibold">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we
                  cannot guarantee absolute security.
                </p>
              </Section>

              <Section id="third-parties" title="7. Third-Party Services">
                <SubSection title="7.1 Whop">
                  <p>
                    Payment processing is handled by Whop. Their privacy policy is available at:{' '}
                    <a
                      href="https://whop.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      whop.com/privacy
                    </a>
                  </p>
                </SubSection>

                <SubSection title="7.2 Discord">
                  <p>
                    Our community operates on Discord. Discord's privacy policy is available at:{' '}
                    <a
                      href="https://discord.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      discord.com/privacy
                    </a>
                  </p>
                </SubSection>

                <SubSection title="7.3 Third-Party Links">
                  <p>
                    Our services may contain links to third-party websites. We are not responsible for their privacy practices. Please
                    review their privacy policies.
                  </p>
                </SubSection>
              </Section>

              <Section id="children" title="8. Children's Privacy">
                <p className="mb-4">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children.
                </p>
                <p>
                  If you believe we have collected information from a child, please contact us immediately at{' '}
                  <a href="mailto:privacy@cashmoves.io" className="text-emerald-400 hover:underline">privacy@cashmoves.io</a> and we will delete it.
                </p>
              </Section>

              <Section id="intl-transfers" title="9. International Data Transfers">
                <p className="mb-4">
                  Your information may be transferred to and processed in the United States or other countries where our service providers
                  operate.
                </p>
                <p>
                  By using our services, you consent to the transfer of your information to countries that may have different data
                  protection laws than your country of residence.
                </p>
              </Section>

              <Section id="ccpa" title="10. California Privacy Rights">
                <p className="mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Right to know what personal information we collect, use, and share</li>
                  <li>Right to delete personal information (subject to exceptions)</li>
                  <li>Right to opt-out of the sale of personal information (we do not sell your information)</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:privacy@cashmoves.io" className="text-emerald-400 hover:underline">privacy@cashmoves.io</a>
                </p>
              </Section>

              <Section id="changes" title="11. Changes to This Privacy Policy">
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to our website.
                </p>
                <p className="mb-4">We will notify you of material changes via:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Email notification</li>
                  <li>Prominent notice on our website</li>
                  <li>Discord announcement</li>
                </ul>
                <p className="mt-4">
                  Your continued use of our services after changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </Section>

              <Section id="contact" title="12. Contact Us">
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <p className="font-semibold text-white mb-2">CashMoves Ltd.</p>
                  <p className="text-gray-300">Georgia, United States</p>
                  <p className="text-gray-300">
                    Email:{' '}
                    <a href="mailto:privacy@cashmoves.io" className="text-emerald-400 hover:underline">privacy@cashmoves.io</a>
                  </p>
                  <p className="text-gray-300">
                    Support:{' '}
                    <a href="mailto:support@cashmoves.io" className="text-emerald-400 hover:underline">support@cashmoves.io</a>
                  </p>
                  <p className="text-gray-300 mt-2">
                    Website:{' '}
                    <a href="https://cashmoves.io" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      https://cashmoves.io
                    </a>
                  </p>
                </div>
              </Section>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mt-8">
                <p className="font-bold text-emerald-400 text-lg mb-2">Your Privacy Matters</p>
                <p className="text-gray-300">
                  We are committed to protecting your privacy and handling your data responsibly. If you have any concerns, please reach out to us.
                </p>
              </div>
            </div>
          </div>

          {/* On-page TOC (optional) */}
          <aside className="w-full lg:w-64 lg:sticky lg:top-20 h-max">
            <div className="rounded-xl border border-emerald-500/20 bg-white/5 backdrop-blur p-4">
              <p className="text-sm font-semibold text-gray-200 mb-3">On this page</p>
              <nav className="space-y-2 text-sm">
                {[
                  { href: '#information-we-collect', label: '1. Information We Collect' },
                  { href: '#how-we-use-info', label: '2. How We Use Your Info' },
                  { href: '#how-we-share', label: '3. How We Share' },
                  { href: '#retention', label: '4. Data Retention' },
                  { href: '#your-rights', label: '5. Your Rights' },
                  { href: '#security', label: '6. Security' },
                  { href: '#third-parties', label: '7. Third-Party Services' },
                  { href: '#children', label: "8. Children's Privacy" },
                  { href: '#intl-transfers', label: '9. International Transfers' },
                  { href: '#ccpa', label: '10. California Rights' },
                  { href: '#changes', label: '11. Changes' },
                  { href: '#contact', label: '12. Contact' },
                ].map(i => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="block text-gray-400 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 py-0.5"
                  >
                    {i.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-emerald-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-lg font-bold text-white">
              Cash<span className="text-emerald-400">Moves</span>
            </span>
            <div className="flex gap-6 text-sm">
              <a href="/disclaimer" className="text-gray-400 hover:text-emerald-400">Disclaimer</a>
              <a href="/terms" className="text-gray-400 hover:text-emerald-400">Terms &amp; Conditions</a>
              <a href="/privacy" className="text-emerald-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-8 scroll-mt-24">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-300 space-y-4">{children}</div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-emerald-400 mb-2">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}
