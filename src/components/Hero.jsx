import React from 'react';
import { ArrowRight } from 'lucide-react';

const StatCard = ({ text, subtext, desc, imgurl }) => (
  <div className="relative overflow-hidden bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col justify-between aspect-[16/10] md:aspect-auto min-h-[140px] shadow-lg transition-transform hover:-translate-y-1 duration-300">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-baseline">
        <span className="font-clash text-4xl md:text-5xl font-bold text-white">{text}</span>
        {subtext && <span className="font-clash text-lg md:text-xl font-medium text-neutral-400 ml-1">{subtext}</span>}
      </div>
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
        <img src={imgurl} alt={desc} className="w-6 h-6 object-contain" />
      </div>
    </div>
    <div className="mt-4">
      <p className="font-helvetica text-sm md:text-base text-neutral-400 font-light">{desc}</p>
    </div>
  </div>
);

const Hero = () => {
  const handleScrollToSyllabus = () => {
    const el = document.getElementById('syllabus');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative pt-24 pb-16 overflow-hidden select-none"
      style={{ backgroundImage: `url('https://px.pixxo.io/sheryians/kodr_assets/Background_001.png')` }}
    >
      {/* Background overlay images */}
      <div className="w-full absolute hidden md:block z-0 top-20 left-20 pointer-events-none opacity-20">
        <img className="h-full w-full object-cover" src="https://px.pixxo.io/sheryians/kodr_assets/hero_bg.png" alt="" />
      </div>
      <div className="w-full md:w-[90%] absolute top-24 hidden md:block opacity-10 left-20 pointer-events-none">
        <img className="h-full w-full object-contain" src="https://px.pixxo.io/sheryians/kodr_assets/Kodr_text_small.png" alt="" />
      </div>

      <div className="z-10 w-full max-w-[1200px] px-6 flex flex-col items-center text-center mt-8 gap-6">
        
        {/* Mobile Heading */}
        <div className="flex sm:hidden flex-col items-center gap-2">
          <h1 className="text-[2.6rem] leading-[2.8rem] capitalize font-semibold font-clash text-white">
            You're Just <span className="text-[#6FEB2C] text-shadow-glow">100 Days</span> Away From Becoming a Full-Stack Developer
          </h1>
        </div>

        {/* Desktop Heading */}
        <div className="hidden sm:flex flex-col items-center gap-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl capitalize font-semibold font-clash text-white leading-tight">
            You're Just <span className="text-[#6FEB2C] text-shadow-glow">100 Days</span> Away
          </h1>
          <h2 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold font-clash capitalize text-white mt-1">
            From Becoming a Full-Stack Developer
          </h2>
        </div>

        {/* Sub-headline */}
        <p className="font-helvetica max-w-2xl px-5 text-white/60 md:text-white text-base md:text-xl capitalize leading-relaxed">
          From debugging code to pitching products, every day is built to make you sharper.
        </p>

        {/* Explore Button */}
        <div className="mt-4">
          <button
            onClick={handleScrollToSyllabus}
            className="group py-4 px-10 rounded-full font-medium flex items-center justify-center gap-3 text-[1.1rem] md:text-lg bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white hover:brightness-105 transition-all shadow-lg shadow-[#7200FF]/30 cursor-pointer"
          >
            <span>Explore Program</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 w-full gap-5">
          <StatCard 
            text="7.5" 
            subtext="Lakh" 
            desc="Average Package" 
            imgurl="https://px.pixxo.io/sheryians/kodr_assets/icon_01.png" 
          />
          <StatCard 
            text="47" 
            subtext="Lakh" 
            desc="Highest Package" 
            imgurl="https://px.pixxo.io/sheryians/kodr_assets/icon_02.png" 
          />
          <StatCard 
            text="300+" 
            desc="Hiring Partners" 
            imgurl="https://px.pixxo.io/sheryians/kodr_assets/icon_03.png" 
          />
          <StatCard 
            text="10" 
            subtext="M+" 
            desc="Monthly Tech Reach" 
            imgurl="https://px.pixxo.io/sheryians/kodr_assets/icon_04.png" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
