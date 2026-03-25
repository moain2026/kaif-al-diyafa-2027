"use client";

import Image, { ImageProps } from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

interface ProtectedImageProps extends ImageProps {
  watermarkSrc?: string;
  watermarkOpacity?: number;
  watermarkSize?: number; // percentage of image size
}

export default function ProtectedImage({
  src,
  alt,
  watermarkSrc = "/images/watermarks/svg/logo-3.svg", // Default to the white/gold version
  watermarkOpacity = 0.2,
  watermarkSize = 20,
  className,
  ...props
}: ProtectedImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden group select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click save
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        className="transition-transform duration-700 group-hover:scale-105"
        draggable={false} // Prevent drag and drop
        {...props}
      />

      {/* Watermark Overlay - Bottom Positioned */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-6 overflow-hidden">
        <motion.div
          initial={{ opacity: watermarkOpacity, y: 10 }}
          animate={{ 
            opacity: isHovered ? watermarkOpacity * 1.5 : watermarkOpacity,
            y: 0
          }}
          className="relative"
          style={{ width: `${watermarkSize}%`, maxWidth: '120px', height: "auto" }}
        >
          <img 
            src={watermarkSrc} 
            alt="watermark" 
            className="w-full h-auto brightness-200 drop-shadow-lg"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
          />
        </motion.div>
      </div>

      {/* Protective Shield Overlay (Transparent layer to block direct interaction) */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
