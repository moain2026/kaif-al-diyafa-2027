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
  watermarkSrc = "/images/watermarks/svg/logo-1.svg", // Using the original logo-1 with its natural colors
  watermarkOpacity = 0.75, // High visibility as requested
  watermarkSize = 25,
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

      {/* Watermark Overlay - Bottom Positioned with Strong Black Outline */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-8 overflow-hidden">
        <motion.div
          initial={{ opacity: watermarkOpacity, y: 10 }}
          animate={{ 
            opacity: isHovered ? 0.9 : watermarkOpacity, // 90% opacity on hover
            y: 0
          }}
          className="relative"
          style={{ width: `${watermarkSize}%`, maxWidth: '140px', height: "auto" }}
        >
          <img 
            src={watermarkSrc} 
            alt="watermark" 
            className="w-full h-auto"
            style={{ 
              filter: `
                drop-shadow(1.5px 1.5px 0px black) 
                drop-shadow(-1.5px -1.5px 0px black) 
                drop-shadow(1.5px -1.5px 0px black) 
                drop-shadow(-1.5px 1.5px 0px black)
                drop-shadow(0px 6px 15px rgba(0,0,0,0.8))
              `
            }}
          />
        </motion.div>
      </div>

      {/* Protective Shield Overlay (Transparent layer to block direct interaction) */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
