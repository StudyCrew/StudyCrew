import React from 'react'
import Image from 'next/image'

import PROJECT_IMAGE_JPG from 'public/assets/project-image.jpg' assert { type: 'jpg' }

import './style.css'

const Project = (): JSX.Element => {
  return (
    <div className="flex bg-gradient-to-r from-primary-500 to-gradient-500">
      <div className="flex flex-col gap-2 px-11 md:px-36 py-14">
        <h2 className="text-lg font-normal text-zircon-50">Our Project</h2>
        <h3 className="text-5xl font-semibold m-0 text-zircon-50">
          Transforming Education Together.
        </h3>
        <p className="text-zircon-50">
          Dedicated to transforming the educational landscape, our platform
          prioritizes accessibility, collaboration, and engagement. We are
          committed to ensure quality education is in everyone’s reach.
          Together, we’re constructing a platform that emphasizes collaborative
          learning. Embracing the spirit of collective knowledge and
          democratizing learning, our project is open-source, ensuring
          continuous innovation and community-driven enhancements.
        </p>
      </div>

      <div className="hidden md:flex md:flex-auto md:relative md:items-center md:justify-center">
        <Image
          src={PROJECT_IMAGE_JPG}
          className="w-full h-full object-cover"
          alt="Project representation"
        />
        <blockquote className="absolute bottom-0 left-0 flex flex-col gap-2 p-12 bg-white/65 backdrop-blur-lg">
          <p>
            “Every student deserves a dynamic and engaging educational
            experience. Let&apos;s build it together.”
          </p>
          <cite className="text-lg text-secondary-text-700">
            - Jacob, Founder of StudyCrew
          </cite>
        </blockquote>
      </div>
    </div>
  )
}

export default Project
