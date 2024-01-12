import React from 'react'
import './Project.css'
import project_image from '../../public/assets/project-image.jpg'
import Image from 'next/image'

/**
 * Project Component
 *
 * This component displays information about the project, including:
 * - A description of the project's mission and goals.
 * - An image representing the project.
 * - A subtitle overlay on the image with a quote from the founder.
 */
const Project = (): JSX.Element => {
  return (
    <div className="project-main-div">
      {/* Left column containing project description */}
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

      {/* Right column containing project image and subtitle */}
      <div className="project-right-column">
        <Image
          src={project_image}
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
