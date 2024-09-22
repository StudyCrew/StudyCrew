interface GroupsLayoutProps {
  children: React.ReactNode
}

export default function GroupsLayout({
  children
}: GroupsLayoutProps): JSX.Element {
  return <div className="w-full bg-gray-100">{children}</div>
}
