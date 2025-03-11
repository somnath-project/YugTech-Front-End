import { PageLayout } from '@/components/Layout';

export default function TermsOfService() {
  return (
    <PageLayout title="Terms of Service" effectiveDate="January 1, 2025">
      <h2>Introduction</h2>
      <p>
        Welcome to YugTech Academy! These Terms of Service govern your use of our website 
        and services. By accessing or using our services, you agree to be bound by these terms.
      </p>

      <h2>Accounts</h2>
      <p>
        When you create an account with us, you must provide accurate information. You are 
        responsible for maintaining the security of your account and for all activities that 
        occur under your account.
      </p>

      <h2>Content</h2>
      <p>
        All course materials, including videos, text content, and assessments are the 
        property of YugTech Academy and are protected by copyright laws.
      </p>

      <h2>Termination</h2>
      <p>
        We may terminate or suspend access to our services immediately, without prior notice, 
        for any reason whatsoever, including without limitation if you breach the Terms.
      </p>

      <h2>Changes</h2>
      <p>
        We reserve the right to modify these terms at any time. We will provide notice 
        of significant changes through our website or email.
      </p>
    </PageLayout>
  );
}