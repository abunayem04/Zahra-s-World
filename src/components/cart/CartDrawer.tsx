"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer: React.FC = () => {
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

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    checkoutWhatsApp({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
    });
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
              className="w-screen max-w-md bg-white dark:bg-noir border-l border-noir/10 dark:border-white/10 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-noir/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-palette-teal" />
                  <span className="font-display text-base font-bold uppercase tracking-wider text-noir dark:text-canvas">
                    Shopping Bag
                  </span>
                  <span className="font-mono text-xs text-noir/50 dark:text-canvas/50">
                    ({items.length})
                  </span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="w-8 h-8 rounded-full bg-canvas-warm dark:bg-white/10 flex items-center justify-center text-noir/70 dark:text-canvas hover:text-noir transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-20 flex flex-col items-center gap-3 text-noir/50 dark:text-canvas/50">
                    <ShoppingBag className="w-12 h-12 stroke-[1.2] opacity-40 text-slateTeal" />
                    <div className="font-display text-sm font-semibold uppercase tracking-wider">
                      Your bag is empty
                    </div>
                    <p className="text-xs font-sans max-w-xs leading-relaxed">
                      Discover bespoke 3D celestial crystal spheres and nostalgic audio keepsakes in our atelier collection.
                    </p>
                  </div>
                ) : (
                  items.map((it) => {
                    const variant = it.product.variants.find((v) => v.id === it.variantId);
                    return (
                      <div
                        key={`${it.product.id}-${it.variantId}`}
                        className="flex gap-4 p-3.5 rounded-[10px] bg-canvas-warm/60 dark:bg-white/5 border border-noir/5 dark:border-white/5 items-center"
                      >
                        <div className="relative w-16 h-16 rounded-[8px] overflow-hidden bg-white shrink-0 border border-noir/10">
                          <Image
                            src={variant?.image || it.product.image}
                            alt={it.product.nameEn}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-xs font-bold text-noir dark:text-canvas truncate">
                            {it.product.nameEn}
                          </h4>
                          {variant && (
                            <span className="font-mono text-[10px] text-slateTeal dark:text-mintFrost block truncate mb-1">
                              {variant.name}
                            </span>
                          )}
                          <div className="font-mono text-xs font-bold text-noir dark:text-canvas">
                            Tk {it.product.price}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-white dark:bg-noir rounded-[8px] border border-noir/10 px-1.5 py-1">
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, -1)}
                            className="p-1 hover:text-palette-pink transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-semibold px-1">
                            {it.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, 1)}
                            className="p-1 hover:text-palette-pink transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(it.product.id, it.variantId)}
                          className="p-1.5 text-noir/40 hover:text-roseBlossom-dark transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer & Checkout */}
              {items.length > 0 && (
                <div className="p-6 border-t border-noir/10 dark:border-white/10 bg-canvas-warm/40 dark:bg-black/30 space-y-4">
                  {/* Shipping Zone Selector */}
                  <div>
                    <label className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slateTeal dark:text-mintFrost block mb-1.5">
                      Delivery Zone:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedDelivery("dhaka")}
                        className={`p-2 rounded-[8px] font-mono text-xs text-left border transition-all ${
                          selectedDelivery === "dhaka"
                            ? "bg-noir text-white border-noir dark:bg-palette-teal"
                            : "bg-white dark:bg-white/5 border-noir/10 text-noir dark:text-canvas"
                        }`}
                      >
                        <div className="font-bold">Inside Dhaka</div>
                        <div className="text-[10px] opacity-75">Tk 70 (24-48h)</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedDelivery("outside")}
                        className={`p-2 rounded-[8px] font-mono text-xs text-left border transition-all ${
                          selectedDelivery === "outside"
                            ? "bg-noir text-white border-noir dark:bg-palette-teal"
                            : "bg-white dark:bg-white/5 border-noir/10 text-noir dark:text-canvas"
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
                    className="flex items-center justify-between p-2.5 rounded-[8px] bg-white dark:bg-white/5 border border-noir/10 cursor-pointer hover:border-slateTeal transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Gift className="w-3.5 h-3.5 text-palette-pink" />
                      <span className="font-mono text-xs text-noir dark:text-canvas">
                        Luxury Gift Wrap &amp; Ribbon
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-slateTeal">
                      {isGiftWrapped ? "Added (+Tk 50)" : "+Tk 50"}
                    </span>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 pt-2 font-mono text-xs text-noir/70 dark:text-canvas/70 border-t border-noir/5 dark:border-white/10">
                    <div className="flex justify-between">
                      <span>Items Subtotal:</span>
                      <span>Tk {subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery ({selectedDelivery === "dhaka" ? "Dhaka" : "Nationwide"}):</span>
                      <span>Tk {deliveryFee}</span>
                    </div>
                    {isGiftWrapped && (
                      <div className="flex justify-between text-palette-pink">
                        <span>Luxury Gift Wrap:</span>
                        <span>Tk 50</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-bold text-noir dark:text-canvas pt-2 border-t border-noir/10 dark:border-white/10">
                      <span>Estimated Total:</span>
                      <span>Tk {total}</span>
                    </div>
                  </div>

                  {/* Customer Checkout Form */}
                  <form onSubmit={handleCheckout} className="space-y-2 pt-2">
                    <input
                      type="text"
                      placeholder="Your Full Name (optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono rounded-[8px] border border-noir/15 bg-white dark:bg-noir dark:text-canvas focus:outline-none focus:border-noir"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono rounded-[8px] border border-noir/15 bg-white dark:bg-noir dark:text-canvas focus:outline-none focus:border-noir"
                    />
                    <input
                      type="text"
                      placeholder="Delivery Address (e.g. Uttara, Dhaka)"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono rounded-[8px] border border-noir/15 bg-white dark:bg-noir dark:text-canvas focus:outline-none focus:border-noir"
                    />

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-[10px] bg-noir text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-noir-hover transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-2"
                    >
                      <span>Complete Order on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-palette-pink" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
