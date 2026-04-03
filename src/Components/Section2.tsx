function Section2() {
  return (
    <div className="grid grid-cols-12 max-w-6xl gap-2 mx-auto mt-50 grid-rows-3 lg:grid-rows-1 ">
      <div className=" col-start-2 col-span-10 w-full bg-white/15 backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition row-1 lg:row-1 lg:col-start-2 lg:col-span-3"></div>
      <div className="col-start-2 col-span-10  w-full bg-white/5backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition row-2 lg:row-1 lg:col-start-5 lg:col-span-3">
        <p className="p-10 text-2xl tracking-tight align-middle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          culpa minima natus ad non officia dicta dolore corrupti ipsam dolorem,
          labore quas, fugiat obcaecati recusandae magnam? Omnis commodi est
          dolores!
        </p>
      </div>
      <div className="col-start-2 col-span-10  w-full bg-white/15 backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition row-3 lg:row-1 lg:col-start-8 lg:col-span-3"></div>
    </div>
  );
}

export default Section2;
