export function Input({ className = "", ...props }) {
  return (
    <input
      className={`flex h-10 w-full rounded-md bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
