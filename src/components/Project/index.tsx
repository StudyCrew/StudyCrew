import React from 'react'
import Image from 'next/image'

import PROJECT_IMAGE_JPG from 'public/assets/project-image.jpg' assert { type: 'jpg' }

import './style.css'

const Project = (): JSX.Element => {
  return (
    <div className="project-main-div">
      <div className="project-left-column">
        <div className="project-text">
          <h3 className="project-mission-header text-zircon-50">OUR PROJECT</h3>
          <h2 className="project-mission-title text-zircon-50 slogan">
            Transforming Education Together.
          </h2>
          <p className="project-mission-text text-zircon-50">
            Dedicated to transforming the educational landscape, our platform
            prioritizes accessibility, collaboration, and engagement. We are
            committed to ensure quality education is in everyone’s reach.
            Together, we’re constructing a platform that emphasizes
            collaborative learning. Embracing the spirit of collective knowledge
            and democratizing learning, our project is open-source, ensuring
            continuous innovation and community-driven enhancements.
          </p>
        </div>
      </div>

      <div className="project-right-column">
        <Image
          src={PROJECT_IMAGE_JPG}
          className="project-image"
          alt="Project representation"
        />
        <div className="project-image-subtitle">
          <div>
            “Every student deserves a dynamic and engaging educational
            experience. Let&apos;s build it together.”
          </div>
          <div className="project-subtitle-name">
            - Jacob, Founder of StudyCrew
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
