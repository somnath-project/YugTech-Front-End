import { PageLayout } from '@/components/Layout';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function FAQ() {
  return (
    <PageLayout title="Frequently Asked Questions" effectiveDate="January 1, 2024">
      <div className="space-y-6 mt-12">
        {/* <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
          Frequently Asked Questions
        </h2> */}
        
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {[
            {
              question: "How do I access purchased courses?",
              answer: "After purchase, courses are immediately available in your account dashboard. You can access them anytime by logging in."
            },
            {
              question: "Can I download course videos?",
              answer: "For copyright protection, videos are only available for streaming. You can access them online anytime."
            },
            {
              question: "Do you offer certificates?",
              answer: "Yes! Complete all course requirements and pass assessments to earn a verifiable digital certificate."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards and PayPal. Enterprise customers can request invoice payments."
            }
          ].map((faq, index) => (
            <Accordion 
              key={index}
              disableElevation
              sx={{
                border: 'none',
                boxShadow: 'none',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon className="text-gray-600 h-5 w-5" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="p-4 hover:bg-gray-50"
              >
                <Typography component="span" className="text-gray-900 font-medium">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-50 px-4 pb-4 pt-2">
                <Typography className="text-gray-600 text-sm">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}