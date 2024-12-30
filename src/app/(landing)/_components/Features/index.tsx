'use client'

import cn from 'clsx'
import Image from 'next/image'
import _isNil from 'lodash/isNil'
import { useWindowSize } from '@uidotdev/usehooks'
import React, { useMemo, useState, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { type FeaturesStage, FeaturesStageID } from './types'
import {
  FEATURES_STAGES,
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE,
  MOBILE_WIDTH_BREAKPOINT
} from './const'

import './style.css'

// TODO: Extract
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
  const { width: windowWidth } = useWindowSize()
  const isMobile =
    !_isNil(windowWidth) && windowWidth <= MOBILE_WIDTH_BREAKPOINT

  const [cardWidth, setCardWidth] = useState<number>(0)
  const [stageOpenStatuses, setStageOpenStatuses] = useState<boolean[]>([
    false,
    false,
    false
  ])

  // prettier-ignore
  const [stageActiveCardIndexes, setStageActiveCardIndexes] = useState<number[]>([0, 0, 0])

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
      setCardWidth(0)

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

  const onNextStageCardClick = useCallback(
    (id: FeaturesStageID): void => {
      const nextStageActiveCardIndexes = [...stageActiveCardIndexes]

      if (
        id === FeaturesStageID.StageOne &&
        nextStageActiveCardIndexes[0] < currentStage.cards.length - 1
      ) {
        nextStageActiveCardIndexes[0] += 1
      } else if (
        id === FeaturesStageID.StageTwo &&
        nextStageActiveCardIndexes[1] < currentStage.cards.length - 1
      ) {
        nextStageActiveCardIndexes[1] += 1
      } else if (
        id === FeaturesStageID.StageThree &&
        nextStageActiveCardIndexes[2] < currentStage.cards.length - 1
      ) {
        nextStageActiveCardIndexes[2] += 1
      }

      setStageActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [stageActiveCardIndexes]
  )

  const onPrevStageCardClick = useCallback(
    (id: FeaturesStageID): void => {
      const nextStageActiveCardIndexes = [...stageActiveCardIndexes]

      if (
        id === FeaturesStageID.StageOne &&
        nextStageActiveCardIndexes[0] > 0
      ) {
        nextStageActiveCardIndexes[0] -= 1
      } else if (
        id === FeaturesStageID.StageTwo &&
        nextStageActiveCardIndexes[1] > 0
      ) {
        nextStageActiveCardIndexes[1] -= 1
      } else if (
        id === FeaturesStageID.StageThree &&
        nextStageActiveCardIndexes[2] > 0
      ) {
        nextStageActiveCardIndexes[2] -= 1
      }

      setStageActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [stageActiveCardIndexes]
  )

  return (
    <div className="features mx-32">
      <div className="text-center">
        <h2 className="text-5xl">
          Our{' '}
          <span className="bg-gradient-to-r from-primary-500 to-gradient-500 bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        <p className="mt-2 md:text-xl text-lg font-normal text-secondary-text-700">
          Discover powerful tools that help you study.
        </p>
      </div>

      <div className="flex-col align-middle justify-center gap-2.5 mt-8">
        {!isMobile && (
          <div className="flex gap-4 w-full justify-center mb-4">
            {FEATURES_STAGES.map(
              ({ id, title, description, icon: Icon }, i: number) => (
                <div
                  key={`stage-${i}-${id}`}
                  onClick={onStageClick.bind(null, id)}
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
              )
            )}
          </div>
        )}

        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
            {/* Left Column: Main Feature */}
            {currentStage.cards
              .filter((card) => card.main) 
              .map(({ title, description, image }, i: number) => (
                <div className="flex bg-primary-100 flex-col py-4 px-5 rounded-xl" key={`main-feature-${i}`}>
                  <h3 className="text-2xl font-bold text-primary-950">{title}</h3>
                  <p className="mt-2 text-lg text-primary-950 leading-tight">{description}</p>
                  <Image className="w-full rounded-md" src={image} alt={title} />
                </div>
              ))}

            {/* Right Column: Other Features */}
            <div className="flex flex-col gap-4 bg-primary-100">
              {currentStage.cards
                .filter((card) => !card.main) 
                .map(({ title, description }, i: number) => (
                  <div
                    className="p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                    key={`other-feature-${i}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                  </div>
                ))}
            </div>
          </div>
        )}


        {isMobile &&
          FEATURES_STAGES.map(
            ({ id, title, description, cards }, i: number) => (
              <div key={`stage-${i}-${id}`} className="mobile-stage-wrapper">
                <div className="stage" onClick={onStageClick.bind(null, id)}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                {stageOpenStatuses[i] && (
                  <div className="card-wrapper flex" key={`stage-card-${i}`}>
                    <div
                      onClick={onPrevStageCardClick.bind(null, id)}
                      className={cn('flex stage-nav', {
                        disabled: stageActiveCardIndexes[i] === 0
                      })}
                    >
                      <FaChevronLeft size={48} />
                    </div>

                    <div className="card-inner-wrapper">
                      <div className="card">
                        <Image
                          className="card-image"
                          src={cards[stageActiveCardIndexes[i]].image}
                          alt={cards[stageActiveCardIndexes[i]].title}
                        />

                        <h3 className="card-title">
                          {cards[stageActiveCardIndexes[i]].title}
                        </h3>

                        <p className="card-description">
                          {cards[stageActiveCardIndexes[i]].description}
                        </p>
                      </div>

                      <ul className="flex stage-nav-dots">
                        {cards.map((_, cardI: number) => (
                          <li
                            key={cardI}
                            className={cn('stage-nav-dot', {
                              active: cardI === stageActiveCardIndexes[i]
                            })}
                          />
                        ))}
                      </ul>
                    </div>

                    <div
                      onClick={onNextStageCardClick.bind(null, id)}
                      className={cn('flex stage-nav', {
                        disabled: stageActiveCardIndexes[i] === cards.length - 1
                      })}
                    >
                      <FaChevronRight size={48} />
                    </div>
                  </div>
                )}
              </div>
            )
          )}
      </div>
    </div>
  )
}

export default Features
