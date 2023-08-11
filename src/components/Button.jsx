// eslint-disable-next-line react/prop-types
export default function Button({ type, label }) {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
    >
      {label}
    </button>
  );
}