import React, { useEffect, useRef } from 'react'

import Button from '@/components/Button'
import teamMembers from '@/data/teamData'

import './style.css'

const Team = (): JSX.Element => {
  const scrollContainer = useRef(null)

  // Function to continuously scroll horizontally
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
        setTimeout(requestAnimationFrame.bind(null, step), 10) // Add a delay of 100 milliseconds
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

  // Duplicate team members for a continuous effect
  const allMembers = [...teamMembers, ...teamMembers]

  return (
    <div className="team-component">
      <div className="head-title">
        <h2 className="heading">
          Our <span className="heading">Team</span>
        </h2>
        <p>
          Our team of talented and open-minded individuals makes Study Crew one
          of the most diverse sets of collaborators in the world.
        </p>
      </div>
      <div className="bg">
        <div className="team-cards" ref={scrollContainer}>
          {allMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.avatar.src} alt={member.name} />
              <h5>{member.name}</h5>
              <p className="role">{member.role}</p>
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
