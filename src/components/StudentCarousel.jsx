import React from 'react';

const successStories = [
  {
  
    image: 'https://px.pixxo.io/sheryians/kodr_assets/placements/placement03.webp',
    
  },
  {
    image: 'https://px.pixxo.io/sheryians/kodr_assets/placements/placement_0001.png',
    
  },
  {

    image: 'https://px.pixxo.io/sheryians/kodr_assets/placements/placement_002.webp',
   
  },
  {
    image: 'https://px.pixxo.io/sheryians/kodr_assets/placements/placement02.webp',
    
  }
];

const StudentCarousel = () => {
  return (
    <section className="py-24 bg-black text-white relative">

      {/* Background glow shadow */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] max-w-[700px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-clash text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
            Sheryians Students Placed At <span className="block sm:inline">Top Companies</span>
          </h2>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {successStories.map((student, i) => (
            <div
              key={i}
              className="relative h-[313px] w-full border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-end bg-gradient-to-b from-[#1b0a30]/35 via-neutral-950 to-neutral-950 p-6 hover:-translate-y-1 hover:border-white/10 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <img
                src={student.image}
                alt={student.name}
                className="absolute inset-x-0 bottom-0  w-full object-contain object-bottom pointer-events-none select-none z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

            </div>
          ))}
        </div>


        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8 select-none">
          <div className="flex items-center gap-3">

            <div className="flex items-center -space-x-3.5">
              <img src="https://px.pixxo.io/sheryians/offline-sheryians/different_sheryians/ShrutiSarawagi.png" alt="" className="w-10 h-10 rounded-full border border-black bg-neutral-900 object-cover" />
              <img src="https://px.pixxo.io/sheryians/offline-sheryians/different_sheryians/KushagraPatidar.png" alt="" className="w-10 h-10 rounded-full border border-black bg-neutral-900 object-cover" />
              <img src="https://px.pixxo.io/sheryians/offline-sheryians/different_sheryians/MansiSahu.png" alt="" className="w-10 h-10 rounded-full border border-black bg-neutral-900 object-cover" />
              <img src="https://px.pixxo.io/sheryians/offline-sheryians/different_sheryians/RishitaJain.png" alt="" className="w-10 h-10 rounded-full border border-black bg-neutral-900 object-cover" />
            </div>
            <p className="font-helvetica text-sm md:text-base text-neutral-300">
              <span className="text-[#6FEB2C] font-bold">54+</span> Students Placed Last Month
            </p>
          </div>

          <button className="py-2.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-all cursor-pointer shadow-md active:scale-95">
            View All
          </button>
        </div>

      </div>
    </section>
  );
};

export default StudentCarousel;
