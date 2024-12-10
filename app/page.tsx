import React from 'react';

import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className={'mt-10'}>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className={'mt-10 pb-[14px]'}>
        <div className={'flex gap-[80px]'}>
          <div className={'w-[250px]'}>
            <Filters />
          </div>

          <div className={'flex-1'}>
            <div className={'flex flex-col gap-16'}>
              <ProductsGroupList
                items={[
                  {
                    id: 1,
                    name: 'Бургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D5F0C8EA951B957406D02CA3C4D.avif',
                    items: [{ price: 550 }],
                  },
                ]}
                title={'Пиццы'}
                categoryId={1}
              />
              <ProductsGroupList
                items={[
                  {
                    id: 1,
                    name: 'Бургер-комбо',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D5F0C8EA951B957406D02CA3C4D.avif',
                    items: [{ price: 550 }],
                  },
                ]}
                title={'Комбо'}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
