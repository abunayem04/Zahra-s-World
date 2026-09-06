"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  MessageCircle, 
  Plus, 
  Minus,
  Sparkles,
  PackageCheck,
  Share2
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
  relatedProducts,
}) => {
  const router = useRouter();
  const { addItem, toggleWishlist, isWishlisted } = useCart();
  
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants[0]?.id || "default"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"features" | "box" | "delivery" | "reviews">("features");
  const [copied, setCopied] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  const activeImage = selectedVariant?.image || product.image;
  const wishlisted = isWishlisted(product.id);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addItem(product.id, selectedVariantId, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product.id, selectedVariantId, quantity);
    router.push("/checkout");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppInquire = () => {
    const text = encodeURIComponent(
      `Hello Zahra's World! I am interested in ordering: "${product.nameEn}" (${selectedVariant?.name || "Standard"}). Price: Tk ${product.price}. Is this currently in stock?`
    );
    window.open(`https://wa.me/8801320829916?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-noir text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 font-mono text-xs animate-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Added to your shopping bag!</span>
        </div>
      )}

      {/* Breadcrumbs Navigation */}
      <div className="bg-white border-b border-black/[0.06] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs font-mono text-noir/50 truncate">
            <Link href="/" className="hover:text-[#D81B60] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#D81B60] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-noir font-semibold truncate max-w-[200px] sm:max-w-none">{product.nameEn}</span>
          </nav>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-mono text-noir/60 hover:text-[#D81B60] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Link Copied!" : "Share"}</span>
          </button>
        </div>
      </div>

      {/* Main Product Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/[0.06] shadow-sm">
          
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF5F8] border border-black/[0.06] shadow-inner">
              <Image
                src={activeImage}
                alt={product.nameEn}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-noir/85 backdrop-blur-md text-white font-mono text-xs font-bold uppercase tracking-wider">
                {product.badgeEn}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Wishlist"
                className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-10 ${
                  wishlisted
                    ? "bg-[#D81B60] border-[#D81B60] text-white"
                    : "bg-white/90 hover:bg-white border-white/60 text-noir hover:text-[#D81B60]"
                }`}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
              </button>
            </div>

            {/* Thumbnail Variant Selector Row */}
            {product.variants.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {product.variants.map((v) => {
                  const isSelected = selectedVariantId === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                        isSelected
                          ? "border-[#D81B60] shadow-md scale-105"
                          : "border-black/10 opacity-70 hover:opacity-100 hover:border-black/30"
                      }`}
                    >
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Verified Reviews */}
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-mono text-xs font-semibold text-slateTeal uppercase tracking-wider">
                  {product.categoryNameEn}
                </span>
                <div className="flex items-center gap-1 text-xs font-mono text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-noir/50">({product.reviewCount} Reviews)</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-noir tracking-tight leading-snug mb-3">
                {product.nameEn}
              </h1>

              {/* Tagline */}
              <p className="text-sm font-sans text-noir/70 leading-relaxed mb-6">
                {product.taglineEn}
              </p>

              {/* Price Banner */}
              <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#FAF5F8] border border-black/[0.05] mb-6">
                <span className="font-mono text-3xl font-bold text-noir">
                  Tk {product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-mono text-base text-noir/40 line-through">
                      Tk {product.originalPrice}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#D81B60] bg-rose-100/70 px-2.5 py-1 rounded-full ml-auto">
                      Save Tk {product.originalPrice - product.price} (
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off)
                    </span>
                  </>
                )}
              </div>

              {/* Variant Choice Selection */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-noir">
                      Select Motif / Color:
                    </span>
                    <span className="font-mono text-xs text-[#D81B60] font-semibold">
                      {selectedVariant?.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariantId === v.id;
                      return (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariantId(v.id)}
                          className={`p-2.5 rounded-xl border text-left font-sans text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                            isSelected
                              ? "border-[#D81B60] bg-rose-50/50 text-[#D81B60] shadow-sm ring-1 ring-[#D81B60]"
                              : "border-black/10 bg-white text-noir/80 hover:border-black/20"
                          }`}
                        >
                          {v.colorCode && (
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0"
                              style={{ backgroundColor: v.colorCode }}
                            />
                          )}
                          <span className="truncate">{v.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-noir">
                  Quantity:
                </span>
                <div className="flex items-center border border-black/15 rounded-xl bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2.5 hover:bg-black/5 disabled:opacity-30 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5 text-noir" />
                  </button>
                  <span className="font-mono text-sm font-bold px-4 text-noir">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2.5 hover:bg-black/5 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5 text-noir" />
                  </button>
                </div>
                <span className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  In Stock &bull; Ready to Dispatch
                </span>
              </div>

              {/* CTA Action Buttons: Add to Bag & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="py-4 px-6 rounded-2xl border-2 border-[#D81B60] text-[#D81B60] hover:bg-rose-50 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D81B60]/25 transition-all duration-200 hover:scale-[1.01] active:scale-95"
                >
                  <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  <span>Buy Now (COD)</span>
                </button>
              </div>

              {/* WhatsApp Inquiry Button */}
              <button
                onClick={handleWhatsAppInquire}
                className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-800 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-colors mb-8"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Have Questions? Chat Directly on WhatsApp (+880 1320-829916)</span>
              </button>

              {/* Trust & Guarantee Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF5F8] border border-black/[0.05] text-center font-sans text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-[#D81B60]" />
                  <span className="font-semibold text-noir">Cash on Delivery</span>
                  <span className="text-[10px] text-noir/50">Pay at Doorstep</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-black/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-noir">100% Safe Parcel</span>
                  <span className="text-[10px] text-noir/50">Breakage Proof</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-slateTeal" />
                  <span className="font-semibold text-noir">7-Day Replacement</span>
                  <span className="text-[10px] text-noir/50">Easy Claim</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Information Tabs Section */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/[0.06] shadow-sm">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 sm:gap-4 border-b border-black/[0.08] pb-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "features"
                  ? "bg-[#D81B60] text-white shadow-sm"
                  : "text-noir/60 hover:text-noir hover:bg-black/5"
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab("box")}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "box"
                  ? "bg-[#D81B60] text-white shadow-sm"
                  : "text-noir/60 hover:text-noir hover:bg-black/5"
              }`}
            >
              What&apos;s in the Box
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "delivery"
                  ? "bg-[#D81B60] text-white shadow-sm"
                  : "text-noir/60 hover:text-noir hover:bg-black/5"
              }`}
            >
              Delivery &amp; COD Terms
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "reviews"
                  ? "bg-[#D81B60] text-white shadow-sm"
                  : "text-noir/60 hover:text-noir hover:bg-black/5"
              }`}
            >
              Customer Reviews ({product.reviewCount})
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="pt-6">
            {activeTab === "features" && (
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-noir mb-4">
                  Craftsmanship &amp; Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {product.featuresEn.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5F8] border border-black/[0.04]"
                    >
                      <Sparkles className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-sans text-noir/80 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "box" && (
              <div className="space-y-4">
                <h3 className="font-playfair text-xl font-bold text-noir mb-2">
                  Package Contents
                </h3>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF5F8] border border-black/[0.04]">
                  <PackageCheck className="w-5 h-5 text-[#D81B60] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-noir/90 font-medium">
                    {product.boxIncludesEn}
                  </span>
                </div>
                <p className="text-xs font-sans text-noir/60">
                  Every product is packaged inside a custom high-density shockproof foam crate before boxing to ensure zero transit damage across any courier in Bangladesh.
                </p>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="space-y-4">
                <h3 className="font-playfair text-xl font-bold text-noir mb-2">
                  Nationwide Shipping Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAF5F8] border border-black/[0.05]">
                    <div className="font-bold text-sm text-noir mb-1">Inside Dhaka Metropolis</div>
                    <div className="text-xs text-noir/70 mb-2">Delivery Charge: <strong className="text-[#D81B60]">Tk 70</strong></div>
                    <div className="text-xs text-noir/60">Estimated timeline: 24 to 48 Hours right to your address.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF5F8] border border-black/[0.05]">
                    <div className="font-bold text-sm text-noir mb-1">Outside Dhaka / Nationwide</div>
                    <div className="text-xs text-noir/70 mb-2">Delivery Charge: <strong className="text-[#D81B60]">Tk 130</strong></div>
                    <div className="text-xs text-noir/60">Estimated timeline: 48 to 72 Hours via Steadfast / Pathao courier.</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 font-sans">
                  <strong>Open Box Policy:</strong> You may check the outer parcel condition before making payment to the delivery agent. In the rare case of defect or breakage, contact our WhatsApp hotline (+880 1320-829916) for an instant replacement.
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-noir">
                    Verified Customer Feedback
                  </h3>
                  <div className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% Real Buyer Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAF5F8] border border-black/[0.05]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-noir">Nusrat J. (Dhanmondi, Dhaka)</span>
                      <div className="flex text-amber-400">
                        {"★★★★★"}
                      </div>
                    </div>
                    <p className="text-xs font-sans text-noir/70 leading-relaxed">
                      &quot;The crystal ball light is even more glowing and high quality in real life than the pictures! My husband loved it as an anniversary surprise.&quot;
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF5F8] border border-black/[0.05]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-noir">Tanvir Hasan (Chittagong)</span>
                      <div className="flex text-amber-400">
                        {"★★★★★"}
                      </div>
                    </div>
                    <p className="text-xs font-sans text-noir/70 leading-relaxed">
                      &quot;Ordered with Cash on Delivery and received it in 2 days. The packaging was top-notch and the voice recorder keychain works flawlessly.&quot;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="font-signature text-3xl sm:text-4xl text-[#D81B60] block mb-1">
                  You May Also Adore
                </span>
                <h2 className="font-playfair text-2xl font-bold text-noir">
                  Recommended For You
                </h2>
              </div>
              <Link
                href="/products"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[#D81B60] hover:underline"
              >
                View Catalog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group rounded-2xl bg-white border border-black/[0.07] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D81B60]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-square w-full bg-[#FAF5F8] overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.nameEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-noir group-hover:text-[#D81B60] transition-colors line-clamp-2 mb-2">
                      {rel.nameEn}
                    </h3>
                    <div className="flex items-baseline justify-between pt-2 border-t border-black/[0.06]">
                      <span className="font-mono text-sm font-bold text-noir">
                        Tk {rel.price}
                      </span>
                      <span className="font-mono text-[10px] text-slateTeal uppercase font-semibold">
                        {rel.categoryNameEn}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
