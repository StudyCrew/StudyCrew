const scrollToRef = (ref: React.MutableRefObject<null>): void => {
	const refContainerCurrent = ref.current as HTMLDivElement | null
	if (refContainerCurrent) {
		const y = refContainerCurrent.getBoundingClientRect().top + window.scrollY + -60
		window.scrollTo({ top: y, behavior: 'smooth' })
	}
}

export default scrollToRef
