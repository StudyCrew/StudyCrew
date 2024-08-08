'use client'

import GroupCard from '@/components/widgets/groupcard/GroupCard'
// import "../globals.css"

const Check: React.FC = () => {
  const arr = [
    {
      bannerImageLink:
        'https://s3-alpha-sig.figma.com/img/f5ac/55b3/d2c48b8a3ce9080424fd8ee2eb08a6e5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWcrZNJiDEWNb-zrIRJACCYp38bjoVveO55rxJoTrsUQ~7umJ16JadLFQsnpltbmQo7heypMF7IRv~mpDBsvkoTICrDsQSNMZxFz3I0WBL54gf3t9hUJCO1JMJZkAGMAs4VzrFgW4T6qoFfnaiqcW5WM2NQHj6oRd18WTfBMg3vU32vpsWyj3lO8BcW8v1FrUV~MHlS1fv-OxGtGGNrGNhxURvbi-1FcMJJErCMuxR8AkdxEq9gmMrDfqIFY3XYGHFBq~mqlxmwCXnuSjF1Ff~S2z7AR6B0USBwYiHger4VQ042zjsicw0WPiEoetgp6m6IjpFwGReO17hIeDEOgbw__',
      name: 'AP Calc 2023',
      adminName: 'James Gordon',
      subject: 'MATH',
      members: 145,
      avatarLink:
        'https://s3-alpha-sig.figma.com/img/9379/8ae3/f200add447d64e967a74191ab54207c1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qq~90Tnl~tOFalHTX~8bLZH~tNHyt-g6numvGkokC~whozss6kpfSuTjrRJjPTTrUJJr4B-pndMhKXpKn0ilbJi7zVYUEt4XKUmUiaSc2uzfYNA8ESaKMottttRbWZf3gr75tNUM3C8YVuKon0j4VmPvQqhmOR1a0vGnkEJyFj-Eag68GmOrIdHQdw78ouZUZQ7sj79UMaxeh2rYl0n4DcY~SKGTOqI363j7xJhgqxwtGu8i-JloUBqOifxKgIN5UVYW4ykTWSu5-UC8391hvEyxXjis2aIk63-4gmKi4O564q22ZEuWlddvMy22bKUo195uD2c82ZNLa1AjXQKc2Q__',
      description:
        'Made this group to help those who are struggling with calculus 1 and 2',
      actionName: 'ENTER',
      handleClickAction: () => {
        alert('You entered AP Calc 2023')
      }
    },
    {
      bannerImageLink:
        'https://s3-alpha-sig.figma.com/img/af2c/ceba/5984559e4c8a2e4092848391d1cb99ff?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GpaNrmXKJPZMajLz4xnS31XfYuhGM7W99d5ujAeQ2q3BzlQ9F0NN1iUvv6WBiOhh-5Y2dNtzxqMPnikGgPvzXq6Xw3IWyBLwbOPov-O2eRpI6mXn3JofgLn8B5~p9LtB5O1~Ay4ZIIEBEAM0Czb-uvU57aERR-POXALOBsKvmNBOR1CkUHfjXXsWtEarIonZCPMtNBzTv3wiISWmLqVmOFFgVqQc-RLjwQgG14cWfAwFm63le98-jCxhoiS3b3ZX0WbbY17HF5IVR6uyQTpOBvhikF2VMIEe00GixR12m~bN0ZymXCUiWZfFpUiYXWxCPMJCyiC8XQsWY70WHF4oxA__',
      name: 'Economics',
      adminName: 'Jones Ramsey',
      subject: 'SOCIAL SCIENCE',
      members: 25,
      avatarLink:
        'https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxUdPp5md~NexOI8YwOOvpUM4z~z2orgsEfT0-Lt3Ep0JokxIlCHNh6nmpjdlfdgLUMlXT6ybigdy~6y6WrV7iadIunXpaF2Mv94v~KXt1XjGUJf0a0bLa0Y3YNTocNenkqgiOj-rNgbUbzyLJB6uL1U1wBmK~kmwBXsRSGTMdh1vFAAYOCeoQB9p8mXpELYaZoh71VuedtZgo0rkB00P-bsr6zaJyBG5RjpW77ncn8a1nk2hvVtX2mK4CsGjni11Xxl1GeFWTY4T6x4rKGk1rGbe3JrNsBm4k4~OorpRXPRamQ7C~WLr5mzwW2xw1lg04TFKN1hqi5cSKBwWciR6g__',
      description:
        'Crack Economics and Statistics (CES) makes videos on Economics, Statistics, SPSS and R Studio.',
      actionName: 'ENTER',
      handleClickAction: () => {
        alert('You entered Economics')
      }
    }
  ]

  return (
    <div className="main bg-[#f3f4f8] h-screen flex justify-center items-center gap-y-5 gap-x-4">
      {arr.map((item, index) => (
        <GroupCard
          key={index}
          bannerImageLink={item.bannerImageLink}
          name={item.name}
          adminName={item.adminName}
          subject={item.subject}
          members={item.members}
          avatarLink={item.avatarLink}
          description={item.description}
          actionName={item.actionName}
          handleClickAction={item.handleClickAction}
        />
      ))}
    </div>
  )
}

export default Check
