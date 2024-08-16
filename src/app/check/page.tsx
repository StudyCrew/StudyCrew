import Notification from '@/components/widgets/notification/Notification'
import React from 'react'

const Check = () => {
  return (
      <div className="flex justify-center items-center h-screen bg-[#e4e7ec]">
          <Notification variant="platform" variant1Data={{size:"small",content:"hello i am",title:"Hello"}}/>
    </div>
  )
}

export default Check