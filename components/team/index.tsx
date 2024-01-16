import classNames from 'classnames'
import React, { useCallback, useEffect, useRef } from 'react'

import teamMembers from '../../lib/data/teamData'

import Button from '../Button'

import { type TeamProps } from './types'
import { CLASS_NAME } from './const'
import './style.scss'

const Team: React.FC<TeamProps> = (props: TeamProps): JSX.Element => {
  const { className } = props

  const scrollContainer = useRef<HTMLDivElement>(null)
  const finalClassName = classNames(CLASS_NAME, className)

  const scrollHorizontally = useCallback((): void => {
    const step = (): void => {
      if (scrollContainer.current === null) {
        return
      }

      scrollContainer.current.scrollLeft += 1

      if (
        scrollContainer.current.scrollLeft >=
        scrollContainer.current.scrollWidth / 2
      ) {
        scrollContainer.current.scrollLeft = 0
      }
    }

    setTimeout(requestAnimationFrame.bind(null, step), 10)
    requestAnimationFrame(step)
  }, [scrollContainer])

  useEffect(() => {
    scrollHorizontally()
  }, [])

  const onJoinUsClick = useCallback((): void => {
    window.location.href = 'https://forms.gle/CBKSjovcWeRGWbg2A'
  }, [])

  const allMembers = [...teamMembers, ...teamMembers]

  return (
    <div className={finalClassName}>
      <div className={`${CLASS_NAME}-header`}>
        <h2>
          Our <span>Team</span>
        </h2>
        <p>
          Our team of talented and open-minded individuals makes Study Crew one
          of the most diverse sets of collaborators in the world.
        </p>
      </div>
      <div className={`${CLASS_NAME}-wrapper`}>
        <div className={`${CLASS_NAME}-cards`} ref={scrollContainer}>
          {allMembers.map((member, index) => (
            <div className={`${CLASS_NAME}-card`} key={index}>
              <img src={member.avatar.src} alt={member.name} />
              <h5>{member.name}</h5>
              <p className="role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${CLASS_NAME}-join`}>
        <p>Interested in becoming part of our team?</p>
        <Button onClick={onJoinUsClick}>Join Us</Button>
      </div>
    </div>
  )
}

export default Team
