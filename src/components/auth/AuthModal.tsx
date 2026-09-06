"use client";

import React, { useState, useEffect } from "react";
import { X, Mail, Lock, Phone, User, Check, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "signup";
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = "login",
  onClose,
}) => {
  const { loginWithGoogle, loginAsGuest, loginWithEmail, user } = useCart();
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loginWithEmail(name || identifier.split("@")[0] || "Customer", identifier);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1200);
    }, 600);
  };

  const handleGoogleAuth = () => {
    setLoading(true);
    setTimeout(() => {
      loginWithGoogle();
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1000);
    }, 500);
  };

  const handleGuestAuth = () => {
    loginAsGuest();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
      />

      {/* Centering Wrapper with min-height */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        {/* Modal Container */}
        <div className="relative w-full max-w-md bg-white rounded-[24px] border border-noir/[0.08] shadow-2xl p-6 sm:p-8 z-10 text-left my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
          {/* Top Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFD3F6] via-[#D81B60] to-[#A80C42]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-noir/[0.04] hover:bg-noir/[0.08] flex items-center justify-center text-noir transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Brand Kicker */}
          <div className="text-center mb-5 pt-1">
            <span className="font-signature text-4xl text-[#A80C42] tracking-wide block mb-1">
              Zahra&apos;s World
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-noir/60 font-semibold">
              Customer Portal
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3 shadow-sm">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-noir mb-1">
                {mode === "login" ? "Welcome Back" : "Account Ready"}
              </h3>
              <p className="text-xs text-noir/60 font-sans">
                You are now signed in to Zahra&apos;s World. Happy shopping!
              </p>
            </div>
          ) : (
            <>
              {/* Quick One-Click Auth Options */}
              <div className="space-y-2.5 mb-5">
                {/* Sign in with Google */}
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-[12px] bg-white border border-noir/15 hover:border-noir/30 hover:bg-noir/[0.02] text-noir font-sans text-xs font-semibold flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 active:scale-98"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Continue as Guest */}
                <button
                  type="button"
                  onClick={handleGuestAuth}
                  className="w-full py-2.5 px-4 rounded-[12px] bg-[#FAF5F8] border border-[#A80C42]/15 hover:bg-[#FFF0F6] text-[#A80C42] font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-98"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Continue as Guest</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-5">
                <div className="border-t border-noir/10 w-full" />
                <span className="bg-white px-3 font-mono text-[10px] uppercase text-noir/40">
                  Or with email
                </span>
                <div className="border-t border-noir/10 w-full" />
              </div>

              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 p-1 bg-noir/[0.04] rounded-[12px] mb-4">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-[8px] transition-all ${
                    mode === "login"
                      ? "bg-white text-noir shadow-sm"
                      : "text-noir/50 hover:text-noir"
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-[8px] transition-all ${
                    mode === "signup"
                      ? "bg-white text-noir shadow-sm"
                      : "text-noir/50 hover:text-noir"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {mode === "signup" && (
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ayesha Rahman"
                        className="w-full pl-10 pr-4 py-2 rounded-[10px] bg-noir/[0.03] border border-noir/10 text-xs text-noir placeholder:text-noir/35 focus:outline-none focus:border-[#A80C42] focus:bg-white transition-all font-sans"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1">
                    Email Address or Mobile
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="name@example.com or 017XXXXXXXX"
                      className="w-full pl-10 pr-4 py-2 rounded-[10px] bg-noir/[0.03] border border-noir/10 text-xs text-noir placeholder:text-noir/35 focus:outline-none focus:border-[#A80C42] focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 rounded-[10px] bg-noir/[0.03] border border-noir/10 text-xs text-noir placeholder:text-noir/35 focus:outline-none focus:border-[#A80C42] focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-[12px] bg-noir hover:bg-[#A80C42] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-3 cursor-pointer"
                >
                  {loading ? (
                    <span>Please wait...</span>
                  ) : (
                    <>
                      <span>{mode === "login" ? "Sign In to Account" : "Create Account"}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFD3F6]" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
