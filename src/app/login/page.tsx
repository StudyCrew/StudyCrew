import { login, signup } from './actions'
import Button from '@/components/ui/button'

export default function LoginPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <form className="flex flex-col justify-center items-start gap-2">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded-lg border border-grey px-1"
          placeholder="youremail@mail.com"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="rounded-lg border border-grey px-1"
          placeholder="*****"
          required
        />
        <Button
          formAction={login}
          text="Login"
          className="rounded-lg py-0.5 px-2 w-full"
        />
        <Button
          formAction={signup}
          text="Signup"
          className="rounded-lg py-0.5 px-2 w-full"
        />
      </form>
    </div>
  )
}
