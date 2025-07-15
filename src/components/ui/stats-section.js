export function StatsSection() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly py-10 text-white company-blue-bg items-center gap-5">
      <div className="uppercase flex flex-col items-center justify-evenly">
        <h2 className="text-3xl py-3">5+</h2>
        <p className="text-sm">ears of expirience</p>
      </div>
      <div className="uppercase flex flex-col items-center justify-evenly">
        <h2 className="text-3xl py-3">100+</h2>
        <p className="text-sm">positive reviews over this year</p>
      </div>
      <div className="uppercase flex flex-col items-center justify-evenly">
        <h2 className="text-3xl py-3">250+</h2>
        <p className="text-sm">Projects Completed this year</p>
      </div>
      <div className="uppercase flex flex-col items-center justify-evenly">
        <h2 className="text-3xl py-3">20+</h2>
        <p className="text-sm">Different Services Offered</p>
      </div>
    </div>
  );
}
