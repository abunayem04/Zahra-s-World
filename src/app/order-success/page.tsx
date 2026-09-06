"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, OrderRecord } from "@/context/CartContext";
import confetti from "canvas-confetti";
import { 
  CheckCircle2, 
  Copy, 
  MessageCircle, 
  ShoppingBag, 
  Truck, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  Check, 
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function OrderSuccessPage() {
  const { lastOrder } = useCart();
  const [order, setOrder] = useState<OrderRecord | null>(lastOrder);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ["#D81B60", "#FFD3F6", "#C0E6DE", "#426B69", "#E91E63"],
      });
    } catch {
      // ignore
    }

    // Read fallback from localStorage if context refreshed
    if (!order) {
      const saved = localStorage.getItem("zahra_last_order");
      if (saved) {
        try {
          setOrder(JSON.parse(saved));
        } catch {
          // ignore
        }
      }
    }
  }, [order]);

  const handleCopyOrderId = () => {
    if (order?.orderId && typeof window !== "undefined") {
      navigator.clipboard.writeText(order.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppTracking = () => {
    if (!order) return;
    const text = encodeURIComponent(
      `Hello Zahra's World! I just placed order *#${order.orderId}* on your website for Tk ${order.total} (Cash on Delivery). Customer: ${order.customer.name} (${order.customer.phone}). Please confirm when this will be dispatched.`
    );
    window.open(`https://wa.me/8801320829916?text=${text}`, "_blank");
  };

  const fallbackOrderId = "ZW-74892";
  const displayOrderId = order?.orderId || fallbackOrderId;

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Success Celebration Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-sm text-center mb-8">
          {/* Animated Success Check */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600 shadow-sm animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="font-signature text-4xl sm:text-5xl text-[#D81B60] block mb-1">
            Order Confirmed!
          </span>
          <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-noir tracking-tight mb-2">
            Thank You for Your Order
          </h1>
          <p className="text-sm font-sans text-noir/70 max-w-lg mx-auto mb-6">
            We have received your order details. Our boutique concierge is preparing your items with luxury shockproof packaging.
          </p>

          {/* Order ID Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#FAF5F8] border border-black/[0.08] shadow-inner mb-6">
            <span className="font-mono text-xs text-noir/60 uppercase tracking-wider font-semibold">
              Invoice Order ID:
            </span>
            <span className="font-mono text-base font-bold text-[#D81B60]">
              #{displayOrderId}
            </span>
            <button
              onClick={handleCopyOrderId}
              className="p-1.5 rounded-lg hover:bg-white text-noir/60 hover:text-[#D81B60] transition-colors"
              title="Copy Order ID"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={handleWhatsAppTracking}
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Track on WhatsApp</span>
            </button>

            <Link
              href="/products"
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-noir hover:bg-[#D81B60] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Details & Summary Breakdown */}
        {order && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Delivery & Recipient Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm space-y-4">
              <h2 className="font-playfair text-lg font-bold text-noir border-b border-black/[0.06] pb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D81B60]" />
                <span>Delivery &amp; Customer Information</span>
              </h2>

              <div className="space-y-3 font-sans text-xs text-noir/80">
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-noir/40 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-noir block">Recipient Name:</span>
                    <span>{order.customer.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-noir/40 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-noir block">Phone Number:</span>
                    <span className="font-mono">{order.customer.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-noir/40 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-noir block">Delivery Destination:</span>
                    <span>{order.customer.address}, {order.customer.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-noir/40 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-noir block">Payment &amp; Status:</span>
                    <span className="font-mono text-emerald-700 font-semibold">{order.paymentMethod} (Pending Delivery)</span>
                  </div>
                </div>
              </div>

              {/* Delivery Timeline Card */}
              <div className="p-4 rounded-2xl bg-[#FAF5F8] border border-black/[0.05] mt-4">
                <div className="font-mono text-xs font-bold text-noir mb-1">Estimated Delivery:</div>
                <div className="text-xs font-sans text-noir/70">
                  {order.deliveryZone === "dhaka"
                    ? "24 to 48 Hours (Inside Dhaka Express)"
                    : "48 to 72 Hours (Steadfast / Pathao Nationwide Courier)"}
                </div>
              </div>
            </div>

            {/* Items Ordered List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm space-y-4">
              <h2 className="font-playfair text-lg font-bold text-noir border-b border-black/[0.06] pb-3 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#D81B60]" />
                <span>Items in Parcel ({order.items.length})</span>
              </h2>

              <div className="space-y-3 max-h-56 overflow-y-auto pr-1 no-scrollbar divide-y divide-black/[0.05]">
                {order.items.map((it, idx) => {
                  const variant = it.product.variants.find((v) => v.id === it.variantId);
                  return (
                    <div key={idx} className="pt-3 first:pt-0 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#FAF5F8] border border-black/[0.08] shrink-0">
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
                          <span className="font-mono text-[10px] text-slateTeal block truncate">
                            {variant.name}
                          </span>
                        )}
                        <span className="font-mono text-[11px] text-noir/60">
                          Qty: {it.quantity} &times; Tk {it.product.price}
                        </span>
                      </div>
                      <div className="font-mono text-xs font-bold text-noir">
                        Tk {it.product.price * it.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Financial Calculation */}
              <div className="space-y-1.5 pt-3 border-t border-black/[0.06] font-mono text-xs text-noir/70">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Tk {order.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span>Tk {order.deliveryFee}</span>
                </div>
                {order.giftWrapFee > 0 && (
                  <div className="flex justify-between text-[#D81B60]">
                    <span>Gift Wrapping:</span>
                    <span>+Tk {order.giftWrapFee}</span>
                  </div>
                )}
                {order.discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount:</span>
                    <span>-Tk {order.discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-noir pt-2 border-t border-black/[0.08]">
                  <span>Total Amount (COD):</span>
                  <span className="text-base text-[#D81B60]">Tk {order.total}</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Reassurance Guarantee Footer */}
        <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-[#D81B60] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-playfair text-sm font-bold text-noir">
                100% Damage-Proof Replacement Guarantee
              </div>
              <p className="text-xs font-sans text-noir/60">
                If your crystal or lamp has any defect upon arrival, message our WhatsApp for immediate replacement.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-black/10 hover:border-emerald-500 hover:text-emerald-700 text-noir font-mono text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Direct Help: +880 1320-829916
          </a>
        </div>

      </div>
    </div>
  );
}
