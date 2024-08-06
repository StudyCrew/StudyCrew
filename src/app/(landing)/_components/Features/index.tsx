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
    <>
      <style>
        {`
.features-head .title {
  text-transform: capitalize;
}

.features-head .title span {
  color: #3a86ff;
  font-family: var(--heading-font);
}


.stages .stage {
  user-select: none;
}

h3 {
  margin: 22px 0px;
}


.mobile-stage-wrapper .owl-carousel-wrapper {
  width: 100%;
}


.mobile-stage-wrapper .stage-nav-dot:last-child {
  margin-right: 0;
}

.mobile-stage-wrapper .stage-nav-dot.active {
  background: #000;
}

.active {
  height: 100% !important;
}

.owl-carousel-wrapper {
  transition: 1s ease-in;
}

.owl-carousel .cards {
  transition: 0.5s ease-in;
  white-space: nowrap;
}

.none {
  display: none;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}


.arrow-icons {
  position: absolute;
  bottom: -3.5%;
  left: 50%;
  transform: translateX(-50%);
}
.arrow-right,
.arrow-left {
  margin-top: 20px;
  margin-bottom: -10px;
  size: 300px;
}
.arrow-right {
  position: relative;
  left: 10px;
}

.arrow-right:hover,
.arrow-left:hover {
  cursor: pointer;
}

.active-stage {
  background-color: var(--light-background-color);
}

@media screen and (max-width: 1040px) {
  .arrow-icons {
    justify-content: start;
  }
}

@media screen and (max-width: 860px) {
  .card {
    padding: 15px 15px;
    max-height: 100%;
  }
  .container {
    justify-content: center;
  }
  .container .stages {
    display: none;
  }
  .stage {
    display: block;
    cursor: pointer;
    user-select: none;
  }
  .card-image {
    width: 50%;
    height: 25%;
  }
  .owl-carousel-wrapper {
    border-radius: 20px;
  }
  .owl-carousel .cards {
    grid-auto-columns: calc((100% / 2));
  }
  .features {
    margin-right: 50px;
    margin-left: 50px;
  }
}

@media screen and (max-width: 520px) {
  .owl-carousel .cards {
    grid-auto-columns: calc(100%);
  }
}

.owl-carousel .cards::-webkit-scrollbar {
  height: 10px;
}

.owl-carousel .cards::-webkit-scrollbar-thumb {
  background: #959da6;
  border-radius: 5px;
}

.owl-carousel .cards::-webkit-scrollbar-thumb:hover {
  background: #434c59;
}

@media (min-width: 1400px) {
  .container {
    max-width: 100%;
  }
}

          `}
      </style>
      <div className="features mx-[150px]">
        <div className="features-head text-center">
          <h2>
            Our <span>Features</span>
          </h2>
          <p className="des text-[var(--secondary-text-color)]">
            Discover powerful tools that help you study.
          </p>
        </div>

        <div
          className={cn('align-middle justify-end gap-2.5 mt-12 mx-0', {
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
                  className={cn(
                    'stage text-center my-[10px] cursor-pointer mr-7 p-3 text-[var(--secondary-text-color)] rounded-[5px]',
                    {
                      'active-stage': id === currentStageID
                    }
                  )}
                >
                  <h3 className="text-[28px] font-bold">{title}</h3>
                  <p className="-mt-[25px] text-base pb-[15px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {!isMobile && (
            <div className="owl-carousel-wrapper bg-[var(--light-background-color)] w-[75%] p-[30px] rounded-[25px] z-10 overflow-hidden">
              <div className="owl-carousel relative pb-0">
                <div
                  className="cards grid h-[1] grid-flow-col gap-[30px] overflow-x-auto scroll-smooth pb-[10px]"
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
                <div
                  key={`stage-${i}-${id}`}
                  className="mobile-stage-wrapper bg-[var(--light-background-color)]"
                >
                  <div
                    className="stage py-0 px-[64px]"
                    onClick={onStageClick.bind(null, id)}
                  >
                    <h3 className="text-[36px] font-bold">{title}</h3>
                    <p>{description}</p>
                  </div>

                  {stageOpenStatuses[i] && (
                    <div
                      className="card-wrapper flex justify-center py-4 px-0 w-full"
                      key={`stage-card-${i}`}
                    >
                      <div
                        onClick={onPrevStageCardClick.bind(null, id)}
                        className={cn(
                          'flex stage-nav items-center py-0 px-4 disabled:opacity-25',
                          {
                            disabled: stageActiveCardIndexes[i] === 0
                          }
                        )}
                      >
                        <FaChevronLeft size={48} />
                      </div>

                      <div className="card-inner-wrapper">
                        <div className="card bg-white rounded-[20px] p-[25px] w-[240px] inline-block whitespace-normal">
                          <Image
                            className="card-image block h-[140px] w-auto max-w-full m-auto rounded-[10px] object-cover mb-5"
                            src={cards[stageActiveCardIndexes[i]].image}
                            alt={cards[stageActiveCardIndexes[i]].title}
                          />

                          <h3 className="card-title text-[22px] font-bold mb-0">
                            {cards[stageActiveCardIndexes[i]].title}
                          </h3>

                          <p className="card-description text-sm mb-[5px] text-[var(--secondary-text-color)]">
                            {cards[stageActiveCardIndexes[i]].description}
                          </p>
                        </div>

                        <ul className="flex stage-nav-dots my-4 mx-0 justify-center">
                          {cards.map((_, cardI: number) => (
                            <li
                              key={cardI}
                              className={cn(
                                'stage-nav-dot !h-2 !w-2 rounded-[50%] bg-[#999] mr-4',
                                {
                                  active: cardI === stageActiveCardIndexes[i]
                                }
                              )}
                            />
                          ))}
                        </ul>
                      </div>

                      <div
                        onClick={onNextStageCardClick.bind(null, id)}
                        className={cn('flex stage-nav', {
                          disabled:
                            stageActiveCardIndexes[i] === cards.length - 1
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
    </>
  )
}

export default Features
