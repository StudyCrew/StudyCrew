import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://54f6437cf21fd3580c3e78da0943237b@o4506271642812416.ingest.sentry.io/4506271644319744',
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true
    })
  ]
})