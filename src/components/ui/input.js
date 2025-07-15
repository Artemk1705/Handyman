export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className="placeholder-sky-900 xl:w-100 h-10 shadow-lg shadow-sky-900/70 my-4 px-4 rounded-lg company-blue-text"
    />
  );
}
