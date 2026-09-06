"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { 
  Search, 
  SlidersHorizontal, 
  ShoppingBag, 
  Heart, 
  Star, 
  Check, 
  Sparkles,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "crystal-lamps", name: "3D Crystal Lamps" },
  { id: "retro-gadgets", name: "Voice Keepsakes" },
  { id: "romantic-gifts", name: "Jewelry & Gift Sets" },
  { id: "sand-art", name: "Moving Sand Art" },
  { id: "ambient-dioramas", name: "Tabletop Dioramas" },
];

const PRODUCTS_PER_PAGE = 12;

export default function ProductsPage() {
  const { addItem, toggleWishlist, isWishlisted } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [addedId, setAddedId] = useState<string | null>(null);

  // Reset page to 1 on category/search/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.taglineEn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const targetEl = document.getElementById("catalog-grid-top");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 220, behavior: "smooth" });
      }
    }
  };

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(productId);
    setAddedId(productId);
    setTimeout(() => setAddedId(null), 1800);
  };

  const startItemNumber = filteredProducts.length === 0 ? 0 : (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
  const endItemNumber = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length);

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-b from-white via-rose-50/40 to-[#FAF6F8] border-b border-black/[0.06] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-noir/50 mb-4">
            <Link href="/" className="hover:text-[#D81B60] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-noir font-semibold">Products Catalog</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-signature text-4xl sm:text-5xl text-[#D81B60] block mb-1">
                Curated Collection
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-noir tracking-tight">
                All Products &amp; Gifts
              </h1>
              <p className="text-sm font-sans text-noir/70 max-w-xl mt-2">
                Explore handpicked 3D crystal spheres, nostalgic voice recorder keychains, and ambient room decor designed to make every moment unforgettable.
              </p>
            </div>

            {/* Quick Guarantees Pill */}
            <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-xs font-mono text-noir/80">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>Nationwide COD</span>
              </div>
              <div className="w-px h-4 bg-black/10" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Breakage Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Section */}
      <div id="catalog-grid-top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Toolbar: Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, product name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-black/[0.08] text-xs text-noir placeholder:text-noir/40 focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10 outline-none transition-all shadow-sm"
            />
          </div>

          {/* Result Count and Sort Selector */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <span className="font-mono text-xs text-noir/50 hidden md:inline">
              Showing {startItemNumber}–{endItemNumber} of {filteredProducts.length} items
            </span>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-noir/60">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-xs font-sans font-medium text-noir outline-none focus:border-[#D81B60] shadow-sm cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-sans text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#D81B60] to-[#C2185B] text-white border-[#D81B60] shadow-sm"
                    : "bg-white text-noir/70 border-black/[0.07] hover:border-[#D81B60]/30 hover:text-noir"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Grid (12 items per page) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-black/[0.06] p-8">
            <Sparkles className="w-10 h-10 text-[#D81B60] mx-auto mb-3 opacity-60" />
            <h3 className="font-playfair text-xl font-bold text-noir mb-1">No products found</h3>
            <p className="text-xs font-sans text-noir/60 max-w-sm mx-auto mb-6">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try selecting another category or clear your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-noir text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#D81B60] transition-colors"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => {
              const wishlisted = isWishlisted(product.id);
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-white border border-black/[0.07] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D81B60]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Link */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative aspect-square w-full bg-[#FAF5F8] overflow-hidden block"
                  >
                    <Image
                      src={product.image}
                      alt={product.nameEn}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-noir/80 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                      {product.badgeEn}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Toggle Wishlist"
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-10 ${
                        wishlisted
                          ? "bg-[#D81B60] border-[#D81B60] text-white"
                          : "bg-white/85 hover:bg-white border-white/60 text-noir hover:text-[#D81B60]"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wishlisted ? "fill-white" : ""}`} />
                    </button>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Rating & Category */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] text-slateTeal font-semibold uppercase tracking-wider">
                          {product.categoryNameEn}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-amber-600">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="font-bold">{product.rating}</span>
                          <span className="text-noir/40">({product.reviewCount})</span>
                        </div>
                      </div>

                      {/* Product Title */}
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="font-sans text-[14.5px] font-bold text-noir hover:text-[#D81B60] transition-colors line-clamp-2 leading-snug mb-2">
                          {product.nameEn}
                        </h3>
                      </Link>

                      {/* Tagline */}
                      <p className="text-xs text-noir/60 line-clamp-2 font-sans mb-4">
                        {product.taglineEn}
                      </p>
                    </div>

                    {/* Price & Actions Row */}
                    <div className="pt-3 border-t border-black/[0.06] mt-auto">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-lg font-bold text-noir">
                            Tk {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="font-mono text-xs text-noir/40 line-through">
                              Tk {product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="font-mono text-[10px] font-bold text-[#D81B60] bg-rose-50 px-2 py-0.5 rounded-full">
                            Save Tk {product.originalPrice - product.price}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/products/${product.slug}`}
                          className="py-2.5 px-3 rounded-xl border border-black/10 bg-white hover:bg-rose-50/50 text-noir font-sans text-xs font-semibold text-center transition-all duration-200"
                        >
                          Details
                        </Link>
                        <button
                          onClick={(e) => handleAddToCart(e, product.id)}
                          className={`py-2.5 px-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-gradient-to-r from-[#D81B60] to-[#C2185B] hover:from-[#E91E63] hover:to-[#D81B60] text-white hover:shadow-md active:scale-95"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Numbered Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-noir/50 order-2 sm:order-1">
              Page {currentPage} of {totalPages} ({filteredProducts.length} Total Products)
            </span>

            {/* Page Buttons Cluster */}
            <div className="flex items-center gap-1.5 order-1 sm:order-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="w-9 h-9 rounded-xl bg-white border border-black/10 text-noir flex items-center justify-center hover:border-[#D81B60] hover:text-[#D81B60] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Numbered Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`min-w-[36px] h-9 px-3 rounded-xl font-mono text-xs font-bold transition-all duration-200 shadow-sm ${
                      isActive
                        ? "bg-gradient-to-r from-[#D81B60] to-[#C2185B] text-white border border-[#D81B60] scale-105"
                        : "bg-white text-noir/70 border border-black/10 hover:border-[#D81B60]/40 hover:text-noir"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className="w-9 h-9 rounded-xl bg-white border border-black/10 text-noir flex items-center justify-center hover:border-[#D81B60] hover:text-[#D81B60] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
