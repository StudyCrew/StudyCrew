'use client'
// import the globals.css file if tailwind styles not applying
import Pagination from '@/components/widgets/pagination/Pagination'
import React, { useState } from 'react'

const Check: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const totalPages: number = 8

  return (
    <div className="main h-screen flex flex-col justify-center items-center gap-y-5">
      {page === 1 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 1
        </div>
      )}
      {page === 2 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 2
        </div>
      )}
      {page === 3 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 3
        </div>
      )}
      {page === 4 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 4
        </div>
      )}
      {page === 5 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 5
        </div>
      )}
      {page === 6 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 6
        </div>
      )}
      {page === 7 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 7
        </div>
      )}
      {page === 8 && (
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center">
          Page 8
        </div>
      )}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default Check
