"use client";

import React, { useState, useEffect } from "react";
import { X, Mail, Lock, Phone, User, Check, ArrowRight } from "lucide-react";

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
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1600);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-[10px] border border-black/10 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-[10px] bg-black/[0.04] hover:bg-black/[0.08] flex items-center justify-center text-noir transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Kicker */}
        <div className="text-center mb-6">
          <span className="font-signature text-4xl text-noir tracking-wide block mb-1">
            Zahra&apos;s World
          </span>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pink-700 font-semibold">
            Client Atelier Portal
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-noir mb-1">
              {mode === "login" ? "Welcome Back" : "Account Created"}
            </h3>
            <p className="text-xs text-noir/60 font-sans">
              {mode === "login" 
                ? "You have successfully signed in to your atelier account." 
                : "Your bespoke client profile is ready. Enjoy curated privileges."}
            </p>
          </div>
        ) : (
          <>
            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 p-1 bg-black/[0.04] rounded-[10px] mb-6">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full pl-10 pr-3 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1.5">
                  {mode === "signup" ? "Email Address" : "Email or Phone"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type={mode === "signup" ? "email" : "text"}
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={mode === "signup" ? "client@example.com" : "Email or 01XXXXXXXXX"}
                    className="w-full pl-10 pr-3 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] transition-colors"
                  />
                </div>
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70 mb-1.5">
                    Phone Number (For COD & Delivery Updates)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full pl-10 pr-3 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-noir/70">
                    Password
                  </label>
                  {mode === "login" && (
                    <button
                      type="button"
                      onClick={() => alert("Password reset link sent to your registered contact.")}
                      className="text-[10px] font-mono text-pink-700 hover:underline"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/10 text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(216,27,96,0.25)] transition-all active:scale-[0.99] disabled:opacity-75"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>{mode === "login" ? "Sign In to Atelier" : "Create Account"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Privileges Note */}
            <div className="mt-5 pt-4 border-t border-black/5 text-center">
              <p className="text-[10px] text-noir/50 font-sans leading-relaxed">
                By accessing Zahra&apos;s World, you unlock real-time courier tracking, private wishlist sync, and dedicated WhatsApp concierge support.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
