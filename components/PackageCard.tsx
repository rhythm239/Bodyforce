// components/PackageCard.tsx
import Image from 'next/image';
import Button from './Button';

type PackageCardProps = {
  name: string;
  price: string;
  imageUrl: string;
  items: string[];
  whatsappUrl: string;
};

const PackageCard = ({ name, price, imageUrl, items, whatsappUrl }: PackageCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
      <div className="relative w-full h-72">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-3xl font-light text-indigo-600 my-2">{price}</p>
        <ul className="list-disc list-inside my-4 text-gray-600 space-y-1">
          {items && items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="mt-auto pt-4">
          <Button href={whatsappUrl}>Send a message to know more</Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;