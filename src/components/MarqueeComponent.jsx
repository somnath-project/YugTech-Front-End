import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
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
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="text-sm text-center">{body}</blockquote>
    </figure>
  );
};

export function MarqueeComponent() {
  return (
    <div className="relative flex h-[450px] w-[95%] max-w-1xl mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="absolute top-4 text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold">300+ topics taught...</h2>
        <p className="mt-2 text-sm md:text-lg">Begin your learning journey with us today!</p>
      </div>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
