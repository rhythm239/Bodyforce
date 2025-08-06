import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import ProductCard from "@/components/ProductCard";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  imageGallery: any;
}

const categoryProductsQuery = groq`
  *[_type == "product" && category->slug.current == $slug] {
    _id, name, slug, imageGallery
  }
`;

const categoryTitleQuery = groq`
    *[_type == "category" && slug.current == $slug][0] {
        title
    }
`;

// THE FIX IS IN THE FUNCTION SIGNATURE HERE vvv
export default async function CategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const products: Product[] = await client.fetch(categoryProductsQuery, { slug });
  const category = await client.fetch(categoryTitleQuery, { slug });

  const categoryName = category ? category.title : slug.replace('-', ' ');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">{categoryName}</h1>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              slug={product.slug.current}
              imageUrl={urlFor(product.imageGallery[0]).width(500).url()}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found in this category yet.</p>
      )}
    </main>
  );
}