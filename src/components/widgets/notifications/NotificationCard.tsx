'use client'
import React from 'react'

interface Variant1Data {
  size: 'small' | 'large'
  title: string
  content: string
}

interface Variant2Data {
  size: 'small' | 'large'
  groupName: string
  img: string
  username: string
  date: string
  question: string
}

interface Variant3Data {
  size: 'small' | 'large'
  groupName: string
  img: string
  username: string
  date: string
  assignment: string
  onClick: () => void
}

interface NotificationCardProps {
  variant: 'PlatformUpdate' | 'GrpQuestion' | 'GrpMaterial'
  variant1Data?: Variant1Data
  variant2Data?: Variant2Data
  variant3Data?: Variant3Data
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  variant,
  variant1Data,
  variant2Data,
  variant3Data
}) => {
  console.log('variant', variant)
  return (
    <>
      {variant === 'PlatformUpdate' && variant1Data && (
        <div
          className={`${variant1Data.size === 'small' ? 'w-[280px]' : 'w-[462px]'} flex flex-col`}
        >
          <div className="h-[40px] flex bg-[#fcebae] rounded-t-xl">
            <div className="flex h-[40px] w-[40px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
              </svg>
            </div>
            <div
              className={`${variant1Data.size === 'small' ? 'w-[240px]' : 'w-[422px]'} bg-[#eecc51] flex items-center h-[40px] px-4 py-2 text-[16px] rounded-tr-xl`}
              style={{ boxSizing: 'border-box' }}
            >
              {variant1Data.title}
            </div>
          </div>
          <div className="px-4 py-2 text-lg rounded-b-xl bg-white text-[14px]">
            {variant1Data.content}
          </div>
        </div>
      )}
      {variant === 'GrpQuestion' && variant2Data && (
        <div
          className={`${variant2Data.size === 'small' ? 'w-[280px]' : 'w-[462px]'} flex flex-col`}
        >
          <div className="h-[40px] flex bg-[#64a1ff] rounded-t-xl">
            <div className="flex h-[40px] w-[40px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 256 256"
              >
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <div
              className={`${variant2Data.size === 'small' ? 'w-[240px]' : 'w-[422px]'} bg-[#3a86fd] text-white flex items-center h-[40px] px-4 py-2 text-[16px] rounded-tr-xl line-clamp-1`}
              style={{ boxSizing: 'border-box' }}
            >
              <span className="line-clamp-1">
                Question in {variant2Data.groupName}
              </span>
            </div>
          </div>
          <div className="flex bg-white border-b-[1px] border-[#cfd3de]">
            <div className="w-[50%] p-2 flex gap-x-2 items-center line-clamp-1 border-r-[1px] border-[#cfd3de]">
              <img
                src={variant2Data.img}
                className="w-[24px] h-[24px] rounded-full"
                alt=""
              />
              <span className="line-clamp-1 text-lg font-[500] mt-[3px] text-[14px]">
                {variant2Data.username}
              </span>
            </div>
            <div className="w-[50%] p-2 text-base flex items-center text-center text-[12px]">
              {variant2Data.date}
            </div>
          </div>
          <div className="px-4 py-2 text-lg rounded-b-xl bg-white text-[14px]">
            {variant2Data.question}
          </div>
        </div>
      )}
      {variant === 'GrpMaterial' && variant3Data && (
        <div
          className={`${variant3Data.size === 'small' ? 'w-[280px]' : 'w-[462px]'} flex flex-col`}
        >
          <div className="h-[40px] flex bg-[#64a1ff] rounded-t-xl">
            <div className="flex h-[40px] w-[40px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
              </svg>
            </div>
            <div
              className={`${variant3Data.size === 'small' ? 'w-[240px]' : 'w-[422px]'} bg-[#3a86fd] text-white flex items-center h-[40px] px-4 py-2 text-[16px] rounded-tr-xl line-clamp-1`}
              style={{ boxSizing: 'border-box' }}
            >
              <span className="line-clamp-1">
                Material in {variant3Data.groupName}
              </span>
            </div>
          </div>
          <div className="flex bg-white border-b-[1px] border-[#cfd3de]">
            <div className="w-[50%] p-2 flex gap-x-2 items-center line-clamp-1 border-r-[1px] border-[#cfd3de]">
              <img
                src={variant3Data.img}
                className="w-[24px] h-[24px] rounded-full"
                alt=""
              />
              <span className="line-clamp-1 text-lg font-[500] mt-[3px] text-[14px]">
                {variant3Data.username}
              </span>
            </div>
            <div className="w-[50%] p-2 text-base flex items-center text-center text-[12px]">
              {variant3Data.date}
            </div>
          </div>
          <div className="px-4 py-2 text-lg rounded-b-xl flex items-center gap-x-4 bg-white justify-between">
            <span className="line-clamp-2 text-[14px]">
              {variant3Data.assignment}
            </span>
            <button onClick={variant3Data.onClick}>
              <svg
                width="57"
                height="36"
                viewBox="0 0 57 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="56"
                  height="35"
                  rx="3.5"
                  stroke="#D0D5DD"
                />
                <path
                  d="M16.752 22.144C15.912 22.144 15.176 21.96 14.544 21.592C13.92 21.224 13.428 20.716 13.068 20.068C12.716 19.412 12.54 18.656 12.54 17.8C12.54 16.944 12.716 16.192 13.068 15.544C13.428 14.888 13.92 14.376 14.544 14.008C15.176 13.64 15.912 13.456 16.752 13.456C17.584 13.456 18.316 13.64 18.948 14.008C19.58 14.376 20.072 14.888 20.424 15.544C20.776 16.192 20.952 16.944 20.952 17.8C20.952 18.656 20.776 19.412 20.424 20.068C20.072 20.716 19.58 21.224 18.948 21.592C18.316 21.96 17.584 22.144 16.752 22.144ZM16.752 20.764C17.552 20.764 18.188 20.5 18.66 19.972C19.14 19.444 19.38 18.72 19.38 17.8C19.38 16.88 19.14 16.156 18.66 15.628C18.188 15.1 17.552 14.836 16.752 14.836C15.952 14.836 15.312 15.1 14.832 15.628C14.352 16.156 14.112 16.88 14.112 17.8C14.112 18.72 14.352 19.444 14.832 19.972C15.312 20.5 15.952 20.764 16.752 20.764ZM22.3082 22V13.6H25.4162C26.0882 13.6 26.6442 13.712 27.0842 13.936C27.5242 14.16 27.8522 14.468 28.0682 14.86C28.2842 15.252 28.3922 15.692 28.3922 16.18C28.3922 16.644 28.2882 17.072 28.0802 17.464C27.8722 17.848 27.5482 18.16 27.1082 18.4C26.6682 18.632 26.1042 18.748 25.4162 18.748H23.8442V22H22.3082ZM23.8442 17.5H25.3202C25.8562 17.5 26.2402 17.384 26.4722 17.152C26.7122 16.912 26.8322 16.588 26.8322 16.18C26.8322 15.764 26.7122 15.44 26.4722 15.208C26.2402 14.968 25.8562 14.848 25.3202 14.848H23.8442V17.5ZM29.5973 22V13.6H35.0813V14.836H31.1333V17.14H34.7213V18.34H31.1333V20.764H35.0813V22H29.5973ZM36.5348 22V13.6H38.0708L42.0188 19.516V13.6H43.5548V22H42.0188L38.0708 16.096V22H36.5348Z"
                  fill="#3A86FF"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default NotificationCard
