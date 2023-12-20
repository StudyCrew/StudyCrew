import scrollToRef from '@/lib/hooks/scrollTo'
import './Navbar.css'

import React from 'react'

interface NavbarProps {
	activePage: string
	setActivePage: React.Dispatch<React.SetStateAction<string>>
	missionRef: React.MutableRefObject<null>
	featuresRef: React.MutableRefObject<null>
	projectRef: React.MutableRefObject<null>
	teamRef: React.MutableRefObject<null>
	signupRef: React.MutableRefObject<null>
	faqRef: React.MutableRefObject<null>
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> // Add this line
}

const Navbar = ({
	activePage,
	setActivePage,
	missionRef,
	featuresRef,
	projectRef,
	teamRef,
	signupRef,
	faqRef,
	setIsMenuOpen // Add this line
}: NavbarProps): JSX.Element => {
	// Helper function to determine if a link is active
	const isActive = (name: string): string => activePage === name ? 'activeNavLink' : ''

	// Handles the navigation link click based on the section's name
	const handleNavLinkClick = (name: string): void => {
		setIsMenuOpen(false)

		let ref
		switch (name) {
			case 'mission':
				ref = missionRef
				break
			case 'features':
				ref = featuresRef
				break
			case 'project':
				ref = projectRef
				break
			case 'team':
				ref = teamRef
				break
			case 'signup':
				ref = signupRef
				break
			case 'faq':
				ref = faqRef
				break
			default:
				return
		}
		scrollToRef(ref)
	}

	return (
		<nav>
			{/* Navigation links for different sections */}
			{/* When clicked, the view scrolls to the respective section */}
			<div className={isActive('mission')} onClick={() => {
				handleNavLinkClick('mission')
				setActivePage('mission')
			}}>Mission</div>
			<div className={isActive('features')} onClick={() => {
				handleNavLinkClick('features')
				setActivePage('features')
			}}>Features</div>
			<div className={isActive('project')} onClick={() => {
				handleNavLinkClick('project')
				setActivePage('project')
			}}>Project</div>
			<div className={isActive('signup')} onClick={() => {
				handleNavLinkClick('signup')
				setActivePage('signup')
			}}>Sign Up</div>
			<div className={isActive('team')} onClick={() => {
				handleNavLinkClick('team')
				setActivePage('team')
			}}>Team</div>
			<div className={isActive('faq')} onClick={() => {
				handleNavLinkClick('faq')
				setActivePage('faq')
			}}>FAQs</div>
		</nav>
	)
}

export default Navbar
