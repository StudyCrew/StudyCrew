import React from 'react'

interface ChatCardProps {
  text: string
  profileImageLink: string
  user?: boolean
  otherUser?: boolean
}

const ChatCard: React.FC<ChatCardProps> = ({
  text,
  profileImageLink,
  user,
  otherUser
}) => {
  return (
    <>
      {user && (
        <div className="flex justify-start">
          <div className="flex gap-x-2 max-w-[300px] items-start">
            <div className="image">
              <img
                src={profileImageLink}
                alt="avatarlink"
                className="w-[31px] h-[31px] rounded-full"
              />
            </div>
            <div className="px-3 py-2 text-sm rounded-t-2xl rounded-br-2xl bg-[#d0d4dd]">
              {text}
            </div>
          </div>
        </div>
      )}
      {otherUser && (
        <div className="flex justify-end">
          <div className="flex gap-x-2 max-w-[300px] items-start">
            <div className="px-3 py-2 text-sm rounded-t-2xl rounded-bl-2xl bg-[#3a86fe] text-white">
              {text}
            </div>
            <div className="image">
              <img
                src={profileImageLink}
                alt="avatarlink"
                className="w-[31px] h-[31px] rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatCard
