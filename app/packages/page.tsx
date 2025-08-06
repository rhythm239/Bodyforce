// app/packages/page.tsx
import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import PackageCard from "@/components/PackageCard"; // Direct import

const packagesQuery = groq`*[_type == "package"]{
  _id, name, price, includedEquipment, imageGallery,
}`;

export default async function PackagesPage() {
  const packages = await client.fetch(packagesQuery);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Our Gym Packages</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {packages.map((pkg: any) => (
          <PackageCard
            key={pkg._id}
            name={pkg.name}
            price={pkg.price}
            items={pkg.includedEquipment}
            imageUrl={urlFor(pkg.imageGallery[0]).width(600).url()}
            whatsappUrl={`https://wa.me/91XXXXXXXXXX?text=I'm+interested+in+the+${encodeURIComponent(pkg.name)}`}
          />
        ))}
      </div>
    </main>
  );
}