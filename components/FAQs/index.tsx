import React from 'react'
import classNames from 'classnames'

import { CLASS_NAME, FAQS_DATA } from './const'
import { type FAQsProps, type FAQEntry } from './types'

import './style.css'

const FAQs: React.FC<FAQsProps> = (props: FAQsProps): JSX.Element => {
	const { className } = props
	const finalClassName = classNames(CLASS_NAME, className)

	return (
		<div className={finalClassName}>
			<div className={`${CLASS_NAME}-mist-1 blue-neon-mist`}></div>
			<h2><span>FAQ</span>s</h2>

			<p className={`${CLASS_NAME}-description`}>
        We are here to help you with any question you have
			</p>

			<div className={`${CLASS_NAME}-questions-list`}>
				{FAQS_DATA.map((faq: FAQEntry, i: number): JSX.Element => (
					<details
						key={i}
						open={false}
						className={`${CLASS_NAME}-question}`}
					>
						<summary>{faq.question}</summary>

						<div className={`${CLASS_NAME}-question-description`}>
							<span dangerouslySetInnerHTML={{ __html: faq.answer }} />
						</div>
					</details>
				))}
			</div>
		</div>
	)
}

export default FAQs
