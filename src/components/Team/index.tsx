import React, { useEffect, useRef } from 'react'

import Button from '@/components/Button'
import { TEAM_MEMBERS } from '@/data'

import './style.css'

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
    <div className="team-component">
      <div className="head-title">
        <h2 className="heading">
          Our <span className="heading">Team</span>
        </h2>
        <p className="text-center px-4">
          Our team of talented and open-minded individuals makes Study Crew one
          of the most diverse sets of collaborators in the world.
        </p>
      </div>
      <div className="bg">
        <div className="team-cards" ref={scrollContainer}>
          {TEAM_MEMBERS.map(({ avatar, name, role }, i: number) => (
            <div className="team-card" key={i}>
              <img src={avatar} alt={name} />
              <h5>{name}</h5>
              <p className="role">{role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="join-team-section">
        <p>Interested in becoming part of our team?</p>
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
