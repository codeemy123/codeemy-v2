import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, image, content, rating = 5, company }) => {
  const initials = name
    ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  return (
    <div
      className="w-full rounded-[1.5rem] p-6 mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header — avatar + name */}
      <div className="flex items-center gap-4 mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0 group-hover:ring-indigo-100 transition-colors"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-indigo-700 ring-2 ring-indigo-50 flex-shrink-0 bg-indigo-100/50"
          >
            {initials}
          </div>
        )}
        <div>
          <p className="text-slate-900 text-[15px] font-bold leading-none mb-1.5">{name}</p>
          <p className="text-slate-500 text-[12px] font-medium leading-none">{role}</p>
        </div>

        {/* Stars pushed to right */}
        <div className="ml-auto flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
             <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
        "{content}"
      </p>

      {/* Footer */}
      {company && (
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">at {company}</span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
