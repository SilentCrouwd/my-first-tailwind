function Hero() {
  return (
    <div className="max-w-6xl mx-auto flex  flex-col text-center lg:flex-row lg:text-left items-center gap-10 ">
      <div className="flex-col m-5">
        <h1 className="text-7xl font-black tracking-tighter leading-[1.1]">
          <span className="text-indigo-500">Dies</span> ist eine Überschrift
        </h1>
        <p className="text-xl text-slate-400 mt-6 max-w-lg text-center lg:text-left ">
          Dies ist der Beispieltext
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-7">
          <button className=" px-8 py-4 bg-indigo-600 rounded-full hover:-translate-y-1 transition-transform ">
            Klick me
          </button>
          <button className="text-indigo-400 font-bold hover:text-indigo-300  cursor-pointer p-3 border border-indigo-900 rounded-full">
            Kontackt
          </button>
        </div>
      </div>
      <div className="w-full h-64 bg-indigo-900/20 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center"></div>
    </div>
  );
}

export default Hero;
