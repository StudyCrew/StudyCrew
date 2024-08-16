import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../../public/assets/LogoWhite.svg'
import GoogleAccount from '../../../public/assets/web_light_sq_ctn 1.svg'
import { PiHouseDuotone } from 'react-icons/pi'
import { PiUsersDuotone } from 'react-icons/pi'
import { PiGearDuotone } from 'react-icons/pi'
import { PiUserDuotone } from 'react-icons/pi'
import Button from '@/components/ui/button'
import { signup } from './actions'

const Signup = () => {
  const OurFeatures = [
    {
      icon: <PiHouseDuotone className="w-[32px] h-[32px] text-black" />,
      title: 'Personal Dashboard'
    },
    {
      icon: <PiUsersDuotone className="w-[32px] h-[32px] text-black" />,
      title: 'Study Groups'
    },
    {
      icon: <PiGearDuotone className="w-[32px] h-[32px] text-black" />,
      title: 'Settings'
    },
    {
      icon: <PiUserDuotone className="w-[32px] h-[32px] text-black" />,
      title: 'Personal Profile'
    }
  ]
  return (
    <div className="container m-5 p-0 flex w-full h-screen gap-10">
      <div className="flex flex-col min-w-[35vw] max-w-[40vw] max-h-[78vh] xl:h-screen justify-around rounded-lg bg-primary-500 px-[46px] py-[70px] gap-[55px]">
        <header className="flex flex-row items-center justify-start gap-2">
          <Image
            src={LogoWhite}
            alt="StudyCrew Logo"
            className="w-[45px] h-[45px] fill-white"
          />
          <h1 className="relative fontFamily-rubik text-white text-[30px] font-bold">
            StudyCrew
            <span className="absolute uppercase bg-[#D3E4FF] text-[8px] text-gray-900 rounded-md px-1 py-0.5 -right-5 bottom-0">
              beta
            </span>
          </h1>
        </header>
        <h2 className="text-white fontFamily-rubik leading-none text-[40px]">
          Elevate Your Learning Experience – 100% Free.
        </h2>
        <div className="flex flex-col gap-2 text-secondary-text-400 items-start justify-start">
          <h3 className="text-white font-bold text-2xl">Our Features:</h3>
          {OurFeatures.map((feature, index) => (
            <div key={index} className="flex gap-2 items-center justify-start">
              <div className="p-4 bg-white rounded-md">{feature.icon}</div>
              <p className="text-white text-[22px]">{feature.title}</p>
            </div>
          ))}
        </div>
        <span className="text-white text-[22px] fontFamily-dmSans italic underline">
          <a href="mailto:info@studycrew.world">info@studycrew.world</a>
        </span>
      </div>
      <div className="flex flex-col justify-center pr-100 w-full">
        <h2 className="fontFamily-rubik font-bold text-[40px]">Sign Up</h2>
        <p className="text-[22px] mt-3">
          Already have an account?{' '}
          <Link href="/login" className="text-primary-500 underline">
            Log in
          </Link>
        </p>
        <Image
          src={GoogleAccount}
          alt="Google Account"
          className="w-[234px] h-[50px] cursor-pointer mt-8"
        />
        <div className="relative flex items-center mt-[20px]">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-4 text-gray-500 bg-white">Or continue with</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <form className="flex flex-col mt-[20px] gap-[20px]">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-lg border border-grey px-3 h-12"
              placeholder="email@address.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="rounded-lg border border-grey px-3 h-12"
              placeholder="*****"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="rounded-lg border border-grey px-3 h-12"
              placeholder="*****"
              required
            />
          </div>
          <div>
            <input type="checkbox" id="age" name="age" required />
            <label htmlFor="terms" className="pl-2">
              I am 16 years or older
            </label>
          </div>
          <div>
            <input type="checkbox" id="age" name="age" required />
            <label htmlFor="terms" className="pl-2">
              I have read and agree to studycrew.world’s{' '}
              <span className="text-primary-500 underline">
                Terms and Conditions{' '}
              </span>{' '}
              and{' '}
              <span className="text-primary-500 underline">
                Privacy Policy.
              </span>
            </label>
          </div>
          <Button
            formAction={signup}
            text="Sign Up"
            className="uppercase py-2 bg-primary-500 text-white h-[40px] rounded-lg mt-4"
          />
        </form>
      </div>
    </div>
  )
}

export default Signup
