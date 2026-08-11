import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import {
  updateField,
  setErrors,
  submitApplication,
  resetForm,
  selectFormInputs,
  selectFormErrors,
  selectFormLoading,
  selectFormSuccess,
  selectFormSubmitError,
} from '../redux/slices/formSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ApplyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = useSelector(selectFormInputs);
  const errors = useSelector(selectFormErrors);
  const loading = useSelector(selectFormLoading);
  const success = useSelector(selectFormSuccess);
  const submitError = useSelector(selectFormSubmitError);

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!inputs.name.trim()) newErrors.name = 'Name is required';
    if (!inputs.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!inputs.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(inputs.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!inputs.college.trim()) newErrors.college = 'College/University name is required';

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(submitApplication(inputs));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />

      <div 
        className="flex-grow flex items-center justify-center py-28 px-6 relative"
        style={{ backgroundImage: "url('https://px.pixxo.io/sheryians/kodr_assets/Background_001.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-[650px] w-full bg-[#121212]/80 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative z-10">
          
          <div className="flex items-center gap-4 mb-8 select-none">
            <button 
              onClick={() => { dispatch(resetForm()); navigate('/'); }}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white/70 hover:text-white cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="font-clash text-2xl md:text-3xl font-bold tracking-wide uppercase bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Apply for KODR
            </h1>
          </div>

          {success ? (
            <div className="py-10 text-center flex flex-col items-center gap-6 animate-card-entrance">
              <div className="w-16 h-16 rounded-full bg-[#6FEB2C]/20 border border-[#6FEB2C]/40 flex items-center justify-center text-[#6FEB2C] shadow-lg shadow-[#6FEB2C]/10">
                <Sparkles size={32} />
              </div>
              <div>
                <h2 className="font-clash text-2xl md:text-3xl font-bold text-white mb-2">Application Received!</h2>
                <p className="font-helvetica text-neutral-400 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
                  Thank you for applying to the KODR Bootcamp. Our admissions team will review your application and get in touch with you shortly.
                </p>
              </div>
              <button
                onClick={() => { dispatch(resetForm()); navigate('/'); }}
                className="py-3 px-8 rounded-full font-medium bg-white text-black hover:bg-neutral-100 transition-all text-sm md:text-base cursor-pointer shadow-md"
              >
                Back to Homepage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              {submitError && (
                <div className="p-4 bg-red-950/20 border border-red-900/30 text-red-400 text-sm rounded-xl flex items-start gap-3">
                  <AlertTriangle className="flex-shrink-0 mt-0.5" size={16} />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">Full Name</label>
                <input
                  type="text"
                  value={inputs.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7200FF] transition-colors ${
                    errors.name ? 'border-red-900/40' : 'border-white/10'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="text-red-400 text-xs mt-0.5">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">Email Address</label>
                <input
                  type="email"
                  value={inputs.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7200FF] transition-colors ${
                    errors.email ? 'border-red-900/40' : 'border-white/10'
                  }`}
                  placeholder="name@example.com"
                />
                {errors.email && <span className="text-red-400 text-xs mt-0.5">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={inputs.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7200FF] transition-colors ${
                    errors.phone ? 'border-red-900/40' : 'border-white/10'
                  }`}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && <span className="text-red-400 text-xs mt-0.5">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">College / University</label>
                <input
                  type="text"
                  value={inputs.college}
                  onChange={(e) => handleInputChange('college', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7200FF] transition-colors ${
                    errors.college ? 'border-red-900/40' : 'border-white/10'
                  }`}
                  placeholder="Enter college name"
                />
                {errors.college && <span className="text-red-400 text-xs mt-0.5">{errors.college}</span>}
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase select-none">
                  MERN Stack Knowledge
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'none', label: 'No Knowledge' },
                    { id: 'basic', label: 'Basic' },
                    { id: 'intermediate', label: 'Intermediate' },
                    { id: 'advanced', label: 'Advanced' }
                  ].map((option) => (
                    <label 
                      key={option.id}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer select-none transition-all ${
                        inputs.mernKnowledge === option.id 
                          ? 'border-[#7200FF] bg-[#ECE6FF]/5 text-white font-medium shadow-[0_0_10px_rgba(114,0,255,0.1)]' 
                          : 'hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mernKnowledge"
                        value={option.id}
                        checked={inputs.mernKnowledge === option.id}
                        onChange={() => handleInputChange('mernKnowledge', option.id)}
                        className="sr-only"
                      />
                      <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                        inputs.mernKnowledge === option.id ? 'border-[#7200FF]' : 'border-neutral-500'
                      }`}>
                        {inputs.mernKnowledge === option.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#7200FF]" />
                        )}
                      </div>
                      <span className="text-sm md:text-base">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">
                  Coding Experience (Optional)
                </label>
                <textarea
                  value={inputs.background}
                  onChange={(e) => handleInputChange('background', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7200FF] transition-colors h-24 resize-none"
                  placeholder="Briefly describe your programming background or experience..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-4 rounded-full font-medium flex items-center justify-center gap-3 bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white hover:brightness-105 transition-all text-sm md:text-base shadow-lg disabled:brightness-90 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplyPage;
