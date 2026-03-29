import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import "./App.css";

function App() {
  return (
    // relative ist der Anker für alle absoluten Kinder (wie den Glow)
    <div className="relative z-50 min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Der Hintergrund-Glow (liegt jetzt GANZ hinten) */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-150 w-150 rounded-full bg-indigo-500/20 blur-[120px]"></div>
      </div>{" "}
      {/* Deine echten Inhalte */}
      <Navbar />
      <div className="mt-20">
        {" "}
        {/* Etwas Platz nach der Navbar */}
        <Hero />
      </div>
    </div>
  );
}
export default App;
