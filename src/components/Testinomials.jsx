import TestimonialCard from "./TestimonialCard";
import deepak from "../assets/Deepak.jpeg";
import Rakshitha from "../assets/Rakshitha.jpeg";
import ranjith from "../assets/Ranjith.jpeg";
import jenifer from "../assets/jenifer.jpeg";
import surya from "../assets/Surya.jpeg";
import selva from "../assets/selva.jpeg";
import mohan from "../assets/mohan.jpeg";
import anurag from "../assets/anurag.jpeg";

const testimonials = [
  {
    name: "Ranjith",
    role: "AI Engineer",
    content:
      "The curriculum is industry-focused and the mentors are exceptional. I transitioned from a non-tech background to landing a senior developer role in under 6 months.",
    image: ranjith,
    rating: 5,
    company: "TechNow",
  },
  {
    name: "Rakshitha",
    role: "Data Scientist",
    content:
      "The hands-on projects and real-world applications helped me understand complex concepts easily. Highly recommend for anyone switching careers into tech.",
    image: Rakshitha,
    rating: 5,
    company: "Zomato",
  },
  {
    name: "Deepak",
    role: "Product Manager",
    content:
      "Placement support is outstanding. They helped me prepare for interviews and connected me with top companies. Got an offer within 3 weeks of completing the program.",
    image: deepak,
    rating: 5,
    company: "Paytm",
  },
  {
    name: "Jenifer",
    role: "Senior Developer",
    content:
      "The design thinking approach and portfolio building sessions were game-changers for my career transition. I wouldn't have landed this role without CodeEmy.",
    image: jenifer,
    rating: 5,
    company: "Meta",
  },
  {
    name: "Surya",
    role: "Product Designer",
    content:
      "The cloud computing and DevOps track gave me practical skills I use daily. The live projects were real, not toy examples — that made all the difference.",
    image: surya,
    rating: 5,
    company: "Figma",
  },
  {
    name: "Mohan",
    role: "Marketing Manager",
    content:
      "The digital marketing program is comprehensive and up-to-date with the latest industry trends. I went from zero to running real campaigns in just 2 months.",
    image: mohan,
    rating: 5,
    company: "Myntra",
  },
  {
    name: "Selva",
    role: "Cybersecurity Analyst",
    content:
      "Practical labs and mentorship made learning cybersecurity approachable. I now work with enterprise systems confidently — something I couldn't have imagined before.",
    image: selva,
    rating: 5,
    company: "Infosys",
  },
  {
    name: "Anurag",
    role: "AI Engineer",
    content:
      "The AI specialization was very well designed. Hands-on projects really helped in understanding advanced concepts like NLP, deep learning, and model deployment.",
    image: anurag,
    rating: 5,
    company: "TCS",
  },
];

/* Split into 3 columns */
const col1 = [testimonials[0], testimonials[3], testimonials[6]];
const col2 = [testimonials[1], testimonials[4], testimonials[7], testimonials[2]];
const col3 = [testimonials[2], testimonials[5], testimonials[0]];

/* Duplicate for seamless loop */
const double = (arr) => [...arr, ...arr];

/* ── Vertical Marquee Column ─────────────────────────────────── */
function MarqueeColumn({ cards, speed = "animate-marquee-up", height = 580 }) {
  return (
    <div
      className="overflow-hidden flex-1"
      style={{
        height: `${height}px`,
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {/* Scrolling track */}
      <div
        className={`flex flex-col ${speed} group-hover:[animation-play-state:paused]`}
        style={{ willChange: "transform" }}
      >
        {double(cards).map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
function Testinomials() {
  return (
    <section id="reviews" className="pb-24 pt-4 relative overflow-hidden bg-slate-50">
      {/* Soft Ambient Background Flares */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Heading */}
      <div className="text-center mb-16 px-4 relative z-10">
        <span className="inline-block text-[13px] font-bold uppercase tracking-widest text-indigo-600 mb-4 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
          Student Success Stories
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
          Hear from students like you
        </h2>
        <p className="text-slate-500 font-medium text-base md:text-lg lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Real outcomes from real people who chose to transform their careers with our industry-leading programs.
        </p>
      </div>

      {/* Responsive vertical marquee grid */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="group flex gap-6 lg:gap-8 overflow-hidden">

          {/* Col 1 — always visible, scrolls up */}
          <MarqueeColumn cards={col1} speed="animate-marquee-up" height={600} />

          {/* Col 2 — hidden on mobile, visible md+ scrolls down */}
          <div className="hidden md:flex flex-1">
            <MarqueeColumn cards={col2} speed="animate-marquee-down" height={600} />
          </div>

          {/* Col 3 — hidden on mobile+tablet, visible lg+ scrolls up slow */}
          <div className="hidden lg:flex flex-1">
            <MarqueeColumn cards={col3} speed="animate-marquee-up-slow" height={600} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testinomials;
