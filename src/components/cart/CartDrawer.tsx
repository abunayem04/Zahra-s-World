"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, Gift, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer: React.FC = () => {
  const router = useRouter();
  const {
    items,
    isOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    selectedDelivery,
    setSelectedDelivery,
    isGiftWrapped,
    setIsGiftWrapped,
    subtotal,
    deliveryFee,
    giftWrapFee,
    total,
    checkoutWhatsApp,
  } = useCart();

  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkoutWhatsApp({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
    });
  };

  const handleGoToCheckout = () => {
    closeDrawer();
    router.push("/checkout");
  };

  const handleGoToCart = () => {
    closeDrawer();
    router.push("/cart");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-noir/60 backdrop-blur-sm"
          />

          {/* Slide-out Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white border-l border-black/10 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 sm:p-6 border-b border-black/[0.08] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#D81B60]" />
                  <span className="font-playfair text-base font-bold text-noir">
                    Shopping Bag
                  </span>
                  <span className="font-mono text-xs text-noir/50 bg-rose-50 px-2 py-0.5 rounded-full font-bold text-[#D81B60]">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-noir/70 hover:text-noir transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-20 flex flex-col items-center gap-3 text-noir/50">
                    <ShoppingBag className="w-12 h-12 stroke-[1.2] opacity-40 text-rose-300" />
                    <div className="font-playfair text-base font-bold text-noir">
                      Your bag is empty
                    </div>
                    <p className="text-xs font-sans max-w-xs leading-relaxed">
                      Discover 3D glowing crystal lamps, romantic voice keychains, and moving sand art decor in our collection.
                    </p>
                    <Link
                      href="/products"
                      onClick={closeDrawer}
                      className="mt-4 px-5 py-2.5 rounded-xl bg-noir text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D81B60] transition-colors"
                    >
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  items.map((it) => {
                    const variant = it.product.variants.find((v) => v.id === it.variantId);
                    return (
                      <div
                        key={`${it.product.id}-${it.variantId}`}
                        className="flex gap-3.5 p-3 rounded-2xl bg-[#FAF5F8] border border-black/[0.06] items-center"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-black/10">
                          <Image
                            src={variant?.image || it.product.image}
                            alt={it.product.nameEn}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-sans text-xs font-bold text-noir truncate">
                            {it.product.nameEn}
                          </h4>
                          {variant && (
                            <span className="font-mono text-[10px] text-slateTeal block truncate mb-1">
                              {variant.name}
                            </span>
                          )}
                          <div className="font-mono text-xs font-bold text-[#D81B60]">
                            Tk {it.product.price}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-white rounded-lg border border-black/10 px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, -1)}
                            className="p-1 hover:text-[#D81B60] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-semibold px-1 min-w-[16px] text-center">
                            {it.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, 1)}
                            className="p-1 hover:text-[#D81B60] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(it.product.id, it.variantId)}
                          className="p-1.5 text-noir/40 hover:text-rose-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-black/[0.08] bg-white space-y-4">
                  
                  {/* Delivery Zone Choice */}
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-noir/70 block mb-1.5">
                      Delivery Zone:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedDelivery("dhaka")}
                        className={`p-2 rounded-xl font-mono text-xs text-left border transition-all ${
                          selectedDelivery === "dhaka"
                            ? "bg-noir text-white border-noir"
                            : "bg-[#FAF5F8] border-black/10 text-noir"
                        }`}
                      >
                        <div className="font-bold">Inside Dhaka</div>
                        <div className="text-[10px] opacity-75">Tk 70 (24-48h)</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedDelivery("outside")}
                        className={`p-2 rounded-xl font-mono text-xs text-left border transition-all ${
                          selectedDelivery === "outside"
                            ? "bg-noir text-white border-noir"
                            : "bg-[#FAF5F8] border-black/10 text-noir"
                        }`}
                      >
                        <div className="font-bold">Outside Dhaka</div>
                        <div className="text-[10px] opacity-75">Tk 130 (48-72h)</div>
                      </button>
                    </div>
                  </div>

                  {/* Gift Wrap Toggle */}
                  <div
                    onClick={() => setIsGiftWrapped(!isGiftWrapped)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      isGiftWrapped ? "border-[#D81B60] bg-rose-50/50" : "bg-[#FAF5F8] border-black/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Gift className="w-3.5 h-3.5 text-[#D81B60]" />
                      <span className="font-sans text-xs text-noir font-medium">
                        Luxury Gift Wrap &amp; Ribbon
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#D81B60]">
                      {isGiftWrapped ? "Added (+Tk 50)" : "+Tk 50"}
                    </span>
                  </div>

                  {/* Price Calculation */}
                  <div className="space-y-1 pt-2 font-mono text-xs text-noir/70 border-t border-black/[0.06]">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>Tk {subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery ({selectedDelivery === "dhaka" ? "Dhaka" : "Outside"}):</span>
                      <span>Tk {deliveryFee}</span>
                    </div>
                    {isGiftWrapped && (
                      <div className="flex justify-between text-[#D81B60]">
                        <span>Gift Wrap:</span>
                        <span>Tk 50</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-noir pt-2 border-t border-black/[0.06]">
                      <span>Total (Cash on Delivery):</span>
                      <span className="text-base text-[#D81B60]">Tk {total}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={handleGoToCheckout}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleGoToCart}
                        className="py-2.5 px-3 rounded-xl border border-black/10 bg-white hover:bg-rose-50/50 text-noir font-mono text-xs font-semibold text-center transition-colors"
                      >
                        View Full Bag
                      </button>

                      <button
                        onClick={() => setShowWhatsAppForm(!showWhatsAppForm)}
                        className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-sans text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    {showWhatsAppForm && (
                      <form onSubmit={handleWhatsAppSubmit} className="space-y-2 pt-3 border-t border-black/10 animate-in fade-in">
                        <input
                          type="text"
                          placeholder="Your Full Name"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-black/15 bg-[#FAF5F8] text-noir focus:outline-none focus:border-[#D81B60]"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number (e.g. 01XXXXXXXXX)"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-black/15 bg-[#FAF5F8] text-noir focus:outline-none focus:border-[#D81B60]"
                        />
                        <input
                          type="text"
                          placeholder="Delivery Address (e.g. Uttara, Dhaka)"
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-black/15 bg-[#FAF5F8] text-noir focus:outline-none focus:border-[#D81B60]"
                        />
                        <button
                          type="submit"
                          className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                        >
                          Send Order on WhatsApp
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
