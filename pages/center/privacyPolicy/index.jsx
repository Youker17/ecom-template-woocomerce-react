import Layout from "../../../components/Layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="lg:w-[60vw] mt-40 mx-auto space-y-4">
        <h1 className="w-full text-center font-extrabold text-3xl text-orange-500">
          Privacy Policy
        </h1>

        <p>Effective Date: [Insert Effective Date]</p>

        <h2 className="indent-1">1. Introduction</h2>

        <p>
          Welcome to Remacify ("us", "we", or "our"). We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your data when you use our website or interact
          with our services. By accessing our website or using our services, you
          consent to the practices described in this policy.
        </p>

        <h2 className="indent-1">2. Information We Collect</h2>

        <p>
          a. Personal Information:
          <li>- Full Name</li>
          <li>- Email Address</li>{" "}
          <li>- Phone Number</li>
          <li>- Billing and Shipping Address</li>
          <li>- Payment Information (if applicable)</li>
          <li>- Account Credentials (username, password)</li>
        </p>

        <p>
          <h2 className="indent-2">b. Non-Personal Information:</h2>
          <li>- Browser Type</li>
          <li>- Device Type</li>
          <li>- IP Address</li>
          <li>- Cookies and Usage Data</li>
          <li>- Website Usage Analytics</li>
        </p>

        <h2 className="indent-1">3. How We Use Your Information</h2>

        <p>
          We use the information we collect for the following purposes:
          <li>- Process your orders and payments securely and efficiently.</li>
          <li>
            - Provide customer support and respond to inquiries or requests.
          </li>
          <li>
            - Improve our website and services based on your feedback and
            interactions.
          </li>
          <li>
            - Send promotional offers, marketing communications, and newsletters
            to keep you informed about our products and services.
          </li>
          <li>
            - Comply with legal and regulatory requirements, including fraud
            prevention and data protection laws.
          </li>
        </p>

        <h2 className="indent-1">4. How We Protect Your Information</h2>

        <p>
          We take data security seriously and implement appropriate technical
          and organizational measures to protect your personal information from
          unauthorized access, disclosure, or alteration. These security measures
          include encryption, secure socket layer (SSL) technology, firewalls,
          access controls, and regular security assessments. However, please
          note that no method of transmission over the Internet or electronic
          storage is 100% secure. While we strive to protect your data, we
          cannot guarantee its absolute security.
        </p>

        <h2 className="indent-1">5. Third-Party Services</h2>

        <p>
          We may use third-party services to assist us in operating our website
          and conducting our business. These third-party service providers may
          have access to your personal information but are obligated not to
          disclose or use it for any other purpose. We ensure that these
          third-party services adhere to privacy and security standards
          compatible with our policies.
        </p>

        <h2 className="indent-1">6. Cookies and Tracking Technologies</h2>

        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience and gather information about how you use our
          website. Cookies are small text files stored on your device to track
          website activity and remember certain preferences. You can control or
          disable cookies through your browser settings, but please note that
          doing so may affect certain features of our website.
        </p>

        <h2 className="indent-1">7. Your Choices and Rights</h2>

        <p>
          You have the right to access, update, or delete your personal
          information held by us. If you wish to exercise these rights or opt-out
          of receiving marketing communications from us, please contact us at
          [Insert Contact Email]. We will respond to your requests in a timely
          and transparent manner.
        </p>

        <h2 className="indent-1">8. Data Retention</h2>

        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes for which it was collected and to comply with
          legal obligations. If you request the deletion of your data, we will do
          so in accordance with applicable laws and regulations.
        </p>

        <h2 className="indent-1">9. Children's Privacy</h2>

        <p>
          Our website and services are not intended for children under the age
          of 13. We do not knowingly collect personal information from
          individuals under 13 years of age. If we become aware that we have
          collected personal information from a child without parental consent,
          we will take steps to remove the information promptly. If you are a
          parent or guardian and believe that your child has provided us with
          personal information, please contact us immediately.
        </p>

        <h2 className="indent-1">10. Changes to this Privacy Policy</h2>

        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any significant changes by posting the
          updated policy on our website.
        </p>

        <h2 className="indent-1">11. Contact Us</h2>

        <p>
          If you have any questions, concerns, or requests regarding this Privacy
          Policy, please contact us at [Insert Contact Email].
        </p>

        <p>
          Thank you for trusting Remacify with your personal information. We
          value your privacy and are committed to protecting your data.
        </p>
      </div>
    </Layout>
  );
}
