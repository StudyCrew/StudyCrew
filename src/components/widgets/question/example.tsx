import React from 'react'
import QuestionItem from '@/components/widgets/question/QuestionItem'

const Example = () => {
  return (
    <div className={'w-[456px] bg-white mx-auto my-auto'}>
      <QuestionItem
        profileUrl={''}
        title={'How to use tailwind css in next js'}
        userName={'John Doe'}
        replies={5}
        votes={10}
      />
    </div>
  )
}

export default Example
