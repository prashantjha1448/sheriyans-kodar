

import React from 'react';

const PlacementVideo = () => {
  return (
    <section 
      className="relative w-full bg-cover lg:bg-contain bg-center py-20 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('https://px.pixxo.io/sheryians/kodr_assets/Background_002.png')" }}
    >
      {/* Decorative backdrop graphics */}
      <div className="absolute top-0 w-[40%] left-1/2 -translate-x-1/2 opacity-10 pointer-events-none select-none">
        <img className="w-full h-full" src="https://px.pixxo.io/sheryians/kodr_assets/kodr_Second.png" alt="" />
      </div>

      <div className="relative z-10 mx-6 md:mx-12 max-w-[1100px] w-full rounded-2xl border border-white/20 bg-[#0A0A0C]/40 backdrop-blur-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden shadow-2xl">
        
        {/* Simple video player with standard native controls */}
        <div className="relative w-full lg:w-[62%] aspect-video rounded-2xl overflow-hidden border border-white/[0.08] shadow-inner bg-black flex-shrink-0">
          <video
            className="w-full h-full object-cover"
            src="https://px.pixxo.io/sheryians/offline-sheryians/different_sheryians/VID-20260721-WA0006.webm"
            autoPlay
            loop
            muted
            controls
            playsInline
          />
        </div>

        {/* Info Column */}
        <div className="relative w-full lg:w-[35%] flex flex-col items-start gap-4 md:gap-6 text-left">
          <span className="bg-white text-[#7200FF] text-[10px] md:text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-md inline-block uppercase select-none">
            Placement Cycle
          </span>
          <div>
            <h2 className="font-clash text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
              Kushagra Patidar
            </h2>
            <p className="font-helvetica text-neutral-300 text-xs md:text-sm leading-snug mt-1">
              Sheryians Placement Success Story
            </p>
          </div>
          
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-clash text-4xl md:text-5xl font-extrabold text-[#6FEB2C] tracking-tight">₹47 LAKHS</span>
              <span className="font-clash text-white text-base md:text-lg font-medium">/Annum</span>
            </div>
            <p className="font-helvetica text-neutral-300 text-sm md:text-base font-normal leading-snug mt-1">
              Secured A Package At <span className="font-bold text-white">Amazon.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementVideo;
