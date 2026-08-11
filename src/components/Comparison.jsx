import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const ComparisonCard = ({ title, subtitle, items, buttonText, onButtonClick, isPurple }) => {
  return (
    <div className={`relative w-full rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 z-10 ${
      isPurple 
        ? 'bg-gradient-to-b from-[#421B73] to-[#000000] border border-[#7200FF]/30 purple-growth-shadow' 
        : 'bg-[#141414] border border-white/10 backdrop-blur-md'
    }`}>
      {isPurple && (
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7200FF]/10 blur-[50px] rounded-full pointer-events-none" />
      )}
      
      <div>
        <div className="text-center mb-8 flex flex-col gap-2 pb-6 border-b border-white/[0.06]">
          <h3 className={`font-clash text-2xl md:text-3xl font-semibold uppercase ${isPurple ? 'text-[#6FEB2C]' : 'text-white'}`}>
            {title}
          </h3>
          <p className="font-helvetica text-xs md:text-sm text-neutral-400 font-light tracking-wide leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`flex flex-col gap-2.5 ${idx === items.length - 1 ? '' : 'border-b border-white/[0.04] pb-6'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-black ${
                  isPurple 
                    ? 'bg-[#6FEB2C] shadow-[0_0_10px_rgba(110,235,44,0.3)]' 
                    : 'bg-white'
                }`}>
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <h4 className={`font-helvetica text-xs md:text-[13px] font-bold uppercase tracking-wider ${isPurple ? 'text-white' : 'text-neutral-300'}`}>
                  {item.title}
                </h4>
              </div>
              <p className={`font-helvetica text-sm md:text-[15px] leading-relaxed ${isPurple ? 'text-neutral-200' : 'text-neutral-400'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {buttonText && (
        <div className="mt-8 flex justify-center w-full">
          <button
            onClick={onButtonClick}
            className={`w-full py-3 px-8 rounded-full font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer text-center text-sm md:text-base ${
              isPurple 
                ? 'bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white hover:brightness-105' 
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

const Comparison = () => {
  const navigate = useNavigate();

  const kodrItems = [
    {
      title: 'DEPTH BEFORE DEADLINES',
      desc: '5 core lectures every week, followed by guided practice, debugging and mentor support. Topics are not just introduced. Students are trained to use them.',
    },
    {
      title: 'FROM CODER TO CREATOR',
      desc: '2 activities every week, including full-day challenges, startup MVPs, team competitions and project defence. Students learn to identify problems, build solutions and present their thinking.',
    },
    {
      title: 'YOUR PROGRESS CANNOT HIDE',
      desc: 'Daily tasks, submissions, assessments, attendance, mentor reviews, house points and leaderboards make every student’s performance visible.',
    },
    {
      title: 'COMPLETE CAREER TRAINING',
      desc: 'communication sessions every week, along with full-stack development, DSA, teamwork, presentations, interview preparation and startup thinking.',
    },
  ];

  const typicalItems = [
    {
      title: 'THE CALENDAR DECIDES THE SPEED',
      desc: 'Topics keep moving because the syllabus must finish. Whether you understood, practised or can apply them is often your problem.',
    },
    {
      title: 'PROJECTS YOU CAN SHOW, NOT DEFEND',
      desc: 'Students follow the instructor, copy familiar projects and submit rushed work. The project reaches the résumé, but the understanding does not.',
    },
    {
      title: 'YOU CAN FALL BEHIND QUIETLY',
      desc: 'Assignments remain unchecked, doubts keep piling up and weak performance goes unnoticed until the course is almost over.',
    },
    {
      title: 'THE CERTIFICATE COMES FIRST',
      desc: 'Communication, teamwork, interview preparation and real problem-solving are either rushed at the end or completely left out.',
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-12 md:gap-16">
        
        {/* Headings */}
        <h2 className="font-clash text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center leading-tight">
          Why Some Students Grow Faster <span className="block sm:inline">Than Others</span>
        </h2>

        {/* Backdrop Graphic (circle vectors behind comparison) */}
        <div className="absolute hidden lg:flex w-[80%] max-w-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none select-none z-0">
          <img className="w-full h-full object-contain" src="https://px.pixxo.io/sheryians/kodr_assets/Circle_bg.png" alt="" />
        </div>

        {/* Comparison Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-4 max-w-[1000px] items-stretch relative">
          <ComparisonCard
            isPurple={true}
            title="KODR BOOTCAMP"
            subtitle="100 full-time days. 11 AM to 5 PM. Built around execution, not attendance"
            items={kodrItems}
            buttonText="Start with KODR"
            onButtonClick={() => navigate('/apply')}
          />
          <ComparisonCard
            isPurple={false}
            title="TYPICAL BOOTCAMP"
            subtitle="Short classes. Rushed modules. Most of the real learning is left for you to figure out later."
            items={typicalItems}
          />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
