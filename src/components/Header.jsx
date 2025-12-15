import { BookOpen, Lightbulb } from "lucide-react";

const Header = ({ advice }) => {
  return (
    <header className="relative overflow-hidden text-white">


      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700" />

      
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-400/40 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-blue-400/40 rounded-full blur-[120px] animate-pulse" />

      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">

      
        <div className="mx-auto mb-6 w-fit p-4 rounded-2xl bg-white/15 backdrop-blur-xl shadow-2xl">
          <BookOpen className="w-9 h-9" />
        </div>

    
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Course Finder
          </span>
        </h1>

       
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Discover high-quality courses, filter by skill, and level up faster.
        </p>

        
        {advice && (
          <div className="
            mx-auto max-w-3xl
            bg-white/15 backdrop-blur-2xl
            rounded-3xl p-6
            flex gap-4 items-start
            shadow-[0_20px_80px_rgba(0,0,0,0.3)]
            border border-white/20
            transition-all duration-300
            hover:scale-[1.02] hover:bg-white/20
          ">
            <div className="p-3 rounded-xl bg-yellow-400/30">
              <Lightbulb className="w-6 h-6 text-yellow-200" />
            </div>

            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                Daily Advice
              </p>
              <p className="text-base leading-relaxed text-white/90">
                {advice}
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
