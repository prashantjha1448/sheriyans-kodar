import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  return (
    <div 
      onClick={onToggle}
      className="w-full bg-[#121212] border border-white/5 rounded-2xl px-6 md:px-8 py-5 md:py-6 cursor-pointer select-none transition-colors duration-200 hover:bg-[#161616]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-helvetica text-base md:text-xl font-normal text-white text-left">
          {question}
        </span>
        <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 flex-shrink-0">
          {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
        </div>
      </div>
      
      <div
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
          overflow: 'hidden'
        }}
      >
        <div ref={contentRef} className="pt-4 pb-1 text-left">
          <p className="font-helvetica text-white/70 text-sm md:text-base leading-relaxed font-light max-w-[90%] md:max-w-[75%]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '⁠Do I need any prior coding experience to join the Bootcamp?',
      answer: 'Yes, basic programming knowledge is required. This Bootcamp is designed for students who already understand programming fundamentals and want to become industry-ready full stack developers. We start with frontend foundations and gradually move towards advanced backend, DevOps, cloud deployment, and system design, so having basic coding familiarity will help you get the most out of the program.'
    },
    {
      question: 'Will you help me get placed, and what kind of career support is included?',
      answer: 'Yes. Career readiness is built into the batch, not bolted on at the end. You get placement opportunities and dedicated career support, including mock interviews (technical and HR), personal branding workshops to polish your LinkedIn, GitHub, and portfolio, and personality development sessions to sharpen your communication and professional presence. The goal is to make you genuinely hire-ready, not just course-complete.'
    },
    {
      question: '⁠How much time should I dedicate to the Bootcamp every day?',
      answer: 'This is an intensive, full-day learning program. You\'ll spend your day attending live sessions, building projects, practicing coding, participating in activities, and collaborating with peers. The Bootcamp is designed for students who are serious about accelerating their growth and becoming professional software engineers.'
    },
    {
      question: 'Is the curriculum up to date with what companies are actually hiring for?',
      answer: 'Yes the skill stack is deliberately industry-aligned for what companies hire for in 2026. Beyond the core MERN + DevOps track, you\'ll work with tools and practices used by real engineering teams: TanStack Query, Redux Toolkit, Docker, AWS (EC2, ECS, CloudFront, Load Balancers), GitHub Actions for CI/CD, and microservices patterns. The Generative AI bonus track also covers in-demand skills like working with LLM APIs, prompt engineering, embeddings, and RAG pipelines, so your profile stays current with where the industry is heading.'
    },
    {
      question: 'Is accommodation and food included in the Kodr Bootcamp?',
      answer: 'While accommodation and food are not directly provided by Kodr bootcamp, there\'s no need to worry. Our team will help you find affordable and comfortable hostels, PGs, or flats near the campus based on your budget and preferences. Bhopal is a student-friendly city with plenty of good accommodation and food options available at reasonable prices. We\'ll guide you through the process so you can settle in smoothly and focus entirely on your learning journey.'
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative w-full bg-black text-white py-16 md:py-24 border-b border-white/5 scroll-mt-20">
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="font-clash text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center leading-tight">
          Frequently Asked Questions
        </h2>

        {/* Accordions Wrapper */}
        <div className="w-full mt-12 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
