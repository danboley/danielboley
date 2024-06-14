import { useState } from "react";

function ShredderCorp() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const toggleAnswer = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqs = [
    {
      question: "What exactly is the Shredderverse?",
      answer:
        "The Shredderverse is an extended universe (much like Marvel, DC, and other nerdy movies) created by the Shredderz. The characters and plotlines in this universe are convoluted to the point of sheer confusion and chaos.",
    },
    {
      question: "Is the Shredderverse real? If so, where is it?",
      answer:
        "Unlike Marvel, this universe does not exist in the movies, rather it exists in a weird plane somewhere between reality, Steve Buscemi's fever dream, the Upside Down from Stranger Things, and a Slack workspace.",
    },
    {
      question: "Who are the Shredderz?",
      answer:
        "The Shredderz are a mysterious group of individuals, and while their motives are often unclear, one thing is certain: they love to shred.",
    },
    {
      question:
        "You're not actually going to clarify anything or provide useful answers, are you?",
      answer: "Nope!",
    },
    {
      question: "Is Branson Bear real?",
      answer: "Only if you truly believe in your heart that he is.",
    },
  ];

  return (
    <div className="my-24 w-full py-4 items-center sm:px-8 px-4">
      <div className="max-w-screen-xl m-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl">
          Welcome to the Shredderverse
        </h1>
        <p className="text-lg text-center pt-4 px-8">
          Here are links to some projects conceived and created by the
          Shredderz.
        </p>

        {/* Insert SC / Branson / Rule Book cards here */}

        <p className="text-lg text-center pt-4 px-8">
          Confused? Us too. Peruse some of our FAQs for more info.
        </p>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                id={"question" + index}
                data-state="closed"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  id={"arrow" + index}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 black ${
                    isOpen[index]
                      ? "transform rotate-0"
                      : "transform rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                id={"answer" + index}
                style={{ display: isOpen[index] ? "block" : "none" }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShredderCorp;
