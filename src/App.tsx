import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
function App() {
  return (
    <div className="relative z-50 min-h-screen bg-slate-950 text-white overflow-x-hidden ">
      {/* Glow-Hintergrund bleibt gleich */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-150 w-150 rounded-full bg-indigo-500/20 blur-[120px]"></div>
      </div>

      {/* Die Navbar - sie hat ihr eigenes max-w-4xl und mx-auto, das passt jetzt */}
      <Navbar />

      {/* Wir nutzen ein <main>, um Hero und Section zu umschließen */}
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Section1 />
      </main>
    </div>
  );
}
export default App;
