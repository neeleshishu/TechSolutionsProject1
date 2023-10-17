import React, { useState } from 'react';

const data = [
  {
    "id": 1,
    "title": "What does your company specialize in?",
    "content": "We specialize in developing cutting-edge software solutions and providing IT consulting services to businesses across various industries."
  },
  {
    "id": 2,
    "title": "What technologies do you work with?    ",
    "content": "We are proficient in a wide range of technologies Such as Next.js-13, React.js, Node.js, No code(Wordpress, Bubble.io),Flutter etc."
  },
  {
    "id": 3,
    "title": "How experienced is your team?",
    "content": "Our team comprises highly skilled professionals with an average of 5 years of industry experience, ensuring top-notch expertise in their respective domains."
  },
  {
    "id": 4,
    "title": "What industries do you serve?",
    "content": "We serve a diverse range of industries, including Finance, CRM, Healthcare, E-commerce, Machine learning and AI, and more. Our adaptable solutions cater to specific needs in each sector."
  },
  {
    "id": 5,
    "title": ". How do you ensure data security and privacy?",
    
    "content":"We employ industry-standard encryption protocols, robust access controls, and regular security audits to safeguard your data. Our team adheres to strict privacy policies."
  },
  {
    "id": 6,
    "title": "What is your approach to handling support and maintenance?",
    "content": "We offer comprehensive support and maintenance packages to ensure your software stays up-to-date, secure, and efficient. Our team is available round the clock for any assistance."
  },
  {
    "id": 7,
    "title": "Why Trion Tech for IT Solution?",
    "content": "Trion tech solution has been providing customized software system, mobile application, creative digital solution in versatile UI/UX."
  }
];

const AccordionItem = ({ title, content }) => { // Destructure title and content props
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-b border-blue-500 mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className='FAQ background container p-10 py-14 flex flex-col items-center gap-4'>
      <h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>F.A.Q</h1>
      <h1 className=' text-4xl font-bold text-center'>Frequently Asked <span className='text-blue-500'>Questions</span></h1>

      <div className="accordians grid grid-cols-1">
        {data.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;