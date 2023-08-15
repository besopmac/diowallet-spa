/* eslint-disable react-hooks/exhaustive-deps */
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findAllTransactions } from "../services/transactions";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Cookies from "js-cookie";

export default function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});

  function validadeToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  }

  async function getTransactionDetails() {
    try {
      const { data } = await findAllTransactions();
      const transactionFiltered = data.filter(transaction => transaction._id === id);
      setTransaction(transactionFiltered[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    validadeToken();
    getTransactionDetails()
  }, []);

  return (
    <main className="flex flex-col bg-zinc-900 justify-center rounded p-10 w-[35rem] h-[15rem] text-2xl relative">
      <header>
        <Link to="/">
          <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
        </Link>
      </header>
      <section className="flex flex-col text-white gap-2">
        <h1 className="text-white font-bold text-3xl">{ transaction.description }</h1>
        <p>R$ { transaction.value }</p>
        <p>Type: <span className={`text-white text-base p-2 py-1 font-bold rounded ${transaction.type === 'input' ? 'bg-green-500' : 'bg-red-500'}`}>{ transaction.type }</span></p>
        <p>Date: { dayjs(transaction.created_at).format("DD/MM") }</p>
      </section>
    </main>

  )
}