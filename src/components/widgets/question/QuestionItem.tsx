'use client'

import React from 'react'
import { CustomAvatar } from '@/components/ui/avatar'
import { shortenName } from '@/utils'
import { ArrowFatUp, Chats } from '@phosphor-icons/react'

interface QuestionItemProps {
  title: string
  userName: string
  profileUrl: string
  replies: number
  votes: number
}

const QuestionItem: React.FC<QuestionItemProps> = (props) => {
  return (
    <div
      className={'px-4 py-2 flex justify-between flex-1 font-sans font-medium'}
    >
      <div className={'space-y-2'}>
        <h3 className={'text-lg font-medium'}>{props.title}</h3>
        <div className={'flex gap-5'}>
          <div className={'flex items-center gap-2'}>
            <Chats height={16} width={16} color={'#3A86FF'} />
            <p className={'text-sm font-medium'}>{props.replies} Replies</p>
          </div>

          <div className={'flex items-center gap-2'}>
            <CustomAvatar
              image={props.profileUrl}
              imageFallback={shortenName(props.userName)}
              size={'sm'}
            />
            <p className={'text-sm font-medium'}>{props.userName}</p>
          </div>
        </div>
      </div>

      <div className={'items-center flex gap-2'}>
        <h5 className={'text-sm font-medium'}>{props.votes}</h5>
        <ArrowFatUp height={16} width={16} color={'#3A86FF'} />
      </div>
    </div>
  )
}

export default QuestionItem
