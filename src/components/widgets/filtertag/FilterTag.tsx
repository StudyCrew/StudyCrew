import React from 'react'

interface FilterTagProps {
  selected: string
  setSelected: (topic: string) => void
  icon: JSX.Element
  topic: string
}

const FilterTag: React.FC<FilterTagProps> = ({
  selected,
  setSelected,
  icon,
  topic
}) => {
  return (
    <button
      className={`flex items-center py-2 px-3 gap-x-2 rounded-[300px] border-[1px] border-[#3A86FF] ${selected === topic ? 'bg-[#D3E4FF]' : 'bg-white'}`}
      onClick={() => {
        setSelected(topic)
      }}
    >
      {icon}
      <span className="w-fit text-[16px]">{topic}</span>
    </button>
  )
}

export default FilterTag
