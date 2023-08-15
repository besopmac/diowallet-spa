/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { userLogged } from "../services/user";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});


  function validadeToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  }

  async function getUserLogged() {
    try {
      const userResponse = await userLogged();
      setUser(userResponse.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserLogged();
    validadeToken();
  }, []);

  return (
    <main className="flex flex-col bg-zinc-900 justify-center rounded p-10 w-[35rem] h-[15rem] text-2xl relative">
      <header>
        <Link to="/">
          <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
        </Link>
      </header>
      <section className="flex flex-col text-white gap-2">
        <h1 className="text-white font-bold text-3xl">{ user.name }</h1>
        <p>{ user.email }</p>
        <p></p>
      </section>
    </main>
  )
}