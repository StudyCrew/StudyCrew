import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/api/webhook/clerk', '/assets/(.*)', '/monitoring'],
  ignoredRoutes: ['/api/webhook/clerk', '/privacy-policy'],
  debug: false
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
