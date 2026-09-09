import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import sampleCertificate from '../assets/certificate.png'; // Place your uploaded image here

const avatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
];

const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!certificateNumber.trim()) return;
    setIsLoading(true);
    // Artificial small delay to make the UI feel like it's processing
    setTimeout(() => {
      navigate(`/verify/${certificateNumber.trim().toUpperCase()}`);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden flex items-center justify-center pt-24 md:pt-28 pb-12">
      
      {/* Background Decor (Subtle Lights) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px] opacity-70" />
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-100/40 blur-[100px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* LEFT: Certificate Hero Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] relative group perspective-1000"
          >
            {/* Label */}
            <div className="absolute -top-5 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Official Certificate Preview</span>
            </div>

            {/* The Certificate Image wrapper for subtle 3D hover */}
            <motion.div 
              whileHover={{ rotateY: 3, rotateX: 3, scale: 1.015, z: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-2.5 bg-white rounded-[1.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/80 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={sampleCertificate} 
                alt="Sample Certificate" 
                className="w-full rounded-xl object-contain shadow-inner"
              />
              
              {/* Glossy reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[1.5rem]" />
            </motion.div>

            {/* Backdrop shadow purely for depth (behind the card) */}
            <div className="absolute -inset-4 bg-indigo-500/5 rounded-[3rem] blur-2xl -z-10 group-hover:bg-indigo-500/10 transition-colors duration-500" />
          </motion.div>


          {/* RIGHT: Verification Tool */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[45%] lg:pl-4 xl:pl-8"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8 shrink-0 shadow-sm">
               <ShieldCheck className="w-3.5 h-3.5" />
               Verified by Codeemy
            </div>

            <h1 className="text-4xl sm:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
              Verify <br />Authenticity.
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-sm">
              Enter a certificate ID to instantly retrieve and verify official credentials.
            </p>

            {/* Search Tool Form */}
            <form onSubmit={handleSubmit} className="relative mb-4">
              <div className={`relative flex items-center bg-white rounded-2xl transition-all duration-300 ${isFocused ? 'shadow-[0_8px_30px_rgb(99,102,241,0.12)] border-indigo-200' : 'shadow-sm border-slate-200'} border p-2`}>
                <div className="pl-4 pr-1 text-slate-400">
                  <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-indigo-500' : ''}`} />
                </div>
                <input
                  type="text"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="CERT-2024-001"
                  className="flex-1 bg-transparent border-none py-3.5 px-2 text-slate-800 text-lg placeholder-slate-300 focus:outline-none focus:ring-0"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading || !certificateNumber.trim()}
                  className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-slate-900 disabled:hover:shadow-none flex items-center gap-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              
              {/* Focus Glow Overlay */}
              <div className={`absolute -inset-1.5 bg-indigo-500/20 rounded-3xl blur-md -z-10 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
            </form>

            <p className="text-sm text-slate-400 mb-12">
              You can find the certificate ID at the bottom of the certificate document.
            </p>

            {/* Inline Features */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-slate-200 mb-10">
              {[
                "Secure Verification",
                "Instant Results",
                "Trusted Globally"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  {text}
                </div>
              ))}
            </div>

            {/* Social Proof Footer */}
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 inline-flex shadow-sm">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <img key={i} src={url} alt={`User ${i}`} className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="text-xs font-medium text-slate-500 leading-tight">
                Trusted by <strong className="text-slate-900 font-bold">10,000+</strong><br/> learners worldwide.
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;



