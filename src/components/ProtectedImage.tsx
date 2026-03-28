'use client';

import React from 'react';
import Image from 'next/image';

interface ProtectedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  showWatermark?: boolean; // New prop to control watermark visibility
}

/**
 * ProtectedImage Component
 * 
 * Architecture: Zero-Layout-Shift Protocol
 * - Uses natural aspect ratio (w-full h-auto)
 * - No fill, object-cover, or aspect-square properties
 * - Watermark: Logo-1 (SVG) at bottom-center (Optional)
 * - Protection: Prevents drag and right-click
 * 
 * Update: Fixed Anchor & High-End Visual Blending (Screen)
 * - Watermark is positioned at a fixed distance from the bottom (bottom-16 / 64px)
 * - This ensures it stays in the "safe zone" and never covers faces, regardless of image height.
 * - Uses mix-blend-mode: screen with 50% opacity for a luxurious, light-integrated look.
 * - This makes the logo appear clearly over dark clothing and blend softly with light backgrounds.
 */
const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  showWatermark = false, // Default to false as requested
}) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`relative overflow-hidden select-none ${className}`}
      onContextMenu={handleContextMenu}
    >
      {/* Main Image - Zero-Layout-Shift Implementation */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Watermark Layer - Only shown if showWatermark is true */}
      {showWatermark && (
        <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div 
            className="relative w-48 opacity-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            style={{ 
              mixBlendMode: 'screen',
              filter: 'brightness(1.2) contrast(1.1)'
            }}
          >
            <Image
              src="/images/watermarks/svg/logo-1.svg"
              alt="Watermark"
              width={192}
              height={192}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Protection Overlay - Prevents Dragging and Direct Interaction */}
      <div 
        className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProtectedImage;
