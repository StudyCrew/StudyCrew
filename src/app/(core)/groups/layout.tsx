interface GroupsLayoutProps {
  children: React.ReactNode
}

export default function GroupsLayout({
  children
}: GroupsLayoutProps): JSX.Element {
  return <div className="w-full ml-20 mt-[32px] mr-[35px] bg-gray-100">{children}</div>
}
