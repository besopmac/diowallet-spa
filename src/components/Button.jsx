import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Button({ type, label, icon, transaction }) {
  const navigate = useNavigate();

  let IconComponent = null;
  
  if (icon === 'plus') IconComponent = BiPlusCircle;
  if (icon === 'minus') IconComponent = BiMinusCircle;

  return (
    <button
      type={type}
      className="w-full flex items-center justify-center gap-2 p-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
      onClick={() => transaction && navigate(`/transaction/${transaction}`)}
    >
      {IconComponent && <IconComponent />} {label}
    </button>
  );
}