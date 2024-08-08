'use client'

import React from 'react'
import type { MaterialProps } from '@/types'
import { MaterialType } from '../../../../types'
import Image from 'next/image'
import { formatDate } from '@/utils'
import Link from 'next/link'

// ! THE USER TYPE IS SET TO STRING FOR NOW, CHANGE IT TO THE DEFINED USER TYPE WHEN USING THE COMPONENT
// ! ALSO UPDATE THE DECLARATION - "MaterialComponentProps"

const Material = ({
  type,
  websiteLink,
  title,
  link,
  user,
  date,
  variant = 'default'
}: MaterialProps) => {
  let iconPath: string

  switch (type) {
    case MaterialType.GoogleDoc:
      iconPath = '/assets/icons/file-doc.svg'
      break
    case MaterialType.Excel:
      iconPath = '/assets/icons/microsoft-excel-logo.svg'
      break
    case MaterialType.GoogleSheet:
      iconPath = '/assets/icons/table.svg'
      break
    case MaterialType.GoogleSlides:
      iconPath = '/assets/icons/cards.svg'
      break
    case MaterialType.Powerpoint:
      iconPath = '/assets/icons/microsoft-powerpoint-logo.svg'
      break
    case MaterialType.Website:
      iconPath = '/assets/icons/browser.svg'
      break
    case MaterialType.Word:
      iconPath = '/assets/icons/microsoft-word-logo.svg'
      break
    case MaterialType.YouTube:
      iconPath = '/assets/icons/youtube-logo.svg'
      break
    default:
      iconPath = '/assets/icons/browser.svg' // Fallback for unknown types
  }

  return (
    <>
      {variant === 'default' ? (
        <div className={'flex w-[427px] h-[45px] px-4 py-2 gap-x-[14px]'}>
          <div className={'flex justify-center items-center'}>
            <Image src={iconPath} alt={'icon'} width={32} height={32} />
          </div>
          <div className={'w-full'}>
            <div className={'flex flex-col gap-y-0.5'}>
              <div>
                <span className={'text-base font-semibold'}>{title}</span>
              </div>
              <div className={'flex gap-y-2 justify-between'}>
                <div className={'flex h-5'}>
                  <Image
                    src={'/assets/icons/link.svg'}
                    alt={'link'}
                    width={16}
                    height={16}
                  />
                  <span>&nbsp;</span>
                  <Link
                    href={link}
                    className={
                      'font-light italic truncate text-xs max-w-[100px]'
                    }
                  >
                    {link}
                  </Link>
                </div>
                <div className={'flex h-4'}>
                  <Image
                    src={'/assets/avatars/jacob.svg'} // replace with user.imgUrl
                    alt={'user image'}
                    width={16}
                    height={16}
                    className={'rounded-full'}
                  />
                  <span>&nbsp;</span>
                  <span className={'text-xs truncate max-w-[100px]'}>
                    {user}
                  </span>{' '}
                  {/* replace with user.name */}
                </div>
                <div className={'flex h-4'}>
                  <Image
                    src={'/assets/icons/calendar-blank.svg'} // replace with user.imgUrl
                    alt={'calender'}
                    width={16}
                    height={16}
                  />
                  <span>&nbsp;</span>
                  <span className={'text-xs'}>{formatDate(date)}</span>{' '}
                  {/* replace with user.name */}
                </div>
              </div>
            </div>
          </div>
          <div className={'flex justify-center items-center'}>
            <Link href={websiteLink}>
              <Image
                src={'/assets/icons/arrow-circle-right.svg'}
                alt={'arrow-circle-right'}
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className={'flex w-[188px] h-[31px] px-[7px] py-[5px]'}>
          <div className={'flex justify-center items-center'}>
            <Image src={iconPath} alt={'icon'} width={32} height={32} />
          </div>

          <div className={'w-full ml-[7px]'}>
            <div className={'flex flex-start flex-col'}>
              <div className={'text-base font-semibold leading-none'}>
                {title}
              </div>
              <div className={'flex gap-y-2 justify-between'}>
                <div className={'flex h-5'}>
                  <Link
                    href={link}
                    className={
                      'font-light italic truncate text-[10px] max-w-[120px] '
                    }
                  >
                    {link}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={'flex justify-center items-center'}>
            <Link href={websiteLink}>
              <Image
                src={'/assets/icons/arrow-circle-right.svg'}
                alt={'arrow-circle-right'}
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Material
