import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is CodeEmy?",
    answer: "CodeEmy is India’s leading career-focused EdTech platform offering online courses, internships, certification programs, and placement training. Our goal is to bridge the gap between college education and real-world industry skills.",
  },
  {
    question: "What kind of courses does CodeEmy offer?",
    answer: "We offer job-oriented courses in Python Programming, Digital Marketing, Soft Skills, Interview Preparation, and more. All programs are designed to meet industry standards and boost employability.",
  },
  {
    question: "Are the courses live or recorded?",
    answer: "We offer a blend of live and recorded classes to give learners flexibility and real-time interaction. You can attend live sessions, access recordings anytime, and learn at your own pace.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Yes, every learner receives a verified digital certificate upon successful course completion. This certificate can be used to enhance your resume or LinkedIn profile.",
  },
  {
    question: "Is there any placement or internship support?",
    answer: "Absolutely. We provide internship opportunities, placement training, resume building, mock interviews, and soft skills sessions to help you become job-ready.",
  },
  {
    question: "What is the eligibility to join CodeEmy courses?",
    answer: "Anyone above the age of 17 can join. Our programs are best suited for college students, fresh graduates, job seekers, and working professionals who wish to upskill.",
  },
  {
    question: "How do I register for a course?",
    answer: "Visit www.codeemy.in, choose your desired course, and click on Enroll Now. You can also contact our support team or use WhatsApp for assistance.",
  },
  {
    question: "Is there a free demo class available?",
    answer: "Yes, we provide free demo sessions or trial classes for most programs. It helps you understand the teaching style and course structure before committing.",
  },
  {
    question: "What are the payment options?",
    answer: "We support all major payment methods including UPI, Debit/Credit Cards, Net Banking, and Razorpay. EMI options may also be available for select programs.",
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Yes! CodeEmy courses can be accessed via mobile, tablet, or desktop. All you need is a stable internet connection and a browser.",
  },
  {
    question: "How do I contact CodeEmy for support?",
    answer: "You can reach out to CodeEmy’s support team through the following channels:\n\nEmail: info@codeemy.in\nWhatsApp: +91-9500034493\nPhone: +91-9500034493\nWebsite Chat: Visit www.codeemy.in and use the chat option on the homepage.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0c091a] px-4 py-24 overflow-hidden border-t border-white/5">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-300 text-sm font-semibold tracking-wide uppercase mb-6 mx-auto">
            <MessageCircleQuestion className="w-4 h-4" />
            Have Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about CodeEmy courses, certifications, placement support, and more.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden ${isActive
                    ? "bg-white/[0.05] border-purple-500/30 shadow-[0_8px_30px_rgb(124,58,237,0.1)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 md:py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                  aria-expanded={isActive}
                >
                  <span className={`text-base md:text-lg font-semibold pr-8 transition-colors ${isActive ? "text-purple-300" : "text-white group-hover:text-gray-200"
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-purple-500/20 text-purple-300 rotate-180" : "bg-white/5 text-gray-400"
                    }`}>
                    {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed whitespace-pre-line text-sm md:text-base border-t border-white/5 mt-2 pt-4 mx-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
