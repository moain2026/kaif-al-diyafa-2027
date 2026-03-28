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
 * Update: Deep Visual Blending (Soft-Light & Backdrop-Filter)
 * - Watermark is positioned at the lower third (bottom-[18%])
 * - Uses mix-blend-mode: soft-light for a more natural, subtle integration with image colors.
 * - Added backdrop-filter: blur(0.5px) to slightly soften the image texture behind the logo,
 *   making it look like it's part of the physical print.
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
        <div className="absolute bottom-[18%] left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div 
            className="relative w-48 opacity-[0.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
            style={{ 
              mixBlendMode: 'soft-light',
              backdropFilter: 'blur(0.5px) contrast(1.1)',
              WebkitBackdropFilter: 'blur(0.5px) contrast(1.1)'
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
