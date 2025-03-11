import { PageLayout } from '@/components/Layout';

export default function CookiePolicy() {
  return (
    <PageLayout title="Cookie Policy" effectiveDate="January 1, 2024">
      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit websites. 
        We use cookies to enhance user experience and analyze site usage.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>Essential cookies: Necessary for site functionality</li>
        <li>Preference cookies: Remember your settings</li>
        <li>Analytics cookies: Track usage patterns</li>
        <li>Marketing cookies: Deliver relevant ads</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can control cookies through browser settings. Note that disabling 
        cookies may affect website functionality.
      </p>

      <h2>Third-Party Cookies</h2>
      <p>
        We use Google Analytics and other third-party services that may set 
        their own cookies. We don't control these cookies.
      </p>
    </PageLayout>
  );
}