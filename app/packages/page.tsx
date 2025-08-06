// app/packages/page.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import ClientPackageList from "@/components/ClientPackageList"; // Import our new component

const packagesQuery = groq`*[_type == "package"]{
  _id, name, price, includedEquipment, imageGallery,
}`;

export default async function PackagesPage() {
  const packages = await client.fetch(packagesQuery);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Our Gym Packages</h1>
      <ClientPackageList packages={packages} /> {/* Use the wrapper here */}
    </main>
  );
}