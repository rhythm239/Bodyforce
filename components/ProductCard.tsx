import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  name: string;
  imageUrl: string;
  slug: string;
};

const ProductCard = ({ name, imageUrl, slug }: ProductCardProps) => {
  return (
    <Link href={`/products/${slug}`} className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">{name}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;