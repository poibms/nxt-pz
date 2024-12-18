'use client'

import React from 'react';
import {ProductCard, Title} from '@/components/shared';
import {cn} from "@/lib/utils";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface IProductsGroupListProps {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<IProductsGroupListProps> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId)
      setActiveCategoryId(categoryId)
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size={'lg'} className="mb-5 font-extrabold" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items
          .filter((product) => product.items.length > 0)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
