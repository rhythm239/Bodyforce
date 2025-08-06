// app/page.tsx
import ProductCard from "@/components/ProductCard";
import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import ClientPackageList from "@/components/ClientPackageList"; // Import our new component

const productsQuery = groq`*[_type == "product"]{
  _id, name, slug, "categoryName": category->title, imageGallery,
}`;
const packagesQuery = groq`*[_type == "package"]{
  _id, name, price, includedEquipment, imageGallery,
}`;

export default async function Home() {
  const products = await client.fetch(productsQuery);
  const packages = await client.fetch(packagesQuery);

  return (
    <main className="container mx-auto px-4 py-8">
      <section id="featured-equipment" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <ProductCard
              key={product._id}
              name={product.name}
              slug={product.slug.current}
              imageUrl={urlFor(product.imageGallery[0]).width(500).url()}
            />
          ))}
        </div>
      </section>

      <section id="featured-packages">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Packages</h2>
        <ClientPackageList packages={packages} /> {/* Use the wrapper here */}
      </section>
    </main>
  );
}