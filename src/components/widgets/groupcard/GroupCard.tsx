import React from 'react'

interface GroupCardProps {
  key: number
  bannerImageLink: string
  avatarLink: string
  adminName: string
  name: string
  description: string
  members: number
  subject: string
  actionName: string
  handleClickAction: () => void // Typing handleClickAction as a function
}

const GroupCard: React.FC<GroupCardProps> = ({
  key,
  bannerImageLink,
  avatarLink,
  adminName,
  name,
  description,
  members,
  subject,
  actionName,
  handleClickAction
}) => {
  return (
    <div
      key={key}
      className="groupCard w-[360px] h-[280px] flex flex-col rounded-2xl bg-white"
    >
      <div
        className="banner w-full h-[128px] relative rounded-t-2xl"
        style={{
          backgroundImage: `url(${bannerImageLink})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-5 right-5 bg-white z-5 w-fit p-2 rounded-md font-[700] h-[16px] text-[16px] text-center flex justify-center items-center line-clamp-1">
          {subject}
        </div>
      </div>
      <div className="secondpart p-4 flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <span className="name font-[500] text-[26px] text-left line-clamp-1">
            {name}
          </span>
          <div className="flex justify-between">
            <div className="flex gap-x-2 w-fit items-center">
              <img
                className="w-[24px] h-[24px] rounded-full"
                src={avatarLink}
                alt="avatar"
              />
              <span className="font-[500] w-[155px] h-full py-[3px] text-[18px] line-clamp-1 flex items-center">
                {adminName}
              </span>
            </div>
            <div className="members text-[#2353A0] h-full flex items-center text-[16px] font-[500]">
              {members} Members
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm h-fit w-[242px] line-clamp-2">
              {description}
            </div>
            <div
              className="w-fit h-fit py-[10px] px-3 cursor-pointer text-[#3A86FF] text-base border-[1px] border-[#D0D5DD] rounded-md"
              onClick={handleClickAction}
            >
              {actionName}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
