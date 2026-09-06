"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, OrderRecord } from "@/context/CartContext";
import confetti from "canvas-confetti";
import { 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Lock, 
  ShoppingBag, 
  ArrowLeft,
  Banknote,
  Smartphone,
  AlertCircle
} from "lucide-react";

const BD_DISTRICTS = [
  "Dhaka",
  "Chattogram (Chittagong)",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Cumilla (Comilla)",
  "Gazipur",
  "Narayanganj",
  "Bogura (Bogra)",
  "Cox's Bazar",
  "Feni",
  "Jessore (Jashore)",
  "Brahmanbaria",
  "Tangail",
  "Dinajpur",
  "Pabna",
  "Narsingdi",
  "Kushtia",
  "Jamalpur",
  "Noakhali",
  "Other District (Nationwide)"
];

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    selectedDelivery,
    setSelectedDelivery,
    isGiftWrapped,
    couponCode,
    discountAmount,
    subtotal,
    deliveryFee,
    giftWrapFee,
    total,
    clearCart,
    setLastOrder,
    user,
  } = useCart();

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [district, setDistrict] = useState("Dhaka");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bkash">("cod");
  const [bkashTrxId, setBkashTrxId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill user data if logged in
  useEffect(() => {
    if (user && user.name && user.name !== "Valued Guest") {
      setFullName(user.name);
    }
  }, [user]);

  // Sync district with delivery zone
  useEffect(() => {
    if (district === "Dhaka" || district === "Gazipur" || district === "Narayanganj") {
      setSelectedDelivery("dhaka");
    } else {
      setSelectedDelivery("outside");
    }
  }, [district, setSelectedDelivery]);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = phone.trim().replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 11-digit mobile phone number (e.g. 017XXXXXXXX).");
      return;
    }

    if (!address.trim() || address.length < 5) {
      setErrorMessage("Please provide your full delivery address and area.");
      return;
    }

    if (paymentMethod === "bkash" && !bkashTrxId.trim()) {
      setErrorMessage("Please enter your bKash / Nagad Transaction ID.");
      return;
    }

    setIsSubmitting(true);

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const generatedOrderId = `ZW-${randomNum}`;

    const newOrder: OrderRecord = {
      orderId: generatedOrderId,
      items: [...items],
      subtotal,
      deliveryFee,
      giftWrapFee,
      discount: discountAmount,
      total,
      deliveryZone: selectedDelivery,
      paymentMethod: paymentMethod === "cod" ? "Cash on Delivery" : `bKash/Nagad (${bkashTrxId})`,
      customer: {
        name: fullName.trim(),
        phone: cleanPhone,
        city: district,
        address: address.trim(),
        notes: notes.trim() || undefined,
      },
      createdAt: new Date().toISOString(),
    };

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D81B60", "#FFD3F6", "#C0E6DE", "#426B69"],
      });
    } catch {
      // ignore
    }

    // Save order & clear shopping bag
    setLastOrder(newOrder);
    clearCart();

    setTimeout(() => {
      router.push("/order-success");
    }, 400);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF6F8] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center border border-black/[0.06] shadow-md">
          <ShoppingBag className="w-12 h-12 text-[#D81B60] mx-auto mb-4 opacity-70" />
          <h2 className="font-playfair text-2xl font-bold text-noir mb-2">No items to checkout</h2>
          <p className="text-xs font-sans text-noir/60 mb-6">
            Your shopping cart is currently empty. Please select products first.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-noir text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D81B60] transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24">
      {/* Checkout Top Bar */}
      <div className="bg-white border-b border-black/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/cart" className="inline-flex items-center gap-2 text-xs font-mono text-noir/60 hover:text-[#D81B60] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shopping Bag</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span>SSL Encrypted Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8">
          <span className="font-signature text-4xl text-[#D81B60] block mb-1">
            Fast Delivery
          </span>
          <h1 className="font-playfair text-3xl font-bold text-noir">
            Complete Your Order
          </h1>
          <p className="text-xs font-sans text-noir/60 mt-1">
            Cash on Delivery available across all 64 districts in Bangladesh. Pay only after receiving your parcel.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-sans flex items-center gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Customer & Delivery Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Recipient Information Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-[#D81B60] flex items-center justify-center font-mono text-xs font-bold">
                    1
                  </div>
                  <h2 className="font-playfair text-lg sm:text-xl font-bold text-noir">
                    Recipient Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Mahira Chowdhury"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10 transition-all font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                        Alternative Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={altPhone}
                        onChange={(e) => setAltPhone(e.target.value)}
                        placeholder="Secondary contact number"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10 transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-[#D81B60] flex items-center justify-center font-mono text-xs font-bold">
                    2
                  </div>
                  <h2 className="font-playfair text-lg sm:text-xl font-bold text-noir">
                    Shipping Address
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                      Select District *
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs font-sans font-medium text-noir outline-none focus:border-[#D81B60] cursor-pointer"
                    >
                      {BD_DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist} {dist === "Dhaka" || dist === "Gazipur" || dist === "Narayanganj" ? "(Inside Dhaka - Tk 70)" : "(Outside Dhaka - Tk 130)"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                      Full Street Address &amp; Area *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. House #14/B, Road #7, Sector #3, Uttara, Dhaka"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10 transition-all font-sans resize-none"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-noir block mb-1.5">
                      Special Delivery Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Call before arrival / Deliver after 3 PM"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5F8] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-[#D81B60] flex items-center justify-center font-mono text-xs font-bold">
                    3
                  </div>
                  <h2 className="font-playfair text-lg sm:text-xl font-bold text-noir">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Option 1: COD (Default) */}
                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-start gap-3.5 transition-all ${
                      paymentMethod === "cod"
                        ? "border-[#D81B60] bg-rose-50/40 ring-1 ring-[#D81B60]"
                        : "border-black/10 bg-[#FAF5F8] hover:border-black/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1 text-[#D81B60] focus:ring-[#D81B60]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-[#D81B60]" />
                        <span className="font-sans text-sm font-bold text-noir">
                          Cash on Delivery (COD)
                        </span>
                        <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full ml-auto">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs font-sans text-noir/60 mt-1">
                        Pay cash directly to the delivery rider when your package arrives at your home.
                      </p>
                    </div>
                  </label>

                  {/* Option 2: bKash / Nagad Send Money */}
                  <label
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-start gap-3.5 transition-all ${
                      paymentMethod === "bkash"
                        ? "border-[#D81B60] bg-rose-50/40 ring-1 ring-[#D81B60]"
                        : "border-black/10 bg-[#FAF5F8] hover:border-black/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "bkash"}
                      onChange={() => setPaymentMethod("bkash")}
                      className="mt-1 text-[#D81B60] focus:ring-[#D81B60]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[#D81B60]" />
                        <span className="font-sans text-sm font-bold text-noir">
                          bKash / Nagad Advance Payment
                        </span>
                      </div>
                      <p className="text-xs font-sans text-noir/60 mt-1">
                        Send total amount (Tk {total}) to Personal Number <strong>01320829916</strong> and enter TrxID below.
                      </p>

                      {paymentMethod === "bkash" && (
                        <div className="mt-3 pt-3 border-t border-black/10">
                          <input
                            type="text"
                            value={bkashTrxId}
                            onChange={(e) => setBkashTrxId(e.target.value)}
                            placeholder="Enter 8-10 character bKash TrxID (e.g. 9B7X24K9)"
                            className="w-full px-3 py-2 rounded-xl bg-white border border-black/15 text-xs font-mono uppercase text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60]"
                          />
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
                <h3 className="font-playfair text-xl font-bold text-noir mb-4">
                  Items in Your Order ({items.length})
                </h3>

                {/* Items Preview List */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1 no-scrollbar divide-y divide-black/[0.05]">
                  {items.map((it) => {
                    const variant = it.product.variants.find((v) => v.id === it.variantId);
                    return (
                      <div key={`${it.product.id}-${it.variantId}`} className="pt-3 first:pt-0 flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#FAF5F8] border border-black/[0.08] shrink-0">
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

                {/* Summary Table */}
                <div className="space-y-2 pt-4 border-t border-black/[0.06] mt-4 font-mono text-xs text-noir/70">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-noir">Tk {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery ({selectedDelivery === "dhaka" ? "Dhaka" : "Outside Dhaka"}):</span>
                    <span className="font-semibold text-noir">Tk {deliveryFee}</span>
                  </div>
                  {isGiftWrapped && (
                    <div className="flex justify-between text-[#D81B60]">
                      <span>Luxury Gift Wrap:</span>
                      <span className="font-semibold">+Tk 50</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount ({couponCode}):</span>
                      <span className="font-semibold">-Tk {discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-bold text-noir pt-3 border-t border-black/[0.08]">
                    <span>Total Amount:</span>
                    <span className="text-xl font-mono font-bold text-[#D81B60]">Tk {total}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] disabled:opacity-50 text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D81B60]/25 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isSubmitting ? "Placing Order..." : `Place Order (Tk ${total} COD)`}</span>
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-black/[0.06] space-y-2.5 font-sans text-xs text-noir/60">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#D81B60] shrink-0" />
                    <span>Steadfast &amp; Pathao Express Doorstep Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Check goods before payment — 100% Risk Free</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
