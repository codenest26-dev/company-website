"use client";
import React, { useRef, useEffect, useState, forwardRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}

export const TextHoverEffect = forwardRef<SVGSVGElement, TextHoverEffectProps>(
  ({ text, duration, className }, ref) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
      const currentRef = svgRef.current;
      if (currentRef && cursor.x !== null && cursor.y !== null) {
        const svgRect = currentRef.getBoundingClientRect();
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    }, [cursor]);

    return (
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className={cn("select-none uppercase cursor-pointer", className)}
      >
        <defs>
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
            {hovered && (
              <>
                <stop offset="0%" stopColor="#a3e635" />
                <stop offset="25%" stopColor="#84cc16" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="75%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#7c3aed" />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            cx={maskPosition.cx}
            cy={maskPosition.cy}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-white/20 font-bold"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-white/30 font-bold"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {text}
        </motion.text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="fill-transparent font-bold"
        >
          {text}
        </text>
      </svg>
    );
  },
);

TextHoverEffect.displayName = "TextHoverEffect";

export const FooterBackgroundGradient = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 h-64 w-64 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(207, 239, 9, 0.08)" }}
      />
      <div
        className="absolute top-20 right-1/4 h-48 w-48 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(207, 239, 9, 0.05)" }}
      />
    </div>
  );
};
