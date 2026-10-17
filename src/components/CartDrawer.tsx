import React, { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { useLanguage } from "../hooks/useLanguage";
import { createOrderFn } from "../lib/orders.server";
import { Symbol as BrandSymbol } from "./BrandLogo";
import { X, Plus, Minus, Trash2, ShoppingBag, Check, Sparkles, Clock } from "lucide-react";
import { MOROCCAN_CITIES, isValidMoroccanPhone } from "../lib/morocco";

export interface CompletedOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  customerCity: string;
  customerAddress: string;
  customerNotes?: string;
  items: Array<{
    name: string;
    quote: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
  }>;
  totalPrice: number;
}

export function buildWhatsAppOrderMessage(order: CompletedOrder, language: string): string {
  const isAr = language === "ar";
  const itemsText = order.items
    .map((item, idx) => {
      const quoteStr = item.quote ? ` « ${item.quote} »` : "";
      return (
        `${idx + 1}. *${item.name}*${quoteStr}\n` +
        `   • ${isAr ? "المقاس" : "Taille"} : ${item.size} | ${isAr ? "اللون" : "Couleur"} : ${item.color}\n` +
        `   • ${isAr ? "الكمية" : "Qté"} : ${item.quantity} × ${item.price} MAD = *${item.quantity * item.price} MAD*`
      );
    })
    .join("\n\n");

  if (isAr) {
    return (
      `✨ *طلب جديد من متجر TRUE SELF®* ✨\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 *رقم الطلب :* #${order.id}\n` +
      `👤 *الاسم :* ${order.customerName}\n` +
      `📞 *الهاتف :* ${order.customerPhone}\n` +
      `📍 *المدينة :* ${order.customerCity}\n` +
      `🏠 *العنوان :* ${order.customerAddress}\n` +
      (order.customerNotes ? `📝 *ملاحظات :* ${order.customerNotes}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🛍️ *تفاصيل الطلب :*\n\n` +
      `${itemsText}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *المجموع الإجمالي :* *${order.totalPrice} MAD*\n` +
      `🚚 *التوصيل :* بالمجان (الدفع عند الاستلام)\n\n` +
      `السلام عليكم، أود تأكيد طلبي وشكراً !`
    );
  }

  return (
    `✨ *NOUVELLE COMMANDE TRUE SELF®* ✨\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 *Commande N° :* #${order.id}\n` +
    `👤 *Client :* ${order.customerName}\n` +
    `📞 *Téléphone :* ${order.customerPhone}\n` +
    `📍 *Ville :* ${order.customerCity}\n` +
    `🏠 *Adresse :* ${order.customerAddress}\n` +
    (order.customerNotes ? `📝 *Note client :* ${order.customerNotes}\n` : "") +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🛍️ *ARTICLES COMMANDÉS :*\n\n` +
    `${itemsText}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *TOTAL À PAYER :* *${order.totalPrice} MAD*\n` +
    `🚚 *Livraison :* Gratuite (Paiement à la livraison)\n\n` +
    `Bonjour ! Je confirme ma commande ci-dessus. Merci de me tenir informé de l'expédition.`
  );
}

export function CartDrawer() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount,
    cartOpen,
    setCartOpen,
    requestedStep,
  } = useCart();

  // Checkout form states
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "success">("cart");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Casablanca");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(null);

  // Sync step if 1-click buy now was triggered
  useEffect(() => {
    if (cartOpen && requestedStep) {
      setCheckoutStep(requestedStep);
    }
  }, [cartOpen, requestedStep]);

  // Prevent scroll when cart is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  // Handle ESC key to close cart drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && cartOpen && checkoutStep !== "success") {
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cartOpen, checkoutStep, setCartOpen]);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !city || !address) {
      setOrderError(isAr ? "يرجى ملء جميع الحقول المطلوبة." : "Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!isValidMoroccanPhone(phone)) {
      setOrderError(
        isAr
          ? "يرجى إدخال رقم هاتف مغربي صالح (مثال: 06 XX XX XX XX أو 07 XX XX XX XX)."
          : "Veuillez saisir un numéro de téléphone marocain valide (ex: 06 XX XX XX XX ou 07 XX XX XX XX)."
      );
      return;
    }
    setIsSubmittingOrder(true);
    setOrderError("");
    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.productId,
        name: item.name,
        quote: item.quote,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.price,
      }));

      const result = await createOrderFn({
        data: {
          customerName: fullName.trim(),
          customerPhone: phone.trim(),
          customerCity: city.trim(),
          customerAddress: address.trim(),
          customerNotes: notes.trim() || undefined,
          items: orderItems,
          totalPrice: cartSubtotal,
        },
      });

      const orderId = result?.order?.id || `TS-${Date.now().toString().slice(-6)}`;

      // Store complete order snapshot with all items and delivery info
      setCompletedOrder({
        id: orderId,
        customerName: fullName.trim(),
        customerPhone: phone.trim(),
        customerCity: city.trim(),
        customerAddress: address.trim(),
        customerNotes: notes.trim() || undefined,
        items: orderItems,
        totalPrice: cartSubtotal,
      });

      // Clear cart
      clearCart();
      setFullName("");
      setPhone("");
      setCity("");
      setAddress("");
      setNotes("");
      setCheckoutStep("success");
    } catch (err) {
      console.error("Error submitting order:", err);
      setOrderError(
        isAr
          ? "حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى."
          : "Une erreur est survenue lors de l'enregistrement de votre commande. Veuillez réessayer."
      );
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  const closeDrawer = () => {
    if (checkoutStep === "success") {
      setCheckoutStep("cart");
      setCompletedOrder(null);
    }
    setCartOpen(false);
  };

  const whatsAppTargetNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || "+212652617044").replace(/[^0-9]/g, "");

  const selectedCityData = MOROCCAN_CITIES.find(
    (c) => c.nameFr.toLowerCase() === city.toLowerCase() || c.nameAr === city
  ) || MOROCCAN_CITIES[0];

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[120] bg-black/50 transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Container with 60fps hardware accelerated slide */}
      <aside
        className={`fixed top-0 bottom-0 ${
          isAr ? "left-0" : "right-0"
        } w-full sm:w-[480px] z-[121] bg-background border-border/60 ${
          isAr ? "border-r" : "border-l"
        } shadow-2xl flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cartOpen
            ? "translate-x-0"
            : isAr
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
        dir={isAr ? "rtl" : "ltr"}
        aria-label="Shopping Bag"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-border/40 flex items-center justify-between bg-background/90">
          <div className="flex items-center gap-2.5">
            <BrandSymbol size={16} className="text-foreground" />
            <span className="font-mono text-xs font-semibold tracking-brand uppercase">
              {isAr ? "حقيبتك" : "Votre Panier"} ({cartCount})
            </span>
          </div>
          <button
            onClick={closeDrawer}
            className="p-1.5 hover:opacity-70 transition-opacity border border-border/40 rounded-full bg-secondary/20 cursor-pointer"
            aria-label="Fermer le panier"
          >
            <X size={14} />
          </button>
        </div>

        {/* Emotional & Upsell Cart Banner */}
        {cartItems.length > 0 && checkoutStep !== "success" && (
          <div className="bg-secondary/40 px-6 py-2.5 border-b border-border/30 text-center text-[10px] sm:text-xs font-mono text-foreground flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="text-amber-500 flex-shrink-0" />
            {cartCount === 1 ? (
              <span>
                {isAr
                  ? "أضف قطعة ثانية لطلبك للحصول على شحن أولوية وملصق TRUE SELF® الحصري !"
                  : "Ajoutez un 2ème article pour débloquer le sticker collector TRUE SELF® offert !"}
              </span>
            ) : (
              <span className="text-[#25D366] font-semibold">
                {isAr
                  ? "✓ مبروك ! تم تفعيل الشحن المجاني الأولوية والملصق الحصري."
                  : "✓ Offre débloquée : Livraison Express & Sticker Collector Offerts !"}
              </span>
            )}
          </div>
        )}

        {/* Success Screen */}
        {checkoutStep === "success" && completedOrder ? (
          <div className="flex-1 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 overflow-y-auto">
            <div className="h-16 w-16 bg-[#25D366]/15 text-[#25D366] flex items-center justify-center rounded-full border border-[#25D366]/30">
              <Check size={32} />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl leading-tight">
              {isAr ? "شكراً لاختيارك ذاتك" : "Commande Enregistrée !"}
            </h3>

            <div className="inline-flex items-center gap-2 bg-secondary/40 border border-border/60 px-4 py-2 rounded-xs font-mono text-xs">
              <span className="text-muted-foreground">{isAr ? "رقم الطلب:" : "N° de Commande:"}</span>
              <span className="font-bold tracking-wider text-foreground">#{completedOrder.id}</span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              {isAr
                ? "تم تسجيل طلبك بنجاح. لتأكيد التوصيل فوراً وبسرعة، اضغط على الزر أدناه لإرسال تفاصيل طلبك كاملة عبر واتساب :"
                : "Votre commande est bien enregistrée. Pour une expédition express, cliquez sur le bouton ci-dessous pour nous envoyer votre commande détaillée sur WhatsApp :"}
            </p>

            {/* Direct WhatsApp Confirmation Button with FULL ORDER DETAILS */}
            <a
              href={`https://wa.me/${whatsAppTargetNumber}?text=${encodeURIComponent(
                buildWhatsAppOrderMessage(completedOrder, language)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xs font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-soft cursor-pointer font-mono"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{isAr ? "تأكيد فوري عبر واتساب" : "Envoyer la commande sur WhatsApp"}</span>
            </a>

            <button
              onClick={closeDrawer}
              className="border border-border/80 hover:border-foreground bg-transparent text-foreground px-8 py-3 text-[10px] tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer"
            >
              {isAr ? "العودة للمجموعة" : "Retour à la boutique"}
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List or Checkout Form */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                    <ShoppingBag size={20} />
                  </div>
                  <span className="font-display text-2xl italic text-muted-foreground">
                    {isAr ? "حقيبتك فارغة" : "Votre panier est vide."}
                  </span>
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    {isAr ? "اختر القطع التي تعبر عن ذاتك." : "Découvrez notre collection."}
                  </p>
                </div>
              ) : checkoutStep === "cart" ? (
                /* Cart list */
                <ul className="divide-y divide-border/30">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex items-center justify-between gap-4 first:pt-0">
                      <div className="flex items-center gap-4">
                        <div className="w-16 aspect-[3/4] border border-border/40 bg-secondary/15 rounded-2xs overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-start">
                          <h4 className="font-display text-lg leading-tight text-foreground/95">{item.quote}</h4>
                          <p className="font-mono text-[9px] text-muted-foreground uppercase mt-0.5">
                            {item.name.split(" ")[item.name.split(" ").length - 1]} //{" "}
                            {isAr ? "المقاس" : "Taille"}: {item.size} // {isAr ? "اللون" : "Couleur"}: {item.color}
                          </p>

                          {/* Quantity adjustments */}
                          <div className="flex items-center gap-2 mt-2 font-mono">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-[11px] px-1 font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="border border-border/60 hover:bg-foreground hover:text-background p-1 text-[8px] transition-colors rounded-3xs cursor-pointer"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 font-mono">
                        <span className="text-xs font-semibold">{item.price * item.quantity} MAD</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground/60 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          aria-label="Supprimer cet article"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Checkout Form */
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4 text-start">
                  <div className="border-b border-border/40 pb-3 mb-4">
                    <h3 className="font-display text-2xl italic font-light">
                      {isAr ? "معلومات التوصيل" : "Informations de livraison"}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground mt-1">
                      {isAr ? "الدفع عند الاستلام في جميع مدن المغرب" : "Paiement en espèces à la livraison partout au Maroc"}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                      {isAr ? "الاسم الكامل" : "Nom & Prénom"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground font-mono"
                      placeholder={isAr ? "أدخل اسمك الكامل" : "ex: Mohamed Bennani"}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                      {isAr ? "رقم الهاتف" : "Numéro de téléphone"} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground text-start font-mono"
                      placeholder={isAr ? "06 XX XX XX XX" : "06 XX XX XX XX"}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                        {isAr ? "المدينة" : "Ville"} *
                      </label>
                      {selectedCityData && (
                        <span className="font-mono text-[9px] text-[#25D366] font-semibold flex items-center gap-1">
                          <Clock size={10} />
                          {isAr ? selectedCityData.delayAr : selectedCityData.delayFr}
                        </span>
                      )}
                    </div>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2.5 text-xs focus:outline-none focus:border-foreground font-mono cursor-pointer"
                    >
                      {MOROCCAN_CITIES.map((c) => (
                        <option key={c.nameFr} value={c.nameFr} className="bg-background text-foreground">
                          {isAr ? c.nameAr : c.nameFr} — ({isAr ? c.delayAr : c.delayFr})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                      {isAr ? "العنوان بالتفصيل" : "Adresse complète"} *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2 text-xs focus:outline-none focus:border-foreground resize-none font-mono"
                      placeholder={isAr ? "الحي، الشارع، رقم المنزل..." : "Quartier, Rue, N° d'appartement..."}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase block">
                      {isAr ? "ملاحظات للتوصيل (اختياري)" : "Instructions de livraison (Optionnel)"}
                    </label>
                    <textarea
                      rows={1}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-secondary/10 border border-border/60 rounded-xs px-3 py-2 text-xs focus:outline-none focus:border-foreground resize-none font-mono"
                      placeholder={isAr ? "أي تعليمات خاصة بالتوصيل..." : "ex: Appeler avant d'arriver..."}
                    />
                  </div>

                  {orderError && <p className="text-[10px] text-red-500 font-mono">{orderError}</p>}
                </form>
              )}
            </div>

            {/* Drawer Footer Summary */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border/40 bg-secondary/15 space-y-4">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {isAr ? "المجموع الفرعي" : "Sous-total"}
                  </span>
                  <span className="text-base font-bold">{cartSubtotal} MAD</span>
                </div>

                <div className="flex justify-between items-center font-mono text-[11px] text-muted-foreground">
                  <span>{isAr ? "التوصيل" : "Livraison"}</span>
                  <span className="text-[#25D366] font-semibold">{isAr ? "بالمجان" : "Gratuite"}</span>
                </div>

                {checkoutStep === "cart" ? (
                  <button
                    onClick={() => setCheckoutStep("checkout")}
                    className="w-full border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-soft cursor-pointer font-mono"
                  >
                    {isAr ? "متابعة الطلب" : "Commander (Paiement à la livraison)"}
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep("cart")}
                      className="flex-1 border border-border/60 bg-background text-foreground py-3.5 text-xs tracking-brand uppercase hover:bg-secondary/20 transition-all duration-300 font-semibold rounded-xs font-mono cursor-pointer"
                    >
                      {isAr ? "عودة" : "Retour"}
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      disabled={isSubmittingOrder}
                      className="flex-2 border border-foreground bg-foreground text-background py-3.5 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs shadow-soft flex items-center justify-center gap-2 font-mono cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingOrder ? (
                        <BrandSymbol size={16} className="animate-spin text-background" />
                      ) : (
                        <span>{isAr ? "تأكيد الطلب" : "Confirmer la commande"}</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
}
