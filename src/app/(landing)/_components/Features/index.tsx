'use client'

import cn from 'clsx'
import Image from 'next/image'
import React, { useMemo, useState, useCallback } from 'react'

import { type FeaturesStage, FeaturesStageID } from './types'
import {
  FEATURES_STAGES,
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE
} from './const'

const getStageForID = (id: FeaturesStageID): FeaturesStage => {
  switch (id) {
    case FeaturesStageID.StageOne:
      return FEATURES_STAGE_ONE

    case FeaturesStageID.StageTwo:
      return FEATURES_STAGE_TWO

    case FeaturesStageID.StageThree:
      return FEATURES_STAGE_THREE

    default:
      return FEATURES_STAGE_ONE // TODO: Refactor to return null here
  }
}

const Features: React.FC<any> = (): JSX.Element => {
  const [stageOpenStatuses, setStageOpenStatuses] = useState<boolean[]>([
    false,
    false,
    false
  ])

  const [currentStageID, setCurrentStageID] = useState<FeaturesStageID>(
    FeaturesStageID.StageOne
  )

  const currentStage = useMemo(
    () => getStageForID(currentStageID),
    [currentStageID]
  )

  const onStageClick = useCallback(
    (id: FeaturesStageID): void => {
      setCurrentStageID(id as FeaturesStageID)

      const nextStageOpenStatuses = [...stageOpenStatuses]

      if (id === FeaturesStageID.StageOne) {
        nextStageOpenStatuses[0] = !nextStageOpenStatuses[0]
      } else if (id === FeaturesStageID.StageTwo) {
        nextStageOpenStatuses[1] = !nextStageOpenStatuses[1]
      } else if (id === FeaturesStageID.StageThree) {
        nextStageOpenStatuses[2] = !nextStageOpenStatuses[2]
      }

      setStageOpenStatuses(nextStageOpenStatuses)
    },
    [stageOpenStatuses]
  )

  return (
    <div className="md:mx-32 mx-7">
      <div className="text-center">
        <h2 className="text-5xl">
          Our{' '}
          <span className="bg-gradient-to-r from-primary-500 to-gradient-500 bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        <p className="mt-2 md:text-xl text-lg font-normal text-secondary-text-700">
          The features we plan to offer in different versions of StudyCrew.
        </p>
      </div>

      <div className="flex-col align-middle justify-center gap-2.5 mt-8">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          {/* Dropdown for Mobile */}
          <div className="md:hidden flex justify-center w-full">
            <select
              value={currentStageID}
              onChange={(e) => onStageClick(e.target.value as FeaturesStageID)}
              className="px-4 py-2 rounded-md text-lg border border-primary-500 text-primary-950 bg-primary-100 cursor-pointer w-40 font-medium"
            >
              {FEATURES_STAGES.map(({ id, title }, i) => (
                <option key={i} value={id} className="bg-primary-500">
                  {title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Stage Buttons */}
          <div className="hidden md:flex gap-4 w-full justify-center">
            {FEATURES_STAGES.map(({ id, title, icon: Icon }, i: number) => (
              <div
                key={`stage-${i}-${id}`}
                onClick={() => onStageClick(id)}
                className={cn(
                  'px-4 py-2 rounded-full flex gap-2 items-center border border-primary-500 cursor-pointer hover:bg-primary-50 transition-all duration-200 ease-in-out',
                  {
                    'bg-primary-100': id === currentStageID
                  }
                )}
              >
                <div className="text-primary-500 text-2xl">
                  <Icon />
                </div>
                <div className="text-xl font-medium">{title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:h-[325px] h-auto my-8">
          {/* Left Column: Main Feature */}
          <div className="flex flex-col bg-primary-100 py-4 px-5 rounded-xl">
            {currentStage.cards
              .filter((card) => card.main)
              .map(
                ({ title, description, image, icon: Icon, bullet_points }, i: number) => (
                  <div key={`main-feature-${i}`} className="flex flex-col">
                    {/* Title */}
                    <h3 className="md:text-2xl text-xl md:font-bold font-medium text-primary-950">
                    <div className="flex gap-2 items-center">
                      <div className="text-primary-950 md:text-3xl text-2xl">
                        <Icon weight="duotone"/>
                      </div>
                      <div>{title}</div>
                    </div>
                    </h3>

                    {/* Description */}
                    <p className="mt-2 md:text-lg text-base text-secondary-text-800 leading-snug">
                      {description}
                    </p>

                    {/* Image and Bullet Points */}
                    <div className="flex mt-4 gap-4 w-full md:h-40 h-auto">
                      <div className="md:w-1/2 w-0 md:flex hidden">
                        <Image
                          className="rounded-md md:h-32"
                          src={image}
                          alt={title}
                        />
                      </div>

                      <div className="md:w-1/2 w-full flex flex-col h-auto">
                        {bullet_points?.map(({ icon: Icon, text }, idx) => (
                          <div
                            key={`bullet-point-${idx}`}
                            className="flex items-center gap-2 mb-2 bg-white rounded w-full py-1"
                          >
                            <div className="text-primary-950 text-2xl ml-2">
                              <Icon weight="duotone" />
                            </div>
                            <span className="text-primary-950 md:text-lg text-base font-medium mr-2">
                              {text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>

          {/* Right Column: Other Features */}
          <div className="flex flex-col gap-4 md:bg-primary-100 md:py-4 md:px-5 md:rounded-xl">
            <h3 className="text-2xl font-bold text-primary-950 md:block hidden">
              Additional Functionalities
            </h3>
            {currentStage.cards
              .filter((card) => !card.main)
              .map(({ title, description, icon: Icon }, i: number) => (
                <div
                  key={`other-feature-${i}`}
                  className="py-4 px-5 rounded-lg md:bg-white bg-primary-100"
                >
                  <div className="flex gap-2 items-center">
                    <div className="text-primary-950 text-2xl">
                      <Icon weight="duotone"/>
                    </div>
                    <div className="text-xl font-medium">{title}</div>
                  </div>
                  <p className="mt-1 md:text-lg text-base text-secondary-text-800 leading-snug">
                    {description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
