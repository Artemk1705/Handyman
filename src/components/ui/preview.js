export function PreviewSection({ title, text }) {
  return (
    <div className="bg-white flex flex-col items-center text-white w-screen pb-20 pt-10 company-blue-bg">
      <h2 className="py-10 text-3xl uppercase text-center">{title}</h2>
      <p className="leading-7 text-center xl:w-1/2 w-95 text-lg whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
