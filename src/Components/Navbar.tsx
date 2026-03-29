function Navbar() {
  const navItems = [
    "Produkte",
    "Lösungen",
    "Entwickler",
    "Ressourcen",
    "Preisgestaltung",
  ];

  return (
    <div className="flex p-3 max-w-6xl mx-auto space-x-1 items-center justify-between border text-indigo-400 bg-slate-900 rounded-lg shadow-lg">
      {/* 1. Logo */}
      <h3 className="mr-10 text-5xl tracking-tighter font-black italic cursor-pointer">
        stripe
      </h3>

      {/* 2. Menü-Zentrum */}
      <div className="flex gap-6">
        {navItems.map((item, index) => (
          <div key={index} className="relative group py-2">
            {/* Der Haupt-Link */}
            <p className="hover:scale-105 cursor-pointer transition-all flex items-center gap-1">
              {item}
              <svg
                className="size-4 rotate-180 group-hover:rotate-0 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7,15L12,10L17,15H7Z" />
              </svg>
            </p>

            {/* Das schwebende Dropdown-Fenster */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-slate-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-4 border border-slate-200 z-50">
              <p className="text-sm font-bold text-indigo-600 mb-2 underline decoration-indigo-200">
                Highlights
              </p>
              <ul className="text-xs space-y-3 text-slate-500 font-medium">
                <li className="hover:text-indigo-600 hover:translate-x-1 transition-transform cursor-pointer">
                  → Übersicht
                </li>
                <li className="hover:text-indigo-600 hover:translate-x-1 transition-transform cursor-pointer">
                  → Dokumentation
                </li>
                <li className="hover:text-indigo-600 hover:translate-x-1 transition-transform cursor-pointer">
                  → Beispiele
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Action Button */}
      <button className="px-6 py-2 active:scale-95 bg-indigo-600 text-white font-bold border-none rounded-full hover:bg-indigo-400 hover:text-slate-900 transition-all">
        Sign In
      </button>
    </div>
  );
}

export default Navbar;
