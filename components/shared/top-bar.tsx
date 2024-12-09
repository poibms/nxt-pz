import React from 'react';
import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup } from '@/components/shared';

interface ITopBarProps {
  className?: string;
}

export const TopBar: React.FC<ITopBarProps> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5', className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
