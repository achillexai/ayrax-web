import Navbar from "../components/Navbar";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-6 mt-16 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
            Terms & Conditions for AyraX
          </h1>

          <div className="text-sm text-gray-400 mb-8 text-center">
            <p>Last Updated: 25th February 2025</p>
          </div>

          <div className="mb-8 text-justify">
            <p>
              Welcome to AyraX, an advanced AI-powered assistant designed to
              enhance your digital experience. By accessing or using AyraX, you
              agree to comply with these Terms & Conditions. Please read them
              carefully before using our services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-justify">
                By signing up for or using AyraX, you confirm that you are at
                least 18 years old or have legal parental/guardian consent and
                that you agree to these Terms & Conditions.
              </p>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">2. User Accounts</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  You must provide accurate and complete registration
                  information.
                </li>
                <li>
                  You are responsible for maintaining the security of your
                  account.
                </li>
                <li>
                  Any unauthorized access or security breach should be reported
                  immediately.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  3. Privacy & Data Security
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  AyraX collects and processes personal data in accordance with
                  our Privacy Policy.
                </li>
                <li>
                  We implement strict security measures to protect your
                  information.
                </li>
                <li>
                  Your data will not be sold or shared without consent, except
                  as required by law.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">4. Usage Guidelines</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  You agree not to misuse AyraX or engage in unlawful
                  activities.
                </li>
                <li>
                  You must not attempt to hack, disrupt, or manipulate the
                  service.
                </li>
                <li>
                  We reserve the right to suspend or terminate accounts
                  violating these terms.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  5. AI Limitations & Liability
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  AyraX is an AI-driven assistant and may not always provide
                  accurate or contextually appropriate responses.
                </li>
                <li>
                  We do not guarantee the completeness or reliability of the
                  information provided by the AI.
                </li>
                <li>
                  AyraX is not responsible for any decisions made based on
                  AI-generated outputs.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  6. Subscription & Payments (If Applicable)
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>Some features may require a paid subscription.</li>
                <li>
                  All payments are processed securely, and refunds are subject
                  to our refund policy.
                </li>
                <li>Prices and billing terms may change with prior notice.</li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  7. Termination & Suspension
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  We reserve the right to suspend or terminate access for
                  violating our terms.
                </li>
                <li>
                  You may discontinue use at any time, but no refunds will be
                  issued for terminated accounts due to violations.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  8. Intellectual Property
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  AyraX and its content, including software, branding, and
                  trademarks, are owned by ACHILLEX AIRA INTELLIGENCE PRIVATE
                  LIMITED.
                </li>
                <li>
                  You may not copy, modify, or distribute any part of our
                  platform without permission.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  9. Changes to These Terms
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-justify">
                <li>
                  We may update these terms periodically, with changes reflected
                  on our app and website.
                </li>
                <li>
                  Continued use after updates constitutes acceptance of the new
                  terms.
                </li>
              </ul>
            </section>

            <section>
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-2xl font-semibold">
                  10. Contact Information
                </h2>
              </div>
              <p className="text-justify mb-4">
                For any questions or concerns regarding these Terms &
                Conditions, contact us at:
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">📧</span> Email:
                admin@achillexairaintelligence.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌐</span> Website: ayrax.ai
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 text-justify">
            <p className="font-medium">
              By using AyraX, you acknowledge that you have read, understood,
              and agree to these Terms & Conditions.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              © 2025 ACHILLEX AIRA INTELLIGENCE PRIVATE LIMITED. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
