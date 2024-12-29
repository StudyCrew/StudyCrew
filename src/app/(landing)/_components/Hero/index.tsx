import React from 'react'
import HeroButtons from './HeroButtons'
import HeroWord from './HeroWord'

const Hero = (): JSX.Element => {
  return (
    <div className="md:mx-16 mx-7 mt-28 md:mt-44 mb-16 text-center">
      <h1 className="text-5xl leading-snug md:text-7xl md:leading-tight font-medium">
        The Future of Education is <br />
        <HeroWord />
      </h1>

      <p className="mt-4 md:text-xl text-lg font-normal text-secondary-text-700 leading-snug">
        Breaking barriers to education through the power of open source.
      </p>

      <HeroButtons/>
    </div>
  )
}

export default Hero
