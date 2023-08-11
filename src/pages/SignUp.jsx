import Input from "../components/Input";
import Button from "../components/Button";
import ErrorInput from "../components/ErrorInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

const signUpSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.slice(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email")
  .toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signUpSchema) });

  function handleSignUpForm(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[35rem] h-[35rem] bg-zinc-900 relative">
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
