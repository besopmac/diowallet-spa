import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createNewTransaction } from "../services/transactions";
import { transactionSchema } from "../schemas/TransactionSchema";
import ErrorInput from "../components/ErrorInput";
import Button from "../components/Button";
import Input from "../components/Input";

export default function NewTransactions() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [apiErrors, setApiErrors] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  async function onSubmitForm(data) {
    try {
      const body = {...data, type}
      await createNewTransaction(body);
      navigate("/");
    } catch (error) {
      setApiErrors(error.message);
      console.log(error.message);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rouded p-8 gap-7 relative">
      <header>
        <Link to="/">
          <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
        </Link>
        <h1 className="text-white font-bold text-5xl">New {type}</h1>
      </header>

      {apiErrors && <ErrorInput text={apiErrors} />}

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col justify-center gap-4 w-full text-2xl"
      >
        <Input
          type="number"
          name="value"
          placeholder="Value"
          register={register}
        />
        {errors.value && <ErrorInput text={errors.value.message} />}
        <Input
          type="text"
          name="description"
          register={register}
          placeholder="Description"
        />
        {errors.description && <ErrorInput text={errors.description.message} />}
        <Button
          type="submit"
          label="Save"
        />
      </form>
    </div>
  )
}