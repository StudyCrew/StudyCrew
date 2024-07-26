// import { addToWaitlist, getSpotsLeft } from '@/app/(landing)/waitlist.actions'
import React, { useEffect, useState } from 'react'

// import Button from '@/app/(landing)/_components/Button'
import Image from 'next/image'
import Link from 'next/link'
// import { Checkbox } from '../../../../components/ui/checkbox'
import './style.css'

const { NODE_ENV } = process.env

function SignUp(): JSX.Element {
  // const [email, setEmail] = useState<string>('')
  // const [errorMessage, setErrorMessage] = useState<string>('')
  const [isSucceed, setIsSucceed] = useState<boolean>(false)
  const [spotsLeft, setSpotsLeft] = useState<number>(0)
  // const [ageChecked, setAgeChecked] = useState<boolean>(false)

  // const handleJoinWaitlist = async (): Promise<void> => {
  //   try {
  //     setErrorMessage('')
  //     setIsSucceed(false)
  //     if (!email) {
  //       setErrorMessage('Please enter your email address.')
  //       return
  //     }

  //     if (!ageChecked) {
  //       setErrorMessage(
  //         'Sorry, our waitlist is only open to indeviduals who are 16 years of age or older. We appreciate your understanding.'
  //       )
  //       return
  //     }

  //     if (!/^[\w.%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //       setErrorMessage('Invalid email address')
  //     }
  //     // Perform input validation if needed

  //     const response = await addToWaitlist(email)
  //     if (!response) {
  //       setErrorMessage('Failed to join waitlist. Please try again.')
  //       return
  //     }

  //     setEmail('') // Clear the input after successful operation
  //     setIsSucceed(true)

  //     await fetchSpotsLeft()
  //   } catch (error) {
  //     setErrorMessage('Failed to join waitlist. Please try again.')
  //   }
  // }

  // const onHandleJoinWaitlist = useCallback((): void => {
  //   handleJoinWaitlist().catch((err: Error): void => {
  //     if (NODE_ENV === 'development') {
  //       // eslint-disable-next-line no-console
  //       console.error(err.stack)
  //     } else {
  //       // eslint-disable-next-line no-console
  //       console.error(err.message)
  //     }
  //   })
  // }, [handleJoinWaitlist])

  // const fetchSpotsLeft = async (): Promise<void> => {
  //   try {
  //     const response = await getSpotsLeft()
  //     setSpotsLeft(response as number)
  //   } catch (err: any) {
  //     throw error(`Error fetching spots left: ${(err as Error).message}`)
  //     if (NODE_ENV === 'development') {
  //       // eslint-disable-next-line no-console
  //       console.error((err as Error).stack)
  //     }
  //   }
  // }
  // useEffect(() => {
  //   fetchSpotsLeft().catch((err: Error) => {
  //     if (NODE_ENV === 'development') {
  //       throw Error(err.stack)
  //     } else {
  //       throw Error(err.message)
  //     }
  //   })
  // }, [])

  return (
    <div className="empower">
      <div className="left-wing">
        <Image
          src="/assets/left_wing.svg"
          alt="right wing"
          width={230}
          height={540}
        />
      </div>

      <div className="blue-neon-mist signup-mist-1"></div>

      <div className="user-email">
        <h2>
          Empowering <span>You</span>
        </h2>
        <p className="subtitle">Ready to Transform Your Learning Experience?</p>
        <p className="spots-left">
          {spotsLeft !== null
            ? `Spots left for Version 1.0: ${spotsLeft}`
            : 'Loading spots...'}
        </p>

        {isSucceed ? (
          <div className="flex justify-center w-full pt-4">
            <div className="max-w-[320px] md:max-w-[390px] p-4 border text-center border-primary-400 rounded-md">
              <h6 className="text-primary-500 mb-2 w-full text-center">
                Thank you for joining the StudyCrew waitlist!
              </h6>

              <p className="text-sm mb-3 w-full text-center">
                We&apos;ll keep you updated on your waitlist status and inform
                you as soon as it&apos;s available.
              </p>

              <div className="w-full text-center">
                <p className="text-sm w-full text-center">Find us on</p>
                <div className="flex items-center justify-center gap-4 w-full">
                  <div className="flex items-center">
                    <Image
                      height={20}
                      alt="youtube"
                      width={20}
                      src={'/assets/sign-up/youtube-logo.svg'}
                    />
                    <Link href={'#'} className="text-sm text-primary-500 ml-1">
                      @studycrewofficial
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image
                      height={20}
                      alt="instagram"
                      width={20}
                      src={'/assets/sign-up/instagram-logo.svg'}
                    />
                    <Link href={'#'} className="text-sm text-primary-500 ml-1">
                      @studycrew.world
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {
              // <div className="email-input">
              // <input
              //   type="email"
              //   placeholder="Enter your email"
              //   value={email}
              //   onChange={(e) => {
              //     setEmail(e.target.value)
              //   }}
              // />
              // <Button onClick={onHandleJoinWaitlist}>Join WaitList</Button>
              // </div>
              // <div className="flex items-center justify-center space-x-2 my-4">
              // <Checkbox
              //   checked={ageChecked}
              //   onCheckedChange={() => {
              //     setAgeChecked((prev) => !prev)
              //   }}
              //   id="age"
              // />
              // <label
              //   htmlFor="age"
              //   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // >
              //   I confirm that I am 16 years or older
              // </label>
              // </div>
            }
          </>
        )}
      </div>

      <div className="right-wing">
        <Image
          src="/assets/right_wing.svg"
          alt="right wing svg"
          width={230}
          height={540}
        />
      </div>
    </div>
  )
}

export default SignUp
