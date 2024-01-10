export interface HeaderProps {
	missionRef: React.MutableRefObject<null>
	featuresRef: React.MutableRefObject<null>
	projectRef: React.MutableRefObject<null>
	teamRef: React.MutableRefObject<null>
	signupRef: React.MutableRefObject<null>
	activePage: string
	setActivePage: (activePage: string) => void
}
