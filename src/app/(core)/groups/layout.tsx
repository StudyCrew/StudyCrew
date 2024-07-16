interface GroupsLayoutProps {
  children: React.ReactNode
}

export default function GroupsLayout({
  children
}: GroupsLayoutProps): JSX.Element {
  return <div>{children}</div>
}
