import React, { useState } from "react";
import "../assets/css/FAQPage.css";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    category: "Orders",
    questions: [
      {
        question: "How can I track my order?",
        answer: "You can track your order from the 'My Orders' section in your account.",
      },
      {
        question: "Can I cancel my order?",
        answer: "Yes, you can cancel your order within 10 minutes of placing it.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept Credit/Debit cards, UPI, Net Banking, and Wallets.",
      },
      {
        question: "Is Cash on Delivery available?",
        answer: "Yes, Cash on Delivery is available for select locations.",
      },
    ],
  },
  {
    category: "Refunds & Returns",
    questions: [
      {
        question: "How do I request a refund?",
        answer: "Go to 'My Orders', select the order, and click 'Request Refund'.",
      },
      {
        question: "How long does it take to process a refund?",
        answer: "Refunds typically take 5-7 business days.",
      },
    ],
  },
];

const FAQPage = () => {
  const [search, setSearch] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const filteredFAQs = faqData.flatMap((category) =>
    category.questions.filter((q) =>
      q.question.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      {/* Search Bar */}
      <div className="faq-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FAQ Sections */}
      {search
        ? filteredFAQs.map((q, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => handleToggle(index)}>
                {q.question}
                {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openQuestion === index && (
                <div className="faq-answer">{q.answer}</div>
              )}
            </div>
          ))
        : faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2>{category.category}</h2>
              {category.questions.map((q, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => handleToggle(catIndex + "-" + index)}>
                    {q.question}
                    {openQuestion === catIndex + "-" + index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openQuestion === catIndex + "-" + index && (
                    <div className="faq-answer">{q.answer}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
    </div>
  );
};

export default FAQPage;
