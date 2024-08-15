import ChatCard from '@/components/widgets/chatcard/ChatCard'
import React from 'react'

const Check: React.FC = () => {
    const profileImageLink1: string = "https://api.dicebear.com/9.x/big-ears/svg?seed=Jasper&backgroundColor=c0aede"
    const profileImageLink2: string = "https://api.dicebear.com/9.x/big-ears/svg?seed=Mia&ear=variant01,variant02,variant03,variant04,variant07,variant08&backgroundColor=ffd5dc"
  
    return (
        <div className="main bg-[#d6d9e0] h-screen flex flex-col justify-center items-center gap-y-5">
            <div className="w-[500px] h-[500px] flex flex-col gap-y-5 bg-white p-5">
                <ChatCard text="hi dude" user={true} profileImageLink={profileImageLink1} />
                <ChatCard text="yes man how are you" otherUser={true} profileImageLink={profileImageLink2} />
                <ChatCard text="i am fine , have you been to the match?" user={true} profileImageLink={profileImageLink1} />
                <ChatCard text="yes i did" otherUser={true} profileImageLink={profileImageLink2} />
                <ChatCard text="so who won?" user={true} profileImageLink={profileImageLink1} />
                <ChatCard text="our team" otherUser={true} profileImageLink={profileImageLink2} />
                <ChatCard text="thats great to hear man, congrats!" user={true} profileImageLink={profileImageLink1} />
            </div>
        </div>
    )
}

export default Check