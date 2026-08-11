import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoMarquee = () => {
  return (
    <div className="w-full bg-[#050505] py-8 border-y border-white/5 overflow-hidden flex items-center">
      <Marquee speed={60} gradient={false} play={true}>
        <div className="flex items-center gap-16 pr-16 select-none pointer-events-none">
          <img 
            className="h-[35px] md:h-[50px] object-contain opacity-40 hover:opacity-75 transition-opacity" 
            src="https://dfdx9u0psdezh.cloudfront.net/logos/companylogos.webp" 
            alt="Hiring Companies Logos" 
          />
          {/* Duplicate image to ensure seamless loop scroll */}
          <img 
            className="h-[35px] md:h-[50px] object-contain opacity-40 hover:opacity-75 transition-opacity" 
            src="https://dfdx9u0psdezh.cloudfront.net/logos/companylogos.webp" 
            alt="Hiring Companies Logos" 
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
