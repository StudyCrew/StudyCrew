'use client'

import React from 'react'
import type { MaterialComponentProps } from '@/types'
import { MaterialType } from '../../../types'
import Image from "next/image"
import { formatDate } from '@/utils'
import Link from 'next/link'

const MaterialComponent = ({type, websiteLink, title, link, user, date, variant = "default"}: MaterialComponentProps) => {
  let iconPath: string;

  switch (type) {
    case MaterialType.GoogleDoc:
      iconPath = '/assets/icons/file-doc.svg';
      break;
    case MaterialType.Excel:
      iconPath = '/assets/icons/microsoft-excel-logo.svg';
      break;
    case MaterialType.GoogleSheet:
      iconPath = '/assets/icons/table.svg';
      break;
    case MaterialType.GoogleSlides:
      iconPath = '/assets/icons/cards.svg';
      break;
    case MaterialType.Powerpoint:
      iconPath = '/assets/icons/microsoft-powerpoint-logo.svg';
      break;
    case MaterialType.Website:
      iconPath = '/assets/icons/browser.svg';
      break;
    case MaterialType.Word:
      iconPath = '/assets/icons/microsoft-word-logo.svg';
      break;
    case MaterialType.YouTube:
      iconPath = '/assets/icons/youtube.svg';
      break;
    default:
      iconPath = '/assets/icons/browser.svg'; // Fallback for unknown types
  }


  return (
    <div className={"flex w-[427px] h-[45px] px-4 py-2 gap-x-[14px] bg-red-100"}>
      <div className={"flex justify-center items-center"}>
        <Image
          src={iconPath}
          alt={"icon"}
          width={26}
          height={26}
        />
      </div>
      <div className={"w-full"}>
        <div className={"flex flex-col gap-y-0.5"}>
          <div>
            <span className={"text-base font-semibold"}>{title}</span>
          </div>
          <div className={"flex gap-y-2 justify-between"}>
            <div className={"flex h-5"}>
                <Image
                  src={"/assets/icons/link.svg"}
                  alt={"link"}
                  width={16}
                  height={16}
                />
                <span>&nbsp;</span>
              <Link href={link} className={"font-light italic truncate text-xs max-w-[100px]"}>
                {link}
              </Link>
            </div>
            <div className={"flex h-4"}>
              <Image
                src={"/assets/avatars/jacob.svg"} // replace with user.imgUrl
                alt={"user image"}
                width={16}
                height={16}
                className={"rounded-full"}
              />
              <span>&nbsp;</span>
              <span className={"text-xs truncate max-w-[100px]"}>{user}</span> {/* replace with user.name */}
            </div>
            <div className={"flex h-4"}>
              <Image
                src={"/assets/icons/calendar-blank.svg"} // replace with user.imgUrl
                alt={"calender"}
                width={16}
                height={16}
              />
              <span>&nbsp;</span>
              <span className={"text-xs"}>{formatDate(date)}</span> {/* replace with user.name */}
            </div>
          </div>
        </div>
      </div>
      <div className={"flex justify-center items-center"}>
        <Link href={websiteLink}>
          <Image
            src={"/assets/icons/arrow-circle-right.svg"}
            alt={"arrow-circle-right"}
            width={26}
            height={26}
          />
        </Link>
      </div>
    </div>

  )
}

export default MaterialComponent