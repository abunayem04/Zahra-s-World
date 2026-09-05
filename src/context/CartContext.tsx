"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product } from "@/types";
import { PRODUCTS } from "@/data/products";
import confetti from "canvas-confetti";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (productId: string, variantId?: string, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  selectedDelivery: "dhaka" | "outside";
  setSelectedDelivery: (zone: "dhaka" | "outside") => void;
  isGiftWrapped: boolean;
  setIsGiftWrapped: (wrapped: boolean) => void;
  subtotal: number;
  deliveryFee: number;
  giftWrapFee: number;
  total: number;
  totalCount: number;
  checkoutWhatsApp: (customerDetails?: { name: string; phone: string; address: string; notes?: string }) => void;
  quickViewProduct: Product | null;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<"dhaka" | "outside">("dhaka");
  const [isGiftWrapped, setIsGiftWrapped] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("zahra_cart_items");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("zahra_cart_items", JSON.stringify(items));
    }
  }, [items, mounted]);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const openQuickView = (productId: string) => {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (p) setQuickViewProduct(p);
  };
  const closeQuickView = () => setQuickViewProduct(null);

  const addItem = (productId: string, variantId?: string, quantity = 1) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const chosenVariant = variantId || product.variants[0]?.id || "default";

    setItems((prev) => {
      const idx = prev.findIndex(
        (it) => it.product.id === productId && it.variantId === chosenVariant
      );
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, variantId: chosenVariant, quantity }];
      }
    });

    setIsOpen(true);
  };

  const removeItem = (productId: string, variantId: string) => {
    setItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.variantId === variantId))
    );
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((it) => {
          if (it.product.id === productId && it.variantId === variantId) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const subtotal = items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
  const deliveryFee = items.length > 0 ? (selectedDelivery === "dhaka" ? 70 : 130) : 0;
  const giftWrapFee = isGiftWrapped && items.length > 0 ? 50 : 0;
  const total = subtotal + deliveryFee + giftWrapFee;
  const totalCount = items.reduce((acc, it) => acc + it.quantity, 0);

  const checkoutWhatsApp = (customerDetails?: {
    name: string;
    phone: string;
    address: string;
    notes?: string;
  }) => {
    if (items.length === 0) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD3F6", "#C0E6DE", "#426B69", "#0D132C"],
      });
    } catch {
      // ignore
    }

    let msg = `*NEW ORDER — ZAHRA'S WORLD BOUTIQUE*\n`;
    msg += `--------------------------------------\n`;
    msg += `*Selected Items:*\n`;

    items.forEach((it, idx) => {
      const v = it.product.variants.find((x) => x.id === it.variantId);
      const vName = v ? ` (${v.name})` : "";
      msg += `${idx + 1}. ${it.product.nameEn}${vName}\n`;
      msg += `   Qty: ${it.quantity} x Tk ${it.product.price} = Tk ${
        it.quantity * it.product.price
      }\n`;
    });

    msg += `--------------------------------------\n`;
    msg += `*Subtotal:* Tk ${subtotal}\n`;
    msg += `*Delivery (${
      selectedDelivery === "dhaka" ? "Inside Dhaka" : "Nationwide Outside Dhaka"
    }):* Tk ${deliveryFee}\n`;
    if (isGiftWrapped) {
      msg += `*Luxury Gift Box Presentation:* Tk 50\n`;
    }
    msg += `*Total Order Value:* Tk ${total} (Cash on Delivery)\n`;

    if (customerDetails && customerDetails.name) {
      msg += `--------------------------------------\n`;
      msg += `*Recipient:* ${customerDetails.name}\n`;
      msg += `*Contact Phone:* ${customerDetails.phone}\n`;
      msg += `*Delivery Address:* ${customerDetails.address}\n`;
      if (customerDetails.notes) {
        msg += `*Special Note:* ${customerDetails.notes}\n`;
      }
    }

    msg += `--------------------------------------\n`;
    msg += `Please confirm availability & dispatch timeline.`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/8801320829916?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        items: mounted ? items : [],
        isOpen,
        openDrawer,
        closeDrawer,
        addItem,
        removeItem,
        updateQuantity,
        selectedDelivery,
        setSelectedDelivery,
        isGiftWrapped,
        setIsGiftWrapped,
        subtotal,
        deliveryFee,
        giftWrapFee,
        total,
        totalCount: mounted ? totalCount : 0,
        checkoutWhatsApp,
        quickViewProduct,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
