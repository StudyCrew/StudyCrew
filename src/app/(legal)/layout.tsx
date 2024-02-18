import '@/app/globals.css'

export default function LegalLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="max-w-6xl mx-auto">{children}</div>
}
