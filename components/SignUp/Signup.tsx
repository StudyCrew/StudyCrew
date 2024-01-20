/* Import React and necessary components */
import React, { useCallback, useEffect, useState } from 'react'
import './Signup.css'
import Button from '../Button/Button'
import { addToWaitlist, getSpotsLeft } from '@/lib/actions/waitlist.actions'
import LeftWing from './LeftWing'
import RightWing from './RightWing'

/* Define the Empower component */
function SignUp(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [spotsLeft, setSpotsLeft] = useState<number>(0)

  const handleJoinWaitlist = async (): Promise<void> => {
    try {
      if (!email) {
        setMessage('Please enter your email address.')
        return
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setMessage('Invalid email address')
      }
      // Perform input validation if needed
      const response = await addToWaitlist(email)
      if (!response) {
        setMessage('Failed to join waitlist. Please try again.')
        return
      }
      setMessage('Successfully joined waitlist!')
      setEmail('') // Clear the input after successful operation
      await fetchSpotsLeft()
    } catch (error) {
      setMessage('Failed to join waitlist. Please try again.')
    }
  }

  const onHandleJoinWaitlist = useCallback(() => {
    handleJoinWaitlist().catch((err: Error) => {
      console.error(err.message)
    })
  }, [handleJoinWaitlist])

  const fetchSpotsLeft = async (): Promise<void> => {
    try {
      const response = await getSpotsLeft()
      console.log(response)
      setSpotsLeft(response)
    } catch (error) {
      console.error('Error fetching spots left:', error)
    }
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await fetchSpotsLeft()
    }
    fetchData().catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="empower">
      <div className="left-wing">
        <LeftWing />
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
        {message && <p>{message}</p>}
      </div>

      <div className="right-wing">
        <RightWing />
      </div>
    </div>
  )
}

export default SignUp
