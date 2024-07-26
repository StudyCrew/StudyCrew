import React, { useEffect, useRef } from 'react'
import Button from '@/app/(landing)/_components/Button'
import { TEAM_MEMBERS } from '@/data'
import TeamCard from './TeamCard'

const Team = (): JSX.Element => {
  const scrollContainer = useRef(null)

  const scrollHorizontally = (): void => {
    if (scrollContainer.current) {
      const step = (): void => {
        const scrollContainerCurrent =
          scrollContainer.current as HTMLDivElement | null
        if (scrollContainerCurrent) {
          scrollContainerCurrent.scrollLeft += 1
        }
        if (
          scrollContainerCurrent &&
          scrollContainerCurrent.scrollLeft >=
            scrollContainerCurrent.scrollWidth / 2
        ) {
          scrollContainerCurrent.scrollLeft = 0
        }
        setTimeout(requestAnimationFrame.bind(null, step), 10)
      }

      requestAnimationFrame(step)
    }
  }

  useEffect(() => {
    scrollHorizontally()
  }, [])

  const handleClick = (): void => {
    window.location.href = 'https://forms.gle/CBKSjovcWeRGWbg2A'
  }

  return (
    <div className="min-h-[1000px] text-center w-full my-[100px] mt-[100px]">
      <div className="w-full flex flex-col items-center text-gray-400 text-center m-auto">
        <h2 className="font-bold">
          Our <span className="text-[#3a86ff]">Team</span>
        </h2>
        <p className="text-center px-4 w-[65%]">
          Our team of talented and open-minded individuals makes Study Crew one
          of the most diverse sets of collaborators in the world.
        </p>
      </div>
      <div className="bg-arrow-bg bg-full bg-top mb-[50px] ">
        <div
          className="flex overflow-x-hidden items-center gap-[30px] custom_team_scroll"
          ref={scrollContainer}
        >
          {TEAM_MEMBERS.map((team, i: number) => (
            <TeamCard {...team} key={i} />
          ))}
        </div>
      </div>

      <div className="w-screen border-t-2 border-b-2 border-[#f2f7ff] py-[25px]">
        <p className="mb-[20px]">Interested in becoming part of our team?</p>
        <Button
          onClick={() => {
            handleClick()
          }}
        >
          Join Us
        </Button>
      </div>
    </div>
  )
}

export default Team
