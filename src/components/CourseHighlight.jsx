import { FaUsers, FaCalendarAlt, FaStar, FaDownload } from "react-icons/fa";

export default function CourseHighlight({ course }) {
  const batchMonth = course?.nextBatch || "May 2025";
  const duration = course?.duration || "3-4 Months";
  const rating = course?.rating || 4.8;
  const seatsLeft = course?.seatsLeft || 5;

  return (
    <div
      className="w-full flex flex-col items-center gap-8 p-8 md:p-10 my-10 rounded-3xl relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0b0c24 0%, #181b3a 40%, #0f0c29 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-center text-white relative z-10">
        Master The Art Of{" "}
        <span
          className="font-extrabold"
          style={{
            background: "linear-gradient(90deg,#c084fc,#60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {course?.category || course?.title || "Tech"}
        </span>
      </h1>

      {/* Stats card */}
      <div className="w-full max-w-4xl relative z-10">
        <div
          className="rounded-3xl p-[1px]"
          style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899,#2563eb)" }}
        >
          <div
            className="rounded-3xl p-7 grid grid-cols-1 md:grid-cols-3 gap-7 text-white"
            style={{ background: "#1a0f2f" }}
          >
            {/* Batch Starting */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-800/50 p-4 rounded-xl shadow-inner flex-shrink-0">
                <FaUsers size={22} className="text-purple-300" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Batch Starting</div>
                <div className="text-purple-300 font-bold text-lg">{batchMonth}</div>
                <div className="mt-1 bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block font-semibold animate-pulse">
                  Only {seatsLeft} seats left
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-purple-400/30 md:pl-6 pt-5 md:pt-0">
              <div className="bg-purple-800/50 p-4 rounded-xl shadow-inner flex-shrink-0">
                <FaCalendarAlt size={22} className="text-purple-300" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Duration</div>
                <div className="text-purple-300 font-bold text-lg">{duration}</div>
                <div className="text-gray-500 text-xs mt-1">Live + Recorded</div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-purple-400/30 md:pl-6 pt-5 md:pt-0">
              <div className="bg-purple-800/50 p-4 rounded-xl shadow-inner flex-shrink-0">
                <FaStar size={22} className="text-yellow-400" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Program Rating</div>
                <div className="text-purple-300 font-bold text-lg flex items-center gap-1">
                  {rating} <FaStar className="text-yellow-400 w-4 h-4" />
                </div>
                <div className="text-gray-500 text-xs mt-1">Based on 200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
          <FaDownload />
          Download Brochure
        </button>
        <button
          className="px-6 py-3 rounded-xl font-semibold text-white shadow hover:scale-105 transition-transform"
          style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
