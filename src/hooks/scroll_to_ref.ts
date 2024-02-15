export const scrollToRef = (ref: React.MutableRefObject<null>): void => {
  const refContainerCurrent = ref.current as HTMLDivElement | null
  if (refContainerCurrent) {
    const y =
      refContainerCurrent.getBoundingClientRect().top + window.scrollY + -60
    setTimeout(() => {
      window.scrollTo({ top: y, behavior: 'smooth' })
    }, 100)
  }
}
