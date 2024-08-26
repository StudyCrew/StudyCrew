import React, { useState, useEffect } from 'react';
import cn from 'clsx';

import faqsData from '../../_data/faqs-data';
import { CLASS_NAME } from './const';
import { type FAQsProps } from './types';

const FAQs: React.FC<FAQsProps> = (props: FAQsProps): JSX.Element => {
  const { className } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach((detail, index) => {
      detail.addEventListener('toggle', () => {
        setOpenIndex(detail.open ? index : null);
      });
    });

    return () => {
      detailsElements.forEach((detail) => {
        detail.removeEventListener('toggle', () => {});
      });
    };
  }, []);

  return (
    <div className={cn(CLASS_NAME, className)}>
      <div className="absolute h-[300px] w-[300px] left-1/2 top-[300px] transform -translate-x-1/2 -z-10 bg-transparent"></div>
      <h2 className="text-center">
        <span className="text-primary-blue uppercase">FAQ</span>s
      </h2>
      <p className="text-center px-4">
        We are here to help you with any question you have
      </p>
      <div className="sm:px-[150px] sm:mt-[25px] px-[20px]">
        {faqsData.map((faq, index) => (
          <details
            key={index}
            className={`bg-background-light p-[10px] rounded-md shadow-custom-light mb-[15px] transition-all duration-300 ease-in-out
              ${openIndex === index ? '!bg-white shadow-custom-dark' : ''}`}
            open={openIndex === index}
          >
            <summary className={`text-[1.2rem] font-medium cursor-pointer
                ${openIndex === index ? 'pb-[5px] border-b border-black border-dashed bg-white' : ''}`}>
              {faq.question}
            </summary>
            <div className={`p-[20px] px-[25px] text-left list-none overflow-hidden transition-max-height duration-300 ease-in-out text-[17px]
                ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0 bg-white'}`}>
              <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
