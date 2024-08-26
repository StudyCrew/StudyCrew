import { addToWaitlist, getSpotsLeft } from '@/app/(landing)/waitlist.actions'
import React, { useCallback, useEffect, useState } from 'react'

import Button from '@/app/(landing)/_components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from '../../../../components/ui/checkbox'
import './style.css'

const { NODE_ENV } = process.env

function SignUp(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isSucceed, setIsSucceed] = useState<boolean>(false)
  const [spotsLeft, setSpotsLeft] = useState<number>(0)
  const [ageChecked, setAgeChecked] = useState<boolean>(false)

  const handleJoinWaitlist = async (): Promise<void> => {
    try {
      setErrorMessage('')
      setIsSucceed(false)
      if (!email) {
        setErrorMessage('Please enter your email address.')
        return
      }

      if (!ageChecked) {
        setErrorMessage(
          'Sorry, our waitlist is only open to indeviduals who are 16 years of age or older. We appreciate your understanding.'
        )
        return
      }

      if (!/^[\w.%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setErrorMessage('Invalid email address')
      }
      // Perform input validation if needed

      const response = await addToWaitlist(email)
      if (!response) {
        setErrorMessage('Failed to join waitlist. Please try again.')
        return
      }

      setEmail('') // Clear the input after successful operation
      setIsSucceed(true)

      await fetchSpotsLeft()
    } catch (error) {
      setErrorMessage('Failed to join waitlist. Please try again.')
    }
  }

  const onHandleJoinWaitlist = useCallback((): void => {
    handleJoinWaitlist().catch((err: Error): void => {
      if (NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(err.stack)
      } else {
        // eslint-disable-next-line no-console
        console.error(err.message)
      }
    })
  }, [handleJoinWaitlist])

  const fetchSpotsLeft = async (): Promise<void> => {
    try {
      const response = await getSpotsLeft()
      setSpotsLeft(response)
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching spots left: ${(err as Error).message}`)

      if (NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error((err as Error).stack)
      }
    }
  }
  useEffect(() => {
    fetchSpotsLeft().catch((err: Error) => {
      if (NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(err.stack)
      } else {
        // eslint-disable-next-line no-console
        console.error(err.message)
      }
    })
  }, [])

  return (
    <div className="empower">
      <div className="left-wing">
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
          <React.Fragment>
            <div className="email-input">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Button onClick={onHandleJoinWaitlist}>Join WaitList</Button>
            </div>
            <div className="flex items-center justify-center space-x-2 my-4">
              <Checkbox
                checked={ageChecked}
                onCheckedChange={() => {
                  setAgeChecked((prev) => !prev)
                }}
                id="age"
              />
              <label
                htmlFor="age"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that I am 16 years or older
              </label>
            </div>
          </React.Fragment>
        )}

        {errorMessage ? (
          <div className="flex justify-center w-full">
            <div className="max-w-[300px] p-3 bg-red-400 text-white rounded-md">
              {errorMessage}
            </div>
          </div>
        ) : null}
      </div>

      <div className="right-wing">
        <svg
          width="230"
          height="500"
          viewBox="0 0 633 1211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="margin-right-wing"
        >
          <path
            d="M471.838 206.594C445.666 198.944 423.642 136.105 419.108 107.624C413.604 73.0548
            408.022 32.7081 441.2 8.38994C474.378 -15.9283 503.653 19.1891 512.969
            53.8814C524.624 82.4373 522.941 157.487 499.733 191.628C499.875 207.286 499.895
            222.682 499.786 237.826C502.48 233.527 505.079 229.723 507.443 226.592C528.543
            198.657 553.752 166.661 594.277 173.71C634.802 180.759 629.784 226.205 611.239
            256.972C598.097 286.614 537.712 341.254 496.661 343.651C494.515 383.082 491.247
            420.761 486.735 456.966C495.792 441.975 506.087 428.406 513.842 420.185C537.865
            394.72 566.415 365.665 605.928 377.095C645.44 388.525 635.493 433.152 613.7
            461.712C596.089 492.002 520.458 545.286 480.945 533.856C478.811 533.239 476.933
            532.431 475.294 531.45C470.122 559.465 464.061 586.625 457.046 613.082C463.123
            606.525 468.95 600.928 473.794 596.89C500.682 574.473 532.495 549.031 570.361
            565.093C608.227 581.156 593.027 624.278 567.983 650.034C546.884 678.007 465.437
            721.889 427.57 705.827L427.461 705.78C425.89 709.95 424.29 714.106 422.661
            718.248C413.975 740.337 404.469 762.008 394.103 783.371C400.067 779.41 405.619
            776.108 410.274 773.707C441.391 757.667 477.97 739.744 511.441 763.65C544.912
            787.556 520.705 826.346 490.664 846.047C464.877 868.014 380.801 892.241 345
            872.222C325.95 902.87 304.891 933.18 281.691 963.506C288.478 960.867 294.714
            958.798 299.849 957.437C333.688 948.467 373.267 938.835 400.808 969.384C428.349
            999.933 396.362 1032.61 362.786 1045.38C333.635 1060.88 249.954 1066.56 217.347
            1041.61C196.152 1065.68 173.563 1089.94 149.516 1114.57C152.668 1113.68 155.512
            1112.9 157.968 1112.25C191.807 1103.28 231.385 1093.64 258.926 1124.19C286.467
            1154.74 254.481 1187.42 220.904 1200.19C189.968 1216.64 71.8044 1215.62 44.2634
            1185.08C43.3827 1184.1 42.64 1183.12 42.0285 1182.14C19.0964 1167.06 3.84639
            1108.81 1.63698 1081.85C-1.22273 1046.96 -3.72166 1006.31 31.2087 984.584C66.139
            962.857 92.6592 1000.1 99.3109 1035.4C105.674 1055.17 104.406 1095.49 95.0423
            1129.58C129.506 1095.68 161.107 1062.7 190.04 1030.22C163.718 1022.58 145.919
            956.334 143.518 927.042C140.659 892.154 138.16 851.5 173.09 829.774C208.021
            808.048 234.541 845.289 241.192 880.589C247.588 900.458 246.274 941.096 236.779
            975.296C265.888 939.353 291.782 903.714 314.731 867.759C288.363 860.846 259.295
            804.404 251.062 777.666C240.761 744.211 229.572 705.048 259.009 676.315C288.447
            647.582 322.36 678.243 336.453 711.284C346.821 729.046 354.218 768.111 352.603
            803.158C369.086 772.332 383.591 741.019 396.281 708.845C369.267 703.057 332.313
            658.296 319.241 635.345C301.917 604.928 282.485 569.133 304.977 534.691C327.469
            500.249 367.235 522.809 388.171 551.998C401.311 566.177 415.977 599.294 422.706
            631.919C431.473 602.219 438.944 571.584 445.215 539.756C417.849 533.393 379.767
            496.774 364.979 476.801C344.15 448.669 320.586 415.448 338.808 378.569C357.031
            341.691 399.205 359.345 423.474 385.828C435.326 395.888 449.62 417.992 460.263
            442.692C463.718 413.084 466.355 382.406 468.235 350.493C443.98 364.447 386.237
            321.363 365.648 299.115C341.872 273.425 314.823 242.974 328.911 204.328C343
            165.681 386.85 178.627 413.865 202.302C432.121 214.644 457.896 250.504 471.001
            285.03C471.679 259.673 471.949 233.551 471.838 206.594Z"
            fill="url(#paint0_linear_0_100)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_100"
              x1="471.748"
              y1="-13.9991"
              x2="-380.387"
              y2="625.946"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3833A6" />
              <stop offset="1" stopColor="#4D8EFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default SignUp
