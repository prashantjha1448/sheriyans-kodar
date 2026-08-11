import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isApplyPage = location.pathname === '/apply';

  return (
    <div className='flex justify-between items-center px-10 py-6 bg-gradient-to-r from-black via-purple-900 to-purple-500 select-none'>
      
      {/* Logo */}
      <div 
        onClick={() => navigate('/')}
        className='flex items-center gap-3 text-white cursor-pointer'
      >
        <img src="/logo.svg" alt="logo" className='h-8 w-8' />
        <span className='border-l border-white/30 pl-3 leading-tight font-medium text-left text-xs'>
          sheryians<br />coding school
        </span>
      </div>

      {/* Nav pill */}
      <div className='rounded-full bg-white/10 backdrop-blur-md px-2 py-2 flex gap-2 text-white/70'>
        <button 
          onClick={() => navigate('/')}
          className={`px-5 py-2 rounded-full hover:bg-white/10 transition cursor-pointer text-sm ${
            !isApplyPage ? 'bg-white/10 text-white font-semibold' : ''
          }`}
        >
          Bootcamp
        </button>
        <button 
          onClick={() => navigate('/')}
          className='px-5 py-2 rounded-full hover:bg-white/10 transition cursor-pointer text-sm'
        >
          Home
        </button>
        <button 
          onClick={() => navigate('/')}
          className='px-5 py-2 rounded-full hover:bg-white/10 transition cursor-pointer text-sm'
        >
          Courses
        </button>
      </div>

      {/* CTA */}
      <button 
        onClick={() => navigate('/apply')}
        className={`rounded-full font-medium px-6 py-3 transition cursor-pointer text-sm ${
          isApplyPage 
            ? 'bg-purple-600 text-white border border-purple-500' 
            : 'bg-white text-black hover:bg-white/90'
        }`}
      >
        Apply Now!
      </button>
    </div>
  );
};

export default Navbar;
