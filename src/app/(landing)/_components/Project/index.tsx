import React from 'react'
import Image from 'next/image'

import PROJECT_IMAGE from 'public/assets/project-image.webp'

const Project = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r from-primary-500 to-gradient-500">
      <div className="flex flex-col gap-2 md:pl-32 pr-8 py-14">
        <h3 className="text-lg font-normal text-zircon-50">Our Project</h3>
        <h2 className="text-5xl font-semibold m-0 text-zircon-50">
          Transforming Education Together
        </h2>
        <p className="text-zircon-50">
          StudyCrew is led by students dedicated to improving education for everyone. The project vision, feature plans, and prototypes are closely aligned with the needs of students. The StudyCrew platform is developed as an open-source project, allowing developers from around the world to view and contribute to our codebase.
        </p>
      </div>

      <div className="hidden md:flex md:flex-auto md:relative md:items-center md:justify-center">
        <Image
          src={PROJECT_IMAGE}
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
