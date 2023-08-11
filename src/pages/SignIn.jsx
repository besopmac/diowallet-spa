import Input from "../components/Input"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import z from "zod";

const signInSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email").toLowerCase(),
  passowrd: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signInSchema) });

  function handleSignInForm(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[35rem] h-[35rem] bg-zinc-900">
      <form onSubmit={handleSubmit(handleSignInForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          register={register}
        />
        {errors.email && <ErrorInput text={errors.email.message} />}
        <Input
          type="password"
          name="password"
          register={register}
          placeholder="Password"
        />
        {errors.passowrd && <ErrorInput text={errors.passowrd.message} />}
        <Button
          type="submit"
          label="Sign In"
        />
      </form>

      <p className="text-white text-2xl">Dont have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link></p>
    </div>
  )
}
