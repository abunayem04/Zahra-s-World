"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Gift, 
  Tag, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  X,
  MessageCircle,
  Sparkles
} from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    selectedDelivery,
    setSelectedDelivery,
    isGiftWrapped,
    setIsGiftWrapped,
    couponCode,
    discountAmount,
    applyCoupon,
    removeCoupon,
    subtotal,
    deliveryFee,
    giftWrapFee,
    total,
    checkoutWhatsApp,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponMessage({ text: res.message, isError: false });
      setInputCoupon("");
    } else {
      setCouponMessage({ text: res.message, isError: true });
    }
  };

  const FREE_DELIVERY_THRESHOLD = 2500;
  const progressToFreeDelivery = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white via-rose-50/30 to-[#FAF6F8] border-b border-black/[0.06] pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-noir/50 mb-3">
            <Link href="/" className="hover:text-[#D81B60] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-noir font-semibold">Shopping Bag</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-signature text-4xl sm:text-5xl text-[#D81B60] block mb-1">
                Your Selection
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-noir tracking-tight">
                Shopping Cart ({items.length} {items.length === 1 ? "Item" : "Items"})
              </h1>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs font-mono text-noir/50 hover:text-rose-600 transition-colors self-start sm:self-auto flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Items</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {items.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-black/[0.06] shadow-sm max-w-xl mx-auto my-12">
            <div className="w-20 h-20 rounded-full bg-rose-50 border border-[#D81B60]/20 flex items-center justify-center mx-auto mb-5 text-[#D81B60]">
              <ShoppingBag className="w-9 h-9" />
            </div>
            <h2 className="font-playfair text-2xl font-bold text-noir mb-2">
              Your bag is currently empty
            </h2>
            <p className="text-sm font-sans text-noir/60 max-w-md mx-auto mb-8">
              Looks like you haven&apos;t added any bespoke crystal lamps or gifts yet. Explore our bestsellers and find the perfect gift today!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#D81B60]/25 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Products</span>
            </Link>
          </div>
        ) : (
          /* 2-Column Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Cart Items List (8 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              
              {/* Free Delivery Target Banner */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/[0.06] shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-noir font-semibold flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#D81B60]" />
                    {amountNeededForFree > 0
                      ? `Add Tk ${amountNeededForFree} more for VIP Free Delivery!`
                      : "🎉 Congratulations! You unlocked Free Delivery!"}
                  </span>
                  <span className="font-bold text-[#D81B60]">{progressToFreeDelivery}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/[0.06] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D81B60] to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressToFreeDelivery}%` }}
                  />
                </div>
              </div>

              {/* Items Table */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm divide-y divide-black/[0.06]">
                {items.map((it) => {
                  const variant = it.product.variants.find((v) => v.id === it.variantId);
                  const itemTotal = it.product.price * it.quantity;

                  return (
                    <div
                      key={`${it.product.id}-${it.variantId}`}
                      className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <Link
                          href={`/products/${it.product.slug}`}
                          className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#FAF5F8] border border-black/[0.08] shrink-0"
                        >
                          <Image
                            src={variant?.image || it.product.image}
                            alt={it.product.nameEn}
                            fill
                            className="object-cover"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/products/${it.product.slug}`}
                            className="font-sans text-sm font-bold text-noir hover:text-[#D81B60] transition-colors line-clamp-1"
                          >
                            {it.product.nameEn}
                          </Link>
                          {variant && (
                            <span className="font-mono text-xs text-slateTeal block truncate mt-0.5">
                              Motif: {variant.name}
                            </span>
                          )}
                          <span className="font-mono text-xs text-noir/50 block mt-1">
                            Unit Price: Tk {it.product.price}
                          </span>
                        </div>
                      </div>

                      {/* Quantity & Actions Cluster */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-black/[0.04]">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-black/15 rounded-xl bg-white shadow-sm overflow-hidden">
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, -1)}
                            className="p-2 hover:bg-black/5 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5 text-noir" />
                          </button>
                          <span className="font-mono text-xs font-bold px-3 text-noir min-w-[28px] text-center">
                            {it.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(it.product.id, it.variantId, 1)}
                            className="p-2 hover:bg-black/5 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5 text-noir" />
                          </button>
                        </div>

                        {/* Item Total Price */}
                        <div className="font-mono text-base font-bold text-noir min-w-[80px] text-right">
                          Tk {itemTotal}
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeItem(it.product.id, it.variantId)}
                          className="p-2 text-noir/35 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Continue Shopping Link */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-noir/70 hover:text-[#D81B60] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Browsing Products</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Order Summary & Coupon (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
                <h3 className="font-playfair text-xl font-bold text-noir mb-5">
                  Order Summary
                </h3>

                {/* Delivery Zone Selector */}
                <div className="mb-5">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-2">
                    Shipping Destination:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDelivery("dhaka")}
                      className={`p-3 rounded-xl font-mono text-xs text-left border transition-all ${
                        selectedDelivery === "dhaka"
                          ? "bg-noir text-white border-noir shadow-sm"
                          : "bg-white border-black/10 text-noir hover:border-black/30"
                      }`}
                    >
                      <div className="font-bold">Inside Dhaka</div>
                      <div className="text-[10px] opacity-75">Tk 70 (24-48h)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedDelivery("outside")}
                      className={`p-3 rounded-xl font-mono text-xs text-left border transition-all ${
                        selectedDelivery === "outside"
                          ? "bg-noir text-white border-noir shadow-sm"
                          : "bg-white border-black/10 text-noir hover:border-black/30"
                      }`}
                    >
                      <div className="font-bold">Outside Dhaka</div>
                      <div className="text-[10px] opacity-75">Tk 130 (48-72h)</div>
                    </button>
                  </div>
                </div>

                {/* Gift Wrap Addon */}
                <div
                  onClick={() => setIsGiftWrapped(!isGiftWrapped)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between mb-5 ${
                    isGiftWrapped
                      ? "border-[#D81B60] bg-rose-50/40 ring-1 ring-[#D81B60]"
                      : "border-black/10 bg-[#FAF5F8] hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Gift className={`w-4 h-4 ${isGiftWrapped ? "text-[#D81B60]" : "text-noir/60"}`} />
                    <div>
                      <span className="font-sans text-xs font-bold text-noir block">
                        Luxury Gift Box &amp; Satin Ribbon
                      </span>
                      <span className="text-[10px] font-sans text-noir/50">
                        Ready for instant gift giving
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D81B60]">
                    {isGiftWrapped ? "Added (+Tk 50)" : "+Tk 50"}
                  </span>
                </div>

                {/* Promo Code Input */}
                <div className="mb-6">
                  {couponCode ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-bold">{couponCode}</span>
                        <span>(-Tk {discountAmount})</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-emerald-700 hover:text-rose-600 transition-colors p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={inputCoupon}
                          onChange={(e) => setInputCoupon(e.target.value)}
                          placeholder="Promo code (e.g. ZAHRA100)"
                          className="flex-1 px-3 py-2 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs font-mono uppercase text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-noir text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D81B60] transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {couponMessage && (
                        <p className={`text-[11px] font-mono ${couponMessage.isError ? "text-rose-600" : "text-emerald-600"}`}>
                          {couponMessage.text}
                        </p>
                      )}
                    </form>
                  )}
                </div>

                {/* Price Breakdown Calculation */}
                <div className="space-y-2.5 pt-4 border-t border-black/[0.06] font-mono text-xs text-noir/70">
                  <div className="flex justify-between">
                    <span>Items Subtotal:</span>
                    <span className="font-semibold text-noir">Tk {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery ({selectedDelivery === "dhaka" ? "Inside Dhaka" : "Nationwide"}):</span>
                    <span className="font-semibold text-noir">Tk {deliveryFee}</span>
                  </div>
                  {isGiftWrapped && (
                    <div className="flex justify-between text-[#D81B60]">
                      <span>Luxury Gift Wrapping:</span>
                      <span className="font-semibold">+Tk 50</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Promo Discount ({couponCode}):</span>
                      <span className="font-semibold">-Tk {discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-bold text-noir pt-3 border-t border-black/[0.08]">
                    <span>Total Payable:</span>
                    <span className="text-xl font-mono font-bold text-[#D81B60]">Tk {total}</span>
                  </div>
                  <p className="text-[11px] font-sans text-noir/50 text-right">
                    Payable via Cash on Delivery at your doorstep
                  </p>
                </div>

                {/* Checkout Buttons */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => router.push("/checkout")}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D81B60]/25 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => checkoutWhatsApp()}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Instant Order via WhatsApp</span>
                  </button>
                </div>

                {/* Guarantees */}
                <div className="mt-6 pt-6 border-t border-black/[0.06] space-y-2 font-sans text-[11px] text-noir/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cash on Delivery across all 64 districts in Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free replacement guarantee if damaged during transit</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
