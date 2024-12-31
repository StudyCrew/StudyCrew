import React from 'react'
import DevelopmentCard from './DevelopmentCard'
import { Code, GitPullRequest, MagnifyingGlass, UsersThree } from '@phosphor-icons/react/dist/ssr'

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

      <div className="flex flex-col mt-8">
        <DevelopmentCard title="Joining the Community" icon={UsersThree}>
          Everyone can join our{' '}
          <a href="https://discord.gg/fxd6uHbdBt" className="underline" target="_blank">
            Discord server
          </a>{' '}
          to stay updated, connect with developers, and reach out with
          questions.
        </DevelopmentCard>

        <DevelopmentCard title="Finding an Issue" icon={MagnifyingGlass}>
          Our{' '}
          <a href="https://github.com/StudyCrew/StudyCrew" className="underline" target="_blank">
            GitHub repository
          </a>{' '}
          lists{' '}
          <a
            href="https://github.com/StudyCrew/StudyCrew/issues"
            target="_blank"
            className="underline"
          >
            issues
          </a>{' '}
          for developers. To work on one, simply leave a comment!
        </DevelopmentCard>

        <DevelopmentCard title="Working on an Issue" icon={Code}>
          Once an issue is assigned, work can begin by creating a new branch on a fork of the repository.
        </DevelopmentCard>

        <DevelopmentCard title="Creating a Pull Request" icon={GitPullRequest} last={true}>
          Once an issue is completed, a pull request can be submitted for prompt review by our maintainers.
        </DevelopmentCard>
      </div>
    </div>
  )
}

export default Development
