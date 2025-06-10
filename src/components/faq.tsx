import React from "react";

const faqs = [
  {
    question: "What is Kiteflyer?",
    answer: "Kiteflyer is an event management platform designed to simplify and streamline the planning process for organizers of all types.",
  },
  {
    question: "Who can use Kiteflyer?",
    answer: "Kiteflyer is perfect for event planners, corporate organizers, and freelance coordinators looking for an intuitive and collaborative tool.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a free trial for all new users to explore the platform and its features.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="text-left">
            <h3 className="text-xl font-semibold text-gray-700">
              {faq.question}
            </h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
