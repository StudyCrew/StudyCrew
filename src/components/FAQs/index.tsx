import React from 'react'
import classNames from 'classnames'

import faqsData from '@/data/faqsData'

import { CLASS_NAME } from './const'
import { type FAQsProps } from './types'

import './style.css'

const FAQs: React.FC<FAQsProps> = (props: FAQsProps): JSX.Element => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <div className={finalClassName}>
      <div className="blue-neon-mist faq-mist-1"></div>
      <h2 className="faqs-heading">
        <span>FAQ</span>s
      </h2>
      <p className="faqs-des">
        We are here to help you with any question you have
      </p>
      <div className="questions-list">
        {faqsData.map((faq, index) => (
          <details className="question" key={index} open={false}>
            <summary className="question-head">{faq.question}</summary>
            <div className="question-des">
              <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export default FAQs
