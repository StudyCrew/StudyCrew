'use client'
import Folder from '@/components/widgets/folder/Folder'
// import "../globals.css"

const Check: React.FC = () => {
  return (
    <div className="main bg-[#d6d9e0] h-screen flex flex-col justify-center items-center gap-y-5">
      <Folder variant="type1" folderName="Chemistry" date="01/29/24" />
      <Folder variant="type1" folderName="Organic Chemistry" date="01/29/24" />
      <Folder variant="type2" folderName="Chemistry" />
      <Folder variant="type2" folderName="Environmental Science" />
    </div>
  )
}

export default Check
