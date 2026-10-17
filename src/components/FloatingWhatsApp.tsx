import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { MessageSquare, X } from "lucide-react";

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || "+212652617044").replace(/[^0-9]/g, "");
  const defaultMsg = isAr
    ? "السلام عليكم TRUE SELF، أحتاج مساعدة أو استفسار حول المجموعة."
    : "Bonjour TRUE SELF ! J'aimerais un conseil concernant la collection ou les tailles.";

  return (
    <div
      className={`fixed bottom-6 ${
        isAr ? "left-6" : "right-6"
      } z-[90] flex items-center gap-2 group animate-fade`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-background/95 hover:bg-background text-foreground border border-border/80 hover:border-[#25D366] px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-xs cursor-pointer group/wa"
        title="Discuter sur WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
        </span>

        <span className="font-medium tracking-tight group-hover/wa:text-[#25D366] transition-colors">
          {isAr ? "تواصل معنا" : "Conseil WhatsApp"}
        </span>

        <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
          <MessageSquare size={12} className="fill-current" />
        </div>
      </a>

      <button
        onClick={() => setClosed(true)}
        className="text-muted-foreground/60 hover:text-foreground p-1 transition-colors rounded-full text-[10px]"
        aria-label="Fermer"
        title="Fermer"
      >
        <X size={12} />
      </button>
    </div>
  );
}
