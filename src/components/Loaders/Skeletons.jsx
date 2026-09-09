import React from "react";

// SKELETON SHARED STYLES
const skBg = "bg-white/[0.05]";
const skPulse = "animate-pulse";

export const GenericPageSkeleton = () => {
  return (
    <div className="min-h-screen pt-32 px-6 container mx-auto">
      <div className={`w-3/4 max-w-4xl h-16 rounded-2xl mb-8 ${skBg} ${skPulse}`} />
      <div className={`w-1/2 max-w-2xl h-6 rounded-xl mb-16 ${skBg} ${skPulse}`} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`h-64 rounded-3xl ${skBg} ${skPulse}`} />
        ))}
      </div>
    </div>
  );
};

export const CoursesPageSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Skeleton */}
      <div className={`w-full h-80 ${skBg} ${skPulse} pt-24 pb-14`} />
      
      {/* Main Layout Workspace */}
      <div className="max-w-[1450px] mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Sidebar Skeleton */}
        <div className={`hidden lg:block w-64 h-[600px] rounded-2xl ${skBg} ${skPulse} flex-shrink-0`} />
        
        {/* Course Grid Skelton */}
        <div className="flex-1 min-w-0">
          {/* Top Bar filtering area */}
          <div className="flex justify-between mb-8">
             <div className={`w-32 h-6 rounded-lg ${skBg} ${skPulse}`} />
             <div className={`w-40 h-10 rounded-xl ${skBg} ${skPulse}`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`rounded-2xl overflow-hidden h-[420px] isolate border border-white/[0.08] ${skBg}`}>
                {/* Image placeholder */}
                <div className={`w-full h-48 bg-white/10 ${skPulse}`} />
                {/* Card body */}
                <div className="p-5">
                   <div className={`w-3/4 h-6 rounded mb-4 ${skBg} ${skPulse}`} />
                   <div className={`w-full h-4 rounded mb-2 ${skBg} ${skPulse}`} />
                   <div className={`w-5/6 h-4 rounded mb-6 ${skBg} ${skPulse}`} />
                   
                   <div className="flex gap-2 mb-6">
                      <div className={`w-10 h-4 rounded ${skBg} ${skPulse}`} />
                      <div className={`w-10 h-4 rounded ${skBg} ${skPulse}`} />
                      <div className={`w-10 h-4 rounded ${skBg} ${skPulse}`} />
                   </div>
                   
                   <div className={`w-full h-12 rounded-xl bg-purple-500/20 ${skPulse}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
