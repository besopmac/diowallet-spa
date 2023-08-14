import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[60rem] h-[35rem] text-2xl">
      <h1 className="text-white font-bold text-5xl">{error.status} : {error.statusText}</h1>
    </div>
  )
}