'use client'
import NotificationCard from '@/components/widgets/notifications/NotificationCard'
import React from 'react'

interface Variant1Data {
  size: string
  content: string
  title: string
}

interface Variant2Data {
  size: string
  groupName: string
  img: string
  username: string
  date: string
  question: string
}

interface Variant3Data {
  size: string
  groupName: string
  img: string
  username: string
  date: string
  assignment: string
  onClick?: () => void
}

const Check: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen bg-[#e4e7ec] gap-x-4">
      <div className="flex gap-x-4">
        <NotificationCard
          variant="platform"
          variant1Data={{
            size: 'small',
            content: 'hello i am',
            title: 'Hello'
          }}
        />
        <NotificationCard
          variant="platform"
          variant1Data={{
            size: 'large',
            content: 'hello i am',
            title: 'Hello'
          }}
        />
      </div>
      <div className="flex gap-x-4">
        <NotificationCard
          variant="grpQuestion"
          variant2Data={{
            size: 'small',
            groupName: 'AP Calc',
            img: 'https://s3-alpha-sig.figma.com/img/8984/cd4d/716f2115474431e82106834a5708dd89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyelsmEvilnxxSFdbtqSpzfIpkbb07OzhFrcUMKg0AqGEfZ8hHBViue3iqTWkr8EANoDhIeTe72WM70TsA8IgGtptxtiMeIv-kS0G4FaQW2aA67zIx8Hp05I9VFMwJsgkOn-QLtA6ZqpjXaMHJ1QuB8MsepMZtnAlousJkFzZA5Qww0qdoTDTaiHvFel35U0yt~qD6mWq19LXwvWoEne2Kg7wuOEhkgQV3iqd4UnfPb3Pscn830GRWEK4HdveWkhgQepBBEjv91x2KLRgdoOf56~qAgInImfKnZ5CBKRmIxoFUWrv3BYsTvgnUReyLos1eqIMEo5~Ji~AUZeLAqUqw__',
            username: 'Agatha Lewis-Johanssen',
            date: 'Aug 23 12:24 PM',
            question: 'What are the key factors in social change?'
          }}
        />
        <NotificationCard
          variant="grpQuestion"
          variant2Data={{
            size: 'large',
            groupName: 'AP Calc',
            img: 'https://s3-alpha-sig.figma.com/img/8984/cd4d/716f2115474431e82106834a5708dd89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyelsmEvilnxxSFdbtqSpzfIpkbb07OzhFrcUMKg0AqGEfZ8hHBViue3iqTWkr8EANoDhIeTe72WM70TsA8IgGtptxtiMeIv-kS0G4FaQW2aA67zIx8Hp05I9VFMwJsgkOn-QLtA6ZqpjXaMHJ1QuB8MsepMZtnAlousJkFzZA5Qww0qdoTDTaiHvFel35U0yt~qD6mWq19LXwvWoEne2Kg7wuOEhkgQV3iqd4UnfPb3Pscn830GRWEK4HdveWkhgQepBBEjv91x2KLRgdoOf56~qAgInImfKnZ5CBKRmIxoFUWrv3BYsTvgnUReyLos1eqIMEo5~Ji~AUZeLAqUqw__',
            username: 'Agatha Lewis-Johanssen',
            date: 'Aug 23 12:24 PM',
            question: 'What are the key factors in social change?'
          }}
        />
      </div>
      <div className="flex gap-x-4">
        <NotificationCard
          variant="grpMaterial"
          variant3Data={{
            size: 'small',
            groupName: 'Biochemistry',
            img: 'https://s3-alpha-sig.figma.com/img/817b/b0f2/2e6ea37d5b1c29713b7d4b9c564d76af?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMRLKNTjXJKJ1PuNE1-1obKuEMr9XKF1qOWnR9S6hfNPxhwS7fjFNR4-yEF2n4typu9PqxsNeC4ZYJwtjojmyXdyfSWShgHvoiXW04NDxD8pgj76ESKxJMrRqycZlJLgGDPp1-qCcal1rzgn-y4RybNCmwN5YTcB5CZ83qA1pfY9Z7TVvin8Q6eFHqy4iNx9NyUSC6QqHc4tq5a~3D~wYFXCNG-xY-hvcY~9ErKP1jvIEsd3f4robLGUQU~kz-dG0PcTMc1yrRudO8jzsPsTh1Wnb~2~L5C-uBh9nBTyPYsE2JZbw-SIsH-ujsNFzLHKSVaF5eblfS6UH1ioDHd6eA__',
            username: 'Harry Kane',
            date: 'Aug 23 12:24 PM',
            assignment: 'Homework assignment Chapter 3.3 #1-28'
          }}
        />
        <NotificationCard
          variant="grpMaterial"
          variant3Data={{
            size: 'large',
            groupName: 'Biochemistry',
            img: 'https://s3-alpha-sig.figma.com/img/817b/b0f2/2e6ea37d5b1c29713b7d4b9c564d76af?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMRLKNTjXJKJ1PuNE1-1obKuEMr9XKF1qOWnR9S6hfNPxhwS7fjFNR4-yEF2n4typu9PqxsNeC4ZYJwtjojmyXdyfSWShgHvoiXW04NDxD8pgj76ESKxJMrRqycZlJLgGDPp1-qCcal1rzgn-y4RybNCmwN5YTcB5CZ83qA1pfY9Z7TVvin8Q6eFHqy4iNx9NyUSC6QqHc4tq5a~3D~wYFXCNG-xY-hvcY~9ErKP1jvIEsd3f4robLGUQU~kz-dG0PcTMc1yrRudO8jzsPsTh1Wnb~2~L5C-uBh9nBTyPYsE2JZbw-SIsH-ujsNFzLHKSVaF5eblfS6UH1ioDHd6eA__',
            username: 'Harry Kane',
            date: 'Aug 23 12:24 PM',
            assignment: 'Homework assignment Chapter 3.3 #1-28',
            onClick: () => {
              alert('hello')
            }
          }}
        />
      </div>
    </div>
  )
}

export default Check
