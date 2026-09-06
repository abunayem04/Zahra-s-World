"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product } from "@/types";
import { PRODUCTS } from "@/data/products";
import confetti from "canvas-confetti";

export interface UserProfile {
  name: string;
  email?: string;
  phone?: string;
  isGuest?: boolean;
  avatar?: string;
}

export interface OrderRecord {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  giftWrapFee: number;
  discount: number;
  total: number;
  deliveryZone: "dhaka" | "outside";
  paymentMethod: string;
  customer: {
    name: string;
    phone: string;
    city: string;
    address: string;
    notes?: string;
  };
  createdAt: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (productId: string, variantId?: string, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  clearCart: () => void;
  selectedDelivery: "dhaka" | "outside";
  setSelectedDelivery: (zone: "dhaka" | "outside") => void;
  isGiftWrapped: boolean;
  setIsGiftWrapped: (wrapped: boolean) => void;
  couponCode: string;
  discountAmount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  deliveryFee: number;
  giftWrapFee: number;
  total: number;
  totalCount: number;
  checkoutWhatsApp: (customerDetails?: { name: string; phone: string; address: string; notes?: string }) => void;
  quickViewProduct: Product | null;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  wishlistCount: number;
  user: UserProfile | null;
  loginWithGoogle: () => void;
  loginAsGuest: () => void;
  loginWithEmail: (name: string, email: string) => void;
  logout: () => void;
  authModalMode: "login" | "signup" | null;
  openAuthModal: (mode?: "login" | "signup") => void;
  closeAuthModal: () => void;
  lastAddedProduct: { product: Product; variantName?: string; quantity: number; image: string } | null;
  clearLastAddedProduct: () => void;
  cartBounceTrigger: number;
  lastOrder: OrderRecord | null;
  setLastOrder: (order: OrderRecord) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<"dhaka" | "outside">("dhaka");
  const [isGiftWrapped, setIsGiftWrapped] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [authModalMode, setAuthModalMode] = useState<"login" | "signup" | null>(null);
  const [lastAddedProduct, setLastAddedProduct] = useState<{ product: Product; variantName?: string; quantity: number; image: string } | null>(null);
  const [cartBounceTrigger, setCartBounceTrigger] = useState(0);
  const [lastOrder, setLastOrderState] = useState<OrderRecord | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem("zahra_cart_items");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        // ignore
      }
    }
    const savedWish = localStorage.getItem("zahra_wishlist");
    if (savedWish) {
      try {
        setWishlist(JSON.parse(savedWish));
      } catch {
        // ignore
      }
    }
    const savedUser = localStorage.getItem("zahra_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        // ignore
      }
    }
    const savedOrder = localStorage.getItem("zahra_last_order");
    if (savedOrder) {
      try {
        setLastOrderState(JSON.parse(savedOrder));
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

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("zahra_wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, mounted]);

  useEffect(() => {
    if (mounted) {
      if (user) {
        localStorage.setItem("zahra_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("zahra_user");
      }
    }
  }, [user, mounted]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);
  const wishlistCount = wishlist.length;

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
    const variantObj = product.variants.find((v) => v.id === chosenVariant);

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

    // Trigger micro-animation feedback (no disruptive drawer popup)
    setLastAddedProduct({
      product,
      variantName: variantObj?.name,
      quantity,
      image: variantObj?.image || product.image,
    });
    setCartBounceTrigger((prev) => prev + 1);
  };

  const clearLastAddedProduct = () => {
    setLastAddedProduct(null);
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

  const clearCart = () => {
    setItems([]);
    setCouponCode("");
    setDiscountAmount(0);
    if (mounted) {
      localStorage.removeItem("zahra_cart_items");
    }
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "ZAHRA100") {
      setCouponCode("ZAHRA100");
      setDiscountAmount(100);
      return { success: true, message: "Tk 100 discount applied!" };
    }
    if (cleanCode === "WELCOME50") {
      setCouponCode("WELCOME50");
      setDiscountAmount(50);
      return { success: true, message: "Tk 50 discount applied!" };
    }
    if (cleanCode === "VIP10") {
      const disc = Math.round(subtotal * 0.1);
      setCouponCode("VIP10");
      setDiscountAmount(disc);
      return { success: true, message: "10% VIP discount applied!" };
    }
    return { success: false, message: "Invalid promo code. Try ZAHRA100 or WELCOME50" };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountAmount(0);
  };

  const subtotal = items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
  const deliveryFee = items.length > 0 ? (selectedDelivery === "dhaka" ? 70 : 130) : 0;
  const giftWrapFee = isGiftWrapped && items.length > 0 ? 50 : 0;
  const total = Math.max(0, subtotal + deliveryFee + giftWrapFee - discountAmount);
  const totalCount = items.reduce((acc, it) => acc + it.quantity, 0);

  // Authentication Handlers
  const loginWithGoogle = () => {
    const mockGoogleUser: UserProfile = {
      name: "Zahra Client",
      email: "zahra.client@gmail.com",
      isGuest: false,
    };
    setUser(mockGoogleUser);
  };

  const loginAsGuest = () => {
    const guestUser: UserProfile = {
      name: "Valued Guest",
      isGuest: true,
    };
    setUser(guestUser);
  };

  const loginWithEmail = (name: string, email: string) => {
    setUser({
      name: name || "Valued Customer",
      email: email,
      isGuest: false,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const openAuthModal = (mode: "login" | "signup" = "login") => {
    setAuthModalMode(mode);
  };

  const closeAuthModal = () => {
    setAuthModalMode(null);
  };

  const setLastOrder = (order: OrderRecord) => {
    setLastOrderState(order);
    if (mounted) {
      localStorage.setItem("zahra_last_order", JSON.stringify(order));
    }
  };

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
      msg += `*Gift Box Wrapping:* Tk 50\n`;
    }
    if (discountAmount > 0) {
      msg += `*Promo Discount (${couponCode}):* -Tk ${discountAmount}\n`;
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
        totalCount: mounted ? totalCount : 0,
        checkoutWhatsApp,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        wishlist: mounted ? wishlist : [],
        toggleWishlist,
        isWishlisted,
        wishlistCount: mounted ? wishlistCount : 0,
        user: mounted ? user : null,
        loginWithGoogle,
        loginAsGuest,
        loginWithEmail,
        logout,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        lastAddedProduct: mounted ? lastAddedProduct : null,
        clearLastAddedProduct,
        cartBounceTrigger: mounted ? cartBounceTrigger : 0,
        lastOrder: mounted ? lastOrder : null,
        setLastOrder,
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
