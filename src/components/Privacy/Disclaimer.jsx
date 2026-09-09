
import { legalContent } from './privacyData';
import logo from "../../assets/logo2.png";
import { useEffect } from 'react';
export default function PrivacyPolicy() {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 p-6 md:p-12 flex flex-col gap-12">
  <div className="w-full flex justify-center">
  <img src={logo} className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain" />
</div>
      
      <section className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
        <p className="whitespace-pre-line leading-relaxed text-justify">{legalContent.Disclaimer}</p>
      </section>
    </div>
  );
}
