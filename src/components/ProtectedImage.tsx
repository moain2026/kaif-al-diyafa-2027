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
}

/**
 * ProtectedImage Component
 * 
 * Architecture: Zero-Layout-Shift Protocol
 * - Uses natural aspect ratio (w-full h-auto)
 * - No fill, object-cover, or aspect-square properties
 * - Watermark: Logo-1 (SVG) at bottom-center
 * - Protection: Prevents drag and right-click
 */
const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
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

      {/* Watermark Layer - Bottom-Center and Enlarged */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <div className="relative w-32 md:w-48 opacity-70 drop-shadow-md">
          <Image
            src="/images/watermarks/svg/logo-1.svg"
            alt="Watermark"
            width={180}
            height={180}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Protection Overlay - Prevents Dragging and Direct Interaction */}
      <div 
        className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProtectedImage;
