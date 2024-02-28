import Image from 'next/image';
import React from 'react';

interface ItemProps {
  item: {
    id: string;
    imageUrl: string;
    name: string;
    description: string | null;
  }
}

const ItemCard = ({ item }: ItemProps) => {
  return (
    <div className="w-full h-full">
      <div>
        <Image
          className="rounded-t-md"
          src={item.imageUrl}
          objectFit="cover"
          alt={item.name}
          width={250}
          height={300}
        />
      </div>
      <div className="pt-5">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-base text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
