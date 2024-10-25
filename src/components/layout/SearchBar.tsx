import React from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi'

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <input
        className="w-[250px] lg:w-[500px] md:w-[400px] sm:w-[35px] flex px-5 py-[2px] bg-header_input_background border-2 rounded-md outline-none border-header_input_border h-[48px]"
        placeholder="Search study groups, tutors and learning paths"
      />
      <PiMagnifyingGlassBold
        size={20}
        className="text-magnifying_glass_color absolute right-5 my-auto top-0 bottom-0"
      />
    </div>
  )
}

export default SearchBar
