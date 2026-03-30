"use client";

import { useState, useEffect } from "react";

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer({ size = "large" }: { size?: "xl" | "large" | "small" }) {
  // April 6, 2026 3:00 PM ET (UTC-4)
  const target = new Date("2026-04-06T19:00:00Z");
  const [time, setTime] = useState(getTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const sizeMap = {
    xl:    { container: "px-8 py-5 rounded-xl gap-2", prompt: "text-xs mr-3", digit: "text-3xl sm:text-4xl tracking-[3px]", colon: "text-2xl sm:text-3xl mx-1", label: "text-[9px]" },
    large: { container: "px-6 py-4 rounded-lg gap-1.5", prompt: "text-[10px] mr-2", digit: "text-xl sm:text-2xl tracking-[2.7px]", colon: "text-lg sm:text-xl mx-0.5", label: "text-[7px]" },
    small: { container: "px-4 py-2.5 rounded-md gap-1", prompt: "text-[8px] mr-1.5", digit: "text-sm tracking-[2px]", colon: "text-sm mx-px", label: "text-[6px]" },
  };
  const s = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center font-mono ${s.container}`}
      style={{
        background:
          "linear-gradient(160deg, rgb(14,14,14), rgb(8,8,8) 50%, rgb(10,10,10))",
        border: "1px solid rgb(26,26,26)",
        boxShadow:
          "inset 0 2px 6px rgba(0,0,0,0.8), inset 0 -1px 2px rgba(255,255,255,0.03)",
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px),
          linear-gradient(160deg, rgb(14,14,14), rgb(8,8,8) 50%, rgb(10,10,10))
        `,
      }}
    >
      {/* Terminal prompt */}
      <span
        className={`${s.prompt} tracking-wider`}
        style={{ color: "rgb(60, 100, 70)", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        $ cart closes in
      </span>

      {[
        { val: pad(time.days), label: "DD" },
        { val: pad(time.hours), label: "HH" },
        { val: pad(time.minutes), label: "MM" },
        { val: pad(time.seconds), label: "SS" },
      ].map((unit, i) => (
        <span key={unit.label} className="flex items-center">
          {i > 0 && (
            <span
              className={s.colon}
              style={{
                color: "rgb(130, 200, 150)",
                fontFamily: "'IBM Plex Mono', monospace",
                textShadow: "0 0 4px rgba(130,200,150,0.6)",
              }}
            >
              :
            </span>
          )}
          <span className="flex flex-col items-center">
            <span
              className={`${s.digit} font-normal`}
              style={{
                color: "rgb(130, 200, 150)",
                fontFamily: "'IBM Plex Mono', monospace",
                textShadow:
                  "0 0 4px rgba(130,200,150,0.6), 0 0 10px rgba(130,200,150,0.3)",
              }}
            >
              {unit.val}
            </span>
            <span
              className={`${s.label} tracking-[0.35px]`}
              style={{
                color: "rgb(60, 100, 70)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {unit.label}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
