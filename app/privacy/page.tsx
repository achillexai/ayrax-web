import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-6 mt-16 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
            Privacy Policy for AyraX
          </h1>

          <div className="text-sm text-gray-400 mb-8 text-center">
            <p>Effective Date: 25th February 2025</p>
            <p>Last Updated: 6th April 2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-justify">
                Welcome to AyraX, operated by ACHILLEX AIRA INTELLIGENCE PRIVATE
                LIMITED. We are committed to protecting your privacy and
                ensuring the security of your data. This Privacy Policy explains
                how we collect, use, and protect your information when you use
                AyraX.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-justify mb-4">
                We may collect the following types of information:
              </p>
              <p className="text-justify mb-2">
                <span className="font-medium">Personal Information:</span> Name,
                email address, phone number, and any other details provided
                during registration.
              </p>
              <p className="text-justify mb-2">
                <span className="font-medium">Usage Data:</span> IP address,
                device type, browser version, and interactions within the app.
              </p>
              <p className="text-justify">
                <span className="font-medium">AI Interaction Data:</span>{" "}
                Conversations with AyraX may be processed to improve AI
                responses, but we do not store or share sensitive personal
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-justify mb-4">We use your data to:</p>
              <p className="text-justify mb-2">
                Provide, maintain, and improve AyraX&apos;s functionality.
              </p>
              <p className="text-justify mb-2">
                Personalize your experience and offer relevant features.
              </p>
              <p className="text-justify mb-2">
                Enhance security and prevent fraud.
              </p>
              <p className="text-justify">Comply with legal obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-justify">
                We implement strong encryption and security protocols to protect
                your data from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Third-Party Sharing
              </h2>
              <p className="text-justify mb-4">
                We do not sell your personal data. However, we may share
                information with:
              </p>
              <p className="text-justify mb-2">
                <span className="font-medium">Service Providers:</span> To
                improve performance, hosting, and analytics.
              </p>
              <p className="text-justify">
                <span className="font-medium">Legal Authorities:</span> If
                required by law or to protect against fraud or security threats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Your Rights & Choices
              </h2>
              <p className="text-justify mb-4">You have the right to:</p>
              <p className="text-justify mb-2">
                Access, update, or delete your personal data.
              </p>
              <p className="text-justify mb-2">
                Opt out of certain data collection or processing.
              </p>
              <p className="text-justify">
                Request a copy of the data we store about you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-justify">
                AyraX includes a kids-only login screen to ensure a secure
                experience for children. We do not knowingly collect data from
                users under 13 without parental consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Google Workspace APIs
              </h2>
              <p className="text-justify">
                We hereby explicitly affirm that Google Workspace APIs are not
                used to develop, improve, or train generalized/non-personalized
                AI and/or ML models. Any integration with Google services is
                solely for the purpose of providing specific functionality
                within our application and not for AI/ML model development or
                training.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Changes to this Policy
              </h2>
              <p className="text-justify">
                We may update this Privacy Policy periodically. We will notify
                users of significant changes via email or in-app notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-justify mb-4">
                For any privacy-related concerns, contact us at:
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">📧</span>{" "}
                admin@achillexairaintelligence.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> ACHILLEX AIRA INTELLIGENCE
                PRIVATE LIMITED
              </p>
            </section>
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
