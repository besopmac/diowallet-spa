import Input from "../components/Input";
import Button from "../components/Button";
import ErrorInput from "../components/ErrorInput";

import { signUpSchema } from "../schemas/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { signUp } from "../services/user";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signUpSchema) });
  const navigate = useNavigate();

  async function handleSignUpForm(data) {
    try {
      await signUp(data);
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[35rem] min-h-[35rem] bg-zinc-900 relative">
      <Link to="/signin">
        <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
      </Link>
      <form onSubmit={handleSubmit(handleSignUpForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          register={register}
        />
        {errors.name && <ErrorInput text={errors.name.message} />}
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
          placeholder="Password"
          register={register}
        />
        {errors.password && <ErrorInput text={errors.password.message} />}
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          register={register}
        />
        {errors.confirmPassword && <ErrorInput text={errors.confirmPassword.message} />}
        <Button type="submit" label="Sign Up" />
      </form>
    </div>
  )
}
