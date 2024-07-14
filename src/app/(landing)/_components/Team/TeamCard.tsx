import Image from 'next/image'
import React from 'react'

interface TeamCardProps {
  avatar: string
  name: string
  role: string
}

const TeamCard = ({ name, avatar, role }: TeamCardProps): JSX.Element => {
  return (
    <div className="flex-none p-[10px] py-[50px] m-[10px] grid place-items-center min-w-[280px] rounded-[20px] bg-white/70 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[25px]">
      <Image className="max-w-[110px] w-full rounded-full bg-zircon-300" src={avatar} alt={name} />
      <h5 className="text-[25px] m-[15px]">{name}</h5>
      <p className="">{role}</p>
    </div>
  )
}

export default TeamCard
