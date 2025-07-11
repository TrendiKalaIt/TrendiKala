import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import icons from Lucide React

const FAQPage = () => {
  // State to manage which FAQ item is currently open within the selected topic
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  // State to manage the currently selected topic from the left navigation
  const [selectedTopic, setSelectedTopic] = useState('General Questions'); // Default selected topic

  // Data structure for topics and their associated FAQs
  const faqData = [
    {
      topic: 'General Questions',
      faqs: [
        {
          question: 'Pellentesque ac bibendum tortor?',
          answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. This is the answer for general question 1.',
        },
        {
          question: 'In mi nulla, fringilla vestibulum?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is the answer for general question 2.',
        },
        {
          question: 'How do I get started?',
          answer: 'To get started, simply navigate to our registration page and follow the instructions. This is the answer for general question 3.',
        },
      ],
    },
    {
      topic: 'Account Management',
      faqs: [
        {
          question: 'How do I change my name?',
          answer: 'You can change your name ',
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion from your profile settings, but please note this action is irreversible. This is the answer for account management question 2.',
        },
        {
          question: 'What if I forget my username?',
          answer: 'You can recover your username by providing your registered email address on the login page. This is the answer for account management question 3.',
        },
      ],
    },
    {
      topic: 'Billing & Payments',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards (Visa, MasterCard, Amex) and PayPal. This is the answer for billing question 1.',
        },
        {
          question: 'How do I update my billing information?',
          answer: 'Billing information can be updated in your account dashboard under the "Billing" section. This is the answer for billing question 2.',
        },
        {
          question: 'When will I be charged?',
          answer: 'Charges are typically processed on the first day of each billing cycle. This is the answer for billing question 3.',
        },
      ],
    },
    {
      topic: 'Technical Support',
      faqs: [
        {
          question: 'My application is not loading, what should I do?',
          answer: 'Please try clearing your browser cache and cookies, or try a different browser. If the issue persists, contact support. This is the answer for technical support question 1.',
        },
        {
          question: 'How do I report a bug?',
          answer: 'You can report bugs directly through our in-app feedback tool or by emailing our support team. This is the answer for technical support question 2.',
        },
      ],
    },
    {
              topic: 'Technical Support 2',
      faqs: []
    }
    // add more topics and their respective FAQs here
  ];

  // Find the FAQs for the currently selected topic
  const currentTopicFAQs = faqData.find(data => data.topic === selectedTopic)?.faqs || [];

  // Reset openFAQIndex when the selected topic changes
  useEffect(() => {
    setOpenFAQIndex(null);
  }, [selectedTopic]);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen   p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Topic Navigation */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold mb-6 ">Topic Navigation</h2>
          <nav className="space-y-4 mb-12">
            {faqData.map((data, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(data.topic)}
                className={`block w-full text-left py-2 px-4 rounded-md transition-colors duration-200
                  ${selectedTopic === data.topic
                    ? 'bg-green-500 text-white font-semibold'
                    : 'hover:text-white hover:bg-green-600'
                  }`}
              >
                {data.topic}
              </button>
            ))}
          </nav>

          {/* You can keep or remove "Related Topic" as needed, it's static in this example */}
          <h2 className="text-xl font-bold mb-6 ">Related Topic</h2>
          <nav className="space-y-4">
            {/* This section remains static for demonstration, you could make it dynamic too */}
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Quisque a a ante, at volutpat enim.
            </a>
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Suspendisse eleifend nunc non.
            </a>
          </nav>
        </div>

        {/* Right Side: Common Questions (FAQs) */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-4xl font-bold mb-8 ">{selectedTopic}</h1>
          <div className="space-y-4">
            {currentTopicFAQs.length > 0 ? (
              currentTopicFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 cursor-pointer transition-all duration-300
                    ${openFAQIndex === index ? 'bg-green-300' : 'bg-green-100'}
                  `}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    {openFAQIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-white" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  {openFAQIndex === index && (
                    <p className="mt-4 ">{faq.answer}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-lg">No FAQs available for this topic yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
