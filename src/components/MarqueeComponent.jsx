import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import CountUp from 'react-countup';

const reviews = [
  // Java Topics
  {
    body: "Arrays in Java",
  },
  {
    body: "Static Keyword",
  },
  {
    body: "Classes and Objects",
  },
  {
    body: "Collections Framework",
  },
  {
    body: "File Handling in Java",
  },
  {
    body: "Multithreading",
  },
  {
    body: "Generics in Java",
  },
  {
    body: "Lambda Expressions",
  },
  {
    body: "Java Stream API",
  },
  {
    body: "Annotations in Java",
  },

  // Salesforce Topics
  {
    body: "Salesforce Apex Programming",
  },
  {
    body: "Salesforce Triggers and Workflows",
  },
  {
    body: "Lightning Web Components (LWC)",
  },
  {
    body: "SOQL and SOSL in Salesforce",
  },
  {
    body: "Salesforce Security and Authentication",
  },
  {
    body: "Salesforce REST and SOAP API",
  },
  {
    body: "Salesforce Admin Basics",
  },
  {
    body: "Salesforce Deployment and Release Management",
  },
  {
    body: "Salesforce Integration Patterns",
  },
  {
    body: "Salesforce Marketing Cloud Overview",
  },

  // Python Topics
  {
    body: "Python Basics",
  },
  {
    body: "Object-Oriented Programming in Python",
  },
  {
    body: "Python Web Frameworks (Django & Flask)",
  },
  {
    body: "Data Science with Python",
  },
  {
    body: "Python for Automation (Scripting)",
  },
  {
    body: "Machine Learning with Python",
  },
  {
    body: "Deep Learning with TensorFlow & PyTorch",
  },
  {
    body: "Python for Cybersecurity",
  },
  {
    body: "Python for Web Scraping (BeautifulSoup & Scrapy)",
  },
  {
    body: "Python Testing and Debugging",
  }
];

const firstRow = reviews.slice(0, reviews.length / 4);
const secondRow = reviews.slice(reviews.length / 4, reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2, (3 * reviews.length) / 4);
const fourthRow = reviews.slice((3 * reviews.length) / 4);

const ReviewCard = function (props) {
  const { body } = props;
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "backdrop-blur-lg transition-all hover:scale-105",
        // Light mode
        "border-gray-200 bg-white/10 hover:bg-white/20",
        // Dark mode
        "dark:border-gray-700/50 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
      )}
    >
      <blockquote className="text-sm font-medium text-center">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {body}
        </span>
      </blockquote>
    </figure>
  );
};

export function MarqueeComponent() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden py-12 md:py-24 mt-10">
      <div className="w-full px-4 text-center">
        <h2 className="text-3xl font-bold md:text-5xl lg:text-5xl mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {/* <NumberTicker
              value={300}
              className="inherit text-inherit"
            /> */}
            <CountUp
              end={300}
              duration={6}
              enableScrollSpy
              scrollSpyOnce
              className="inherit text-inherit"
            />
            + Topics
          </span>
          <br />
          <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-2">
            {/* Master Python, Java, and Salesforce from Fundamentals to Advanced Concepts. */}
          </span>
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-7xl py-8">
        <div className="flex flex-col gap-y-4">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {fourthRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-950" />
      </div>

      <p className="mt-8 text-center text-lg text-gray-600 dark:text-gray-400">
        Start your learning journey today with hands-on projects and expert
        mentors!
      </p>
    </div>
  );
}
