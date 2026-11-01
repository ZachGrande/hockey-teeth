import React from 'react';
import { m } from 'motion/react';

interface IRevealProps {
  children: React.ReactNode;
  delay?: number;
}

function Reveal({ children, delay = 0 }: IRevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
