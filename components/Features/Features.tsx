import React, { useRef, useState, useEffect } from 'react' // Removed useCallback
import './Features.css'
import stages from '../../lib/data/featureData'
import Image from 'next/image'

function Features (): JSX.Element {
	const owlCarousel = useRef<HTMLDivElement | null>(null)
	const cardsContainer = useRef<HTMLDivElement | null>(null)
	const [cardWidth, setCardWidth] = useState(0)
	const [currentStage, setCurrentStage] = useState('stage-1')

	// Handle clicks on stages for larger screens
	const accordian = (id: string): void => {
		setCurrentStage(id)
		setCardWidth(0)

		if (owlCarousel.current) {
			const ele = owlCarousel.current.children
			console.log(ele)
			switch (id) {
				case 'stage-1':
					ele[1].classList.remove('none')
					ele[1].classList.add('grid')
					ele[3].classList.remove('grid')
					ele[3].classList.add('none')
					ele[5].classList.remove('grid')
					ele[5].classList.add('none')
					break
				case 'stage-2':
					ele[1].classList.remove('grid')
					ele[1].classList.add('none')
					ele[3].classList.remove('none')
					ele[3].classList.add('grid')
					ele[5].classList.remove('grid')
					ele[5].classList.add('none')
					break
				case 'stage-3':
					ele[1].classList.remove('grid')
					ele[1].classList.add('none')
					ele[3].classList.remove('grid')
					ele[3].classList.add('none')
					ele[5].classList.remove('none')
					ele[5].classList.add('grid')
					break
				default:
					console.warn('Unexpected id:', id)
					break
			}
		}
	}

	// On component mount
	useEffect(() => {
		accordian('stage-1')
	}, [])

	return (
		<div className="features">
			<div className="features-head">
				<h2>Our <span>Features</span></h2>
				<p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Explicabo at a dolor voluptatum.</p>
			</div>
			<div className="container">
				<div className="stages">
					{stages.map(stage => (
						<div key={stage.id} className={`stage ${stage.id === currentStage
							? 'active-stage'
							: ''}`} onClick={() => { accordian(stage.id) }}>
							<h3>{stage.title}</h3>
							<p>{stage.description}</p>
						</div>
					))}
				</div>

				<div className="owl-carousel-wrapper" ref={owlCarousel}>
					{stages.map(stage => (
						<React.Fragment key={stage.id}>
							<div key={stage.id} className={'stage none'}
								onClick={() => {
									accordian(stage.id)
								}}>
								<h1>{stage.title}</h1>
							</div>

							<div className="owl-carousel">
								<div className="cards" style={{
									transform: `translateX(${cardWidth}px`
								}} ref={cardsContainer}>
									{stage.cards.map(card => (
										<div key={card.title} className="card">
											<Image className="card-image" src={card.image} alt={card.title} />
											<h3 className="card-title">{card.title}</h3>
											<p className="card-description">{card.description}</p>
										</div>
									))}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default Features
