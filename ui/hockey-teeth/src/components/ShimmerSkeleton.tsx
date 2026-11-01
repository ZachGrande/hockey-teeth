import React from 'react';
import { m } from 'motion/react';
import type { CSSProperties } from 'react';

interface IShimmerSkeletonProps {
  style?: CSSProperties;
}

const shimmerGradient = 'linear-gradient(90deg, transparent 0%, '
  + 'rgba(255, 255, 255, 0.55) 50%, transparent 100%)';

function ShimmerSkeleton({ style = undefined }: IShimmerSkeletonProps) {
  return (
    <m.div
      aria-hidden
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(21, 21, 21, 0.08)',
        borderRadius: 4,
        ...style,
      }}
    >
      <m.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
        style={{
          position: 'absolute',
          inset: 0,
          background: shimmerGradient,
        }}
      />
    </m.div>
  );
}

export default ShimmerSkeleton;
