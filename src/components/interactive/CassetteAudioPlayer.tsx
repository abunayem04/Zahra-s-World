"use client";

import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Play, Pause, SkipForward, Disc, ShoppingBag, ArrowUpRight } from "lucide-react";

export const CassetteAudioPlayer: React.FC = () => {
  const cassetteProduct = PRODUCTS.find((p) => p.id === "retro-cassette-voice-recorder");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [shellColor, setShellColor] = useState<"pink" | "blue" | "cream" | "noir">("pink");
  const [vuHeights, setVuHeights] = useState<number[]>([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { addItem } = useCart();

  const tracks = [
    { name: "Track 01: Warm Lofi Dreams", tempo: 74, notes: [261.63, 329.63, 392.0, 523.25, 440.0, 349.23, 392.0] },
    { name: "Track 02: Special Voice Memo", tempo: 65, notes: [220.0, 277.18, 329.63, 440.0, 392.0, 329.63] },
    { name: "Track 03: Sunset Nostalgia", tempo: 80, notes: [196.0, 246.94, 293.66, 392.0, 329.63, 293.66] },
  ];

  const currentTrack = tracks[currentTrackIndex];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playTone = (freq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.75);

    // Randomize VU meter heights
    setVuHeights(Array.from({ length: 12 }, () => Math.floor(Math.random() * 16) + 4));
  };

  const togglePlay = () => {
    initAudio();
    if (isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setVuHeights([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
    } else {
      setIsPlaying(true);
      let noteIdx = 0;
      playTone(currentTrack.notes[0]);
      noteIdx++;

      const beatMs = (60 / currentTrack.tempo) * 1000;
      intervalRef.current = setInterval(() => {
        playTone(currentTrack.notes[noteIdx % currentTrack.notes.length]);
        noteIdx++;
      }, beatMs);
    }
  };

  const nextTrack = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIdx);
    if (isPlaying) {
      setTimeout(() => {
        let noteIdx = 0;
        const beatMs = (60 / tracks[nextIdx].tempo) * 1000;
        intervalRef.current = setInterval(() => {
          playTone(tracks[nextIdx].notes[noteIdx % tracks[nextIdx].notes.length]);
          noteIdx++;
        }, beatMs);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const shellBgClass = {
    pink: "bg-palette-pink text-noir border-noir/20",
    blue: "bg-palette-mint text-noir border-noir/20",
    cream: "bg-palette-porcelain text-noir border-noir/20",
    noir: "bg-noir text-white border-white/20",
  }[shellColor];

  if (!cassetteProduct) return null;

  return (
    <section id="cassette-showcase" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost font-semibold block mb-2">
          Playable Audio Keepsake
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-noir dark:text-canvas mb-3">
          Retro Voice Recorder Cassette Experience
        </h2>
        <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 font-sans">
          Audition the built-in analog synthesizer simulator below, or customize your pocket cassette in Blossom Pink, Mint Frost, or Obsidian Navy.
        </p>
      </div>

      <div className="rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/10 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Interactive Cassette Shell */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            className={`w-full max-w-md p-6 rounded-[10px] border-2 shadow-xl flex flex-col gap-4 transition-colors duration-500 ${shellBgClass}`}
          >
            {/* Top Row Stamp */}
            <div className="flex items-center justify-between font-display text-xs font-bold uppercase tracking-widest opacity-85">
              <span>Zahra&apos;s Retro Sound</span>
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  isPlaying ? "bg-roseBlossom-dark shadow-glowPink animate-ping" : "bg-black/30"
                }`}
              />
            </div>

            {/* Tape Window */}
            <div className="bg-noir/95 rounded-[10px] p-4 flex items-center justify-between border border-slateTeal/40 shadow-inner">
              {/* Left Spool */}
              <div
                className={`w-14 h-14 rounded-full bg-white border-2 border-slateTeal flex items-center justify-center relative shadow-sm ${
                  isPlaying ? "animate-spin-mechanical" : ""
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-noir border-2 border-dashed border-white" />
              </div>

              {/* Tape Strip & Label */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-1.5 bg-[#5C3218] rounded-full" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-canvas/70">
                  Voice Memo 30s
                </span>
              </div>

              {/* Right Spool */}
              <div
                className={`w-14 h-14 rounded-full bg-white border-2 border-slateTeal flex items-center justify-center relative shadow-sm ${
                  isPlaying ? "animate-spin-mechanical" : ""
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-noir border-2 border-dashed border-white" />
              </div>
            </div>

            {/* Live Pink & Teal VU Meter */}
            <div className="flex items-end justify-center gap-1.5 h-6 bg-black/40 rounded-[6px] px-3 py-1">
              {vuHeights.map((h, idx) => (
                <div
                  key={idx}
                  style={{ height: `${h}px` }}
                  className={`w-1.5 rounded-t-sm transition-all duration-75 ${
                    idx >= 8 ? "bg-palette-pink" : "bg-palette-teal"
                  }`}
                />
              ))}
            </div>

            {/* Hardware Physical Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                onClick={() => alert("On the physical keychain device, pressing REC records your 30s audio memo!")}
                className="py-2.5 rounded-[8px] bg-noir text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-black transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>REC</span>
              </button>

              <button
                onClick={togglePlay}
                className="py-2.5 rounded-[8px] bg-noir text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-black transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3 text-palette-pink" /> : <Play className="w-3 h-3 text-palette-teal" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>

              <button
                onClick={nextTrack}
                className="py-2.5 rounded-[8px] bg-noir text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-black transition-colors"
              >
                <SkipForward className="w-3 h-3 text-slateTeal" />
                <span>Track</span>
              </button>
            </div>

            <div className="text-center font-mono text-[11px] font-semibold opacity-75">
              {currentTrack.name}
            </div>
          </div>
        </div>

        {/* Right Details & Casing Picker */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-palette-mint/30 text-mintFrost-dark font-mono text-[10px] font-semibold uppercase tracking-wider mb-3">
            <Disc className="w-3 h-3" />
            <span>Analog Voice Keepsake</span>
          </div>

          <h3 className="font-display text-2xl font-bold uppercase text-noir dark:text-canvas mb-2">
            Vintage Cassette Voice Recorder Keychain
          </h3>

          <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 leading-relaxed mb-6 font-sans">
            Equipped with a built-in microphone and speaker. Record heartfelt messages, wedding vows, or favorite melodies with a nostalgic analog texture.
          </p>

          {/* Color Switcher */}
          <label className="font-mono text-[11px] uppercase tracking-wider text-slateTeal dark:text-mintFrost font-semibold block mb-3">
            Select Casing Tone:
          </label>
          <div className="flex items-center gap-3 mb-8">
            {[
              { id: "pink", label: "Blossom Pink", bg: "bg-[#FFD3F6]" },
              { id: "blue", label: "Mint Frost", bg: "bg-[#C0E6DE]" },
              { id: "cream", label: "Clean Porcelain", bg: "bg-[#F4F4F8] border border-noir/30" },
              { id: "noir", label: "Obsidian Navy", bg: "bg-[#0D132C]" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setShellColor(c.id as "pink" | "blue" | "cream" | "noir")}
                title={c.label}
                className={`w-7 h-7 rounded-full transition-transform ${c.bg} ${
                  shellColor === c.id ? "scale-125 ring-2 ring-slateTeal ring-offset-2" : "hover:scale-110"
                }`}
              />
            ))}
          </div>

          {/* Price & Cart Actions */}
          <div className="w-full pt-6 border-t border-noir/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-noir dark:text-canvas">
                Tk {cassetteProduct.price}
              </span>
              <span className="font-mono text-sm text-noir/40 dark:text-canvas/40 line-through">
                Tk {cassetteProduct.originalPrice}
              </span>
              <span className="font-mono text-xs font-semibold text-roseBlossom-dark">
                Save Tk {cassetteProduct.originalPrice - cassetteProduct.price}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => addItem("retro-cassette-voice-recorder", shellColor)}
                className="px-6 py-3 rounded-[10px] bg-noir text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-noir-hover transition-colors flex items-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add Keepsake to Bag</span>
              </button>

              <a
                href={`https://wa.me/8801320829916?text=${encodeURIComponent(
                  `Hi Zahra's World, I want to order the Retro Voice Recorder Cassette in "${shellColor}" tone (Tk ${cassetteProduct.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/15 text-noir dark:text-canvas hover:border-noir transition-colors"
                title="Order on WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4 text-slateTeal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
