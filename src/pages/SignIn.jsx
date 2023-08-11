import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[35rem] h-[35rem] bg-zinc-900">
      <form className="flex flex-col justify-center gap-4 w-full text-2xl">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" label="Sign In" />
      </form>

      <p className="text-white text-2xl">Dont have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link></p>
    </div>
  )
}
