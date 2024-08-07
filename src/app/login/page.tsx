import { login } from './actions'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../../public/assets/LogoWhite.svg'
import GoogleAccount from '../../../public/assets/web_light_sq_ctn 1.svg'
import Button from '@/components/ui/button'

export default function LoginPage(): JSX.Element {
  return (
    <div className='flex max-h-full w-full gap-10'>
      <div className="flex flex-col w-[40%] rounded-lg bg-primary-700 px-[46px] py-[70px] gap-20">
        <header className="flex flex-row items-center justify-start p-4 gap-2">
          <Image src={LogoWhite} alt="StudyCrew Logo" className="w-[45px] h-[45px] fill-white" />
          <h1 className='relative fontFamily-rubik text-white text-[30px] font-bold'>StudyCrew
            <span className="absolute uppercase bg-[#D3E4FF] text-[8px] text-gray-900 rounded-md px-1 py-0.5 -right-5 bottom-0">beta</span>
          </h1>
        </header>
        <h2 className='text-white fontFamily-rubik leading-none text-[45px]'>Welcome Back!</h2>
        <div className='mt-[160px] flex flex-col gap-5'>
          <h3 className='text-[1.5rem] text-white font-bold'>Updates</h3>
          <div className='bg-white p-4 rounded-lg'>
            <p>StudyCrew Version 0.1 is Live! 🥳</p>
            <p>We’re excited to welcome you to the beta version of StudyCrew! If you have any questions or feedback, just send us an email at {" "}
              <span>info@studycrew.world</span>.
            </p>
          </div>
        </div>
        <span className="text-white text-[22px] fontFamily-dmSans italic underline mt-[161px]">info@studycrew.world</span>
      </div>
      <div className="flex flex-col w-[60%] justify-center pr-100">
        <h2 className='fontFamily-rubik font-bold text-[40px]'>Log In</h2>
        <p className="text-[22px] mt-3">
          New to StudyCrew? {" "}
          <Link href="/signup" className="text-primary-500 underline">Sign Up</Link>
        </p>
        <Image src={GoogleAccount} alt="Google Account" className="w-[234px] h-[50px] cursor-pointer mt-8" />
        <div className="relative flex items-center mt-[20px]">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-4 text-gray-500 bg-white">Or continue with</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <form className="flex flex-col mt-[20px] gap-[20px]">
          <div className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-lg border border-grey px-1 h-12"
              placeholder="email@address.com"
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="rounded-lg border border-grey px-1 h-12"
              placeholder="*****"
              required
            />
          </div>
          <Button
            formAction={login}
            text="Log in"
            className="uppercase py-2 bg-primary-500 text-white w-full h-[40px] rounded-lg mt-4"
          />
        </form>
      </div>
    </div>
  )
}
