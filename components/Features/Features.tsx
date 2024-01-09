import Image from 'next/image'
import classNames from 'classnames'
import React, { useMemo, useState, useCallback } from 'react'

import { type FeaturesStage, FeaturesStageID } from './types'
import {
	FEATURES_STAGES,
	FEATURES_STAGE_ONE,
	FEATURES_STAGE_TWO,
	FEATURES_STAGE_THREE
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

const Features: React.FC<void> = (): JSX.Element => {
	const [cardWidth, setCardWidth] = useState<number>(0)
	const [currentStageID, setCurrentStageID] = useState<FeaturesStageID>(
		FeaturesStageID.StageOne
	)

	const currentStage = useMemo(() => (
		getStageForID(currentStageID)
	), [currentStageID])

	const onStageClick = useCallback((id: string): void => {
		setCurrentStageID(id as FeaturesStageID)
		setCardWidth(0)
	}, [])

	return (
		<div className="features">
			<div className="features-head">
				<h2>Our <span>Features</span></h2>
				<p className="des">Discover powerful tools that help you study.</p>
			</div>

			<div className="flex align-middle justify-end gap-2.5 mt-12 mx-0">
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

				<div className="owl-carousel-wrapper">
					<div className="stage grid">
						<h1>{currentStage.title}</h1>
					</div>

					<div className="owl-carousel">
						<div
							className="cards"
							style={{
								transform: `translateX(${cardWidth}px`
							}}
						>
							{currentStage.cards.map(({ title, description, image }, i: number) => (
								<div
									className="card"
									key={`stage-card-${i}`}
								>
									<Image className="card-image" src={image} alt={title} />
									<h3 className="card-title">{title}</h3>
									<p className="card-description">{description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features
