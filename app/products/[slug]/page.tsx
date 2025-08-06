import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Button from "@/components/Button";

const productQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id, name, description, specifications, imageGallery
  }
`;

interface Product {
  _id: string;
  name: string;
  description: string;
  specifications: any;
  imageGallery: any[];
}

// THE FIX IS IN THE FUNCTION SIGNATURE HERE vvv
export default async function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product: Product = await client.fetch(productQuery, { slug });

  if (!product) {
    return <main><h1 className="text-center text-2xl p-8">Product not found.</h1></main>;
  }
  
  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in the ${encodeURIComponent(product.name)}`;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={urlFor(product.imageGallery[0]).url()}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
            <div className="prose prose-invert max-w-none">
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