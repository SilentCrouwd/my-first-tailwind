function Section1() {
  return (
    <div className=" max-w-7xl mx-auto mt-20 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        <div className=" min-h-64 min-w-85 p-12 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-indigo-600">
          <h1 className="text-3xl font-black tracking-tighter">
            <span className="text-indigo-800">F</span>eature
          </h1>
        </div>
        <div className=" min-w-85 min-h-64 p-12  bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-indigo-600"></div>
        <div className=" min-w-85 min-h-64 p-12  bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-indigo-600 md:col-span-2 lg:col-span-1"></div>
      </div>
    </div>
  );
}

export default Section1;
