import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import project_image from '../../public/assets/image.jpg'

import { type ProjectProps } from './types'
import { CLASS_NAME } from './const'
import './style.scss'

const Project: React.FC<ProjectProps> = (props: ProjectProps): JSX.Element => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <div className={finalClassName}>
      <div className={`${CLASS_NAME}-left-column`}>
        <div className={`${CLASS_NAME}-text`}>
          <h3 className={`${CLASS_NAME}-mission-header text-zircon-50`}>
            OUR PROJECT
          </h3>

          <h2 className={`${CLASS_NAME}-mission-title text-zircon-50 slogan`}>
            Transforming Education Together.
          </h2>

          <p className={`${CLASS_NAME}-mission-text text-zircon-50`}>
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

      <div className={`${CLASS_NAME}-right-column`}>
        <Image
          src={project_image}
          alt="Project representation"
          className={`${CLASS_NAME}-image`}
        />

        <div className={`${CLASS_NAME}-image-subtitle`}>
          <div>
            “Every student deserves a dynamic and engaging educational
            experience. Let&apos;s build it together.”
          </div>

          <div className={`${CLASS_NAME}-subtitle-name`}>
            - Jacob, Founder of StudyCrew
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
