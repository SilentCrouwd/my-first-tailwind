function Section2() {
  return (
    <div className="grid grid-cols-12 w-full gap-6 mx-auto px-4 m-10 grid-rows-3 lg:grid-rows-1 lg:w-5xl ">
      <div className="col-start-2 col-span-10 w-full bg-white/15 backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition lg:row-start-1 lg:col-start-1 lg:col-span-3"></div>
      <div className="col-start-2 col-span-10 w-full bg-white/5 backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition lg:row-start-1 lg:col-start-4 lg:col-span-6">
        <p className="p-10 text-2xl tracking-tight align-middle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          culpa minima natus ad non officia dicta dolore corrupti ipsam dolorem,
          labore quas, fugiat obcaecati recusandae magnam? Omnis commodi est
          dolores!
        </p>
      </div>
      <div className="col-start-2 col-span-10 w-full bg-white/15 backdrop-blur-md min-h-50 rounded-3xl border border-slate-800 hover:border-indigo-800 transition lg:row-start-1 lg:col-start-10 lg:col-span-3 "></div>
    </div>
  );
}

export default Section2;
