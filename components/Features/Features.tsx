import Image from 'next/image'
import classNames from 'classnames'
import { useWindowSize } from '@uidotdev/usehooks'
import React, { useMemo, useState, useCallback } from 'react'
import {
  FaChevronUp,
  FaChevronLeft,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa'

import { type FeaturesStage, FeaturesStageID } from './types'
import {
  FEATURES_STAGES,
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE,
  MOBILE_WIDTH_BREAKPOINT
} from './const'

import './Features.css'

// TODO: Extract
const getStageForID = (id: string): FeaturesStage => {
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
  const isMobile = windowWidth <= MOBILE_WIDTH_BREAKPOINT

  const [cardWidth, setCardWidth] = useState<number>(0)
  const [stageOpenStatuses, setStageOpenStatuses] = useState<boolean[]>([
    false,
    false,
    false
  ])

  const [stageActiveCardIndexes, setStageActiveCardIndexes] = useState<
  number[]
  >([0, 0, 0])

  const [currentStageID, setCurrentStageID] = useState<FeaturesStageID>(
    FeaturesStageID.StageOne
  )

  const currentStage = useMemo(
    () => getStageForID(currentStageID),
    [currentStageID]
  )

  const onStageClick = useCallback(
    (id: string): void => {
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
    (id: string): void => {
      const nextStageActiveCardIndexes = [...stageActiveCardIndexes]

      if (id === FeaturesStageID.StageOne) {
        if (nextStageActiveCardIndexes[0] < currentStage.cards.length - 1) {
          nextStageActiveCardIndexes[0] += 1
        }
      } else if (id === FeaturesStageID.StageTwo) {
        if (nextStageActiveCardIndexes[1] < currentStage.cards.length - 1) {
          nextStageActiveCardIndexes[1] += 1
        }
      } else if (id === FeaturesStageID.StageThree) {
        if (nextStageActiveCardIndexes[2] < currentStage.cards.length - 1) {
          nextStageActiveCardIndexes[2] += 1
        }
      }

      setStageActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [stageActiveCardIndexes]
  )

  const onPrevStageCardClick = useCallback(
    (id: string): void => {
      const nextStageActiveCardIndexes = [...stageActiveCardIndexes]

      if (id === FeaturesStageID.StageOne) {
        if (nextStageActiveCardIndexes[0] > 0) {
          nextStageActiveCardIndexes[0] -= 1
        }
      } else if (id === FeaturesStageID.StageTwo) {
        if (nextStageActiveCardIndexes[1] > 0) {
          nextStageActiveCardIndexes[1] -= 1
        }
      } else if (id === FeaturesStageID.StageThree) {
        if (nextStageActiveCardIndexes[2] > 0) {
          nextStageActiveCardIndexes[2] -= 1
        }
      }

      setStageActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [stageActiveCardIndexes]
  )

  return (
    <div className="features">
      <div className="features-head">
        <h2>
          Our <span>Features</span>
        </h2>
        <p className="des">Discover powerful tools that help you study.</p>
      </div>

      <div
        className={classNames('align-middle justify-end gap-2.5 mt-12 mx-0', {
          flex: !isMobile,
          'flex-column': isMobile
        })}
      >
        {!isMobile && (
          <div className="stages">
            {FEATURES_STAGES.map(({ id, title, description }, i: number) => (
              <div
                key={`stage-${i}-${id}`}
                onClick={onStageClick.bind(null, id)}
                className={classNames('stage', {
                  'active-stage': id === currentStageID
                })}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="owl-carousel-wrapper">
            <div className="owl-carousel">
              <div
                className="cards"
                style={{
                  transform: `translateX(${cardWidth}px`
                }}
              >
                {currentStage.cards.map(
                  ({ title, description, image }, i: number) => (
                    <div className="card" key={`stage-card-${i}`}>
                      <Image className="card-image" src={image} alt={title} />
                      <h3 className="card-title">{title}</h3>
                      <p className="card-description">{description}</p>
                    </div>
                  )
                )}
              </div>
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
                      className={classNames('flex stage-nav', {
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
                            className={classNames('stage-nav-dot', {
                              active: cardI === stageActiveCardIndexes[i]
                            })}
                          />
                        ))}
                      </ul>
                    </div>

                    <div
                      onClick={onNextStageCardClick.bind(null, id)}
                      className={classNames('flex stage-nav', {
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
