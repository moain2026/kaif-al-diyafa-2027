'use client';
import React from 'react';
import Image from 'next/image';

interface ProtectedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  width = 600,
  height = 600,
  className = '',
  priority = false,
}) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden select-none"
      onContextMenu={handleContextMenu}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        draggable={false}
      />
      {/* Watermark Layer */}
      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
        <div className="relative w-16 md:w-24 opacity-80 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/watermarks/svg/logo-1.svg"
            alt="Watermark"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Protection Overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProtectedImage;
