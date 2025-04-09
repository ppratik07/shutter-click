'use client'
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "This is my first photoshoot, what should I know?",
    answer: "Come relaxed, comfortable, and remember just be yourself. I will guide you through posing.",
  },
  {
    question: "How many pictures will I receive?",
    answer:
      "Depending on the package you choose, you will get anywhere from 15 - 60 digital images that will be uploaded to an online gallery. This will include the option to purchase additional images if you wish, as well as prints and other products with your images.",
  },
  {
    question: "What type of photography do you offer?",
    answer: `Here is a list of session types I offer:

• Events
• Head Shots
• Portfolio Building
• Cake Smash
• Birthdays
• Family
• Anniversaries
• Seasonal
• Children's Portraits
• Mini Sessions
• Senior Portraits
• Milk Bath
• Couples
• Fashion
• Interior
• Maternity
• Elopement
• Portrait
• Boudoir
• Branding
• Architecture
• Graduation
• Custom Requests`,
  },
  {
    question: "What should I wear?",
    answer: "No need to worry as I will be sending you a 'What to wear' guide upon booking.",
  },
  {
    question: "How do I choose a location?",
    answer: "You can refer to my recommended locations guide. Just go to the page named 'Shoot Locations' in the menu.",
  },
  {
    question: "What time should I book for?",
    answer: "For all outdoor sessions, it is best to booked around sunrise or sunset as this will give you the best results.For all studio location times will vary based on availability, starting at 9am until 6pm.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="uppercase tracking-widest text-sm text-gray-600 mb-16">FAQ</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        {faqData.map((item, index) => (
          <div key={index} className="space-y-4">
            <button
              onClick={() => toggleIndex(index)}
              className="flex items-start justify-between w-full text-left group"
            >
              <span className="uppercase tracking-widest text-xs text-gray-700 group-hover:text-black transition-all">
                {item.question}
              </span>
              <span className="ml-4 mt-1 text-gray-400 group-hover:text-black transition-all">
                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {activeIndex === index && item.answer && (
              <div className="text-gray-600 text-[10px] leading-relaxed">
                {item.answer.includes('•') ? (
                  <ul className="list-disc pl-4 space-y-1">
                    {item.answer
                      .split('\n')
                      .filter(line => line.trim().startsWith('•'))
                      .map((line, idx) => (
                        <li key={idx}>{line.replace('•', '').trim()}</li>
                      ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
