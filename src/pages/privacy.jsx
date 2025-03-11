import { PageLayout } from '@/components/Layout';

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy" effectiveDate="January 1, 2024">
      <h2>Information We Collect</h2>
      <p>
        We collect personal information you provide when creating an account, 
        purchasing courses, or contacting support. This may include name, email, 
        and payment information.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use your information to:
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process transactions</li>
          <li>Improve user experience</li>
          <li>Communicate with you</li>
        </ul>
      </p>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data. 
        However, no method of electronic transmission is 100% secure.
      </p>

      <h2>Third Parties</h2>
      <p>
        We do not sell your personal information. We may share data with trusted 
        service providers necessary for operating our services.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data 
        by contacting us at privacy@yugtech.com.
      </p>
    </PageLayout>
  );
}