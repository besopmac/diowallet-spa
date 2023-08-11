/* eslint-disable react/prop-types */
export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded p-4 w-full"
    />
  )
}