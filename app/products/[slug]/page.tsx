import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Button from "@/components/Button";

// This is the query to fetch a single product by its slug
const productQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    description,
    specifications,
    imageGallery
  }
`;

// This interface defines the shape of our data
interface Product {
  _id: string;
  name: string;
  description: string;
  specifications: any; // Type for Portable Text
  imageGallery: any[];
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product: Product = await client.fetch(productQuery, { slug: params.slug });

  if (!product) {
    return <main><h1 className="text-center text-2xl p-8">Product not found.</h1></main>;
  }

  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in the ${encodeURIComponent(product.name)}`;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={urlFor(product.imageGallery[0]).url()}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {/* Note: A full image gallery/carousel can be implemented here in Phase 4 */}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
            <div className="prose prose-indigo max-w-none">
              <PortableText value={product.specifications} />
            </div>
          </div>

          <div className="mt-auto">
            <Button href={whatsappUrl}>Send a message to know more</Button>
          </div>
        </div>
      </div>
    </main>
  );
}