import { useState } from "react";
import ShredderCorpProjCard from "./ShredderCorpProjCard";
import projects from "../data/scProjects";
import faqs from "../data/faqs";

function ShredderCorp() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const projs = projects.map((project) => {
    return (
      <ShredderCorpProjCard
        key={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        button={project.button}
        projLink={project.projLink}
      />
    );
  });

  const toggleAnswer = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="my-24 w-full py-4 items-center sm:px-8 px-4">
      <div className="max-w-screen-xl m-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl">
          Welcome to the Shredderverse
        </h1>
        <p className="text-lg text-center py-4 px-8">
          Here are some projects conceived & created by the Shredderz.
        </p>

        <div className="mb-12 w-full">
          <div className="max-w-7xl mx-auto h-auto flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {projs}
            </div>
          </div>
        </div>

        <p className="text-lg text-center py-4 px-8">
          Confused? Us too. Peruse some of our FAQs for more info.
        </p>
        <div className="max-w-3xl mx-auto my-8 space-y-4 md:my-10">
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
                <span className="flexext-lg font-semibold text-black">
                  {faq.question}
                </span>
                <span className="flex text-lg font-semibold text-black">
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
                </span>
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
