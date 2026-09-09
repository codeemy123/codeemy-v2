import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatingButton() {
  return (
    <a
      href="https://wa.me/919500034493" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center">
        {/* WhatsApp Icon Button */}
        <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
          <FaWhatsapp className="text-white text-2xl" />
        </div>

        {/* Expanding Text (outside icon) */}
        <div className="absolute right-14 bg-white rounded-xl px-3 py-1 text-green-600 text-sm font-semibold shadow-md opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right whitespace-nowrap">
          WhatsApp us now
        </div>
      </div>
    </a>
  );
}
