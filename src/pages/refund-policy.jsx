import { PageLayout } from '@/components/Layout';

export default function RefundPolicy() {
  return (
    <PageLayout title="Refund Policy" effectiveDate="January 1, 2024">
      <h2>Digital Products</h2>
      <p>
        Due to the nature of digital content, we generally do not offer refunds 
        for course purchases. However, we will consider refund requests made 
        within 14 days of purchase under exceptional circumstances.
      </p>

      <h2>Subscription Plans</h2>
      <p>
        Monthly subscriptions can be canceled at any time. You will retain access 
        until the end of your billing period. No partial refunds for unused time.
      </p>

      <h2>Technical Issues</h2>
      <p>
        If you experience technical problems preventing course access, contact 
        support@yugtech.com before requesting a refund. We will make reasonable 
        efforts to resolve the issue.
      </p>

      <h2>Refund Process</h2>
      <p>
        To request a refund, email support@yugtech.com with your purchase details. 
        Decisions are made at our discretion and typically processed within 7 business days.
      </p>
    </PageLayout>
  );
}