import React, { useState } from "react";
import { X, Ruler, Check } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [unit, setUnit] = useState<"cm" | "inch">("cm");

  if (!isOpen) return null;

  const multiplier = unit === "inch" ? 0.3937 : 1;
  const round = (val: number) => (unit === "inch" ? (val * multiplier).toFixed(1) : Math.round(val));

  const sizeTable = [
    { size: "S", chest: 108, length: 70, shoulder: 52, sleeve: 22 },
    { size: "M", chest: 114, length: 73, shoulder: 54, sleeve: 23 },
    { size: "L", chest: 120, length: 76, shoulder: 56, sleeve: 24 },
    { size: "XL", chest: 126, length: 79, shoulder: 58, sleeve: 25 },
  ];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade" dir={isAr ? "rtl" : "ltr"}>
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-background border border-border/70 rounded-xs shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Ruler size={18} className="text-foreground" />
            <h3 className="font-display text-2xl font-light italic">
              {isAr ? "دليل المقاسات الرسمية" : "Guide des Tailles — TRUE SELF®"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:opacity-70 transition-opacity border border-border/40 rounded-full cursor-pointer"
            aria-label="Fermer"
          >
            <X size={14} />
          </button>
        </div>

        {/* Fit philosophy */}
        <div className="bg-secondary/15 border border-border/40 p-4 rounded-xs mb-6 text-xs font-mono text-muted-foreground leading-relaxed">
          <span className="font-bold text-foreground block mb-1 uppercase tracking-wider text-[9px]">
            // {isAr ? "القصة المميزة" : "COUPE SIGNATURE : OVERSIZED BOXY FIT"}
          </span>
          {isAr
            ? "قطعنا مصممة بقصة واسعة ومريحة (Oversized). للحصول على مظهر الشارع العصري الواسع، اختر مقاسك المعتاد. لمظهر كلاسيكي عادي، اختر مقاساً أصغر."
            : "Nos pièces sont taillées dans une coupe 'Oversized Boxy' haut de gamme. Pour un style streetwear ample et décontracté, prenez votre taille habituelle. Pour un fit plus cintré, optez pour la taille inférieure."}
        </div>

        {/* Unit switch */}
        <div className="flex justify-between items-center mb-4 font-mono text-xs">
          <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
            {isAr ? "جدول القياسات" : "Tableau de mesures"}
          </span>
          <div className="flex border border-border/60 rounded-2xs overflow-hidden">
            <button
              onClick={() => setUnit("cm")}
              className={`px-3 py-1 text-[10px] transition-colors ${
                unit === "cm" ? "bg-foreground text-background font-bold" : "hover:bg-secondary/20"
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit("inch")}
              className={`px-3 py-1 text-[10px] transition-colors ${
                unit === "inch" ? "bg-foreground text-background font-bold" : "hover:bg-secondary/20"
              }`}
            >
              INCHES
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-border/40 rounded-xs mb-6 font-mono text-xs">
          <table className="w-full text-center divide-y divide-border/30">
            <thead className="bg-secondary/20 text-[9px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="py-2.5 px-3 text-start">{isAr ? "المقاس" : "Taille"}</th>
                <th className="py-2.5 px-3">{isAr ? "عرض الصدر" : "Poitrine"}</th>
                <th className="py-2.5 px-3">{isAr ? "الطول" : "Longueur"}</th>
                <th className="py-2.5 px-3">{isAr ? "الأكتاف" : "Épaules"}</th>
                <th className="py-2.5 px-3">{isAr ? "الأكمام" : "Manches"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20">
              {sizeTable.map((row) => (
                <tr key={row.size} className="hover:bg-secondary/10 transition-colors">
                  <td className="py-2.5 px-3 text-start font-bold text-foreground">{row.size}</td>
                  <td className="py-2.5 px-3 text-muted-foreground">{round(row.chest)} {unit}</td>
                  <td className="py-2.5 px-3 text-muted-foreground">{round(row.length)} {unit}</td>
                  <td className="py-2.5 px-3 text-muted-foreground">{round(row.shoulder)} {unit}</td>
                  <td className="py-2.5 px-3 text-muted-foreground">{round(row.sleeve)} {unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reassurance points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-mono text-muted-foreground border-t border-border/30 pt-4">
          <div className="flex items-center gap-2">
            <Check size={12} className="text-[#25D366]" />
            <span>{isAr ? "تبديل المقاس متوفر وسهل" : "Échange de taille facile et rapide"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={12} className="text-[#25D366]" />
            <span>{isAr ? "قطن 100% ممتاز مضاد للانكماش" : "100% Coton lourd prélavé anti-rétrécissement"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
