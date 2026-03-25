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
  watermarkOpacity = 0.15,
  watermarkSize = 30,
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

      {/* Watermark Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Center Watermark */}
        <motion.div
          initial={{ opacity: watermarkOpacity }}
          animate={{ opacity: isHovered ? watermarkOpacity * 1.5 : watermarkOpacity }}
          className="relative"
          style={{ width: `${watermarkSize}%`, height: "auto" }}
        >
          <img 
            src={watermarkSrc} 
            alt="watermark" 
            className="w-full h-auto grayscale brightness-200"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
          />
        </motion.div>

        {/* Repeating Watermark Pattern (Subtle) */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url(${watermarkSrc})`,
            backgroundSize: "150px 150px",
            backgroundRepeat: "repeat",
            filter: "brightness(0) invert(1)"
          }}
        />
      </div>

      {/* Protective Shield Overlay (Transparent layer to block direct interaction) */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
