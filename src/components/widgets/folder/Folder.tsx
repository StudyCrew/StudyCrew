import React from 'react'

type FolderProps =
  | { variant: 'type1'; folderName: string; date: string }
  | { variant: 'type2'; folderName: string; date?: never }

const Folder: React.FC<FolderProps> = ({ variant, folderName, date }) => {
  if (variant === 'type1') {
    return (
      <div className="folderType1 bg-white rounded-md hover:bg-[#e9f2ff] flex flex-col p-[10px] gap-y-[5px] items-center justify-center w-[160px]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.75 11.25H20.5172L16.25 6.98282C16.0187 6.74967 15.7434 6.56481 15.44 6.43901C15.1366 6.31321 14.8112 6.24896 14.4828 6.25001H6.25C5.58696 6.25001 4.95107 6.5134 4.48223 6.98225C4.01339 7.45109 3.75 8.08697 3.75 8.75001V31.3469C3.75083 31.984 4.00428 32.5947 4.45477 33.0452C4.90527 33.4957 5.51603 33.7492 6.15313 33.75H33.8891C34.515 33.7492 35.115 33.5002 35.5576 33.0576C36.0002 32.615 36.2492 32.015 36.25 31.3891V13.75C36.25 13.087 35.9866 12.4511 35.5178 11.9822C35.0489 11.5134 34.413 11.25 33.75 11.25ZM6.25 8.75001H14.4828L16.9828 11.25H6.25V8.75001ZM33.75 31.25H6.25V13.75H33.75V31.25Z"
            fill="black"
          />
        </svg>
        <div className="text-center text-[21px] line-clamp-1">{folderName}</div>
        <div className="flex w-fit text-[16px] items-center">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 2H12V1.5C12 1.36739 11.9473 1.24021 11.8536 1.14645C11.7598 1.05268 11.6326 1 11.5 1C11.3674 1 11.2402 1.05268 11.1464 1.14645C11.0527 1.24021 11 1.36739 11 1.5V2H6V1.5C6 1.36739 5.94732 1.24021 5.85355 1.14645C5.75979 1.05268 5.63261 1 5.5 1C5.36739 1 5.24021 1.05268 5.14645 1.14645C5.05268 1.24021 5 1.36739 5 1.5V2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2ZM5 3V3.5C5 3.63261 5.05268 3.75979 5.14645 3.85355C5.24021 3.94732 5.36739 4 5.5 4C5.63261 4 5.75979 3.94732 5.85355 3.85355C5.94732 3.75979 6 3.63261 6 3.5V3H11V3.5C11 3.63261 11.0527 3.75979 11.1464 3.85355C11.2402 3.94732 11.3674 4 11.5 4C11.6326 4 11.7598 3.94732 11.8536 3.85355C11.9473 3.75979 12 3.63261 12 3.5V3H13.5V5H3.5V3H5ZM13.5 13H3.5V6H13.5V13Z"
              fill="#3A86FF"
            />
          </svg>
          {date}
        </div>
      </div>
    )
  }

  if (variant === 'type2') {
    return (
      <div className="folderType2 bg-white flex w-[204px] p-[10px] gap-x-2 rounded-md">
        <style>
          {`
              svg:hover path{
                fill: #2353A0;
              }
          `}
        </style>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="23" height="23" fill="white" />
          <path
            d="M19.4062 6.46876H11.7974L9.34375 4.01512C9.21075 3.88106 9.05243 3.77477 8.87798 3.70243C8.70354 3.63009 8.51646 3.59315 8.32762 3.59376H3.59375C3.2125 3.59376 2.84687 3.74521 2.57728 4.01479C2.3077 4.28437 2.15625 4.65001 2.15625 5.03126V18.0245C2.15673 18.3908 2.30246 18.742 2.56149 19.001C2.82053 19.26 3.17172 19.4058 3.53805 19.4063H19.4862C19.8461 19.4058 20.1911 19.2626 20.4456 19.0081C20.7001 18.7536 20.8433 18.4086 20.8438 18.0487V7.90626C20.8438 7.52501 20.6923 7.15937 20.4227 6.88979C20.1531 6.62021 19.7875 6.46876 19.4062 6.46876ZM3.59375 5.03126H8.32762L9.76512 6.46876H3.59375V5.03126ZM19.4062 17.9688H3.59375V7.90626H19.4062V17.9688Z"
            fill="black"
          />
        </svg>
        <div className="w-[150px] line-clamp-1">{folderName}</div>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 2.15625C9.65198 2.15625 7.84547 2.70425 6.30889 3.73096C4.77232 4.75766 3.57471 6.21695 2.8675 7.9243C2.1603 9.63165 1.97526 11.5104 2.33579 13.3229C2.69632 15.1354 3.58623 16.8003 4.89298 18.107C6.19972 19.4138 7.86462 20.3037 9.67713 20.6642C11.4896 21.0247 13.3684 20.8397 15.0757 20.1325C16.783 19.4253 18.2423 18.2277 19.269 16.6911C20.2958 15.1545 20.8438 13.348 20.8438 11.5C20.8411 9.02269 19.8559 6.64759 18.1041 4.89586C16.3524 3.14413 13.9773 2.15887 11.5 2.15625ZM11.5 19.4062C9.9363 19.4062 8.4077 18.9426 7.10753 18.0738C5.80735 17.2051 4.79399 15.9703 4.19558 14.5256C3.59718 13.0809 3.44061 11.4912 3.74567 9.95757C4.05073 8.4239 4.80373 7.01515 5.90944 5.90944C7.01515 4.80373 8.42391 4.05073 9.95757 3.74567C11.4912 3.4406 13.0809 3.59717 14.5256 4.19558C15.9703 4.79398 17.2051 5.80735 18.0738 7.10752C18.9426 8.4077 19.4063 9.93629 19.4063 11.5C19.4039 13.5961 18.5701 15.6057 17.0879 17.0879C15.6057 18.5701 13.5961 19.4039 11.5 19.4062ZM15.6023 10.9915C15.6691 11.0582 15.7221 11.1375 15.7583 11.2248C15.7945 11.312 15.8131 11.4055 15.8131 11.5C15.8131 11.5945 15.7945 11.688 15.7583 11.7752C15.7221 11.8625 15.6691 11.9418 15.6023 12.0085L12.7273 14.8835C12.5924 15.0184 12.4095 15.0942 12.2188 15.0942C12.028 15.0942 11.8451 15.0184 11.7102 14.8835C11.5754 14.7486 11.4996 14.5657 11.4996 14.375C11.4996 14.1843 11.5754 14.0014 11.7102 13.8665L13.3589 12.2188H7.90625C7.71563 12.2188 7.53281 12.143 7.39802 12.0082C7.26323 11.8734 7.1875 11.6906 7.1875 11.5C7.1875 11.3094 7.26323 11.1266 7.39802 10.9918C7.53281 10.857 7.71563 10.7812 7.90625 10.7812H13.3589L11.7102 9.13352C11.5754 8.99865 11.4996 8.81573 11.4996 8.625C11.4996 8.43427 11.5754 8.25135 11.7102 8.11648C11.8451 7.98162 12.028 7.90585 12.2188 7.90585C12.4095 7.90585 12.5924 7.98162 12.7273 8.11648L15.6023 10.9915Z"
            fill="#3A86FF"
          />
        </svg>
      </div>
    )
  }

  return null
}

export default Folder
