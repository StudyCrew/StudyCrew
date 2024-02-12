import Image from 'next/image'
import classNames from 'classnames'
import { useWindowSize } from '@uidotdev/usehooks'
import React, { useMemo, useState, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { getStageForID } from './utils'
import { type FeaturesProps, FeaturesStageID } from './types'
import { CLASS_NAME, FEATURES_STAGES, MOBILE_WIDTH_BREAKPOINT } from './const'

import './style.scss'

const Features: React.FC<FeaturesProps> = (
  props: FeaturesProps
): JSX.Element => {
  const { className } = props
  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth <= MOBILE_WIDTH_BREAKPOINT

  const [cardWidth, setCardWidth] = useState<number>(0)
  const finalClassName = classNames(CLASS_NAME, className)
  const [stageOpenStatuses, setStageOpenStatuses] = useState<boolean[]>([
    false,
    false,
    false
  ])

  const [activeCardIndexes, setActiveCardIndexes] = useState<number[]>([
    0, 0, 0
  ])

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
      const nextStageActiveCardIndexes = [...activeCardIndexes]

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

      setActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [activeCardIndexes]
  )

  const onPrevStageCardClick = useCallback(
    (id: string): void => {
      const nextStageActiveCardIndexes = [...activeCardIndexes]

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

      setActiveCardIndexes(nextStageActiveCardIndexes)
    },
    [activeCardIndexes]
  )

  return (
    <div className={finalClassName}>
      <div className={`${CLASS_NAME}-head`}>
        <h2>
          Our <span>Features</span>
        </h2>
        <p>Discover powerful tools that help you study.</p>
      </div>

      <div
        className={classNames('align-middle justify-end gap-2.5 mt-12 mx-0', {
          flex: !isMobile,
          'flex-column': isMobile
        })}
      >
        {!isMobile && (
          <div className={`${CLASS_NAME}-stages`}>
            {FEATURES_STAGES.map(({ id, title, description }, i: number) => (
              <div
                key={`stage-${i}-${id}`}
                onClick={onStageClick.bind(null, id)}
                className={classNames(`${CLASS_NAME}-stage`, {
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
          <div className={`${CLASS_NAME}-carousel-wrapper`}>
            <div className={`${CLASS_NAME}-carousel`}>
              <div
                className={`${CLASS_NAME}-cards`}
                style={{
                  transform: `translateX(${cardWidth}px`
                }}
              >
                {currentStage.cards.map(
                  ({ title, description, image }, i: number) => (
                    <div
                      className={`${CLASS_NAME}-card`}
                      key={`stage-card-${i}`}
                    >
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
                  <div
                    className={`${CLASS_NAME}-card-wrapper flex`}
                    key={`stage-card-${i}`}
                  >
                    <div
                      onClick={onPrevStageCardClick.bind(null, id)}
                      className={classNames('flex stage-nav', {
                        disabled: activeCardIndexes[i] === 0
                      })}
                    >
                      <FaChevronLeft size={48} />
                    </div>

                    <div className={`${CLASS_NAME}-card-inner-wrapper`}>
                      <div className={`${CLASS_NAME}-card`}>
                        <Image
                          className={`${CLASS_NAME}-card-image`}
                          src={cards[activeCardIndexes[i]].image}
                          alt={cards[activeCardIndexes[i]].title}
                        />

                        <h3 className={`${CLASS_NAME}-card-title`}>
                          {cards[activeCardIndexes[i]].title}
                        </h3>

                        <p className={`${CLASS_NAME}-card-description`}>
                          {cards[activeCardIndexes[i]].description}
                        </p>
                      </div>

                      <ul className="flex stage-nav-dots">
                        {cards.map((_, cardI: number) => (
                          <li
                            key={cardI}
                            className={classNames(
                              `${CLASS_NAME}-stage-nav-dot`,
                              {
                                active: cardI === activeCardIndexes[i]
                              }
                            )}
                          />
                        ))}
                      </ul>
                    </div>

                    <div
                      onClick={onNextStageCardClick.bind(null, id)}
                      className={classNames('flex', `${CLASS_NAME}-stage-nav`, {
                        disabled: activeCardIndexes[i] === cards.length - 1
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
