import React from 'react'
import DevelopmentCard from './DevelopmentCard'
import { UsersThree } from '@phosphor-icons/react/dist/ssr'

const Development = (): JSX.Element => {
  return (
    <div className="md:mx-32 mx-7">
    <div className="text-center">
      <h2 className="text-5xl">
        <span className="bg-gradient-to-r from-primary-500 to-gradient-500 bg-clip-text text-transparent">
          Development {' '}
        </span>
        Process
      </h2>
      <p className="mt-2 md:text-xl text-lg font-normal text-secondary-text-700">
        StudyCrew is built by an open-source community of developers.
      </p>
    </div>

    <div className="flex flex-col gap-5 mt-8">
      <DevelopmentCard title="Joining the Community" icon={UsersThree}>
        Everyone can join our <a href="https://discord.gg/fxd6uHbdBt" target="_blank">Discord server</a> to stay updated, connect with developers, and reach out with questions.
      </DevelopmentCard>
      
      <DevelopmentCard title="Finding an Issue" icon={UsersThree}>
        Our <a href="https://github.com/StudyCrew/StudyCrew" target="_blank">GitHub repository</a> lists <a href="https://github.com/StudyCrew/StudyCrew/issues" target="_blank">issues</a> for developers. To work on one, simply leave a comment!
      </DevelopmentCard>
    </div>
  </div>
  )
}

export default Development