import React from 'react'
import Image from 'next/image'

import PROJECT_IMAGE from 'public/assets/project-image.webp'

const Project = (): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-gradient-to-r from-primary-500 to-gradient-500">
      <div className="flex flex-col md:pl-32 pl-7 md:pr-8 pr-7 md:py-20 py-11">
        <h3 className="text-zircon-50 md:text-xl text-lg font-semibold">
          OUR PROJECT
        </h3>
        <h2 className="text-white md:mb-4 mb-3 md:text-5xl text-4xl leading-none mt-2">
          Transforming Education Together
        </h2>
        <p className="text-zircon-50 md:text-lg text-base">
          StudyCrew is led by students dedicated to improving education for
          everyone. The project vision, feature plans, and prototypes are
          closely aligned with the needs of students. The StudyCrew platform is
          developed as an open-source project, allowing developers from around
          the world to view and contribute to our codebase.
        </p>
      </div>

      <div className="hidden md:flex md:flex-auto md:relative md:items-center md:justify-center">
        <Image
          src={PROJECT_IMAGE}
          className="w-full h-full object-cover"
          alt="Project representation"
        />
        <blockquote className="absolute bottom-0 left-0 flex flex-col gap-2 px-7 py-20 bg-white/70 backdrop-blur md:text-lg">
          <p className="text-primary-950">
            “Every student deserves a dynamic and engaging educational
            experience. Let&apos;s build it together.”
          </p>
          <cite className="t text-secondary-text-700">
            - Jacob Heldt, Founder of StudyCrew
          </cite>
        </blockquote>
      </div>
    </div>
  )
}

export default Project
