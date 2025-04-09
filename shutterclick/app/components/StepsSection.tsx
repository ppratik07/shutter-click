import React from "react";

const steps = [
  {
    number: "01.",
    title: "Get in Touch",
    description: "We will discuss your desired shoot and answer any questions.",
  },
  {
    number: "02.",
    title: "Fill Out the Form",
    description:
      "Once you’ve made up your mind, complete the forms & tasks, and I will get you booked and ready to go.",
  },
  {
    number: "03.",
    title: "Picture Time",
    description:
      "The big day! We’ll meet, talk, connect, and get to know each other. In the meantime, I will be preparing the equipment so we can jump right into it.",
  },
  {
    number: "04.",
    title: "Delivering Photos",
    description:
      "In one or two weeks, you will receive your edited pictures, to see yourself in all your natural glory.",
  },
];

const StepsSection = () => {
  return (
    <section className="px-6 py-16 bg-white flex flex-row">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div key={index}>
            <p className="text-sm text-gray-500 mb-2">{step.number}</p>
            <h3 className="uppercase tracking-widest text-sm font-medium text-gray-700 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 text-[10px] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
